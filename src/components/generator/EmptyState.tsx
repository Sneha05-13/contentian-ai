import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
      <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-white/5 flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-zinc-300 dark:text-zinc-600" />
      </div>
      <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Nothing generated yet</h3>
      <p className="text-zinc-500 dark:text-zinc-500 max-w-sm">
        Your AI generated content will appear here after you submit your idea.
      </p>
    </div>
  );
}
