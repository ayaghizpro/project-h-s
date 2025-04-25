"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, MapPin, Truck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartContext } from "@/context/CartContext"
import { useContext } from "react"

interface CheckoutFormProps {
  setShowCheckout: (show: boolean) => void
  totalPrice: number
}

export default function CheckoutForm({ setShowCheckout, totalPrice }: CheckoutFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const router = useRouter()
  const { clearCart } = useContext(CartContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      clearCart()

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }, 2000)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  if (isComplete) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4 py-24 max-w-2xl"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-[#A0C878] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#143D60] mb-4">Order Confirmed!</h2>
          <p className="text-[#143D60]/80 mb-6">
            Thank you for your order. We've received your payment and will begin preparing your delicious Algerian meal
            right away.
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
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => setShowCheckout(false)} className="mr-4 p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-[#143D60]" />
          </button>
          <h1 className="text-3xl font-bold text-[#143D60]">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-[#A0C878] text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-sm mt-2 text-[#143D60]">Shipping</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 2 ? "bg-[#A0C878]" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-[#A0C878] text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="text-sm mt-2 text-[#143D60]">Payment</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 3 ? "bg-[#A0C878]" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-[#A0C878] text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              <Truck className="h-5 w-5" />
            </div>
            <span className="text-sm mt-2 text-[#143D60]">Confirmation</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-[#143D60] mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[#143D60] mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#143D60] mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[#143D60] mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#143D60] mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-[#143D60] mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-[#143D60] mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#143D60] mb-1">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    type="button"
                    className="bg-[#A0C878] hover:bg-[#A0C878]/90 text-[#143D60]"
                    onClick={() => setStep(2)}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-[#143D60] mb-4">Payment Information</h2>
                <div className="mb-4">
                  <label className="block text-[#143D60] mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    required
                    className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#143D60] mb-1">Name on Card</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-[#143D60] mb-1">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#143D60] mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      required
                      className="w-full p-2 border border-[#A0C878] rounded focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#143D60] text-[#143D60]"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    className="bg-[#A0C878] hover:bg-[#A0C878]/90 text-[#143D60]"
                    onClick={() => setStep(3)}
                  >
                    Review Order
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-[#143D60] mb-4">Order Summary</h2>
                <div className="border-t border-b py-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-[#143D60]">Subtotal</span>
                    <span className="text-[#143D60]">{totalPrice} ₫</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#143D60]">Shipping</span>
                    <span className="text-[#143D60]">50 ₫</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-[#143D60]">Total</span>
                    <span className="text-[#EB5B00]">{totalPrice + 50} ₫</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#143D60] mb-2">Shipping Address</h3>
                  <p className="text-[#143D60]/80">
                    {formData.firstName} {formData.lastName}
                    <br />
                    {formData.address}
                    <br />
                    {formData.city}, {formData.zipCode}
                    <br />
                    {formData.phone}
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#143D60] text-[#143D60]"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#EB5B00] hover:bg-[#EB5B00]/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  )
}
