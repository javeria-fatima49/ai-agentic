import React from "react";
import { Brain, MessageSquare, Zap, Shield } from "lucide-react"
interface FeatureCardProps {
  title: string;
  description:string;
  icon: React.ComponentType<{ className?: string }>;
}
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:bg-zinc-800/50 transition-colors">
    <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="py-20 lg:px-60 bg-black">
    

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Neural Capabilities
            </span>
          </h2>
          <p className="text-gray-400">Powered by next-generation artificial intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Zap}
            title="Autonomous Learning"
            description="Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning"
          />
          <FeatureCard
            icon={MessageSquare}
            title="Multi-Modal Intelligence"
            description="Advanced agents capable of processing text, voice, and visual data for comprehensive understanding"
          />
          <FeatureCard
            icon={Brain}
            title="Cognitive Integration"
            description="Seamless integration with existing systems through advanced cognitive APIs and neural bridges"
          />
          <FeatureCard
            icon={Shield}
            title="Ethical AI Framework"
            description="Built-in ethical guidelines and safety protocols ensuring responsible AI deployment"
          />
        </div>
      {/* </div> */}
    </section>
  )
}

