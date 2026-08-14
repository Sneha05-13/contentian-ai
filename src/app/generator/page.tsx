"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, Check } from "lucide-react";

import ImageUploader from "@/components/generator/ImageUploader";
import PromptInput from "@/components/generator/PromptInput";
import PlatformSelector from "@/components/generator/PlatformSelector";
import GenerationSettings from "@/components/generator/GenerationSettings";
import GenerateButton from "@/components/generator/GenerateButton";
import GeneratedContent from "@/components/generator/GeneratedContent";
import EmptyState from "@/components/generator/EmptyState";
import { Platform, Tone, ContentLength, TargetAudience, Language, GeneratedContent as IGeneratedContent } from "@/types/generator";

export default function GeneratorPage() {
  const [description, setDescription] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("Instagram");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Generation Settings State
  const [tone, setTone] = useState<Tone>("Professional");
  const [length, setLength] = useState<ContentLength>("Medium");
  const [audience, setAudience] = useState<TargetAudience>("General");
  const [language, setLanguage] = useState<Language>("English");
  const [creativity, setCreativity] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<IGeneratedContent | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/xxpng', 'image/webp'];
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
          platform: selectedPlatform,
          tone,
          length,
          audience,
          language,
          creativity,
          ...(imagePreview && selectedImage ? {
            image: {
              data: imagePreview.split(',')[1],
              mimeType: selectedImage.type
            }
          } : {})
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate content");
      }

      setGeneratedContent(data);
      
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
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              
              {/* CARD 1: Create Content */}
              <div className="flex flex-col gap-8 p-6 sm:p-8 bg-white dark:bg-zinc-900/40 rounded-[2rem] shadow-sm dark:shadow-none border border-zinc-200/60 dark:border-white/10">
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/5 pb-4">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Create Content</h2>
                </div>

                <ImageUploader 
                  imagePreview={imagePreview}
                  handleImageUpload={handleImageUpload}
                  handleRemoveImage={handleRemoveImage}
                />

                <PromptInput 
                  description={description}
                  setDescription={setDescription}
                />
              </div>

              {/* CARD 2: Generation Settings */}
              <GenerationSettings
                tone={tone}
                setTone={setTone}
                length={length}
                setLength={setLength}
                audience={audience}
                setAudience={setAudience}
                language={language}
                setLanguage={setLanguage}
                creativity={creativity}
                setCreativity={setCreativity}
              >
                <PlatformSelector 
                  selectedPlatform={selectedPlatform}
                  setSelectedPlatform={setSelectedPlatform}
                />
              </GenerationSettings>

              {/* Generate Action Area */}
              <div className="flex flex-col gap-4">
                <GenerateButton 
                  handleGenerate={handleGenerate}
                  disabled={!description.trim() && !imagePreview}
                  isGenerating={isGenerating}
                />

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
                    {error}
                  </div>
                )}
              </div>
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

              {!hasGenerated || !generatedContent ? (
                <EmptyState />
              ) : (
                <GeneratedContent 
                  content={generatedContent}
                  handleCopy={handleCopy}
                  copiedSection={copiedSection}
                />
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
