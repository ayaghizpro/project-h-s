import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#143D60] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#DDEB9D]">H&S Restaurant</h3>
            <p className="mb-4 text-white/80">
              Experience authentic Algerian cuisine with traditional recipes and the freshest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#EB5B00] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#EB5B00] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#EB5B00] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#DDEB9D]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#EB5B00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/80 hover:text-[#EB5B00] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-white/80 hover:text-[#EB5B00] transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#EB5B00] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#DDEB9D]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#A0C878]" />
                <span className="text-white/80">123 Algerian Street, Algiers, Algeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#A0C878]" />
                <span className="text-white/80">+213 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#A0C878]" />
                <span className="text-white/80">info@hsrestaurant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} H&S Restaurant. All rights reserved to douaa Bengaoua.</p>
        </div>
      </div>
    </footer>
  )
}
