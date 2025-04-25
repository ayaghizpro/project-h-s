"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { Dish } from "@/data/data"

interface CartItem extends Dish {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (dish: Dish) => void
  removeFromCart: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (dish: Dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id)

      if (existingItem) {
        // Increase quantity if item already exists
        return prevCart.map((item) => (item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...dish, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id)

      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity
        return prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
      } else {
        // Remove item if quantity would be 0
        return prevCart.filter((item) => item.id !== id)
      }
    })
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
