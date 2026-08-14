import { Sparkles, Wand2, Image as ImageIcon } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-12 h-full min-h-[400px]">
      
      {/* Animated Premium Illustration */}
      <div className="relative flex items-center justify-center mb-10 w-40 h-40">
        {/* Outer glowing blur */}
        <div className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl rounded-full" />
        
        {/* Decorative Rings */}
        <div className="absolute inset-2 border border-zinc-200 dark:border-zinc-800 rounded-full" />
        <div className="absolute inset-6 border border-dashed border-indigo-200 dark:border-indigo-500/30 rounded-full animate-[spin_30s_linear_infinite]" />
        
        {/* Center Main Icon */}
        <div className="relative z-10 w-16 h-16 bg-white dark:bg-zinc-900 shadow-xl dark:shadow-2xl border border-zinc-100 dark:border-white/10 rounded-2xl flex items-center justify-center">
          <Wand2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        
        {/* Floating Accents */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 rounded-xl flex items-center justify-center shadow-sm animate-[bounce_4s_infinite]">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="absolute bottom-6 left-2 w-12 h-12 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl flex items-center justify-center shadow-sm animate-[bounce_5s_infinite_100ms]">
          <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white mb-3 tracking-tight">
        Your AI-generated content will appear here
      </h3>
      <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
        Upload an image or describe your idea to generate platform-ready content.
      </p>
    </div>
  );
}
