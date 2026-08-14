import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";
import { aiBasics } from "@/data/aiBasics";
import AIBasicCard from "@/components/ai-hub/AIBasicCard";

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
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-indigo-500/10">
              AI Basics
            </span>
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
              {aiBasics.map((topic) => (
                <AIBasicCard key={topic.slug} {...topic} />
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
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Ready to Create With AI?</h2>
            <Link href="/generator" className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg transition-all">
              Start Creating
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
