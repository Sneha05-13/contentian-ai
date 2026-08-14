import { useState } from "react";
import { GeneratedContent as IGeneratedContent } from "@/types/generator";

interface GeneratedContentProps {
  content: IGeneratedContent;
  handleCopy: (text: string, section: string) => void;
  copiedSection: string | null;
}

const formatKey = (key: string) => {
  if (key === "seoTitle") return "SEO Title";
  if (key === "cta") return "CTA";
  if (key === "pinTips") return "Pin Tips";
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export default function GeneratedContent({ content, handleCopy, copiedSection }: GeneratedContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Fallback for older responses just in case, otherwise use the versions array
  const versions = content.versions || [content];
  const currentVersion = Array.isArray(content.versions) ? content.versions[activeTab] : content;

  const generateFormattedText = (asMarkdown: boolean) => {
    let text = "";
    Object.entries(currentVersion).forEach(([key, value]) => {
      if (!value || typeof value !== "string") return;
      if (asMarkdown) {
        text += `### ${formatKey(key)}\n\n${value}\n\n`;
      } else {
        text += `${formatKey(key).toUpperCase()}\n${value}\n\n`;
      }
    });
    return text.trim();
  };

  const handleDownloadFile = (type: 'txt' | 'md') => {
    const text = generateFormattedText(type === 'md');
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `contentian-version-${activeTab + 1}.${type}`;
    document.body.appendChild(element); // Required for FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {Array.isArray(content.versions) && content.versions.length > 1 && (
        <div className="flex bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-xl">
          {content.versions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === idx
                  ? "bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              Version {idx + 1}
            </button>
          ))}
        </div>
      )}

      {Object.entries(currentVersion).map(([key, value]) => {
        // Skip empty values or internal arrays
        if (!value || typeof value !== "string") return null;
        
        const isHashtags = key === 'hashtags';
        
        return (
          <div key={key} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {formatKey(key)}
              </h3>
              <button 
                onClick={() => handleCopy(value as string, key)} 
                className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === key ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
              >
                {copiedSection === key ? 'Copied ✓' : 'Copy'}
              </button>
            </div>
            <div className={`p-4 border rounded-xl text-sm leading-relaxed shadow-sm dark:shadow-none whitespace-pre-wrap ${
              isHashtags 
                ? 'bg-indigo-50/50 dark:bg-indigo-500/5 border-indigo-100 dark:border-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium'
                : 'bg-white dark:bg-zinc-900/60 border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300'
            }`}>
              {value}
            </div>
          </div>
        );
      })}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-100 dark:border-white/10">
        <button
          onClick={() => handleCopy(generateFormattedText(false), 'all')}
          className="flex-1 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          {copiedSection === 'all' ? 'Copied ✓' : 'Copy All'}
        </button>
        <button
          onClick={() => handleDownloadFile('txt')}
          className="flex-1 py-2.5 px-4 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          Download TXT
        </button>
        <button
          onClick={() => handleDownloadFile('md')}
          className="flex-1 py-2.5 px-4 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          Download Markdown
        </button>
      </div>
    </div>
  );
}
