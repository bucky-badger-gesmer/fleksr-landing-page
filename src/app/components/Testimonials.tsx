const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "fleksr has completely changed how I approach my fitness routine. I love being able to try different high-end gyms without the commitment.",
  },
  {
    name: "Michael Chen",
    role: "Business Traveler",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As someone who travels frequently for work, fleksr has been a game-changer. I can always find a great gym, no matter where I am.",
  },
  {
    name: "Emily Rodriguez",
    role: "Personal Trainer",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I recommend fleksr to all my clients. It's an excellent way to keep their workouts varied and exciting.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Hear from our satisfied users
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Discover how fleksr is transforming the way people access premium gyms and approach their fitness
              routines.
            </p>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-gray-500">&quot;{testimonial.quote}&quot;</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

