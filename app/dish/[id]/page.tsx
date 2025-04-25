"use client"

import { useEffect, useState, useContext } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { dishes } from "@/data/data"
import { CartContext } from "@/context/CartContext"
import { StarIcon, ShoppingCartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DishDetail() {
  const params = useParams()
  const id = Number(params.id)
  const [dish, setDish] = useState(dishes.find((d) => d.id === id))
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    // Increment views when component mounts
    if (dish) {
      const updatedDish = { ...dish, views: dish.views + 1 }
      setDish(updatedDish)
    }
  }, [])

  if (!dish) {
    return <div className="container mx-auto px-4 py-8 text-center">Dish not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-80 w-full md:h-full">
              <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
              {dish.views < 10 && (
                <div className="absolute top-4 right-4 bg-[#a85e53] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New Arrival
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-[#a85e53] mb-2">{dish.name}</h1>
            <p className="text-2xl font-semibold text-[#bf7a6c] mb-4">{dish.price} ₫</p>

            <div className="flex items-center mb-4">
              <span className="text-[#bf7a6c] mr-2">Views: {dish.views}</span>
              <span className="text-[#bf7a6c]">Sold: {dish.sold}</span>
            </div>

            <Button className="w-full bg-[#a85e53] hover:bg-[#bf7a6c] text-white mb-6" onClick={() => addToCart(dish)}>
              <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
            </Button>

            <div>
              <h3 className="text-xl font-semibold text-[#a85e53] mb-2">Reviews</h3>
              {dish.reviews.map((review, index) => (
                <div key={index} className="mb-3 border-b border-gray-100 pb-3">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${i < review.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-[#bf7a6c]">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
