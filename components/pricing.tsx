import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingCard = ({ title, price, features, isHighlighted = false }: PricingCardProps) => (
  <div
    className={`rounded-lg p-8 ${isHighlighted ? "bg-purple-900/50 border-purple-500" : "bg-zinc-900/50 border-white/10"} border`}
  >
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="text-4xl font-bold text-white mb-6">{price}</div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <Check className="w-5 h-5 mr-2 text-purple-500" />
          {feature}
        </li>
      ))}
    </ul>
    <Button
      className={`w-full ${isHighlighted ? "bg-purple-600 hover:bg-purple-700" : "bg-zinc-800 hover:bg-zinc-700"} text-white`}
    >
      Get Started
    </Button>
  </div>
)

export default function Pricing() {
  return (
    <section id="pricing" className="lg:px-60 lg:py-28 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-gray-400">Scale your AI capabilities with our flexible pricing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$499/month"
            features={[
              "2 AI Agent Instances",
              "Basic Neural Processing",
              "24/7 Support",
              "Weekly Analytics",
              "Basic Integration Support",
            ]}
          />
          <PricingCard
            title="Professional"
            price="$999/month"
            features={[
              "10 AI Agent Instances",
              "Advanced Neural Networks",
              "Priority Support",
              "Real-time Analytics",
              "Custom Integration",
              "API Access",
              "Advanced Security",
            ]}
            isHighlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="$Custom"
            features={[
              "Unlimited Agents",
              "Full Neural Suite",
              "Dedicated Support Team",
              "Advanced Analytics Dashboard",
              "Custom Development",
              "Full API Access",
              "Enterprise Security",
              "Custom Training",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

