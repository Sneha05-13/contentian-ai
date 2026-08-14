import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight, ChevronLeft, Clock, Calendar, Wrench, AlertCircle, Lightbulb, TrendingUp, XCircle, Rocket } from "lucide-react";
import { aiExperiences } from "@/data/aiExperiences";
import { Metadata } from "next";

export async function generateStaticParams() {
  return aiExperiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const experience = aiExperiences.find(e => e.slug === slug);
  if (!experience) return {};
  return {
    title: `${experience.title} | Contentian Experiences`,
    description: experience.description,
  };
}

export default async function AIExperienceArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = aiExperiences.find(e => e.slug === slug);
  
  if (!exp) {
    notFound();
  }

  const { content } = exp;

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        
        {/* Navigation & Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <Link href="/ai-hub/experiences" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to Experiences
          </Link>
          
          <nav className="flex flex-wrap items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-8">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <Link href="/ai-hub/experiences" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Experiences
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white truncate">{exp.title}</span>
          </nav>

          {/* Article Header */}
          <div className="mb-10 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10">
                {exp.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
                <Calendar className="w-3 h-3" /> {exp.date}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
                <Clock className="w-3 h-3" /> {exp.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              {exp.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {exp.description}
            </p>
          </div>

          {/* Editorial Content */}
          <article className="pb-16 space-y-12">
            
            <section>
              <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
                {content.introduction}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" /> Why I Tried It
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {content.whyITriedIt}
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/10 shadow-sm">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-indigo-500" /> What I Built & Tested
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6">
                {content.whatIBuiltTested}
              </p>
              
              <div className="pt-6 border-t border-zinc-200/60 dark:border-white/10">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-3">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {content.toolsUsed.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" /> What Happened
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {content.whatHappened}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-500/20">
                <h2 className="text-xl font-bold text-green-900 dark:text-green-400 mb-3 flex items-center gap-2">
                  What Worked
                </h2>
                <p className="text-green-900 dark:text-green-200 leading-relaxed">
                  {content.whatWorked}
                </p>
              </section>
              <section className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-500/20">
                <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-3 flex items-center gap-2">
                  What Didn't
                </h2>
                <p className="text-red-900 dark:text-red-200 leading-relaxed">
                  {content.whatDidnt}
                </p>
              </section>
            </div>

            <section className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-500/20">
              <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-indigo-500" /> Lessons Learned
              </h2>
              <p className="text-lg leading-relaxed text-indigo-900 dark:text-indigo-200">
                {content.lessonsLearned}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-purple-500" /> What's Next
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {content.whatsNext}
              </p>
            </section>

          </article>
        </div>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-y border-zinc-200/50 dark:border-white/5">
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
