
import { 
  BookOpen, 
  Users, 
  MessageCircle, 
  BarChart3, 
  TrendingUp 
} from "lucide-react";

const iconMap = {
  "Knowledge Comes First": BookOpen,
  "Guidance from Experts": Users,
  "Supportive Trading Community": MessageCircle,
  "Unbiased Broker Insights": BarChart3,
  "Grow with an IB Opportunity": TrendingUp
};import StatsStrip from '@/app/components/StatsStrip';

const defaultPosts = [
  {
    title: "Knowledge Comes First",
    category: "Education",
    body: "Start with a strong foundation in forex trading through accessible, easy-to-understand lessons. Our educational resources are designed to help you build confidence before making any trading decisions."
  },
  {
    title: "Guidance from Experts",
    category: "Mentorship",
    body: "Learn from seasoned market experts who bring years of real-world trading experience. Gain practical insights, proven strategies, and valuable techniques to navigate the financial markets with confidence."
  },
  {
    title: "Supportive Trading Community",
    category: "Community",
    body: "Join a community where your questions matter. Connect with experienced mentors and fellow traders, exchange ideas, and receive timely guidance to accelerate your learning journey."
  },
  {
    title: "Unbiased Broker Insights",
    category: "Research",
    body: "Understand the key factors that matter when selecting a broker, including regulation, spreads, trading platforms, execution quality, and account features."
  },
  {
    title: "Grow with an IB Opportunity",
    category: "Business",
    body: "Turn your trading knowledge into an additional income stream through our Introducing Broker (IB) program. Learn how to build your network and earn IB commissions."
  }
];

export default function Academy({ posts }) {
  const displayPosts = posts?.length ? posts : defaultPosts;

  // Card styles with #0CBFFF color
  const cardStyles = [
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      tagBg: 'bg-[#0CBFFF]/10', 
      tagText: 'text-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
      textHover: 'group-hover:text-[#0CBFFF]'
    },
    { 
      border: 'border-[#0CBFFF]/50', 
      iconBg: 'bg-[#0CBFFF]/80', 
      tagBg: 'bg-[#0CBFFF]/10', 
      tagText: 'text-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
      textHover: 'group-hover:text-[#0CBFFF]'
    },
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      tagBg: 'bg-[#0CBFFF]/10', 
      tagText: 'text-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
      textHover: 'group-hover:text-[#0CBFFF]'
    },
    { 
      border: 'border-[#0CBFFF]/50', 
      iconBg: 'bg-[#0CBFFF]/80', 
      tagBg: 'bg-[#0CBFFF]/10', 
      tagText: 'text-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
      textHover: 'group-hover:text-[#0CBFFF]'
    },
    { 
      border: 'border-[#0CBFFF]', 
      iconBg: 'bg-[#0CBFFF]', 
      tagBg: 'bg-[#0CBFFF]/10', 
      tagText: 'text-[#0CBFFF]', 
      hover: 'hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/30',
      gradient: 'from-[#0CBFFF]/5 to-white',
      textHover: 'group-hover:text-[#0CBFFF]'
    }
  ];

  return (
    <section id="academy" className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#f8f9fa' }}>
      <StatsStrip/>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0CBFFF] sm:text-xs">
            Learn First. Trade with Confidence.
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1a1a2e] sm:mt-3 sm:text-3xl lg:text-4xl font-['Inter']">
            We At Forpips Believe Successful Traders Are Built Through
            <span className="text-[#0CBFFF]"> Knowledge.</span>
          </h2>
          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-4">
            That is why we focus on delivering practical forex education, and
            helping you make informed decisions when choosing a broker.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-10">
          {/* Mobile: Horizontal scroll */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {displayPosts.map((post, index) => {
              const IconComponent = iconMap[post.title] || BookOpen;
              const style = cardStyles[index % cardStyles.length];
              
              return (
                <div
                  key={post.title}
                  className={`min-w-[280px] max-w-[280px] snap-start rounded-2xl border-2 ${style.border} bg-gradient-to-br ${style.gradient} p-5 transition hover:shadow-2xl hover:-translate-y-1 ${style.hover} flex-shrink-0`}
                >
                  {/* Icon */}
                  <div className="relative">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <span className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${style.iconBg} opacity-60`}></span>
                  </div>
                  
                  {/* Category Tag */}
                  <span className={`mt-5 inline-block rounded-full ${style.tagBg} ${style.tagText} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider`}>
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="mt-3 text-lg font-bold text-[#1a1a2e] leading-tight">
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-[13px] leading-relaxed text-[#4a4a6a]">
                    {post.body}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`mt-4 h-1 w-12 rounded-full ${style.iconBg} opacity-40 transition-all duration-500`} />
                </div>
              );
            })}
          </div>

          {/* Desktop: All cards in one row */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {displayPosts.map((post, index) => {
              const IconComponent = iconMap[post.title] || BookOpen;
              const style = cardStyles[index % cardStyles.length];
              
              return (
                <div
                  key={post.title}
                  className={`group rounded-2xl border-2 ${style.border} bg-gradient-to-br ${style.gradient} p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${style.hover} sm:p-6`}
                >
                  {/* Icon */}
                  <div className="relative">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]`}>
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <span className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${style.iconBg} opacity-60`}></span>
                  </div>
                  
                  {/* Category Tag */}
                  <span className={`mt-5 inline-block rounded-full ${style.tagBg} ${style.tagText} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider`}>
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className={`mt-3 text-sm font-bold text-[#1a1a2e] leading-tight transition-colors duration-300 sm:text-base ${style.textHover}`}>
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-[#4a4a6a] sm:text-[13px]">
                    {post.body}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`mt-4 h-1 w-12 rounded-full ${style.iconBg} opacity-40 group-hover:w-20 transition-all duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>




    </section>
  );
}