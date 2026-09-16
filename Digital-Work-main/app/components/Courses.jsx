import { Circle } from "lucide-react";

const COURSES = [
  {
    title: "Forex Basics",
    body: "Start with the core concepts of the forex market. Learn about currency pairs, pips, lots, order types, market sessions, and the essential terminology every trader should know.",
    level: "Beginner",
  },
  {
    title: "Candlestick Pattern Analysis",
    body: "Understand how candlestick formations reveal market sentiment and potential price movements. Learn common bullish and bearish patterns to make better trading decisions.",
    level: "Beginner",
  },
  {
    title: "Technical Analysis Essentials",
    body: "Boost the ability to analyze price charts using trendlines, support and resistance levels, chart patterns, and popular technical indicators.",
    level: "Intermediate",
  },
  {
    title: "Risk & Management",
    body: "Protect your capital by learning proven risk management techniques, including position sizing, stop-loss placement, and risk-to-reward ratios.",
    level: "Intermediate",
  },
  {
    title: "Smart Trading Mindset",
    body: "Master the mental side of trading by developing discipline, emotional control, patience, and confidence. Learn to avoid common mistakes.",
    level: "Intermediate",
  },
  {
    title: "Gold Trading Strategies",
    body: "Discover the unique characteristics of gold trading, including price volatility, market drivers, and strategies for trading this popular commodity.",
    level: "Intermediate",
  },
  {
    title: "Price Action Trading",
    body: "Learn how to interpret raw price movements without relying heavily on indicators. Understand market structure, breakout strategies, and candlestick confirmations.",
    level: "Advanced",
  },
  {
    title: "Swing Trading",
    body: "Explore strategies for capturing medium-term market trends. Learn how to identify entry and exit points, and manage overnight positions.",
    level: "Advanced",
  },
  {
    title: "Scalping Strategies",
    body: "Learn fast trading techniques to capture small price movements. Improve your trade timing and build the discipline needed for successful scalping.",
    level: "Advanced",
  },
  {
    title: "Economic Calendar & Events",
    body: "Understand how major economic announcements influence financial markets. Learn to interpret economic calendars and high-impact events.",
    level: "Intermediate",
  },
];

export default function Courses() {
  // Card styles with #0CBFFF color
  const cardStyles = [
    { border: 'border-[#0CBFFF]', hover: 'hover:shadow-[#0CBFFF]/30' },
    { border: 'border-[#0CBFFF]/50', hover: 'hover:shadow-[#0CBFFF]/20' },
    { border: 'border-[#0CBFFF]', hover: 'hover:shadow-[#0CBFFF]/30' },
    { border: 'border-[#0CBFFF]/50', hover: 'hover:shadow-[#0CBFFF]/20' },
    { border: 'border-[#0CBFFF]', hover: 'hover:shadow-[#0CBFFF]/30' },
    { border: 'border-[#0CBFFF]/50', hover: 'hover:shadow-[#0CBFFF]/20' },
    { border: 'border-[#0CBFFF]', hover: 'hover:shadow-[#0CBFFF]/30' },
    { border: 'border-[#0CBFFF]/50', hover: 'hover:shadow-[#0CBFFF]/20' },
    { border: 'border-[#0CBFFF]', hover: 'hover:shadow-[#0CBFFF]/30' },
    { border: 'border-[#0CBFFF]/50', hover: 'hover:shadow-[#0CBFFF]/20' },
  ];

  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0CBFFF] sm:text-xs">
            Courses for Forex Learning!
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1a1a2e] sm:mt-3 sm:text-3xl lg:text-4xl font-['Inter']">
            Master Forex Trading with <span className="text-[#0CBFFF]">Expert-Led Learning Modules</span>
          </h2>
          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-4">
            Master forex trading step by step with practical courses designed
            for every skill level and trading journey.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COURSES.map((course, index) => {
            const style = cardStyles[index % cardStyles.length];
            const levelColor = 
              course.level === "Beginner" ? "text-[#0CBFFF] bg-[#0CBFFF]/10" :
              course.level === "Intermediate" ? "text-[#0CBFFF] bg-[#0CBFFF]/10" :
              "text-[#0CBFFF] bg-[#0CBFFF]/10";

            return (
              <article
                key={course.title}
                className={`group rounded-2xl border-2 ${style.border} bg-white p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${style.hover} sm:p-6`}
              >
                {/* Free Badge */}
                <span className="w-fit rounded-full bg-[#0CBFFF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0CBFFF] sm:text-[11px]">
                  Free
                </span>
                
                {/* Title */}
                <h3 className="mt-3 text-sm font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF] sm:mt-4 sm:text-base">
                  {course.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#4a4a6a] sm:text-sm">
                  {course.body}
                </p>
                
                {/* Level Badge */}
                <div className={`mt-3 flex items-center gap-1.5 rounded-full ${levelColor} px-3 py-1 text-[10px] font-semibold sm:mt-4 sm:text-xs w-fit`}>
                  <Circle className="h-2.5 w-2.5 fill-[#0CBFFF] sm:h-3 sm:w-3" />
                  {course.level}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}