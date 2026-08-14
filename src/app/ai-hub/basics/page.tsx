import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight, BrainCircuit, Wand2, MessageSquareText, PenTool } from "lucide-react";

export default function AIBasicsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white">AI Basics</span>
          </nav>
        </div>

        <section className="py-16 lg:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">
              Understand AI Without the Jargon
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Simple explanations of AI concepts for beginners.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Artificial Intelligence", icon: <BrainCircuit className="w-6 h-6 text-blue-500" /> },
                { title: "Generative AI", icon: <Wand2 className="w-6 h-6 text-purple-500" /> },
                { title: "Large Language Models", icon: <MessageSquareText className="w-6 h-6 text-emerald-500" /> },
                { title: "Prompt Engineering", icon: <PenTool className="w-6 h-6 text-amber-500" /> }
              ].map((topic, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-100 dark:border-white/5 flex items-center justify-center mb-4">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{topic.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Learn the basics of {topic.title.toLowerCase()} and how it works.</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/ai-hub" className="inline-flex px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                Back to AI Hub
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-t border-zinc-200/50 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Ready to create?</h2>
            <Link href="/generator" className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg transition-all">
              Try Contentian
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
