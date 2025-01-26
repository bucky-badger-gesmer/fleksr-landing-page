import { Search, CreditCard, Dumbbell, ListChecks, Calendar, DollarSign } from "lucide-react"

const rentSteps = [
  {
    name: "Search",
    description: "Browse our selection of high-end gyms in your area.",
    icon: Search,
  },
  {
    name: "Book",
    description: "Choose your preferred gym and rental duration. No subscription needed.",
    icon: CreditCard,
  },
  {
    name: "Work Out",
    description: "Enjoy premium facilities for the duration you chose.",
    icon: Dumbbell,
  },
]

const listSteps = [
  {
    name: "List",
    description: "Add your gym membership details to our platform.",
    icon: ListChecks,
  },
  {
    name: "Set Availability",
    description: "Choose when your membership is available for rent.",
    icon: Calendar,
  },
  {
    name: "Earn",
    description: "Get paid when someone rents your membership.",
    icon: DollarSign,
  },
]

export default function HowItWorks() {
  return (
    <div className="py-12 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Rent a gym or list your membership
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Whether you&apos;re looking to access a gym or earn from your membership, fleksr makes it simple.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">To Rent a Gym:</h3>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {rentSteps.map((step, index) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {index + 1}. {step.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-12">To List Your Membership:</h3>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {listSteps.map((step, index) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {index + 1}. {step.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

