"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="pt-20">
      <div className="bg-[#143D60] py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#DDEB9D]">Contact Us</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out with any questions about our menu, reservations, or catering
              services.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-6 text-[#143D60]">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#143D60] mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                />
              </div>

              <div>
                <label className="block text-[#143D60] mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                />
              </div>

              <div>
                <label className="block text-[#143D60] mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                />
              </div>

              <div>
                <label className="block text-[#143D60] mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00] transition-all"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white w-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>

              {isSubmitted && (
                <div className="p-3 bg-[#A0C878]/20 border border-[#A0C878] rounded text-[#143D60]">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-6 text-[#143D60]">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#A0C878] h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#143D60] mb-1">Our Location</h3>
                  <p className="text-[#143D60]/80">123 Algerian Street, Algiers, Algeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A0C878] h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#143D60] mb-1">Phone Number</h3>
                  <p className="text-[#143D60]/80">+213 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A0C878] h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#143D60] mb-1">Email Address</h3>
                  <p className="text-[#143D60]/80">info@hsrestaurant.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A0C878] h-10 w-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#143D60] mb-1">Opening Hours</h3>
                  <p className="text-[#143D60]/80">
                    Monday - Friday: 11:00 AM - 10:00 PM
                    <br />
                    Saturday - Sunday: 10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-64 bg-gray-200 rounded-lg">
              {/* Map placeholder - would be replaced with actual map */}
              <div className="h-full w-full flex items-center justify-center bg-[#DDEB9D]/30 rounded-lg">
                <p className="text-[#143D60]">Map would be displayed here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
