import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import { aiBasics } from "@/data/aiBasics";
import { Metadata } from "next";

export async function generateStaticParams() {
  return aiBasics.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = aiBasics.find(t => t.slug === slug);
  if (!topic) return {};
  return {
    title: `${topic.title} | Contentian AI Basics`,
    description: topic.description,
  };
}

const TopicContent = ({ slug }: { slug: string }) => {
  const baseClasses = "[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-zinc-900 dark:[&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:text-zinc-700 dark:[&>p]:text-zinc-300 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>ul>li]:text-zinc-700 dark:[&>ul>li]:text-zinc-300 [&>ul>li]:text-lg [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-3 [&>ol>li]:text-zinc-700 dark:[&>ol>li]:text-zinc-300 [&>ol>li]:text-lg [&>strong]:font-bold [&>strong]:text-zinc-900 dark:[&>strong]:text-white";

  switch (slug) {
    case "what-is-artificial-intelligence":
      return (
        <div className={baseClasses}>
          <h2>What AI means</h2>
          <p>Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, and understanding natural language.</p>
          
          <h2>How AI works at a high level</h2>
          <p>AI isn't magic; it's math and data. Most modern AI works through <strong>Machine Learning</strong>. Instead of programming exact rules ("if X happens, do Y"), engineers feed massive amounts of data into an algorithm and tell it to find patterns. Over time, the algorithm "learns" to make predictions or decisions based on those patterns.</p>
          
          <h2>Everyday examples</h2>
          <ul>
            <li><strong>Recommendation algorithms:</strong> Netflix suggesting movies or Spotify curating playlists based on your past behavior.</li>
            <li><strong>Voice assistants:</strong> Siri and Alexa understanding your speech and responding appropriately.</li>
            <li><strong>Navigation:</strong> Google Maps calculating the fastest route by analyzing real-time traffic data.</li>
            <li><strong>Face ID:</strong> Your smartphone recognizing your face to unlock the screen.</li>
          </ul>
          
          <h2>Types of AI</h2>
          <p>Currently, we use <strong>Narrow AI</strong> (or Weak AI)—systems designed to handle one specific task very well, like playing chess or generating images. <strong>General AI</strong> (or Strong AI)—a system that possesses human-like general intelligence across all domains—does not yet exist in the real world.</p>
          
          <h2>Limitations</h2>
          <p>AI lacks true understanding, consciousness, and common sense. It is highly dependent on the quality of its training data; if trained on biased or incomplete data, it will produce biased or incorrect results.</p>
          
          <h2>Benefits</h2>
          <p>AI can process information millions of times faster than humans, work 24/7 without fatigue, discover hidden patterns in massive datasets, and automate repetitive tasks, freeing humans to focus on creative and strategic work.</p>
        </div>
      );
    
    case "what-is-generative-ai":
      return (
        <div className={baseClasses}>
          <h2>What it is</h2>
          <p>Generative AI is a specific branch of artificial intelligence focused on <strong>creating new, original content</strong> rather than just analyzing or categorizing existing data.</p>
          
          <h2>How it differs from traditional AI</h2>
          <p>Traditional AI (like the algorithm recommending YouTube videos) looks at data and makes a prediction or classification. Generative AI looks at data, learns the underlying structure and rules, and then uses that knowledge to generate entirely new outputs that didn't exist before.</p>
          
          <h2>Text generation</h2>
          <p>Tools like ChatGPT or Claude can write essays, draft emails, summarize long articles, or even brainstorm ideas. They do this by predicting the next most logical word in a sequence based on vast amounts of text they've read during training.</p>
          
          <h2>Image generation</h2>
          <p>Tools like Midjourney, DALL-E, and Stable Diffusion can create stunning visual artwork or photorealistic images from simple text descriptions by mapping relationships between words and visual elements.</p>
          
          <h2>Code generation</h2>
          <p>AI can now write software. Tools like GitHub Copilot or Cursor can generate functional code in various programming languages, find bugs, and explain complex algorithms simply by reading a plain English prompt.</p>
          
          <h2>Examples</h2>
          <ul>
            <li>Asking an AI to "write a 3-stanza poem about a robot learning to paint."</li>
            <li>Generating a realistic image of "a futuristic city floating in the clouds at sunset."</li>
            <li>Creating a custom Excel formula to sort data automatically.</li>
          </ul>
          
          <h2>Limitations</h2>
          <p>Generative AI is prone to <strong>hallucinations</strong>—confidently generating false or nonsensical information. It also struggles with deep reasoning, mathematical logic, and sometimes maintaining consistency across long outputs.</p>
        </div>
      );

    case "what-are-large-language-models":
      return (
        <div className={baseClasses}>
          <h2>What an LLM is</h2>
          <p>A Large Language Model (LLM) is a type of AI designed specifically to understand, generate, and interact with human language. They are the "brains" powering tools like ChatGPT, Claude, and Gemini.</p>
          
          <h2>Training at a high level</h2>
          <p>LLMs are trained by "reading" a massive portion of the internet—books, articles, websites, and code. During this phase, the model learns grammar, facts, reasoning abilities, and how words relate to each other. It essentially learns a statistical map of human language.</p>
          
          <h2>Tokens</h2>
          <p>LLMs don't read words exactly like we do; they read <strong>tokens</strong>. A token can be a word, a part of a word, or even a single character. For example, the word "apple" might be one token, while "unbelievable" might be split into "un", "believ", and "able". Models generate responses one token at a time.</p>
          
          <h2>Context</h2>
          <p>The "Context Window" is the model's short-term memory. It defines how much text the AI can keep in mind at one time during a conversation. If you paste a 100-page document into a model with a small context window, it will "forget" the beginning of the document by the time it reaches the end.</p>
          
          <h2>Why LLMs can make mistakes</h2>
          <p>LLMs don't have a database of facts or an internal calculator. They are essentially highly advanced autocomplete systems predicting the next most likely word. Because they are statistically guessing based on patterns, they can sometimes guess wrong, leading to very confident-sounding but completely incorrect statements (hallucinations).</p>
        </div>
      );

    case "what-is-prompt-engineering":
      return (
        <div className={baseClasses}>
          <h2>What prompts are</h2>
          <p>A prompt is the instruction, question, or context you give to an AI system to get a desired output. It is the bridge between human intent and machine execution.</p>
          
          <h2>Why instructions matter</h2>
          <p>AI models are incredibly powerful but they cannot read your mind. If you give a vague instruction like "write a blog post," the AI has to guess your tone, audience, format, and goal. By providing clear, detailed instructions, you drastically improve the quality and relevance of the output.</p>
          
          <h2>Context</h2>
          <p>Context is the most crucial part of prompt engineering. Telling the AI <em>who</em> you are, <em>who</em> the audience is, and <em>why</em> you are doing this task allows the AI to tailor its response specifically to your situation.</p>
          
          <h2>Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-500/20">
              <h3 className="text-red-800 dark:text-red-400 font-bold text-lg mb-3">Basic Prompt</h3>
              <p className="text-red-900 dark:text-red-200 italic mb-0">"Give me a workout plan."</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-500/20">
              <h3 className="text-green-800 dark:text-green-400 font-bold text-lg mb-3">Engineered Prompt</h3>
              <p className="text-green-900 dark:text-green-200 italic mb-0">"Act as a personal trainer. I am a 30-year-old beginner with bad knees. I have 30 minutes a day and access to dumbbells. Create a 3-day weekly workout plan focused on low-impact weight loss."</p>
            </div>
          </div>
          
          <h2>Prompt structure</h2>
          <p>A great prompt usually contains four elements:</p>
          <ul>
            <li><strong>Role:</strong> Who the AI should act as (e.g., "Act as a marketing expert").</li>
            <li><strong>Task:</strong> What exactly you want done.</li>
            <li><strong>Context:</strong> Background information necessary to do the task well.</li>
            <li><strong>Format:</strong> How the output should look (e.g., a table, a bulleted list, JSON).</li>
          </ul>
        </div>
      );

    case "what-is-ai-vision":
      return (
        <div className={baseClasses}>
          <h2>Image understanding</h2>
          <p>AI Vision (or Computer Vision) is a field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs. Just as Large Language Models give AI the ability to "read," AI Vision gives it the ability to "see."</p>
          
          <h2>Object detection</h2>
          <p>This is the ability of an AI to look at an image and identify specific objects within it, as well as their locations. For example, drawing a bounding box around every car and pedestrian in a street photo.</p>
          
          <h2>Scene understanding</h2>
          <p>Beyond identifying individual objects, advanced AI Vision can understand the overall context of an image. It can look at a photo and understand that it depicts "a family enjoying a sunny picnic in a park," grasping the relationships between the objects.</p>
          
          <h2>OCR (Optical Character Recognition)</h2>
          <p>OCR is the ability to identify and extract text from images or scanned documents. Modern AI vision takes this further by not just extracting the text, but understanding its layout and context (e.g., reading a complex receipt and categorizing the expenses).</p>
          
          <h2>Image-to-text</h2>
          <p>This involves feeding an image to an AI and asking it to describe it in natural language. You can ask an AI Vision model to "describe this chart," "write alt-text for this photo," or "tell me why this meme is funny."</p>
          
          <h2>Real-world applications</h2>
          <ul>
            <li><strong>Healthcare:</strong> AI analyzing X-rays or MRIs to detect anomalies faster than human doctors.</li>
            <li><strong>Autonomous Vehicles:</strong> Self-driving cars using cameras to detect lanes, read traffic signs, and avoid pedestrians in real-time.</li>
            <li><strong>Quality Control:</strong> Cameras on factory lines automatically detecting microscopic defects in manufactured products.</li>
          </ul>
        </div>
      );

    case "what-is-ai-automation":
      return (
        <div className={baseClasses}>
          <h2>What automation means</h2>
          <p>Automation is the use of technology to perform tasks with minimal human intervention. Traditionally, automation involved strict, rigid rules (e.g., "If I receive an email from this address, move it to this folder").</p>
          
          <h2>AI + automation</h2>
          <p>Intelligent Automation combines traditional automation tools (like Zapier or Make) with Artificial Intelligence. By adding AI, automated workflows can handle "fuzzy" or unstructured data that previously required a human brain.</p>
          
          <h2>Repetitive tasks</h2>
          <p>AI automation is best suited for high-volume, repetitive tasks that require a small amount of cognitive effort. Instead of having a human read 100 customer feedback forms to sort them by sentiment, an AI automation can do it instantly.</p>
          
          <h2>Examples</h2>
          <ul>
            <li><strong>Customer Support:</strong> An email arrives. An AI reads it, determines the customer is angry about a delayed shipment, drafts an apology email with tracking info, and flags it for human review.</li>
            <li><strong>Content Pipelines:</strong> A new YouTube video is published. An automation triggers an AI to transcribe the video, write a blog post summary, and generate three tweets, then saves them to a Google Doc.</li>
            <li><strong>Invoice Processing:</strong> An AI vision model extracts data from scanned invoices and automatically inputs the vendor, amount, and date into accounting software.</li>
          </ul>
          
          <h2>Benefits and limitations</h2>
          <p><strong>Benefits:</strong> Massive time savings, reduced human error, and the ability to scale operations without hiring more staff.</p>
          <p><strong>Limitations:</strong> AI is not infallible. If an AI automation makes a mistake (like hallucinating a fact in an automated email response to a client), it can do so at scale. Human oversight (a "human-in-the-loop" system) is highly recommended for critical tasks.</p>
        </div>
      );

    case "what-is-rag":
      return (
        <div className={baseClasses}>
          <h2>What RAG means</h2>
          <p>RAG stands for <strong>Retrieval-Augmented Generation</strong>. It is a technique used to give AI access to your specific, private, or up-to-date information that it wasn't originally trained on.</p>
          
          <h2>Retrieval</h2>
          <p>When you ask a question, the system first <em>retrieves</em> relevant information from a database (like your company handbook, past emails, or a specific textbook) by searching for documents related to your query.</p>
          
          <h2>Context</h2>
          <p>The system takes your original question and combines it with the information it just retrieved. It essentially says to the AI: <em>"Here is the user's question, and here is some relevant background context. Answer the question using ONLY this context."</em></p>
          
          <h2>Generation</h2>
          <p>The AI language model then <em>generates</em> its answer based on the injected context, ensuring the output is accurate and based on your specific documents.</p>
          
          <h2>Why RAG is useful</h2>
          <p>Standard LLMs only know what they were trained on (which is often outdated) and they are prone to hallucinations. RAG solves this by grounding the AI in factual, specific reality. It allows you to build an AI that acts as an expert on <em>your</em> specific data, without having to undergo the expensive process of retraining a model from scratch.</p>
          
          <h2>Simple example</h2>
          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-500/20 my-8">
            <p className="mb-4">Imagine asking an AI, <em>"What is the company policy on remote work?"</em></p>
            <ol className="mb-0 [&>li]:text-indigo-900 dark:[&>li]:text-indigo-200">
              <li><strong>Without RAG:</strong> The AI hallucinates a generic, made-up answer based on what typical companies do.</li>
              <li><strong>With RAG:</strong> The system searches your company's Notion, retrieves the exact HR document about remote work, feeds it to the AI, and the AI generates a perfect, accurate summary of your specific policy.</li>
            </ol>
          </div>
        </div>
      );

    case "what-are-ai-agents":
      return (
        <div className={baseClasses}>
          <h2>What agents are</h2>
          <p>An AI Agent is an AI system that can pursue a complex goal autonomously. While a standard AI model (like ChatGPT) just waits for a prompt and generates text, an AI Agent can make decisions, take actions, and interact with the digital world to accomplish a task.</p>
          
          <h2>Planning</h2>
          <p>When given a high-level goal (e.g., "Research the top 3 competitors in our space and create a comparison table"), an agent can break that large goal down into smaller, actionable steps. It can reason about what it needs to do first, second, and third.</p>
          
          <h2>Tool usage</h2>
          <p>Agents are incredibly powerful because they can use tools. They can be given access to web browsers to search the internet, calculators to do math, terminal environments to write and execute code, or APIs to send emails and update databases.</p>
          
          <h2>Multi-step tasks</h2>
          <p>An agent operates in a loop: it observes its environment, thinks about what to do next, takes an action using a tool, observes the result of that action, and repeats the process until the goal is achieved.</p>
          
          <h2>Examples</h2>
          <ul>
            <li><strong>Software Engineering Agents:</strong> Given an issue ticket, an agent can read the codebase, write the fix, run tests, and open a Pull Request entirely on its own.</li>
            <li><strong>Research Agents:</strong> An agent that scours the internet, clicks on links, reads articles, synthesizes the findings, and writes a comprehensive report.</li>
            <li><strong>Personal Assistants:</strong> An agent that looks at your calendar, reads your emails, and automatically books flights and hotels for an upcoming trip.</li>
          </ul>
          
          <h2>Limitations</h2>
          <p>Agents are the cutting edge of AI, but they are still experimental. They can get stuck in infinite loops, fail to recover from errors, or execute tools incorrectly. They require clear guardrails to ensure they don't take destructive actions (like accidentally deleting a database).</p>
        </div>
      );

    default:
      return null;
  }
};

export default async function AIBasicsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = aiBasics.find(t => t.slug === slug);
  
  if (!topic) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        
        {/* Navigation & Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <Link href="/ai-hub/basics" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to AI Basics
          </Link>
          
          <nav className="flex flex-wrap items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-8">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <Link href="/ai-hub/basics" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Basics
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white truncate">{topic.title}</span>
          </nav>

          {/* Article Header */}
          <div className="mb-10 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10">
                AI Basics
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
                <Clock className="w-3 h-3" /> {topic.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              {topic.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {topic.description}
            </p>
          </div>

          {/* Article Content */}
          <article className="pb-16">
            <TopicContent slug={topic.slug} />
          </article>
        </div>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-y border-zinc-200/50 dark:border-white/5">
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
