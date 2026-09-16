import Image from "next/image";
import { Send, Users, Video, Calendar, LineChart } from "lucide-react";

const CARDS = [
  {
    icon: Send,
    title: "Telegram Support",
    body: "Daily analysis and roadmap updates, pushed straight to your phone.",
    cta: "Join channel →",
    href: "https://t.me/gtcgofullsupport",
  },
  {
    icon: Users,
    title: "Telegram Community",
    body: "Collaborate, ask questions, and learn alongside mentors and fellow students.",
    cta: "Join group →",
    href: "https://t.me/+bjtMg5b1kC5mY2U0",
  },
  {
    icon: Video,
    title: "Lark",
    body: "Live voice sessions, chart reviews, and a running trade journal channel.",
    cta: "Join server →",
    href: "https://www.larksuite.com/invitation/page/add_contact/?token=517u1341-523e-46c4-beca-eb848ctqp10p&unique_id=7t6rmNDchkjANIC-MkNgig==",
    image: "/Lark.webp", 
  },
];

const MINI = [
  {
    icon: Calendar,
    title: "Weekly Live Sessions",
    body: "Mentor-led chart reviews, every week, recorded for replay.",
  },
  {
    icon: LineChart,
    title: "Daily Market Analysis",
    body: "Short, plain-language reads on what moved overnight and why.",
  },
];

export default function Community() {
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
  ];

  return (
    <section id="community" className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0CBFFF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0CBFFF] sm:text-[13px]">
              Trading Community
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#1a1a2e] sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl font-['Inter']">
            Learning Alone Is <span className="text-[#0CBFFF]">Optional Here.</span>
          </h2>

          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-5 sm:text-base md:text-lg">
            Join our community and grow together with mentors and fellow traders.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, index) => {
            const Icon = c.icon;
            const style = cardStyles[index % cardStyles.length];
            
            return (
              <div
                key={c.title}
                className={`group rounded-2xl border-2 ${style.border} bg-gradient-to-br ${style.gradient} p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${style.hover} sm:p-7`}
              >
                {/* Icon / Image */}
                <div className="relative">
                  {c.image ? (
                    // Lark Image
                    <Image
                      src={c.image}
                      alt={c.title}
                      width={48}
                      height={48}
                      className="h-12 w-12 overflow-hidden rounded-xl shadow-lg object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]"
                    />
                  ) : (
                    // Icon for Telegram Support & Community
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]`}>
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <span className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${style.iconBg} opacity-60`}></span>
                </div>
                
                {/* Title */}
                <h3 className="mt-4 text-base font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF] sm:mt-5 sm:text-lg">
                  {c.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-[13px] leading-relaxed text-[#4a4a6a] sm:text-sm">
                  {c.body}
                </p>
                
                {/* CTA Link */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={c.href}
                  className="mt-3 inline-block text-sm font-semibold text-[#0CBFFF] transition-all duration-300 group-hover:text-[#0CBFFF]/80 group-hover:translate-x-1"
                >
                  {c.cta}
                </a>
                
                {/* Bottom accent line */}
                <div className={`mt-4 h-1 w-12 rounded-full ${style.iconBg} opacity-30 group-hover:w-20 transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Mini Cards - 2 columns */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
          {MINI.map((m) => {
            const Icon = m.icon;
            
            return (
              <div
                key={m.title}
                className="group flex items-center gap-4 rounded-2xl border-2 border-[#0CBFFF]/30 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 sm:gap-5 sm:px-6 sm:py-5"
              >
                {/* Icon */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0CBFFF] text-white shadow-[0_8px_18px_rgba(12,191,255,0.35)] transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(12,191,255,0.50)] sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 stroke-[1.8] sm:h-5 sm:w-5" />
                </span>

                {/* Content */}
                <div className="min-w-0">
                  <h4 className="text-[15px] font-bold leading-tight text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF] sm:text-[16px]">
                    {m.title}
                  </h4>
                  <p className="mt-1 text-[13px] leading-[1.45] text-[#4a4a6a] sm:text-[14px]">
                    {m.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}