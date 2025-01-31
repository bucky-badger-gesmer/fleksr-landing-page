import { Dumbbell, Calendar, CreditCard, DollarSign } from "lucide-react"

const features = [
  {
    name: "Premium Gyms",
    description: "Access high-end gyms with state-of-the-art equipment, no membership required.",
    icon: Dumbbell,
  },
  {
    name: "Flexible Rentals",
    description: "Rent gym access for a day, a week, or a month. No subscriptions, no commitments.",
    icon: Calendar,
  },
  {
    name: "Pay As You Go",
    description: "Only pay for the gym time you actually use. No recurring fees or hidden costs.",
    icon: CreditCard,
  },
  {
    name: "Earn Money",
    description: "List your unused gym membership and earn cash when others rent it.",
    icon: DollarSign,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A revolutionary way to access and share gym memberships
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            fleksr offers a unique approach to gym access, giving you flexibility, savings, and the opportunity to earn.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

