"use client"
import { Bot, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import AISolutions from "@/components/solution";
import Pricing from "@/components/pricing";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import Technology from "@/components/technology";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white ">
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10 px-56">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 ">
            <Bot className="w-8 h-8 text-purple-500 flex items-center " />
            <span className="text-white font-semibold text-lg ">Agentia World</span>
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <nav className={`absolute md:static top-16 left-0 text-sm w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-start md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden md:flex"}`}>
            <Link href="#features" className="text-gray-300 hover:text-white pt-2 transition-colors">
              Features
            </Link>
            <Link href="#technology" className="text-gray-300 hover:text-white pt-2 transition-colors">
              Technology
            </Link>
            <Link href="#agents" className="text-gray-300 hover:text-white pt-2 transition-colors">
              Agents
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white pt-2 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white pt-2 transition-colors">
              Contact
            </Link>
            <Button className="sm:-ml-72 bg-gradient-to-r from-purple-600 to-blue-600 duration-300 transform hover:scale-105 text-white">
              Launch Console
            </Button>
          </nav>
        </div>
      </header>

      <main className="w-full flex flex-col items-center justify-between  px-6 sm:px-8 lg:px-12 pt-32 pb-20 text-center">
        <div className="max-w-4xl space-y-8 mx-auto bg-gradient-to-b from-black via-black to-purple-900/20 pt-32">
          <div className="inline-block ">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-sm text-purple-300">
              POWERED BY ADVANCED AI
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight sm:leading-snug">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Enterprise AI Agents
            </span>
            <br />
            <span className="text-white">for the Future</span>
          </h1>

          <div className="max-w-2xl mx-auto mt-12 bg-zinc-900/50 border border-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Bot className="w-8 h-8 text-purple-500" />
              <div className="bg-zinc-800/90 px-4 py-4">
              <Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello! I'm your AI agent. How can I enhance your business today?")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("I can help optimize your workflows with neural networks.")
                  .pauseFor(500)
                  .typeString("Let me assist you with advanced data analytics.")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Would you like to explore our AI integration solutions?")
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
                cursor: "|",
              }}
              
            />
            </div>
         </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] text-white px-6 py-6 sm:px-8 sm:py-6 text-lg w-full sm:w-auto">
              Deploy Your AI Agent
              <span className="ml-2">→</span>
            </Button>
            <button className="border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 px-6 py-4 sm:px-8 sm:py-4 text-lg w-full sm:w-auto rounded-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </main>

      <Technology />
      <Features />
      <AISolutions />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}
