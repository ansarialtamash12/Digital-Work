"use client";

import { BookOpen, FileText, PenTool, ChevronRight } from "lucide-react";

const BLOG_POSTS = [
  {
    category: "Guide",
    title: "Forex Glossary: 40 Terms Explained Simply",
    desc: "Every term from Section 1 onward, defined in plain language.",
    icon: BookOpen,
  },
  {
    category: "Tutorial",
    title: "Setting Up Your First Demo Account",
    desc: "A five-minute walkthrough before you touch a live chart.",
    icon: FileText,
  },
  {
    category: "Blog",
    title: "What Separates Students Who Stick With It",
    desc: "A look at the habits shared by our most consistent traders.",
    icon: PenTool,
  },
];

export default function Breakdown() {
  // Card styles with #0CBFFF
  const cardStyles = [
    {
      border: 'border-[#0CBFFF]',
      iconBg: 'bg-[#0CBFFF]',
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/10 to-[#0CBFFF]/5',
      tagBg: 'bg-[#0CBFFF]/10',
      tagText: 'text-[#0CBFFF]',
    },
    {
      border: 'border-[#0CBFFF]/50',
      iconBg: 'bg-[#0CBFFF]/80',
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20',
      gradient: 'from-[#0CBFFF]/8 to-[#0CBFFF]/3',
      tagBg: 'bg-[#0CBFFF]/10',
      tagText: 'text-[#0CBFFF]',
    },
    {
      border: 'border-[#0CBFFF]',
      iconBg: 'bg-[#0CBFFF]',
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/10 to-[#0CBFFF]/5',
      tagBg: 'bg-[#0CBFFF]/10',
      tagText: 'text-[#0CBFFF]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0CBFFF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0CBFFF] sm:text-[13px]">
              Latest From The Academy
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#1a1a2e] sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl font-['Inter']">
            Guides, Tutorials, And <span className="text-[#0CBFFF]">Breakdowns.</span>
          </h2>

          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-5 sm:text-base md:text-lg">
            Learn from our latest resources and stay ahead in your trading journey.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => {
            const Icon = post.icon;
            const style = cardStyles[index % cardStyles.length];

            return (
              <div
                key={post.title}
                className={`group rounded-2xl border-2 ${style.border} bg-gradient-to-br ${style.gradient} bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${style.hover}`}
              >
                {/* Header with Icon */}
                <div className="flex items-start justify-between">
                  <span className={`inline-block rounded-full ${style.tagBg} ${style.tagText} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider`}>
                    {post.category}
                  </span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-[#1a1a2e] leading-tight transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-[#4a4a6a]">
                  {post.desc}
                </p>




              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}