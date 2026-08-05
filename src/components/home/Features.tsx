import { Sparkles, Layers, Hash, Image as ImageIcon } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate titles, captions and descriptions instantly using AI.",
      icon: <Sparkles className="w-6 h-6 text-white" />,
    },
    {
      title: "Multi Platform Support",
      description: "Create content optimized for Pinterest, Instagram, LinkedIn and more.",
      icon: <Layers className="w-6 h-6 text-white" />,
    },
    {
      title: "Smart Hashtag Suggestions",
      description: "Discover relevant hashtags to improve your content reach.",
      icon: <Hash className="w-6 h-6 text-white" />,
    },
    {
      title: "Image To Content",
      description: "Upload an image and transform it into ready-to-post content.",
      icon: <ImageIcon className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="features" className="relative py-24 lg:py-32 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-sm font-semibold">
            Powerful AI Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Everything You Need to Create Better Content
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Generate optimized content for every social platform from a single idea or image.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-8 bg-white dark:bg-zinc-900/40 rounded-3xl shadow-sm hover:shadow-xl dark:shadow-none border border-zinc-200/60 dark:border-white/10 hover:border-purple-200 dark:hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
