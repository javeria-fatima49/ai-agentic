import { Bot, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default function Footer() {
  return (
    <footer className="lg:px-60 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-purple-500" />
              <span className="text-white font-semibold text-lg">Agentia World</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
            <div className="flex space-x-4">
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
          <FooterColumn title="Product" links={["Features", "Pricing", "Documentation", "API"]} />
          <FooterColumn title="Company" links={["About", "Blog", "Careers", "Contact"]} />
          <FooterColumn title="Legal" links={["Privacy", "Terms", "Security", "Compliance"]} />
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          © 2025 Agentia World. Powered by Panaversity. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

