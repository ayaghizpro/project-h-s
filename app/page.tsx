"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { dishes } from "@/data/data"
import DishCard from "@/components/DishCard"
import SearchBar from "@/components/SearchBar"
import { Button } from "@/components/ui/button"
import { ArrowRight, UtensilsCrossed, CalendarDays, ShoppingBag } from "lucide-react"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const featuredDishes = dishes.slice(0, 3)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#143D60]/80 to-[#143D60]/60 z-10" />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmeqt5jocGzzHYLHjQg8X2SrbNmutmrYLcGL83VHrc4A&s&ec=72940543"
            alt="Algerian Cuisine"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#DDEB9D]">Authentic Algerian Cuisine</h1>
            <p className="text-xl mb-8 text-white/90">
              Experience the rich flavors and traditions of Algeria in every bite. Our dishes are crafted with authentic
              recipes and the freshest ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white px-8 py-6 text-lg"
                onClick={() => router.push("/menu")}
              >
                View Our Menu
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => router.push("/reservation")}
              >
                Reserve a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-[#DDEB9D]/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#143D60]">Our Signature Dishes</h2>
            <p className="text-lg text-[#143D60]/80 max-w-2xl mx-auto">
              Discover our most popular Algerian specialties, prepared with traditional recipes passed down through
              generations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredDishes.map((dish) => (
              <motion.div key={dish.id} variants={fadeIn} className="hover-scale">
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <Button variant="outline" className="border-[#143D60] text-[#143D60] hover:bg-[#143D60] hover:text-white">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 rounded-lg hover-scale">
              <div className="bg-[#A0C878] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#143D60]">Fine Dining</h3>
              <p className="text-[#143D60]/80">
                Experience authentic Algerian cuisine in an elegant atmosphere with attentive service.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover-scale">
              <div className="bg-[#A0C878] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#143D60]">Reservations</h3>
              <p className="text-[#143D60]/80">
                Book your table in advance to ensure the perfect dining experience for you and your guests.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover-scale">
              <div className="bg-[#A0C878] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#143D60]">Takeaway</h3>
              <p className="text-[#143D60]/80">
                Enjoy our delicious Algerian dishes in the comfort of your own home with our takeaway service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#143D60] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#DDEB9D]">Experience Authentic Algerian Flavors</h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you're looking to dine in our restaurant or order for takeaway, we promise an unforgettable
              culinary journey through Algeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white px-8 py-6 text-lg"
                onClick={() => router.push("/reservation")}
              >
                Reserve a Table
              </Button>
              <Button
                className="bg-[#A0C878] hover:bg-[#A0C878]/90 text-[#143D60] font-medium px-8 py-6 text-lg"
                onClick={() => router.push("/menu")}
              >
                Order Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Dishes Section */}
      <section className="py-20 bg-white" id="menu">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#143D60]">Our Menu</h2>
            <p className="text-lg text-[#143D60]/80 max-w-2xl mx-auto">
              Browse our complete selection of authentic Algerian dishes
            </p>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {dishes
              .filter((dish) => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((dish) => (
                <motion.div key={dish.id} variants={fadeIn}>
                  <DishCard dish={dish} />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
