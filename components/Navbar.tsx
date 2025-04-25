"use client"

import { useState, useContext, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CartContext } from "@/context/CartContext"
import { ShoppingCartIcon, MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart } = useContext(CartContext)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <div className="h-10 w-10 rounded-full bg-[#EB5B00] flex items-center justify-center text-white font-bold text-xl">
                H&S
              </div>
            </div>
            <span className={`text-2xl font-bold logo-font ${isScrolled ? "text-[#143D60]" : "text-white"}`}>
              H&S Restaurant
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-[#EB5B00] transition-colors ${isScrolled ? "text-[#143D60]" : "text-white"}`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`hover:text-[#EB5B00] transition-colors ${isScrolled ? "text-[#143D60]" : "text-white"}`}
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#EB5B00] transition-colors ${isScrolled ? "text-[#143D60]" : "text-white"}`}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className={`relative hover:text-[#EB5B00] transition-colors ${isScrolled ? "text-[#143D60]" : "text-white"}`}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EB5B00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${isScrolled ? "text-[#143D60]" : "text-white"}`}
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 mt-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-[#143D60] hover:text-[#EB5B00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-[#143D60] hover:text-[#EB5B00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="text-[#143D60] hover:text-[#EB5B00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                className="flex items-center text-[#143D60] hover:text-[#EB5B00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Cart
                {mounted && totalItems > 0 && (
                  <span className="ml-2 bg-[#EB5B00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
