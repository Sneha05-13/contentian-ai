import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, ArrowRight, BookOpen, Wrench, Lightbulb, Beaker } from "lucide-react";

export default function AIHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4" />
              Contentian AI Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight max-w-3xl">
              Learn AI. Discover Tools. Build Smarter.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Practical AI guides, useful tools, tutorials and real-world experiences — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link href="#guides" className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95">
                Explore AI Guides
              </Link>
              <Link href="/generator" className="px-8 py-3 rounded-full bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-semibold shadow-sm border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95">
                Try Contentian
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Category Section */}
        <section className="py-16 bg-white dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI Basics",
                  desc: "Understand AI concepts without the complicated jargon.",
                  icon: <BookOpen className="w-6 h-6 text-blue-500" />,
                  href: "/ai-hub/basics"
                },
                {
                  title: "AI Tools",
                  desc: "Discover useful AI tools for study, work, creativity and business.",
                  icon: <Wrench className="w-6 h-6 text-purple-500" />,
                  href: "/ai-hub/tools"
                },
                {
                  title: "AI Guides",
                  desc: "Step-by-step tutorials and practical AI workflows.",
                  icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
                  href: "/ai-hub/guides"
                },
                {
                  title: "AI Experiences",
                  desc: "Real experiments, honest reviews and lessons from using AI.",
                  icon: <Beaker className="w-6 h-6 text-green-500" />,
                  href: "/ai-hub/experiences"
                }
              ].map((cat, i) => (
                <Link href={cat.href} key={i} className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-black/50 shadow-sm border border-zinc-100 dark:border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{cat.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{cat.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Featured Content Section */}
        <section id="guides" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Featured Content</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Handpicked articles to help you master AI.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "AI Basics",
                  title: "What Can AI Actually Do? A Beginner's Guide",
                  desc: "Cut through the hype and discover what artificial intelligence is truly capable of today.",
                  color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20"
                },
                {
                  category: "AI Tools",
                  title: "Best AI Tools for Students",
                  desc: "A curated list of AI-powered applications that can help you study smarter, not harder.",
                  color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20"
                },
                {
                  category: "AI Guides",
                  title: "How AI Can Help Freelancers",
                  desc: "Learn how to automate tedious tasks and scale your freelance business using AI.",
                  color: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20"
                },
                {
                  category: "AI Experiences",
                  title: "How I Use AI for Content Creation",
                  desc: "My personal workflow for generating engaging social media posts using Contentian and other tools.",
                  color: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20"
                }
              ].map((article, i) => (
                <div key={i} className="flex flex-col p-6 rounded-2xl bg-white dark:bg-zinc-900/40 shadow-sm border border-zinc-200/60 dark:border-white/10 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all group h-full">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${article.color}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1">
                    {article.desc}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all mt-auto">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-t border-zinc-200/50 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">Ready to Create with AI?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Turn your ideas into platform-ready content with Contentian.
            </p>
            <Link href="/generator" className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95">
              Start Creating
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
