interface PromptInputProps {
  description: string;
  setDescription: (value: string) => void;
}

export default function PromptInput({ description, setDescription }: PromptInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="description" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        2. Idea Description
      </label>
      <textarea
        id="description"
        rows={4}
        className="w-full p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500"
        placeholder="Describe your content idea..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}
