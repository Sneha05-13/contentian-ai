import { ReactNode } from "react";
import { Settings } from "lucide-react";
import { Tone, ContentLength, TargetAudience, Language } from "@/types/generator";

interface GenerationSettingsProps {
  children?: ReactNode;
  tone: Tone;
  setTone: (val: Tone) => void;
  length: ContentLength;
  setLength: (val: ContentLength) => void;
  audience: TargetAudience;
  setAudience: (val: TargetAudience) => void;
  language: Language;
  setLanguage: (val: Language) => void;
  creativity: number;
  setCreativity: (val: number) => void;
}

export default function GenerationSettings({
  children,
  tone,
  setTone,
  length,
  setLength,
  audience,
  setAudience,
  language,
  setLanguage,
  creativity,
  setCreativity,
}: GenerationSettingsProps) {
  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 bg-white dark:bg-zinc-900/40 rounded-[2rem] shadow-sm dark:shadow-none border border-zinc-200/60 dark:border-white/10">
      <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-white/5 pb-4">
        <Settings className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Generation Settings</h2>
      </div>

      {children}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Tone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-zinc-900 dark:text-white"
          >
            {["Professional", "Casual", "Friendly", "Persuasive", "Funny"].map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Content Length */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Content Length</label>
          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-zinc-900 dark:text-white"
          >
            {["Short", "Medium", "Long"].map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        {/* Target Audience */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Target Audience</label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-zinc-900 dark:text-white"
          >
            {["General", "Students", "Professionals", "Business Owners", "Creators", "Developers"].map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        {/* Language */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-zinc-900 dark:text-white"
          >
            {["English", "Hindi", "Hinglish"].map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      {/* Creativity Slider */}
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Creativity</label>
          <span className="text-xs font-medium px-2 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-md">
            {creativity} / 10
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={creativity}
          onChange={(e) => setCreativity(Number(e.target.value))}
          className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <span>More Accurate</span>
          <span>More Creative</span>
        </div>
      </div>
    </div>
  );
}
