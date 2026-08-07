import { Sparkles } from "lucide-react";

interface GenerateButtonProps {
  handleGenerate: () => void;
  disabled: boolean;
  isGenerating: boolean;
}

export default function GenerateButton({ handleGenerate, disabled, isGenerating }: GenerateButtonProps) {
  return (
    <button
      onClick={handleGenerate}
      disabled={disabled || isGenerating}
      className={`w-full py-4 rounded-2xl font-bold text-lg text-white shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 ${
        disabled || isGenerating
          ? "bg-zinc-300 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 cursor-not-allowed shadow-none"
          : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:scale-[1.02] active:scale-95"
      }`}
    >
      {isGenerating ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating...
        </span>
      ) : (
        <>
          <Sparkles className="w-5 h-5" />
          Generate Content
        </>
      )}
    </button>
  );
}
