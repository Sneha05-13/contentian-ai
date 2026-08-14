export interface AIBasicTopic {
  title: string;
  description: string;
  slug: string;
  readTime: string;
  iconName: string;
}

export const aiBasics: AIBasicTopic[] = [
  {
    title: "What Is Artificial Intelligence?",
    description: "The fundamental concept of machines mimicking human intelligence.",
    slug: "what-is-artificial-intelligence",
    readTime: "4 min read",
    iconName: "brain"
  },
  {
    title: "What Is Generative AI?",
    description: "AI that can create new content like text, images, and music.",
    slug: "what-is-generative-ai",
    readTime: "5 min read",
    iconName: "wand"
  },
  {
    title: "What Are Large Language Models?",
    description: "The technology behind tools like ChatGPT that understand and write text.",
    slug: "what-are-large-language-models",
    readTime: "6 min read",
    iconName: "message"
  },
  {
    title: "What Is Prompt Engineering?",
    description: "The skill of talking to AI effectively to get the best possible results.",
    slug: "what-is-prompt-engineering",
    readTime: "4 min read",
    iconName: "pen"
  },
  {
    title: "What Is AI Vision?",
    description: "How AI systems can 'see', analyze, and understand images and video.",
    slug: "what-is-ai-vision",
    readTime: "5 min read",
    iconName: "eye"
  },
  {
    title: "What Is AI Automation?",
    description: "Using AI to perform repetitive tasks without human intervention.",
    slug: "what-is-ai-automation",
    readTime: "4 min read",
    iconName: "zap"
  },
  {
    title: "What Is RAG?",
    description: "Giving AI access to your specific documents so it doesn't guess or hallucinate.",
    slug: "what-is-rag",
    readTime: "6 min read",
    iconName: "database"
  },
  {
    title: "What Are AI Agents?",
    description: "AI systems that can make plans and use tools to achieve specific goals.",
    slug: "what-are-ai-agents",
    readTime: "5 min read",
    iconName: "bot"
  }
];
