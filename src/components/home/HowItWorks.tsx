import { Upload, Layers, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Idea",
      description: "Upload an image or describe your content idea.",
      icon: <Upload className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      number: "02",
      title: "Choose Your Platform",
      description: "Select where you want to create content — Pinterest, Instagram, LinkedIn and more.",
      icon: <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      number: "03",
      title: "Generate & Share",
      description: "Get AI-powered captions, titles and hashtags ready to publish.",
      icon: <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-zinc-50 dark:bg-[#0f0f11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-semibold">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Create Content in Three Simple Steps
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            From idea to ready-to-post content in just a few clicks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Dashed Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] border-t-2 border-dashed border-indigo-200 dark:border-indigo-500/20 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center gap-6 group"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xl font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300 z-10">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className="w-full flex flex-col items-center gap-5 p-8 rounded-3xl bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-900/80 dark:to-zinc-900/40 shadow-lg shadow-zinc-200/40 dark:shadow-none border border-zinc-200/60 dark:border-white/5 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
