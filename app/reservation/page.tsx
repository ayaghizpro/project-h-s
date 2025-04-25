"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, CalendarCheck, ArrowLeft } from "lucide-react"

export default function Reservation() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4 py-24 max-w-2xl"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-[#A0C878] rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarCheck className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#143D60] mb-4">Reservation Confirmed!</h2>
          <p className="text-[#143D60]/80 mb-6">
            Thank you for your reservation. We've received your request and will confirm your table shortly.
          </p>
          <p className="font-semibold text-[#143D60] mb-8">You will receive a confirmation email shortly.</p>
          <Button className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white" onClick={() => router.push("/")}>
            Return to Home
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="pt-20">
      <div className="bg-[#143D60] py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#DDEB9D]">Reserve a Table</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Book your table in advance to ensure the perfect dining experience for you and your guests
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center mb-8">
            <button onClick={() => router.push("/")} className="mr-4 p-2 rounded-full hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5 text-[#143D60]" />
            </button>
            <h2 className="text-2xl font-bold text-[#143D60]">Make a Reservation</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#143D60] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-[#143D60] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#143D60] mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-[#143D60] mb-2">Number of Guests</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-[#143D60]/60" />
                  </div>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all appearance-none bg-white"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#143D60] mb-2">Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-[#143D60]/60" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#143D60] mb-2">Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-[#143D60]/60" />
                  </div>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all appearance-none bg-white"
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[#143D60] mb-2">Occasion (Optional)</label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all appearance-none bg-white"
              >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Date">Date Night</option>
                <option value="Business">Business Meal</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[#143D60] mb-2">Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                placeholder="Any special requests or dietary requirements?"
              ></textarea>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Reservation"}
              </Button>
            </div>

            <p className="text-sm text-[#143D60]/70 text-center">
              By making a reservation, you agree to our reservation policy. We'll hold your table for 15 minutes after
              the reserved time.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
