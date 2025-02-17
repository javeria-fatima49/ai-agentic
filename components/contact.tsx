import { Mail, Globe, Github, Linkedin, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 lg:px-60 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400">Ready to transform your business with AI?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-500" />
                <a href="mailto:contact@agentiaworld.com" className="text-gray-300 hover:text-white">
                  contact@agentiaworld.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-purple-500" />
                <a
                  href="https://www.agentiaworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  www.agentiaworld.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" className="bg-zinc-800/50 border-white/10 text-white" />
              <Input placeholder="Last Name" className="bg-zinc-800/50 border-white/10 text-white" />
            </div>
            <Input placeholder="Email Address" className="bg-zinc-800/50 border-white/10 text-white" />
            <Textarea placeholder="Your Message" className="bg-zinc-800/50 border-white/10 text-white" rows={4} />
            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

