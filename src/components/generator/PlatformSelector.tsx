import { FaPinterest, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaCommentDots } from "react-icons/fa";
import { Platform } from "@/types/generator";

interface PlatformSelectorProps {
  selectedPlatform: Platform;
  setSelectedPlatform: (value: Platform) => void;
}

export default function PlatformSelector({ selectedPlatform, setSelectedPlatform }: PlatformSelectorProps) {
  const platforms = [
    { id: "Pinterest", icon: FaPinterest, color: "text-[#E60023]" },
    { id: "Instagram", icon: FaInstagram, color: "text-[#E1306C]" },
    { id: "LinkedIn", icon: FaLinkedin, color: "text-[#0A66C2]" },
    { id: "Twitter/X", icon: FaTwitter, color: "text-zinc-900 dark:text-white" },
    { id: "Threads", icon: FaCommentDots, color: "text-zinc-900 dark:text-white" },
    { id: "Facebook", icon: FaFacebook, color: "text-[#1877F2]" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        Platform
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = selectedPlatform === platform.id;
          return (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-500 shadow-sm shadow-indigo-500/20"
                  : "bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
              }`}
            >
              <Icon className={`w-5 h-5 ${isSelected ? platform.color : "text-zinc-400 dark:text-zinc-500"}`} />
              <span className={`text-xs font-semibold ${isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                {platform.id}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
