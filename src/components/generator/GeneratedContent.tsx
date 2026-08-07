import { GeneratedContent as IGeneratedContent } from "@/types/generator";

interface GeneratedContentProps {
  content: IGeneratedContent;
  handleCopy: (text: string, section: string) => void;
  copiedSection: string | null;
}

export default function GeneratedContent({ content, handleCopy, copiedSection }: GeneratedContentProps) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Title Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title</h3>
          <button onClick={() => handleCopy(content.title, 'title')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'title' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
            {copiedSection === 'title' ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white font-medium shadow-sm dark:shadow-none">
          {content.title}
        </div>
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Description</h3>
          <button onClick={() => handleCopy(content.description, 'description')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'description' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
            {copiedSection === 'description' ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 rounded-xl text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm dark:shadow-none">
          {content.description}
        </div>
      </div>

      {/* Caption Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Caption</h3>
          <button onClick={() => handleCopy(content.caption, 'caption')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'caption' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
            {copiedSection === 'caption' ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 rounded-xl text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap shadow-sm dark:shadow-none">
          {content.caption}
        </div>
      </div>

      {/* Hashtags Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Hashtags</h3>
          <button onClick={() => handleCopy(content.hashtags, 'hashtags')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'hashtags' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
            {copiedSection === 'hashtags' ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <div className="p-4 bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded-xl text-indigo-700 dark:text-indigo-300 font-medium text-sm leading-relaxed">
          {content.hashtags}
        </div>
      </div>

    </div>
  );
}
