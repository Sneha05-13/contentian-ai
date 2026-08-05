import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #4f46e5 0%, transparent 60%)' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Section */}
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              <span>✨</span>
              AI Powered Content Creation
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Create Social Media Content in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Seconds with AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Turn your images and ideas into engaging titles, captions, descriptions and hashtags for Pinterest, Instagram, LinkedIn and more.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/create" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95">
                Start Creating
              </Link>
              <Link href="/#features" className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white dark:bg-white/5 hover:bg-zinc-50 dark:hover:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 font-medium shadow-sm transition-all hover:scale-105 active:scale-95">
                Explore Features
              </Link>
            </div>
          </div>

          {/* Right Section - Dashboard Preview */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none perspective-1000">
            {/* Glowing background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-3xl rounded-full" />
            
            <div className="relative flex flex-col gap-5 p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-2xl">
              
              {/* Card 1: Pinterest */}
              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/70 dark:bg-zinc-800/60 border border-white/80 dark:border-white/5 shadow-sm transform transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E60023]/10 flex items-center justify-center text-[#E60023] font-bold text-sm">
                    P
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Pinterest</span>
                </div>
                <div className="text-lg font-medium text-zinc-900 dark:text-white">
                  Minimal Workspace Ideas
                </div>
              </div>

              {/* Card 2: Instagram */}
              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/70 dark:bg-zinc-800/60 border border-white/80 dark:border-white/5 shadow-sm transform transition-all duration-500 hover:-translate-y-1 translate-x-4 lg:translate-x-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fd5949] to-[#d6249f] flex items-center justify-center text-white font-bold text-sm">
                    ig
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Instagram</span>
                </div>
                <div className="text-zinc-700 dark:text-zinc-300 italic">
                  &quot;Create. Share. Inspire.&quot;
                </div>
              </div>

              {/* Card 3: Hashtags */}
              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/70 dark:bg-zinc-800/60 border border-white/80 dark:border-white/5 shadow-sm transform transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                    #
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Hashtags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-100 dark:border-indigo-500/20">
                    #ContentCreation
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium border border-purple-100 dark:border-purple-500/20">
                    #AITools
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20">
                    #SocialMedia
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
