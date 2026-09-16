"use client";

import { Newspaper, TrendingUp, Globe2, Calendar } from "lucide-react";

// Icon mapping for different categories
const iconMap = {
  "GOLD": TrendingUp,
  "EURUSD": Globe2,
  "ECONOMIC EVENTS": Calendar,
};

export default function BlogGrid({ eyebrow, title, posts, bg = "white" }) {
  const defaultPosts = [
    {
      title: "XAUUSD: Reading the Session Volatility",
      category: "GOLD",
      body: "Where gold tends to break, and why the London open matters most.",
    },
    {
      title: "EURUSD Levels Worth Watching",
      category: "EURUSD",
      body: "Key support and resistance zones heading into the next session.",
    },
    {
      title: "This Week's High-Impact Events",
      category: "ECONOMIC EVENTS",
      body: "The releases most likely to move your open positions.",
    },
  ];

  const displayPosts = posts?.length ? posts : defaultPosts;

  // Card styles with #0CBFFF
  const cardStyles = [
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      hover: 'hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/20 to-[#0CBFFF]/5'
    },
    { 
      border: 'border-[#0CBFFF]/50', 
      iconBg: 'bg-[#0CBFFF]/80', 
      hover: 'hover:shadow-[#0CBFFF]/20',
      gradient: 'from-[#0CBFFF]/15 to-[#0CBFFF]/5'
    },
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      hover: 'hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/20 to-[#0CBFFF]/5'
    },
  ];

  return (
    <section className={`py-20 sm:py-28 ${bg === "paper" ? "bg-[#f8f9fa]" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header - Same style as Testimonials */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0CBFFF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0CBFFF] sm:text-[13px]">
              {eyebrow || "WEEKLY MARKET ANALYSIS"}
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#1a1a2e] sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl font-['Inter']">
            {title || "What's Actually Moving the Market This Week."}
          </h2>

          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-5 sm:text-base md:text-lg">
            Stay ahead with our weekly market insights and analysis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post, index) => {
            const IconComponent = iconMap[post.category] || Newspaper;
            const style = cardStyles[index % cardStyles.length];
            
            return (
              <article
                key={post.title}
                className={`group overflow-hidden rounded-2xl border-2 ${style.border} bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.hover}`}
              >
                {/* Header with gradient */}
                <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${style.gradient}`}>
                  {/* Category Badge - Top Left */}
                  <span className="absolute left-4 top-4 rounded-full bg-[#0CBFFF]/20 px-3 py-1 text-[11px] font-semibold text-[#0CBFFF]">
                    {post.category}
                  </span>
                  
                  {/* Weekly Badge - Top Right */}
                  <span className="absolute right-4 top-4 rounded-full bg-[#0CBFFF]/10 px-3 py-1 text-[10px] font-semibold text-[#0CBFFF]">
                    Weekly
                  </span>
                  
                  {/* Icon */}
                  <span className={`flex h-16 w-16 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]`}>
                    <IconComponent className="h-7 w-7" />
                  </span>
                </div>
                
                <div className="p-6">
                  {/* Category Label */}
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-[#0CBFFF]">
                    {post.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="mt-2 text-base font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-[#4a4a6a]">
                    {post.body}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`mt-4 h-1 w-12 rounded-full ${style.iconBg} opacity-30 group-hover:w-20 transition-all duration-500`} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}