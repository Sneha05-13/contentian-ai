import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface GuideCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  readTime: string;
}

export default function GuideCard({ title, description, category, slug, readTime }: GuideCardProps) {
  return (
    <Link href={`/ai-hub/guides/${slug}`} className="flex flex-col p-6 rounded-2xl bg-white dark:bg-zinc-900/40 shadow-sm border border-zinc-200/60 dark:border-white/10 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all group h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10">
          {category}
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
          <Clock className="w-3 h-3" /> {readTime}
        </span>
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1">
        {description}
      </p>
      <div className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all mt-auto w-fit">
        Read Guide <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
