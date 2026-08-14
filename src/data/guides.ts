export interface Guide {
  title: string;
  description: string;
  category: string;
  slug: string;
  readTime: string;
}

export const guides: Guide[] = [
  {
    title: "AI for Beginners: A Simple Starting Guide",
    description: "Understand the fundamentals of AI, generative AI, chatbots, image generation and AI-powered tools.",
    category: "Beginner",
    slug: "ai-for-beginners",
    readTime: "5 min read"
  },
  {
    title: "How to Write Better AI Prompts",
    description: "Learn a simple framework for writing clearer prompts and getting more useful AI responses.",
    category: "Prompting",
    slug: "prompt-engineering",
    readTime: "6 min read"
  },
  {
    title: "How to Use AI for Content Creation",
    description: "Learn how AI can help with ideas, writing, optimization and social media content.",
    category: "Content",
    slug: "ai-content-creation",
    readTime: "7 min read"
  },
  {
    title: "How Freelancers Can Use AI",
    description: "Practical ways freelancers can use AI for research, proposals, content, productivity and workflows.",
    category: "Freelancing",
    slug: "ai-for-freelancers",
    readTime: "6 min read"
  },
  {
    title: "How Students Can Use AI Effectively",
    description: "Discover practical ways to use AI for learning, research, brainstorming and productivity.",
    category: "Education",
    slug: "ai-for-students",
    readTime: "5 min read"
  },
  {
    title: "Build Your First AI Workflow",
    description: "Learn how to combine AI tools into a simple repeatable workflow.",
    category: "Workflow",
    slug: "ai-workflows",
    readTime: "8 min read"
  }
];
