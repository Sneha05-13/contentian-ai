export interface AIExperience {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  content: {
    introduction: string;
    whyITriedIt: string;
    whatIBuiltTested: string;
    toolsUsed: string[];
    whatHappened: string;
    whatWorked: string;
    whatDidnt: string;
    lessonsLearned: string;
    whatsNext: string;
  };
}

export const aiExperiences: AIExperience[] = [
  {
    title: "Building Contentian With AI",
    slug: "building-contentian",
    description: "A behind-the-scenes look at building an AI-powered content generation platform.",
    category: "Build in Public",
    readTime: "8 min read",
    date: "Aug 14, 2026",
    featured: true,
    content: {
      introduction: "Contentian started as a simple idea: what if you could upload a single image or text prompt and instantly generate platform-specific content tailored for different audiences? This is the story of how that idea became a functional web application.",
      whyITriedIt: "As someone who frequently experiments with AI, I noticed a gap between raw AI outputs (like a raw ChatGPT response) and content that is actually ready to publish. I wanted to build a tool that bridges that gap by injecting specific tones, lengths, and platform constraints directly into the prompt.",
      whatIBuiltTested: "I built the Contentian application using Next.js 15, React, Tailwind CSS, and the new App Router. It features an image upload system, specific generation settings (platform, tone, length), and integrates with AI models to perform the heavy lifting.",
      toolsUsed: ["Next.js 15", "Tailwind CSS", "TypeScript", "AI Language Models", "AI Vision Models"],
      whatHappened: "Building the core UI was relatively fast thanks to modern React frameworks. The true challenge lay in creating a resilient prompt architecture that could take an uploaded image, analyze it, and weave those insights into a cohesive social media post or blog outline.",
      whatWorked: "The combination of Next.js API routes and structured prompt engineering worked beautifully. By forcing the AI to return specific formats and tone-matching, the generated content felt much more human and less 'robotic'. The Tailwind-based design system also made the app feel premium instantly.",
      whatDidnt: "Initially, I struggled with handling large image uploads and passing them to the Vision models. Dealing with base64 conversions and API timeouts required implementing stricter error handling and loading states than I initially planned.",
      lessonsLearned: "Building a wrapper around an AI isn't just about API calls; it's about the user experience. You have to handle the latency of AI gracefully, provide clear loading states, and most importantly, engineer prompts that prevent the AI from sounding generic.",
      whatsNext: "The next phase involves adding a history feature to save generated content, supporting more complex multi-step generation workflows, and potentially integrating directly with social media APIs for one-click publishing."
    }
  },
  {
    title: "Can AI Create Useful Social Media Content?",
    slug: "ai-content-experiment",
    description: "An experiment testing how well AI can turn ideas into platform-ready social media content.",
    category: "Experiment",
    readTime: "6 min read",
    date: "Aug 10, 2026",
    featured: false,
    content: {
      introduction: "Everyone says AI can replace social media managers, but I wanted to test this practically. I set out to see if AI could take a single, rough idea and turn it into highly optimized content for Twitter, LinkedIn, and Instagram.",
      whyITriedIt: "Writing tailored content for different platforms is exhausting. What works on Twitter (short, punchy threads) fails on LinkedIn (longer, story-driven posts). I wanted to see if AI understood these nuances.",
      whatIBuiltTested: "I created a baseline prompt about 'The benefits of waking up early'. I then passed this idea through different AI models with explicit instructions to format it for three different social networks, testing various tones (professional, casual, snarky).",
      toolsUsed: ["ChatGPT", "Claude", "Contentian Generator"],
      whatHappened: "The results were mixed but illuminating. When given vague instructions, the AI sounded exactly like a robot. But when constrained with specific character limits, stylistic rules (e.g., 'no hashtags', 'use single sentence paragraphs'), the output was surprisingly good.",
      whatWorked: "The AI excelled at Twitter threads. By asking it to break a concept into a 5-part thread with specific hooks, it delivered highly engaging content. It was also excellent at reformatting a long blog post into a concise LinkedIn update.",
      whatDidnt: "It struggled with Instagram captions, often relying too heavily on cliché emojis and generic 'motivational' speak. It also occasionally hallucinated statistics to make the posts sound more authoritative.",
      lessonsLearned: "AI is a brilliant drafter but a terrible final editor. You cannot copy-paste its output directly. The real power is in using AI to get past the blank page, generate the structure, and then spending 5 minutes injecting your own personality and verifying the claims.",
      whatsNext: "I plan to build more granular prompt templates that enforce specific writing frameworks (like AIDA or PAS) to see if that improves the initial output quality even further."
    }
  },
  {
    title: "My AI-Assisted Development Workflow",
    slug: "my-ai-workflow",
    description: "How AI can support planning, development, debugging and documentation while keeping humans in control.",
    category: "Workflow",
    readTime: "7 min read",
    date: "Aug 05, 2026",
    featured: false,
    content: {
      introduction: "Over the past few months, I've completely overhauled how I write code. This isn't about letting AI write entire applications for me; it's about using AI as an extremely fast junior developer that never sleeps.",
      whyITriedIt: "Development involves a lot of boilerplate, reading through documentation, and getting stuck on obscure error messages. I wanted to see if integrating AI deeply into my workflow could speed up the mundane parts of coding.",
      whatIBuiltTested: "I integrated AI into three phases: Planning (using LLMs to outline architecture), Development (using AI-first editors for autocomplete and scaffolding), and Debugging (pasting stack traces into chat interfaces).",
      toolsUsed: ["Cursor", "GitHub Copilot", "Claude 3.5 Sonnet"],
      whatHappened: "My development speed increased noticeably, particularly for tasks I was already familiar with. Instead of typing out a standard React component, I could just describe it and hit tab. However, for complex architectural decisions, the AI often suggested overly complicated or outdated patterns.",
      whatWorked: "AI is incredible for writing regex, generating TypeScript interfaces from JSON data, and explaining cryptic error messages. Using an editor like Cursor, where the AI can read your entire codebase for context, was a massive step up from copying and pasting into a browser window.",
      whatDidnt: "Relying on AI for major refactors often broke things. The AI sometimes hallucinated API methods for libraries that didn't exist or mixed up different versions of Next.js (App Router vs Pages Router).",
      lessonsLearned: "You must remain the architect. You have to know what you want to build and how it should be structured. Use AI to generate the bricks, but don't let it design the house. Always review the code it generates before committing.",
      whatsNext: "I'm experimenting with using AI to automatically generate unit tests for my components and write comprehensive documentation for my APIs."
    }
  },
  {
    title: "What I Learned Building With AI",
    slug: "lessons-building-with-ai",
    description: "Practical lessons about using AI for real projects, including what worked and what didn't.",
    category: "Lessons",
    readTime: "5 min read",
    date: "Jul 28, 2026",
    featured: true,
    content: {
      introduction: "After spending countless hours building AI-integrated projects and testing different models, I've accumulated a list of hard truths about what it's actually like to build software in the AI era.",
      whyITriedIt: "The hype cycle around AI makes it sound like you can just whisper an idea to a computer and become a millionaire. I wanted to document the reality of the friction, the bugs, and the genuine breakthroughs.",
      whatIBuiltTested: "Various prototypes, small SaaS tools, and content generation scripts integrating OpenAI, Anthropic, and open-source models.",
      toolsUsed: ["Various LLMs", "Vercel", "Next.js"],
      whatHappened: "I discovered that integrating an AI API takes 10 minutes, but making the AI output reliable takes weeks. The underlying models change, prompts degrade, and users will always find ways to break your assumptions.",
      whatWorked: "Structuring outputs using JSON. When I stopped asking the AI for plain text and started forcing it to return strict JSON schemas, my applications became infinitely more stable. I could actually parse the data and build UI around it.",
      whatDidnt: "Assuming the AI would handle edge cases. If a user uploads a completely blank image to a vision model, the model might hallucinate a scene rather than saying 'I see nothing'. You have to code defensive guardrails around the AI.",
      lessonsLearned: "1. Prompt engineering is just software engineering with natural language. 2. Always design for latency; AI is slow, so your UI must manage user expectations. 3. Don't build a thin wrapper around ChatGPT; add your own unique value, workflow, or data on top of it.",
      whatsNext: "Applying these lessons to stabilize my existing projects, focusing heavily on user experience and speed rather than just adding more AI features for the sake of it."
    }
  }
];
