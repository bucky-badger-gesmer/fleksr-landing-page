import { Dumbbell } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">fleksr</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} fleksr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

