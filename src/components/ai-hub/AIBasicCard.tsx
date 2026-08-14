import Link from "next/link";
import { Clock, ArrowRight, BrainCircuit, Wand2, MessageSquareText, PenTool, Eye, Zap, Database, Bot } from "lucide-react";

interface AIBasicCardProps {
  title: string;
  description: string;
  slug: string;
  readTime: string;
  iconName: string;
}

export default function AIBasicCard({ title, description, slug, readTime, iconName }: AIBasicCardProps) {
  
  const getIcon = () => {
    switch (iconName) {
      case "brain": return <BrainCircuit className="w-6 h-6 text-blue-500" />;
      case "wand": return <Wand2 className="w-6 h-6 text-purple-500" />;
      case "message": return <MessageSquareText className="w-6 h-6 text-emerald-500" />;
      case "pen": return <PenTool className="w-6 h-6 text-amber-500" />;
      case "eye": return <Eye className="w-6 h-6 text-cyan-500" />;
      case "zap": return <Zap className="w-6 h-6 text-orange-500" />;
      case "database": return <Database className="w-6 h-6 text-indigo-500" />;
      case "bot": return <Bot className="w-6 h-6 text-rose-500" />;
      default: return <BrainCircuit className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <Link href={`/ai-hub/basics/${slug}`} className="flex flex-col p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] transition-all group h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-100 dark:border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
          {getIcon()}
        </div>
        <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
          <Clock className="w-3 h-3" /> {readTime}
        </span>
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1">{description}</p>
      <div className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all mt-auto w-fit">
        Read Topic <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
