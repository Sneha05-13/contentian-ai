import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 dark:bg-[#0f0f11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-8 sm:p-16 lg:p-20 text-center shadow-2xl shadow-indigo-500/20 border border-white/10">
          
          {/* Decorative Elements */}
          {/* Top Left Blob */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 lg:w-96 h-64 lg:h-96 bg-indigo-400/30 blur-3xl rounded-full pointer-events-none" />
          
          {/* Bottom Right Blob */}
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-80 lg:w-[32rem] h-80 lg:h-[32rem] bg-purple-400/30 blur-3xl rounded-full pointer-events-none" />
          
          {/* Background Grid Pattern for AI look */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-200" />
              Start Creating Today
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Transform Your Content Creation?
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-indigo-100/90 max-w-2xl font-medium">
              Create engaging social media content faster with AI-powered titles, captions and hashtags.
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link 
                href="/create" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-indigo-950 font-bold text-lg hover:bg-zinc-50 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
              >
                Start Creating
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
