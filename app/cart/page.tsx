"use client"

import { useContext, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CartContext } from "@/context/CartContext"
import { PlusIcon, MinusIcon, XIcon, ShoppingBagIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import CheckoutForm from "@/components/CheckoutForm"

export default function Cart() {
  const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useContext(CartContext)
  const [showCheckout, setShowCheckout] = useState(false)

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  if (showCheckout) {
    return <CheckoutForm setShowCheckout={setShowCheckout} totalPrice={totalPrice} />
  }

  if (cart.length === 0) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4 py-24 text-center"
      >
        <ShoppingBagIcon className="mx-auto h-16 w-16 text-[#A0C878] mb-4" />
        <h2 className="text-2xl font-bold text-[#143D60] mb-4">Your cart is empty</h2>
        <p className="text-[#143D60]/80 mb-8">Add some delicious Algerian dishes to your cart</p>
        <Link href="/">
          <Button className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white">Browse Menu</Button>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-[#143D60] mb-8 text-center">Your Cart</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#A0C878]/30">
          <div className="p-4 border-b border-[#A0C878]/30">
            <div className="grid grid-cols-12 gap-4 font-semibold text-[#143D60]">
              <div className="col-span-6 sm:col-span-6">Item</div>
              <div className="col-span-2 sm:col-span-2 text-center">Price</div>
              <div className="col-span-3 sm:col-span-3 text-center">Quantity</div>
              <div className="col-span-1 sm:col-span-1 text-center"></div>
            </div>
          </div>

          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="p-4 border-b border-[#A0C878]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 sm:col-span-6 flex items-center">
                  <div className="relative h-16 w-16 mr-4 overflow-hidden rounded">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <Link
                      href={`/dish/${item.id}`}
                      className="font-medium text-[#143D60] hover:text-[#EB5B00] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-2 text-center">
                  <span className="text-[#EB5B00] font-semibold">{item.price} ₫</span>
                </div>

                <div className="col-span-3 sm:col-span-3 flex justify-center items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-[#DDEB9D] transition-colors"
                  >
                    <MinusIcon className="h-4 w-4 text-[#143D60]" />
                  </button>

                  <span className="mx-2 w-8 text-center">{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-[#DDEB9D] transition-colors"
                  >
                    <PlusIcon className="h-4 w-4 text-[#143D60]" />
                  </button>
                </div>

                <div className="col-span-1 sm:col-span-1 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <XIcon className="h-4 w-4 text-[#EB5B00]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-lg text-[#143D60]">Total:</span>
              <span className="font-bold text-xl text-[#EB5B00]">{totalPrice} ₫</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button
                variant="outline"
                className="border-[#143D60] text-[#143D60] hover:bg-[#143D60] hover:text-white transition-colors"
                onClick={clearCart}
              >
                Clear Cart
              </Button>

              <Button
                className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white transition-colors"
                onClick={() => setShowCheckout(true)}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
