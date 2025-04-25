"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { dishes } from "@/data/data"
import DishCard from "@/components/DishCard"
import SearchBar from "@/components/SearchBar"

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDishes = dishes.filter((dish) => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="pt-20">
      <div className="bg-[#143D60] py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#DDEB9D]">Our Menu</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Explore our authentic Algerian dishes, prepared with traditional recipes and the freshest ingredients
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDishes.map((dish) => (
            <motion.div key={dish.id} variants={fadeIn}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
