import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight, ChevronLeft, ExternalLink, Tag, CheckCircle2 } from "lucide-react";
import { aiTools } from "@/data/aiTools";
import { Metadata } from "next";

export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = aiTools.find(t => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} | Contentian AI Tools`,
    description: tool.description,
  };
}

export default async function AIToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = aiTools.find(t => t.slug === slug);
  
  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        
        {/* Navigation & Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <Link href="/ai-hub/tools" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to AI Tools
          </Link>
          
          <nav className="flex flex-wrap items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-8">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <Link href="/ai-hub/tools" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Tools
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white truncate">{tool.name}</span>
          </nav>

          {/* Tool Header */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10">
                  {tool.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3" /> {tool.pricing}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4">
                {tool.name}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {tool.description}
              </p>
            </div>
            
            <a 
              href={tool.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md"
            >
              Visit Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Tool Content Details */}
          <article className="pb-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-10">
              
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                  Why it is useful
                </h2>
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/10 shadow-sm text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {tool.whyUseful}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Best for
                </h2>
                <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/50 dark:border-indigo-500/10 text-lg text-zinc-700 dark:text-zinc-300">
                  {tool.bestFor}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Getting started
                </h2>
                <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 text-lg text-zinc-700 dark:text-zinc-300">
                  {tool.gettingStarted}
                </div>
              </section>

            </div>
          </article>
        </div>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-y border-zinc-200/50 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Looking for an AI content creator?</h2>
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
