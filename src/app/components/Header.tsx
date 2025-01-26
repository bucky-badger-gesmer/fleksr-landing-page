import Link from "next/link"
import { Dumbbell } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Dumbbell className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">fleksr</span>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center space-x-4">
            <Link href="#features" className="text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-500 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-gray-500 hover:text-gray-900">
              Testimonials
            </Link>
            <Link
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

