import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import { guides } from "@/data/guides";
import { Metadata } from "next";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Contentian AI Guides`,
    description: guide.description,
  };
}

const GuideContent = ({ slug }: { slug: string }) => {
  const baseClasses = "[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-zinc-900 dark:[&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:text-zinc-700 dark:[&>p]:text-zinc-300 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>ul>li]:text-zinc-700 dark:[&>ul>li]:text-zinc-300 [&>ul>li]:text-lg [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-3 [&>ol>li]:text-zinc-700 dark:[&>ol>li]:text-zinc-300 [&>ol>li]:text-lg [&>strong]:font-bold [&>strong]:text-zinc-900 dark:[&>strong]:text-white";

  switch (slug) {
    case "ai-for-beginners":
      return (
        <div className={baseClasses}>
          <h2>What is AI?</h2>
          <p>Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. This includes understanding language, recognizing patterns, solving problems, and learning from experience.</p>
          
          <h2>What is Generative AI?</h2>
          <p>Generative AI is a specific branch of AI focused on creating new content. Instead of just analyzing existing data, it can generate original text, images, code, audio, and video based on your instructions (called prompts).</p>
          
          <h2>What are AI chatbots?</h2>
          <p>AI chatbots (like ChatGPT, Claude, and Gemini) are interfaces built on Large Language Models (LLMs). They are designed to understand natural conversational language, allowing you to ask questions, brainstorm, and generate text simply by chatting with them.</p>
          
          <h2>What are AI image generators?</h2>
          <p>AI image generators (like Midjourney, DALL-E, and Leonardo) take textual descriptions and turn them into visual graphics. They understand visual concepts, styles, lighting, and composition, allowing anyone to create high-quality artwork or photos.</p>
          
          <h2>What are AI coding tools?</h2>
          <p>AI coding tools (like Cursor, GitHub Copilot) act as intelligent programming assistants. They can autocomplete code, explain complex algorithms, find bugs, and even write entire functions based on plain English instructions.</p>
          
          <h2>Where beginners can start</h2>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-500/20 my-8">
            <h3 className="text-indigo-900 dark:text-indigo-300 font-bold text-xl mb-4">Quick Start Checklist</h3>
            <ul className="mb-0 [&>li]:text-indigo-900 dark:[&>li]:text-indigo-200">
              <li><strong>Play around:</strong> Open a free tool like ChatGPT and try asking it to explain a complex topic simply.</li>
              <li><strong>Be specific:</strong> Don't just say "write an email". Say "write a polite, 3-sentence email to my boss asking for next Friday off."</li>
              <li><strong>Iterate:</strong> If the first answer isn't perfect, tell the AI what to fix. Treat it like a collaborative conversation.</li>
            </ul>
          </div>
          
          <h2>Responsible AI usage</h2>
          <p>While AI is powerful, it's not perfect. It can occasionally hallucinate (make things up confidently) or exhibit bias based on its training data. Always review AI-generated content critically, verify facts, and avoid sharing sensitive personal or company information.</p>
        </div>
      );
    
    case "prompt-engineering":
      return (
        <div className={baseClasses}>
          <h2>What is a prompt?</h2>
          <p>A prompt is the instruction or question you give to an AI. It's how you communicate your intent. The quality of the AI's output is directly proportional to the quality of your prompt.</p>
          
          <h2>Why prompts matter</h2>
          <p>AI models are incredibly knowledgeable but lack context about <em>you</em> and exactly what you want. A good prompt bridges that gap, providing the boundaries, context, and format necessary for the AI to succeed.</p>
          
          <h2>A Reusable Prompt Framework</h2>
          <p>To get the best results consistently, try using the <strong>R.C.T.C.F</strong> framework:</p>
          
          <ul>
            <li><strong>Role:</strong> Who should the AI act as? (e.g., "Act as a senior copywriter...")</li>
            <li><strong>Context:</strong> What is the background? (e.g., "...we are launching a new eco-friendly water bottle...")</li>
            <li><strong>Task:</strong> What exactly do you need? (e.g., "...write 3 Instagram captions...")</li>
            <li><strong>Constraints:</strong> What are the rules? (e.g., "...under 50 words each, no hashtags...")</li>
            <li><strong>Output Format:</strong> How should it be presented? (e.g., "...formatted as a bulleted list.")</li>
          </ul>

          <h2>Bad prompt vs Better prompt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-500/20">
              <h3 className="text-red-800 dark:text-red-400 font-bold text-lg mb-3">Bad Prompt ❌</h3>
              <p className="text-red-900 dark:text-red-200 italic mb-0">"Write a post about productivity."</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-500/20">
              <h3 className="text-green-800 dark:text-green-400 font-bold text-lg mb-3">Better Prompt ✅</h3>
              <p className="text-green-900 dark:text-green-200 italic mb-0">"Act as a time-management expert. Write a short LinkedIn post (under 150 words) sharing 3 practical tips for avoiding afternoon burnout. Use an encouraging tone."</p>
            </div>
          </div>
        </div>
      );
      
    case "ai-content-creation":
      return (
        <div className={baseClasses}>
          <h2>The AI Content Workflow</h2>
          <p>Creating content with AI isn't about pushing a button and walking away. It's about augmenting your own creativity at every stage of the process.</p>
          
          <h2>Idea generation</h2>
          <p>Staring at a blank page is the hardest part. Use AI as a brainstorming partner. Ask it for "10 unconventional blog post angles about sustainable fashion" to kickstart your thinking.</p>
          
          <h2>Research</h2>
          <p>AI tools can help you summarize long reports, pull key statistics, and understand complex topics quickly. Always verify factual claims against primary sources.</p>
          
          <h2>Drafting</h2>
          <p>Once you have an outline, AI can help you draft sections rapidly. Don't worry about perfection here; focus on getting words on the page that you can sculpt later.</p>
          
          <h2>Editing & SEO optimization</h2>
          <p>Paste your draft into an AI and ask it to:</p>
          <ul>
            <li>Improve the flow and transition between paragraphs.</li>
            <li>Suggest a more compelling opening hook.</li>
            <li>Incorporate specific SEO keywords naturally.</li>
            <li>Check for passive voice and wordiness.</li>
          </ul>
          
          <h2>Social media content</h2>
          <p>Once your core piece of content (like a blog post) is finished, ask the AI to repurpose it into 5 tweets, a LinkedIn post, and an Instagram caption, maintaining the core message but adapting to the format of each platform.</p>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 sm:p-8 rounded-2xl border border-amber-100 dark:border-amber-500/20 my-8">
            <h3 className="text-amber-900 dark:text-amber-300 font-bold text-xl mb-3">Crucial Step: Human Review</h3>
            <p className="text-amber-900 dark:text-amber-200 mb-0">Never publish raw AI output. AI lacks your unique voice, lived experiences, and nuanced judgment. Edit heavily, inject your personality, and ensure the content truly serves your audience.</p>
          </div>
        </div>
      );

    case "ai-for-freelancers":
      return (
        <div className={baseClasses}>
          <h2>How AI changes freelancing</h2>
          <p>For freelancers, time is literally money. AI allows you to operate like a mini-agency, drastically reducing the time spent on administrative and repetitive tasks so you can focus on billable client work.</p>
          
          <h2>Client communication & Proposals</h2>
          <p>AI can help you draft professional responses to difficult client emails or create the first draft of a project proposal. Feed the AI the client's brief and ask it to generate a structured proposal outline including timeline and deliverables.</p>
          
          <h2>Research & Idea Generation</h2>
          <p>Whether you're a designer researching industry trends or a writer looking for fresh angles, AI can compile initial research in seconds, giving you a massive head start.</p>
          
          <h2>Content creation</h2>
          <p>Use AI to draft your own marketing materials, portfolio case studies, and social media updates to keep your freelance brand active even when you're busy with client work.</p>
          
          <h2>Productivity & Repetitive tasks</h2>
          <p>Many freelancers use AI to automate meeting summaries, categorize expenses, or generate boilerplate code. Identifying what <em>not</em> to do manually is the first step to scaling your income.</p>
          
          <h2>AI workflow examples</h2>
          <ul>
            <li><strong>The Onboarding Workflow:</strong> Use AI to instantly generate customized welcome packets or intake questionnaires based on the client's industry.</li>
            <li><strong>The Ideation Workflow:</strong> Start every new project with a 5-minute AI brainstorming session to explore 20 different approaches before committing to one.</li>
          </ul>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-500/20 my-8">
            <h3 className="text-blue-900 dark:text-blue-300 font-bold text-xl mb-3">Human Review is Non-Negotiable</h3>
            <p className="text-blue-900 dark:text-blue-200 mb-0">Your clients are paying for your expertise and judgment, not raw AI generation. AI is your assistant; you are the creative director. Always review, refine, and put your stamp on the final deliverable.</p>
          </div>
        </div>
      );

    case "ai-for-students":
      return (
        <div className={baseClasses}>
          <h2>Your Personal Tutor</h2>
          <p>When used correctly, AI is the ultimate personalized learning tool. It can adapt to your learning speed, explain things in different ways, and provide instant feedback.</p>
          
          <h2>Understanding difficult concepts</h2>
          <p>If you're struggling with a textbook chapter, try this prompt: <em>"Explain [concept] as if I'm a high schooler. Use a real-world analogy involving sports."</em> AI excels at breaking down dense academic jargon into digestible ideas.</p>
          
          <h2>Summarizing notes & Study planning</h2>
          <p>Paste your disorganized lecture notes into an AI and ask it to format them into a structured outline or create flashcard questions. You can also ask AI to generate a realistic study schedule leading up to your exam dates.</p>
          
          <h2>Brainstorming & Research assistance</h2>
          <p>When writing an essay, use AI to brainstorm thesis statements or suggest counter-arguments you might have missed. AI can also help you understand the core arguments of complex academic papers before you dive into reading them fully.</p>
          
          <h2>Coding practice</h2>
          <p>For computer science students, AI is invaluable. Don't ask it to write the code for you—ask it to find the bug in your code, or explain why a specific algorithm is more efficient than another.</p>
          
          <div className="bg-rose-50 dark:bg-rose-900/10 p-6 sm:p-8 rounded-2xl border border-rose-100 dark:border-rose-500/20 my-8">
            <h3 className="text-rose-900 dark:text-rose-300 font-bold text-xl mb-3">Responsible Academic Use</h3>
            <p className="text-rose-900 dark:text-rose-200 mb-0">Do not use AI to write your essays or take your tests. Not only is this academic misconduct that can get you expelled, but it robs you of the actual learning process. Use AI to understand the material, not to bypass the work.</p>
          </div>
        </div>
      );

    case "ai-workflows":
      return (
        <div className={baseClasses}>
          <h2>What is an AI workflow?</h2>
          <p>An AI workflow is a structured, repeatable sequence of steps where AI tools handle specific parts of a process. Instead of treating AI as a magical "do everything" button, a workflow breaks a large task into smaller, manageable interactions.</p>
          
          <h2>1. Identify repetitive tasks</h2>
          <p>Look at your daily or weekly routines. Do you spend hours summarizing meeting notes? Formatting data? Brainstorming weekly newsletter topics? These are prime candidates for an AI workflow.</p>
          
          <h2>2. Choose tools</h2>
          <p>Select the right tool for the job. Use an LLM (like Claude or ChatGPT) for text processing, an image generator (like Midjourney) for visuals, and automation tools (like Zapier) to connect them if necessary.</p>
          
          <h2>3. Connect steps & Test the workflow</h2>
          <p>Run through the process manually first. Build specific, reusable prompts for each step. Test the output. Where does the AI fail? Adjust your prompts to add more constraints or context.</p>
          
          <h2>4. Improve results</h2>
          <p>Treat your workflow as a living process. As AI models improve and you learn better prompting techniques, continually update your prompts to yield higher quality results with less human intervention.</p>
          
          <div className="bg-purple-50 dark:bg-purple-900/10 p-6 sm:p-8 rounded-2xl border border-purple-100 dark:border-purple-500/20 my-8">
            <h3 className="text-purple-900 dark:text-purple-300 font-bold text-xl mb-4">Example: Content Creation Workflow</h3>
            <ol className="mb-0 [&>li]:text-purple-900 dark:[&>li]:text-purple-200">
              <li><strong>Step 1 (Idea):</strong> Prompt AI for 5 blog post angles based on industry news.</li>
              <li><strong>Step 2 (Outline):</strong> Select one angle and prompt AI to generate a detailed H2/H3 outline.</li>
              <li><strong>Step 3 (Drafting):</strong> Human writes the core draft using the outline.</li>
              <li><strong>Step 4 (Polish):</strong> Prompt AI to edit the draft for clarity and suggest a click-worthy title.</li>
              <li><strong>Step 5 (Repurpose):</strong> Prompt AI to turn the final article into a Twitter thread.</li>
            </ol>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default async function GuideArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  
  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        
        {/* Navigation & Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <Link href="/ai-hub/guides" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to AI Guides
          </Link>
          
          <nav className="flex flex-wrap items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-8">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <Link href="/ai-hub/guides" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Guides
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white truncate">{guide.title}</span>
          </nav>

          {/* Article Header */}
          <div className="mb-10 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10">
                {guide.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
                <Clock className="w-3 h-3" /> {guide.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
          </div>

          {/* Article Content */}
          <article className="pb-16">
            <GuideContent slug={guide.slug} />
          </article>
        </div>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-y border-zinc-200/50 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Ready to Create With AI?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Turn your ideas into platform-ready content with Contentian.
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
