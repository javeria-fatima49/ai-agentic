import React from "react";
import { Globe, Server, Shield } from "lucide-react"
interface SolutionCardProps {
  title: string;
  description:string;
  icon: React.ComponentType<{ className?: string }>;

}
const SolutionCard = ({ icon: Icon, title, description }:SolutionCardProps ) => (
  <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:bg-zinc-800/50 transition-colors">
    <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
)

export default function AISolutions() {
  return (
    <section id="agents" className="lg:px-60  bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              AI Solutions
            </span>
          </h2>
          <p className="text-gray-400">Transforming industries with intelligent agents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard
            icon={Globe}
            title="Enterprise AI"
            description="Custom AI agents designed for enterprise-scale operations and decision-making"
          />
          <SolutionCard
            icon={Server}
            title="Neural Operations"
            description="Automated workflow optimization through distributed neural networks"
          />
          <SolutionCard
            icon={Shield}
            title="Secure Intelligence"
            description="Privacy-first AI solutions with military-grade security protocols"
          />
        </div>
      </div>
    </section>
  )
}

