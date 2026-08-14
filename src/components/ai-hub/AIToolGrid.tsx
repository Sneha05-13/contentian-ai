"use client";

import { useState } from "react";
import { aiTools } from "@/data/aiTools";
import AIToolCard from "@/components/ai-hub/AIToolCard";
import { Search } from "lucide-react";

const CATEGORIES = ["All", "Writing", "Design", "Image", "Video", "Coding", "Productivity", "Marketing", "Education"];

export default function AIToolGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = aiTools.filter((tool) => {
    const matchesSearch = 
      tool.name.toLowerCase().includes(search.toLowerCase()) || 
      tool.description.toLowerCase().includes(search.toLowerCase()) || 
      tool.category.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <input
            type="text"
            placeholder="Search AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-11 pr-4 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm text-lg"
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <AIToolCard key={tool.slug} {...tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-zinc-900/30 rounded-3xl border border-zinc-200 dark:border-zinc-800/50">
          <p className="text-xl text-zinc-600 dark:text-zinc-400">No tools found matching your search.</p>
          <button 
            onClick={() => { setSearch(""); setActiveCategory("All"); }}
            className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
