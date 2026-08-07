"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, UploadCloud, Copy, Check, ImageIcon } from "lucide-react";
import { FaPinterest, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function GeneratorPage() {
  const [description, setDescription] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<{
    title: string;
    description: string;
    caption: string;
    hashtags: string;
  } | null>(null);

  const platforms = [
    { id: "Pinterest", icon: FaPinterest, color: "text-[#E60023]" },
    { id: "Instagram", icon: FaInstagram, color: "text-[#E1306C]" },
    { id: "LinkedIn", icon: FaLinkedin, color: "text-[#0A66C2]" },
    { id: "Twitter/X", icon: FaTwitter, color: "text-zinc-900 dark:text-white" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setError("Please upload a valid image file (JPG, PNG, or WEBP).");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB.");
        return;
      }

      setError(null);
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleGenerate = async () => {
    if (!description.trim() && !imagePreview) return;
    
    setIsGenerating(true);
    setError(null);
    setHasGenerated(false);
    
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: description,
          platform: selectedPlatform
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate content");
      }

      let hashtagsDisplay = "";
      if (Array.isArray(data.hashtags)) {
        hashtagsDisplay = data.hashtags.join(" ");
      } else if (typeof data.hashtags === "string") {
        hashtagsDisplay = data.hashtags;
      }

      setGeneratedContent({
        title: data.title || "",
        description: data.description || "",
        caption: data.caption || "",
        hashtags: hashtagsDisplay,
      });
      
      setHasGenerated(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <main className="flex-1 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4" />
              AI Content Studio
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Turn Your Ideas Into Social Media Content
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Upload an image or describe your idea and generate platform-ready content.
            </p>
          </div>

          {/* Main Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT CARD: Create Content */}
            <div className="flex flex-col gap-8 p-6 sm:p-8 bg-white dark:bg-zinc-900/40 rounded-[2rem] shadow-sm dark:shadow-none border border-zinc-200/60 dark:border-white/10">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/5 pb-4">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Create Content</h2>
              </div>

              {/* 1. Image Upload Area */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  1. Image (Optional)
                </label>
                <div className="relative group">
                  <label htmlFor="image-upload" className={`flex flex-col items-center justify-center w-full h-48 sm:h-56 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 ${imagePreview ? 'border-indigo-300 dark:border-indigo-500/50 bg-indigo-50/50 dark:bg-indigo-500/5' : 'border-zinc-300 dark:border-white/20 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:border-indigo-400 dark:hover:border-indigo-500/50'}`}>
                    {imagePreview ? (
                      <div className="relative w-full h-full p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-contain rounded-xl" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex flex-col items-center justify-center gap-3">
                          <p className="text-white font-medium flex items-center gap-2">
                            <UploadCloud className="w-5 h-5" /> Change Image
                          </p>
                          <button
                            onClick={handleRemoveImage}
                            className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
                          >
                            Remove Image
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-zinc-500 dark:text-zinc-400">
                        <div className="w-12 h-12 mb-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
                        </div>
                        <p className="mb-1 text-sm font-semibold">Upload your image</p>
                        <p className="text-xs">PNG, JPG or WEBP (MAX. 5MB)</p>
                      </div>
                    )}
                    <input id="image-upload" type="file" className="hidden" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" onChange={handleImageUpload} />
                  </label>
                </div>
              </div>

              {/* 2. Description Input */}
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

              {/* 3. Platform Selector */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  3. Select Platform
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {platforms.map((platform) => {
                    const Icon = platform.icon;
                    const isSelected = selectedPlatform === platform.id;
                    return (
                      <button
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-500 shadow-sm shadow-indigo-500/20"
                            : "bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isSelected ? platform.color : "text-zinc-400 dark:text-zinc-500"}`} />
                        <span className={`text-xs font-semibold ${isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                          {platform.id}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Generate Button */}
              <div className="pt-2">
                <button
                  onClick={handleGenerate}
                  disabled={!description.trim() && !imagePreview}
                  className={`w-full py-4 rounded-2xl font-bold text-lg text-white shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 ${
                    (!description.trim() && !imagePreview) || isGenerating
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
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
                  {error}
                </div>
              )}

            </div>

            {/* RIGHT CARD: Generated Content */}
            <div className="flex flex-col p-6 sm:p-8 bg-zinc-50/80 dark:bg-zinc-900/20 rounded-[2rem] border border-zinc-200/60 dark:border-white/5 h-full min-h-[500px]">
              <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-white/5 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Generated Content</h2>
                {hasGenerated && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold rounded-full flex items-center gap-1 border border-green-200 dark:border-green-500/20">
                    <Check className="w-3 h-3" /> Ready
                  </span>
                )}
              </div>

              {!hasGenerated ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-white/5 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-zinc-300 dark:text-zinc-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Nothing generated yet</h3>
                  <p className="text-zinc-500 dark:text-zinc-500 max-w-sm">
                    Your AI generated content will appear here after you submit your idea.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {/* Title Section */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title</h3>
                      <button onClick={() => handleCopy(generatedContent?.title || "", 'title')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'title' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
                        {copiedSection === 'title' ? 'Copied ✓' : 'Copy'}
                      </button>
                    </div>
                    <div className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white font-medium shadow-sm dark:shadow-none">
                      {generatedContent?.title}
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Description</h3>
                      <button onClick={() => handleCopy(generatedContent?.description || "", 'description')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'description' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
                        {copiedSection === 'description' ? 'Copied ✓' : 'Copy'}
                      </button>
                    </div>
                    <div className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 rounded-xl text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm dark:shadow-none">
                      {generatedContent?.description}
                    </div>
                  </div>

                  {/* Caption Section */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Caption</h3>
                      <button onClick={() => handleCopy(generatedContent?.caption || "", 'caption')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'caption' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
                        {copiedSection === 'caption' ? 'Copied ✓' : 'Copy'}
                      </button>
                    </div>
                    <div className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 rounded-xl text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap shadow-sm dark:shadow-none">
                      {generatedContent?.caption}
                    </div>
                  </div>

                  {/* Hashtags Section */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Hashtags</h3>
                      <button onClick={() => handleCopy(generatedContent?.hashtags || "", 'hashtags')} className={`text-xs font-semibold transition-all duration-300 w-20 text-right ${copiedSection === 'hashtags' ? 'text-green-500 dark:text-green-400' : 'text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>
                        {copiedSection === 'hashtags' ? 'Copied ✓' : 'Copy'}
                      </button>
                    </div>
                    <div className="p-4 bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded-xl text-indigo-700 dark:text-indigo-300 font-medium text-sm leading-relaxed">
                      {generatedContent?.hashtags}
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
