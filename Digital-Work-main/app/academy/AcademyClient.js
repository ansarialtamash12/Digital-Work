"use client";
import React, { useState } from "react";
import {
  BarChart3,
  LineChart,
  ShieldCheck,
  Brain,
  Clock,
  Users,
  GraduationCap,
  Headphones,
  CheckCircle2,
  Circle,
  ArrowRight,
  PlayCircle,
  Radio,
  Plus,
  Minus,
  BookOpen,
  Globe2,
  TrendingUp,
  PieChart,
  DollarSign,
  Zap,
  Target,
  Award,
  Sparkles,
  Rocket,
  Lightbulb,
  Layers,
  Compass,
  Activity,
  Gauge,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Poppins, Space_Mono } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const EYEBROW = "text-[#0CBFFF] text-xs font-bold uppercase tracking-[0.22em]";

function SectionEyebrow({ children }) {
  return (
    <p className={`${EYEBROW} flex items-center gap-2`}>
      <span className="inline-block w-4 h-[2px] bg-[#0CBFFF]" />
      {children}
    </p>
  );
}

// Feature Cards with different icons
const FEATURES = [
  {
    icon: BookOpen,
    title: "Build a Strong Market Foundation",
    desc: "Explore how the global forex market works and who participates in it, including institutions, businesses, and individual traders.",
  },
  {
    icon: TrendingUp,
    title: "Master Chart Analysis",
    desc: "Learn to read price charts and spot trading opportunities using chart patterns, technical indicators, trend analysis, and price action.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Risk Management",
    desc: "Manage your trading capital with proper position sizing, stop-loss levels, risk-to-reward ratios, and disciplined exposure control.",
  },
  {
    icon: Brain,
    title: "Strengthen Your Trading Mindset",
    desc: "Learn to control emotions such as fear, greed, and impatience while developing the discipline to follow your trading plan.",
  },
];

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
      <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
        <Icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
      </div>
      <h3 className="font-semibold text-[#1a1a2e] mb-2 font-['Inter'] transition-colors duration-300 group-hover:text-[#0CBFFF]">
        {title}
      </h3>
      <p className="text-sm text-[#4a4a6a] leading-relaxed">{desc}</p>
    </div>
  );
}

// Stats with different icons
const STATS = [
  { icon: Award, value: "20+", label: "Years market experience" },
  { icon: BookOpen, value: "12+", label: "Free modules" },
  { icon: Users, value: "18,000+", label: "Students taught" },
  { icon: Headphones, value: "24/7", label: "Live support" },
];

function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-lg bg-[#0CBFFF]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#0CBFFF]">
        <Icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#1a1a2e] leading-none">
          {value}
        </p>
        <p className="text-xs text-[#4a4a6a] mt-1">{label}</p>
      </div>
    </div>
  );
}

// Module Cards with different icons
const FOREX_MODULES = [
  {
    title: "Forex Basics",
    icon: Globe2,
    items: [
      "What is Forex?",
      "Currency Pairs",
      "Trading Sessions",
      "Pips, Lots & Leverage",
    ],
  },
  {
    title: "Market Structure",
    icon: Layers,
    items: [
      "Market Mechanics",
      "Major Participants",
      "Liquidity",
      "Market Makers",
    ],
  },
  {
    title: "Technical Analysis",
    icon: TrendingUp,
    items: [
      "Market Structure",
      "Support & Resistance",
      "Candlestick Patterns",
      "Trend Analysis",
    ],
  },
  {
    title: "Risk Management",
    icon: ShieldCheck,
    items: [
      "Position Sizing",
      "Stop Loss",
      "Risk-to-Reward",
      "Capital Management",
    ],
  },
  {
    title: "Fundamental Analysis",
    icon: PieChart,
    items: [
      "Economic Indicators",
      "Economic News",
      "Market Sentiment",
      "Economic Calendar",
    ],
  },
  {
    title: "Smart Money Concepts (SMC)",
    icon: Zap,
    items: [
      "Break of Structure",
      "Change of Character",
      "Order Blocks",
      "Fair Value Gaps",
    ],
  },
];

const STOCK_MODULES = [
  {
    title: "Equity Basics",
    icon: BarChart3,
    items: ["Stock types", "Market mechanics", "Order types", "Trading hours"],
  },
  {
    title: "Fundamental Analysis",
    icon: PieChart,
    items: [
      "Financial ratios",
      "Balance sheets",
      "Income statements",
      "Cash flow analysis",
    ],
  },
  {
    title: "Chart Reading",
    icon: LineChart,
    items: [
      "Candlestick patterns",
      "Trend analysis",
      "Volume indicators",
      "Moving averages",
    ],
  },
  {
    title: "Portfolio Concepts",
    icon: Layers,
    items: [
      "Diversification",
      "Asset allocation",
      "Rebalancing",
      "Portfolio theory",
    ],
  },
  {
    title: "Market Cycles",
    icon: Activity,
    items: [
      "Bull markets",
      "Bear markets",
      "Economic indicators",
      "Sector rotation",
    ],
  },
  {
    title: "Investment Research",
    icon: Target,
    items: [
      "Company analysis",
      "Industry research",
      "Competitive analysis",
      "Risk assessment",
    ],
  },
];

function ModuleCard({ title, icon: Icon, items }) {
  return (
    <div className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
      <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
        <Icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
      </div>
      <h3 className="font-semibold text-[#1a1a2e] mb-3 font-['Inter'] transition-colors duration-300 group-hover:text-[#0CBFFF]">
        {title}
      </h3>
      <ul className="space-y-1.5 mb-4">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-[#4a4a6a] flex items-start gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0CBFFF] mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-sm font-semibold text-[#0CBFFF] inline-flex items-center gap-1 hover:gap-2 transition-all group-hover:gap-2"
      >
        Start Learning <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

// Path Steps with different icons
const PATH_STEPS = [
  {
    num: "01",
    icon: BookOpen,
    title: "Learn the Basics",
    desc: "Master the fundamentals of Forex Trading, market structure, liquidity, currency pairs, and trading concepts to build a strong career.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Practice & Execute",
    desc: "Use your knowledge through chart analysis, risk management, and real market examples.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Trade with Confidence",
    desc: "Develop a professional trading plan, refine your strategy, and build consistency through disciplined execution.",
  },
];

function PathStep({ num, icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
      <span className="text-xs font-bold text-[#0CBFFF]">{num}</span>
      <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center my-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
        <Icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
      </div>
      <h3 className="font-semibold text-[#1a1a2e] mb-2 transition-colors duration-300 group-hover:text-[#0CBFFF]">
        {title}
      </h3>
      <p className="text-sm text-[#4a4a6a] leading-relaxed">{desc}</p>
    </div>
  );
}

function StyleCard({ icon: Icon, title, desc, link, href }) {
  return (
    <div className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
      <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
        <Icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-3">{desc}</p>
      <a
        href={href}
        className="text-sm font-semibold text-sky-600 inline-flex items-center gap-1 hover:gap-2 transition-all"
      >
        {link} <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-[#0CBFFF]/20 py-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-semibold text-[#1a1a2e]">{q}</span>
        <span className="shrink-0 w-6 h-6 rounded-full bg-[#0CBFFF]/10 flex items-center justify-center text-[#0CBFFF]">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </span>
      </button>
      {isOpen && (
        <p className="text-sm text-[#4a4a6a] mt-3 leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function AcademyClient() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Is this course suitable for beginners?",
      a: "Yes, our course starts from the basics, which enables traders to understand it with zero prior experience. Every lesson builds on the last.",
    },
    {
      q: "Can I learn this forex trading for free?",
      a: "Yes, every module on this platform is completely free to access, from Forex Basics through Smart Money Concepts.",
    },
    {
      q: "How many hours should I study every week?",
      a: "We recommend 3-5 hours a week to comfortably work through the lessons while giving yourself time to practice.",
    },
    {
      q: "What topics are included in the course?",
      a: "The curriculum covers Forex Basics, Market Structure, Technical Analysis, Risk Management, Fundamental Analysis, and Smart Money Concepts.",
    },
  ];

  return (
    <div className="font-sans bg-slate-50 text-slate-900 antialiased">
      {/* HERO */}
      <section className="bg-[#0B1220] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>
              Education First. Investment decisions are always yours.
            </SectionEyebrow>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-5 leading-tight font-['Inter']">
              Your Gateway to
              <br />
              Financial Market
              <br />
              <span className="text-[#0CBFFF]">Education.</span>
            </h1>
            <p className="text-slate-400 mt-5 max-w-md leading-relaxed">
              Build a strong foundation in forex trading and stock market.
              Explore technical analysis, risk management, and trading
              psychology with easy to understand lessons dedicated for every
              trader.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Link href="https://t.me/gtcgofullsupport" target="_blank">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">
                  Enroll Now
                </button>
              </Link>
              <Link
                href="/onboarded"
              >
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#02BFFD] hover:shadow-[0_0_15px_rgba(2,191,253,0.35)]">
                  View Curriculum
                </button>
              </Link>
            </div>
          </div>

          {/* mock progress card wrapper */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 z-20 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 border-2 border-[#0CBFFF]/30">
              <div className="w-10 h-10 rounded-xl bg-[#0CBFFF] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-extrabold leading-none tracking-tight text-[#1a1a2e]">
                  12
                </p>
                <p className="text-xs text-[#4a4a6a] font-medium tracking-wide">
                  Free Modules
                </p>
              </div>
            </div>

            <div className="bg-[#101a2c] border border-white/10 rounded-2xl p-5 pt-8 shadow-2xl">
              <div className="flex items-center justify-end text-white text-sm mb-4">
                <span className="text-[10px] text-slate-500">
                  forpips.com/education
                </span>
              </div>

              <div className="bg-[#0b1424] rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Curriculum Progress</span>
                  <span>3/6</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-4">
                  <div className="h-full w-1/2 bg-[#0CBFFF] rounded-full" />
                </div>

                <ul className="space-y-2">
                  {[
                    { label: "Market Structure", state: "done" },
                    { label: "Currency Pairs", state: "done" },
                    { label: "Technical Analysis", state: "active" },
                    { label: "Risk Management", state: "todo" },
                    { label: "Trading Psychology", state: "todo" },
                  ].map((row) => (
                    <li
                      key={row.label}
                      className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 ${
                        row.state === "active"
                          ? "bg-white/5 text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {row.state === "done" ? (
                        <CheckCircle2 className="w-4 h-4 text-[#0CBFFF]" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-600" />
                      )}
                      {row.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 z-20 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 border-2 border-[#0CBFFF]/30">
              <div className="w-10 h-10 rounded-xl bg-[#0CBFFF] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[#1a1a2e] text-sm font-bold leading-none">
                  Self-Paced
                </p>
                <p className="text-xs text-[#4a4a6a] font-medium mt-1">
                  Learn Anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* Experts */}

      {/* FOREX MODULES */}
      <section className="  py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow>Forex Trading Made Simple</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 font-['Inter'] max-w-xl leading-tight text-[#1a1a2e]">
            Everything You Need to Learn, From Start to Finish
          </h2>
          <p className="text-[#4a4a6a] mt-4 max-w-2xl leading-relaxed">
            Gain a complete understanding of currency trading through six easily
            accessible modules covering essential concepts, practical
            strategies, and the skills needed to navigate the markets
            confidently.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {FOREX_MODULES.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* STOCK MARKET */}
      <section className=" bg-slate-100/70 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow>Build Your Stock Market Knowledge</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] mt-4 max-w-xl leading-tight text-[#1a1a2e]">
            Understand How the Stock Market Works
          </h2>
          <p className="text-[#4a4a6a] mt-4 max-w-2xl leading-relaxed">
            Gain the knowledge to understand the stock market with easy lessons
            covering investing, research, chart analysis, and portfolio
            building.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {STOCK_MODULES.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow>Your Learning Experience</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] mt-4 max-w-xl leading-tight text-[#1a1a2e]">
            A Learning Path Designed for Long-Term Success
          </h2>
          <p className="text-[#4a4a6a] mt-4 max-w-2xl leading-relaxed">
            Our Forex learning lessons help you build a strong foundation,
            develop practical skills, and progress with confidence at every
            stage of your trading journey.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {PATH_STEPS.map((step) => (
              <PathStep key={step.num} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* FOUR STAGES DARK BANNER */}
      <section className="bg-[#0B1220] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="flex items-center justify-center gap-2 text-[#0CBFFF] text-xs font-bold uppercase tracking-[0.22em]">
            <span className="inline-block w-4 h-[2px] bg-[#0CBFFF]" />
            Your Learning Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-['Inter'] font-extrabold text-white mt-4">
            Four stages, charted like a trade.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-left border-t border-white/10 pt-8">
            {[
              {
                n: "01",
                t: "Foundation",
                d: "Basic concepts and terminology.",
              },
              {
                n: "02",
                t: "Analysis",
                d: "Technical and fundamental skills.",
              },
              { n: "03", t: "Strategy", d: "Develop trading approaches." },
              { n: "04", t: "Psychology", d: "Master emotional discipline." },
            ].map((s) => (
              <div key={s.n}>
                <span className="text-xs font-bold text-[#0CBFFF]">{s.n}</span>
                <p className="text-white font-semibold mt-2">{s.t}</p>
                <p className="text-slate-500 text-sm mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING STYLE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionEyebrow>Learn Your Way</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-['Inter'] font-extrabold mt-4 max-w-xl leading-tight text-[#1a1a2e]">
            Find the Learning Style That Works for You
          </h2>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            <StyleCard
              icon={PlayCircle}
              title="Video Lessons"
              desc="Watch clear and engaging video tutorials that break down complex trading topics into simple lessons. Watch anytime to recall your learning."
              link="Watch videos"
              href="https://forpips.com/pages/videos"
            />
            <StyleCard
              icon={Radio}
              title="Live Sessions"
              desc="Attend weekly live classes where mentors explain market movements, review trading charts, and answer your questions in real time."
              link="Join community"
              href="https://t.me/+bjtMg5b1kC5mY2U0"
            />
            <StyleCard
              icon={Clock}
              title="Self-Paced"
              desc="Learn wherever it aligns with your schedule. Progress through each lesson at your own pace, with the flexibility to pause and review."
              link="See curriculum"
              href="https://www.youtube.com/@forpipsEducation"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100/70 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="flex items-center justify-center gap-2 text-[#0CBFFF] text-xs font-bold uppercase tracking-[0.22em] mb-3">
            <span className="inline-block w-4 h-[2px] bg-[#0CBFFF]" />
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-['Inter'] font-extrabold text-center text-[#1a1a2e]">
            Things to Know Before You Begin
          </h2>

          <div className="bg-white rounded-2xl px-6 mt-10 border-2 border-[#0CBFFF]/30 shadow-sm">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0B1220] rounded-3xl border border-white/10 px-8 py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-['Inter'] font-extrabold text-white">
              Ready to start learning?
            </h2>
            <p className="text-slate-400 mt-3 max-w-md mx-auto">
              Every module above is free — start with Forex Basics or jump
              straight to what you need.
            </p>
            <div className="flex items-center justify-center gap-4 mt-7">
              <Link href="https://t.me/gtcgofullsupport" target="_blank">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">
                  Enroll Now
                </button>
              </Link>
              <Link
                href="/academy/physical"
              >
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#02BFFD] hover:shadow-[0_0_15px_rgba(2,191,253,0.35)]">
                  View Curriculum
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
