"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Contentian?",
      answer: "Contentian is an AI-powered content creation platform that helps you generate social media titles, captions, descriptions and hashtags from your ideas or images.",
    },
    {
      question: "Which platforms does Contentian support?",
      answer: "Contentian is designed for platforms like Pinterest, Instagram, LinkedIn and more.",
    },
    {
      question: "Do I need design or writing skills?",
      answer: "No. Contentian helps anyone create professional content quickly using AI.",
    },
    {
      question: "Can I use my own images?",
      answer: "Yes. You can upload your images and generate customized content based on them.",
    },
    {
      question: "Is Contentian free?",
      answer: "Contentian will offer a free version with premium features available in the future.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-sm font-semibold">
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to know about Contentian.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white dark:bg-zinc-900/50 border-purple-200 dark:border-purple-500/30 shadow-xl shadow-purple-500/5"
                    : "bg-zinc-50 dark:bg-zinc-900/20 border-zinc-200/60 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${
                    isOpen ? "text-purple-700 dark:text-purple-400" : "text-zinc-900 dark:text-zinc-100"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    isOpen ? "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rotate-180" : "bg-zinc-200/50 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 rotate-0"
                  }`}>
                    <ChevronDown className="w-5 h-5 transition-transform" />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 lg:pb-8 px-6 lg:px-8" : "grid-rows-[0fr] opacity-0 px-6 lg:px-8 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
