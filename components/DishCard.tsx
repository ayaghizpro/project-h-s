"use client"

import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { CartContext } from "@/context/CartContext"
import { ShoppingCartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Dish } from "@/data/data"

interface DishCardProps {
  dish: Dish
}

export default function DishCard({ dish }: DishCardProps) {
  const { addToCart } = useContext(CartContext)

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-[#A0C878]/30">
      <div className="relative h-48 w-full overflow-hidden">
        <Link href={`/dish/${dish.id}`}>
          <Image
            src={dish.image || "/placeholder.svg"}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          {dish.views < 10 && (
            <div className="absolute top-2 right-2 bg-[#EB5B00] text-white px-2 py-1 rounded-full text-xs font-semibold">
              New Arrival
            </div>
          )}
        </Link>
      </div>

      <CardContent className="p-4">
        <Link href={`/dish/${dish.id}`}>
          <h3 className="text-xl font-bold text-[#143D60] mb-2 hover:text-[#EB5B00] transition-colors">{dish.name}</h3>
        </Link>
        <p className="text-lg font-semibold text-[#EB5B00]">{dish.price} ₫</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-[#A0C878] hover:bg-[#143D60] text-[#143D60] hover:text-white transition-colors"
          onClick={() => {
            addToCart(dish)
            // Add a small animation or feedback when adding to cart
            const el = document.createElement("div")
            el.className = "fixed top-20 right-20 bg-[#A0C878] text-[#143D60] px-4 py-2 rounded shadow-lg z-50"
            el.textContent = `${dish.name} added to cart!`
            document.body.appendChild(el)
            setTimeout(() => {
              el.style.opacity = "0"
              el.style.transition = "opacity 0.5s ease"
              setTimeout(() => document.body.removeChild(el), 500)
            }, 2000)
          }}
        >
          <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
