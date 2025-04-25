"use client"

import { SearchIcon } from "lucide-react"
import { motion } from "framer-motion"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-md mx-auto my-8"
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-[#143D60]" />
      </div>
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border-2 border-[#A0C878] rounded-full focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
      />
    </motion.div>
  )
}
