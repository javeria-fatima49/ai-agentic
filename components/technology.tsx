import { Brain, Cpu, Code, Globe, } from "lucide-react"
interface TechnologyCardProps {
  title: string;
  description:String;
  icon: React.ComponentType<{ className?: string }>;
}
const TechnologyCard = ({ icon: Icon, title, description }: TechnologyCardProps) => (
    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:bg-zinc-800/50 transition-colors">
      <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
export default function Technology(){
    return(
        <section id="technology" className="lg:px-60 ">
              <div className="container mx-auto px-4 pt-48">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600  text-transparent bg-clip-text">
              Powered by Advanced AI
            </span>
          </h2>
          <p className="text-gray-400">Built on cutting-edge neural architectures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <TechnologyCard
            icon={Brain}
            title="Neural Networks"
            description="Advanced neural architectures for complex decision making"
          />
          <TechnologyCard
            icon={Cpu}
            title="Deep Learning"
            description="Sophisticated deep learning models for pattern recognition"
          />
          <TechnologyCard icon={Code} title="Advanced ML" description="Cutting-edge machine learning algorithms" />
          <TechnologyCard
            icon={Globe}
            title="Global Scale"
            description="Distributed AI processing across global networks"
          />
        </div>
        </div>
        </section>
    )
}