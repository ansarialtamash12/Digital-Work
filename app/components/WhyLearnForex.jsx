"use client";

import { TrendingUp, Globe2, Clock, Laptop, GitBranch, BarChart3 } from "lucide-react";

const ITEMS = [
  {
    icon: TrendingUp,
    title: "Achieve Higher Financial Freedom",
    body: "Enhance a skill that gives you more control over your financial future. Forex trading allows you to explore opportunities apart from traditional employment or a fixed monthly salary.",
  },
  {
    icon: Globe2,
    title: "Access Global Marketplace",
    body: "The forex market connects traders from around the world. With major financial centers operating across different time zones, you gain exposure to international markets and global trends.",
  },
  {
    icon: Clock,
    title: "Trade Whenever You Want",
    body: "The forex market operates nearly 24 hours a day during trading days, giving you the flexibility to trade when it aligns with your routine, full-time or part-time.",
  },
  {
    icon: Laptop,
    title: "Work from Anywhere",
    body: "All you need is a stable internet connection and a trading device to access the markets. Learn, trade, and manage your IB business from virtually anywhere.",
  },
  {
    icon: GitBranch,
    title: "Wide Income Opportunities",
    body: "Beyond trading, expand your earning potential through the Introducing Broker (IB) program. By referring new traders and building a network, you can earn IB commissions.",
  },
  {
    icon: BarChart3,
    title: "Build a Long-Term Career",
    body: "Forex offers more than short-term opportunities. As your expertise grows, explore roles such as market educator, trading mentor, analyst, or Introducing Broker.",
  },
];

export default function WhyLearnForex() {
  // Card styles with #0CBFFF
  const cardStyles = [
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
    },
    { 
      border: 'border-[#0CBFFF]/50', 
      iconBg: 'bg-[#0CBFFF]/80', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20',
      gradient: 'from-[#0CBFFF]/5 to-white',
    },
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
    },
    { 
      border: 'border-[#0CBFFF]/50', 
      iconBg: 'bg-[#0CBFFF]/80', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20',
      gradient: 'from-[#0CBFFF]/5 to-white',
    },
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
    },
    { 
      border: 'border-[#0CBFFF]/50', 
      iconBg: 'bg-[#0CBFFF]/80', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20',
      gradient: 'from-[#0CBFFF]/5 to-white',
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0CBFFF] sm:text-xs">
            Why Learn Forex
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1a1a2e] sm:mt-3 sm:text-3xl lg:text-4xl font-['Inter']">
            One Skill. <span className="text-[#0CBFFF]">Endless Opportunities.</span>
          </h2>
          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-4">
            Discover why forex trading is the skill that opens doors to financial freedom, 
            flexibility, and a global career.
          </p>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="mt-8 sm:mt-10">
          {/* Mobile: Horizontal scroll */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {ITEMS.map((item, index) => {
              const Icon = item.icon;
              const style = cardStyles[index % cardStyles.length];
              
              return (
                <div
                  key={item.title}
                  className={`min-w-[280px] max-w-[280px] snap-start rounded-2xl border-2 ${style.border} bg-gradient-to-br ${style.gradient} p-5 transition hover:shadow-xl hover:-translate-y-1 ${style.hover} flex-shrink-0`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#1a1a2e] leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4a4a6a]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: 3 cards per row */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ITEMS.map((item, index) => {
              const Icon = item.icon;
              const style = cardStyles[index % cardStyles.length];
              
              return (
                <div
                  key={item.title}
                  className={`group rounded-2xl border-2 ${style.border} bg-gradient-to-br ${style.gradient} p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${style.hover} sm:p-6`}
                >
                  <div className="flex flex-col items-start">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-[#1a1a2e] leading-tight transition-colors duration-300 group-hover:text-[#0CBFFF] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#4a4a6a] sm:text-sm">
                      {item.body}
                    </p>
                    {/* Bottom accent line */}
                    <div className={`mt-4 h-1 w-12 rounded-full ${style.iconBg} opacity-30 group-hover:w-20 transition-all duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}