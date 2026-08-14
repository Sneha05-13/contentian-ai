export interface AITool {
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  website: string;
  featured?: boolean;
  whyUseful: string;
  bestFor: string;
  gettingStarted: string;
}

export const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "The most popular AI chatbot by OpenAI. Excellent for writing, coding, and brainstorming.",
    category: "Writing",
    pricing: "Freemium",
    website: "https://chat.openai.com",
    featured: true,
    whyUseful: "It provides instant answers, helps brainstorm ideas, and can draft long-form content in seconds.",
    bestFor: "General purpose writing, learning new concepts, and coding assistance.",
    gettingStarted: "Create a free account on OpenAI's website and start by typing a simple question or instruction."
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI assistant, known for highly nuanced writing and large context windows.",
    category: "Writing",
    pricing: "Freemium",
    website: "https://claude.ai",
    featured: true,
    whyUseful: "Claude sounds less robotic than other models and can analyze massive documents (like entire books or codebases) in one go.",
    bestFor: "Creative writing, analyzing long documents, and maintaining a natural conversational tone.",
    gettingStarted: "Sign up at claude.ai and try pasting in a long PDF document to ask questions about it."
  },
  {
    name: "Gemini",
    slug: "gemini",
    description: "Google's multimodal AI model that understands text, images, and audio seamlessly.",
    category: "Productivity",
    pricing: "Freemium",
    website: "https://gemini.google.com",
    featured: true,
    whyUseful: "It integrates tightly with Google Workspace (Docs, Gmail) and can natively analyze images and YouTube videos.",
    bestFor: "Google Workspace users, analyzing images, and real-time web research.",
    gettingStarted: "Go to gemini.google.com, sign in with your Google account, and ask it to summarize a YouTube link."
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    description: "An AI-powered search engine that provides cited answers instead of just a list of links.",
    category: "Productivity",
    pricing: "Freemium",
    website: "https://www.perplexity.ai",
    featured: true,
    whyUseful: "It eliminates the need to scroll through SEO-spam websites by instantly reading multiple sources and citing its claims.",
    bestFor: "Academic research, fact-checking, and keeping up with the news.",
    gettingStarted: "No account needed to start. Just go to the site and search for a complex question like 'What caused the 2008 financial crisis?'"
  },
  {
    name: "Canva",
    slug: "canva",
    description: "Popular design tool that integrates AI for image generation, magic erasing, and layout creation.",
    category: "Design",
    pricing: "Freemium",
    website: "https://www.canva.com",
    featured: true,
    whyUseful: "It brings complex design and AI image generation into a drag-and-drop interface that anyone can use without a learning curve.",
    bestFor: "Social media graphics, presentation decks, and non-designers.",
    gettingStarted: "Create an account, open a new presentation, and use the 'Magic Media' tool to generate an image from text."
  },
  {
    name: "Cursor",
    slug: "cursor",
    description: "An AI-first code editor built on VS Code. Suggests entire functions and understands your whole codebase.",
    category: "Coding",
    pricing: "Freemium",
    website: "https://cursor.sh",
    featured: true,
    whyUseful: "It dramatically speeds up software development by predicting your next edits and finding bugs across multiple files.",
    bestFor: "Software developers, engineers, and coding students.",
    gettingStarted: "Download the editor, import your VS Code extensions, and press Cmd+K (or Ctrl+K) to generate your first piece of code."
  },
  {
    name: "Gamma",
    slug: "gamma",
    description: "Create beautiful presentations, documents, and websites in seconds using AI.",
    category: "Design",
    pricing: "Freemium",
    website: "https://gamma.app",
    featured: false,
    whyUseful: "It completely eliminates the time spent tweaking slides and formatting. You provide the text, and Gamma handles the entire visual layout.",
    bestFor: "Pitch decks, sales presentations, and quick one-page websites.",
    gettingStarted: "Sign up and click 'Generate'. Provide a one-sentence prompt for a presentation topic and watch it build the slides."
  },
  {
    name: "Leonardo AI",
    slug: "leonardo-ai",
    description: "High-quality AI image generation platform tailored for game assets, concept art, and design.",
    category: "Image",
    pricing: "Freemium",
    website: "https://leonardo.ai",
    featured: false,
    whyUseful: "It offers granular control over image generation styles, allowing for incredibly consistent art direction compared to basic generators.",
    bestFor: "Game developers, concept artists, and marketing teams needing specific visual styles.",
    gettingStarted: "Create an account, choose a specific fine-tuned model (like PhotoReal or 3D Animation), and enter a detailed prompt."
  }
];
