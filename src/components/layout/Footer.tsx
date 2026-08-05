import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#0a0a0a] border-t border-white/5 text-zinc-400 pt-20 pb-10 mt-auto shadow-[0_-20px_40px_rgba(0,0,0,0.1)] dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Left Section - Logo & Description */}
          <div className="lg:col-span-2 flex flex-col gap-6 max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-400"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-100">
                Contentian
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              AI-powered content creation platform that helps creators generate better social media content faster.
            </p>
          </div>

          {/* Middle Section - Product Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg tracking-wide">Product</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/#features" className="hover:text-indigo-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-indigo-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-indigo-400 transition-colors">
                  Generator
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 cursor-not-allowed opacity-60">
                  Pricing <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">Coming Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section - Connect */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg tracking-wide">Connect</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-indigo-400 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-indigo-500/30">
                    <FaLinkedin className="w-4 h-4" />
                  </div>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-indigo-400 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-indigo-500/30">
                    <FaTwitter className="w-4 h-4" />
                  </div>
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-indigo-400 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-indigo-500/30">
                    <FaGithub className="w-4 h-4" />
                  </div>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 Contentian. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
