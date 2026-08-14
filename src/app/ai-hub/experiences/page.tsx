import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";
import { aiExperiences } from "@/data/aiExperiences";
import AIExperienceCard from "@/components/ai-hub/AIExperienceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Experiences | Contentian",
  description: "Real-world AI experiments, project stories, and lessons learned.",
};

export default function AIExperiencesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white">AI Experiences</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-indigo-500/10">
              AI Experiences
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">
              Real Stories from the AI Frontier
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              A collection of real-world AI experiments, project stories and honest lessons learned.
            </p>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiExperiences.map((experience) => (
                <AIExperienceCard key={experience.slug} {...experience} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/ai-hub" className="inline-flex px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                Back to AI Hub
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-t border-zinc-200/50 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Want to Try Contentian?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Turn your ideas into platform-ready content with AI.
            </p>
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
