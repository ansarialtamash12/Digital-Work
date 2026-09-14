"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  MessageCircle,
  PlayCircle,
  Users,
  MessageSquare,
  CalendarDays,
  Star,
  BarChart3,
  LineChart,
  ShieldCheck,
  UserCircle2,
  Smartphone,
  FileText,
  Award,
  Clock,
  Users2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";


const eyebrowClass =
  "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0CBFFF]";

const Dot = () => <span className="h-1.5 w-1.5 rounded-full bg-[#0CBFFF]" />;

const IconTile = ({ Icon, size = "lg" }) => {
  const isLarge = size === "lg";

  return (
    <div
      className={`flex items-center justify-center shrink-0 rounded-full bg-[#0CBFFF] shadow-lg shadow-[#0CBFFF]/20 ${isLarge ? "h-12 w-12" : "h-9 w-9"
        }`}
    >
      <Icon className={isLarge ? "h-6 w-6 text-white" : "h-4 w-4 text-white"} strokeWidth={2} />
    </div>
  );
};

// Card component for consistency
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 ${className}`}>
    {children}
  </div>
);

export default function ForexCommunityPage() {
  return (
    <div className="font-[Inter,ui-sans-serif,system-ui] bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-[#060913] px-6 pb-24 pt-20 sm:px-10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(12,191,255,0.25) 0%, rgba(6,9,19,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className={`${eyebrowClass} justify-center`}>
            <Dot />
            Free Forex Trading Community
          </div>

          <h1 className="mt-6 text-4xl leading-tight text-white sm:text-4xl md:text-5xl font-['Inter'] font-bold">
            <span className="text-white">Where Forex Traders </span>
            <span className="text-[#0CBFFF]">
              Learn, Collaborate, and Succeed Together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Connect with passionate forex traders, learn proven trading strategies, share
            market insights, and gain expert guidance in our Forex Trading Community. Whether
            you are a beginner or an experienced trader, you can easily connect with our
            community and grow your confidence in the global forex market.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="https://web.mygtc.app/login/register?ref=afbbUKvf" target="_blank">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">
                Get Started Today
              </button>
            </Link>
            <Link href="https://t.me/+bjtMg5b1kC5mY2U0" target="_blank">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#02BFFD] hover:shadow-[0_0_15px_rgba(2,191,253,0.35)]">
                See Recent Discussions
              </button>
            </Link>
          </div>
        </div>

        {/* Community banner */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-[24px] border-2 border-[#0CBFFF]/20 bg-[#0b1120]/80 p-2 backdrop-blur-sm">
            <Image
              src="/Community-Banner.png"
              alt="ForPips community banner"
              width={1200}
              height={600}
              className="h-full w-full rounded-[20px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-b border-[#0CBFFF]/20 bg-white px-6 py-14 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { icon: Users, value: "15,000", label: "Active Learners" },
            { icon: MessageSquare, value: "500", label: "Daily Discussions" },
            { icon: CalendarDays, value: "200", label: "Weekly Sessions" },
            { icon: Star, value: "50", label: "Expert Educators" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <IconTile Icon={Icon} size="sm" />
              <div>
                <p className="text-2xl font-semibold text-[#1a1a2e]">
                  {value}
                  <span className="text-[#0CBFFF]">+</span>
                </p>
                <p className="text-sm text-[#4a4a6a]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PLATFORMS ============ */}
      <section className="bg-[#f8f9fa] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className={eyebrowClass}>
            <Dot />
            Join Our Trading Family
          </div>
          <h2 className="mt-4 max-w-xl font-['Inter'] text-3xl font-bold leading-tight text-[#1a1a2e] sm:text-4xl">
            Choose Your Platform Where You Are Most Active
          </h2>
          <p className="mt-4 max-w-xl text-[#4a4a6a]">
            Stay updated with live chats, daily analysis, and weekly learning sessions across
            your favorite platforms.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Send,
                title: "Telegram",
                desc: "Daily analysis and community updates, pushed straight to your phone.",
                cta: "Join channel",
                href: "https://t.me/+bjtMg5b1kC5mY2U0",
              },
              {
                icon: MessageCircle,
                title: "Discord",
                desc: "Live voice sessions, chart reviews, and a running discussion board.",
                cta: "Join server",
                href: "https://discord.gg/BqBZUwqj4",
              },
              {
                icon: PlayCircle,
                title: "YouTube",
                desc: "Recorded sessions and masterclasses you can rewatch anytime.",
                cta: "Watch videos",
                href: "https://www.youtube.com/@forpipsEducation",
              },
            ].map(({ icon, title, desc, cta, href }) => (
              <Card
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <IconTile Icon={icon} />
                <h3 className="mt-5 font-['Inter'] text-lg font-semibold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
                <a href={href} target="_blank" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-500">
                  {cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DISCOVER COMMUNITY ============ */}
      {/* ============ DISCOVER COMMUNITY ============ */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#0CBFFF]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0CBFFF]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* Section heading */}
          <div className={eyebrowClass}>
            <Dot />
            Inside Our Community
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="mt-4 max-w-2xl font-['Inter'] text-3xl font-bold leading-tight tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl">
                Discover What Our
                <span className="text-[#0CBFFF]"> Community Offers.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4a4a6a] sm:text-lg">
                See how members learn through live sessions, interactive workshops,
                expert guidance, and valuable educational resources.
              </p>
            </div>

            {/* Small section badge */}
            <div className="hidden shrink-0 items-center gap-3 rounded-full border border-[#0CBFFF]/20 bg-[#0CBFFF]/5 px-4 py-2.5 lg:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0CBFFF] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0CBFFF]" />
              </span>

              <span className="text-sm font-semibold text-[#1a1a2e]">
                Community is active
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* ================= LIVE COMMUNITY CARD ================= */}
            <div className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-[#0CBFFF]/30 bg-[#080d1b] p-6 shadow-[0_20px_60px_rgba(6,9,19,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0CBFFF]/70 hover:shadow-[0_25px_80px_rgba(12,191,255,0.16)] sm:p-7">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0CBFFF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#0CBFFF]/20" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

              {/* Top bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0CBFFF]/30 bg-[#0CBFFF]/10 px-3.5 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0CBFFF] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0CBFFF]" />
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0CBFFF]">
                    Live Now
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-500">
                  Community Room
                </span>
              </div>

              {/* Main content */}
              <div className="relative z-10 mt-7">

                {/* avatars */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    {
                      initials: "RC",
                      name: "Robert",
                      status: "Mentor",
                    },
                    {
                      initials: "ET",
                      name: "Emily",
                      status: "Expert",
                    },
                    {
                      initials: "SW",
                      name: "Sarah",
                      status: "Mentor",
                    },
                    {
                      initials: "MA",
                      name: "Michael",
                      status: "Trader",
                    },
                    {
                      initials: "YOU",
                      name: "You",
                      status: "Joining",
                    },
                    {
                      initials: "+42",
                      name: "Members",
                      status: "Online",
                    },
                  ].map(({ initials, name, status }, index) => (
                    <div
                      key={initials}
                      className={`relative flex h-[82px] flex-col items-center justify-center rounded-2xl border transition-all duration-300 ${index === 4
                          ? "border-[#0CBFFF]/40 bg-[#0CBFFF]/10"
                          : "border-white/[0.06] bg-white/[0.045] hover:border-[#0CBFFF]/30 hover:bg-white/[0.07]"
                        }`}
                    >
                      {/* online dot */}
                      <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold ${index === 4
                            ? "bg-[#0CBFFF] text-white shadow-[0_0_20px_rgba(12,191,255,0.3)]"
                            : "bg-slate-700/80 text-slate-200"
                          }`}
                      >
                        {initials}
                      </div>

                      <span className="mt-1.5 text-[9px] font-medium text-slate-500">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Live session info */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0CBFFF]/20 bg-[#0CBFFF]/10">
                    <MessageCircle className="h-5 w-5 text-[#0CBFFF]" />
                  </div>

                  <div>
                    <p className="text-base font-semibold text-white">
                      Weekly Live Mentor Q&A
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      Ask questions, share charts and learn directly from experienced
                      traders.
                    </p>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-slate-400">
                    48 Members Online
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-slate-400">
                    Live Discussion
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RESOURCES CARD ================= */}
            <div className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-[#0CBFFF]/30 bg-[#080d1b] p-6 shadow-[0_20px_60px_rgba(6,9,19,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0CBFFF]/70 hover:shadow-[0_25px_80px_rgba(12,191,255,0.16)] sm:p-7">

              {/* Glow */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#0CBFFF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#0CBFFF]/20" />

              {/* Top label */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                  <FileText className="h-3.5 w-3.5 text-[#0CBFFF]" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-300">
                    Learning Hub
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-500">
                  100+ Resources
                </span>
              </div>

              {/* Document illustration */}
              <div className="relative z-10 mt-6 flex h-[145px] items-center justify-center">

                {/* Back card */}
                <div className="absolute h-[105px] w-[175px] -translate-x-3 -translate-y-2 -rotate-6 rounded-2xl border border-white/5 bg-slate-700/30 shadow-2xl" />

                {/* Back card 2 */}
                <div className="absolute h-[105px] w-[175px] translate-x-3 translate-y-2 rotate-6 rounded-2xl border border-white/5 bg-slate-700/30 shadow-2xl" />

                {/* Main document */}
                <div className="relative z-10 h-[112px] w-[185px] rounded-2xl border border-slate-500/30 bg-gradient-to-br from-slate-600 to-slate-700 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-2">

                  {/* document header */}
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-16 rounded-full bg-white/35" />
                    <div className="h-6 w-6 rounded-lg bg-[#0CBFFF]/20" />
                  </div>

                  {/* document lines */}
                  <div className="mt-5 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/25" />
                    <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
                    <div className="h-1.5 w-3/5 rounded-full bg-white/20" />
                  </div>

                  {/* tiny progress */}
                  <div className="absolute bottom-4 left-5 right-5 h-1 overflow-hidden rounded-full bg-black/20">
                    <div className="h-full w-2/3 rounded-full bg-[#0CBFFF]" />
                  </div>
                </div>
              </div>

              {/* Resource list */}
              <div className="relative z-10 mt-2 rounded-2xl border border-white/[0.06] bg-white/[0.045] p-4">

                {[
                  {
                    icon: FileText,
                    title: "Structured Curriculum",
                    desc: "Step-by-step learning path",
                  },
                  {
                    icon: Award,
                    title: "Certification Programs",
                    desc: "Track your learning progress",
                  },
                  {
                    icon: Users2,
                    title: "Faculty Training",
                    desc: "Learn from industry experts",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group/item flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors duration-300 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#0CBFFF]/20 bg-[#0CBFFF]/10">
                      <Icon className="h-4 w-4 text-[#0CBFFF]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white">
                        {title}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {desc}
                      </p>
                    </div>

                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0CBFFF]" />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="relative z-10 mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Structured resources for every module
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Courses • Guides • Certifications • Tools
                  </p>
                </div>

                <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#0CBFFF]/20 bg-[#0CBFFF]/10 sm:flex">
                  <ArrowRight className="h-4 w-4 text-[#0CBFFF] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom mini features */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["15K+", "Active Learners"],
              ["50+", "Expert Educators"],
              ["200+", "Live Sessions"],
              ["100+", "Learning Resources"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-center transition-all duration-300 hover:border-[#0CBFFF]/30 hover:bg-[#0CBFFF]/5"
              >
                <p className="text-lg font-bold text-[#1a1a2e]">
                  {value}
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SKILLS PATH ============ */}
      <section className="bg-[#f8f9fa] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className={eyebrowClass}>
            <Dot />
            Path to Forex Learning
          </div>
          <h2 className="mt-4 max-w-2xl font-['Inter'] text-3xl font-bold leading-tight text-[#1a1a2e] sm:text-4xl">
            Explore the Master Skills Every Successful Forex Trader Needs
          </h2>
          <p className="mt-4 max-w-2xl text-[#4a4a6a]">
            Build a strong foundation in forex trading with learning from industry experts,
            covering market fundamentals, technical analysis, risk management, and trading
            psychology. Whether you are just starting or reworking on your strategy, our
            structured learning has you covered.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BarChart3,
                title: "Forex Market Fundamentals",
                desc: "Understand how the global forex market works, learn about currency pairs, trading sessions, market participants, and the key factors that influence price movements.",
              },
              {
                icon: LineChart,
                title: "Technical Analysis",
                desc: "Learn to read forex charts, identify trading patterns, use technical indicators, and apply price action strategies to make informed trading decisions.",
              },
              {
                icon: ShieldCheck,
                title: "Risk Management",
                desc: "Protect your trading capital with proven risk management strategies such as position sizing, stop-loss strategies, and effective money management principles.",
              },
              {
                icon: UserCircle2,
                title: "Trading Psychology",
                desc: "Develop the discipline, patience, and emotional control required to manage market uncertainty and make confident, consistent trading decisions.",
              },
            ].map(({ icon, title, desc }) => (
              <Card key={title}>
                <IconTile Icon={icon} size="sm" />
                <h3 className="mt-5 font-['Inter'] text-base font-semibold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a4a6a]">{desc}</p>
              </Card>
            ))}
          </div>

          {/* ============ MASTERY GUIDE ============ */}
          <div className="mt-20 grid w-full min-w-0 grid-cols-1 gap-10 overflow-hidden lg:grid-cols-2 lg:items-center lg:gap-14">

  {/* LEFT VISUAL */}
  <div className="relative w-full min-w-0">

    <div className="group relative w-full overflow-hidden rounded-[28px] border border-[#0CBFFF]/40 bg-[#080d1b] p-5 shadow-[0_20px_60px_rgba(6,9,19,0.15)] sm:rounded-[30px] sm:p-7 lg:h-[470px]">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8ca3bd 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Label */}
      <div className="relative z-20 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#0CBFFF] shadow-[0_0_10px_#0CBFFF]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">
          Forex Mastery
        </span>
      </div>

      {/* Visual */}
      <div className="relative mt-5 h-[350px] w-full sm:h-[370px] lg:h-[350px]">

        {/* circles */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[270px] sm:w-[270px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0CBFFF]/10 sm:h-[210px] sm:w-[210px]" />

        {/* lines */}
        <div className="pointer-events-none absolute left-[18%] right-[18%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#0CBFFF]/25 to-transparent" />

        <div className="pointer-events-none absolute bottom-[18%] left-1/2 top-[18%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0CBFFF]/20 to-transparent" />

        {/* Node 01 */}
        <div className="absolute left-[2%] top-[22%] z-20 flex flex-col items-center sm:left-[5%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151e31] text-[9px] font-semibold text-slate-300 sm:h-12 sm:w-12">
            01
          </div>
          <span className="mt-2 text-[8px] text-slate-500 sm:text-[10px]">
            Curriculum
          </span>
        </div>

        {/* Node 02 */}
        <div className="absolute right-[2%] top-[22%] z-20 flex flex-col items-center sm:right-[5%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151e31] text-[9px] font-semibold text-slate-300 sm:h-12 sm:w-12">
            02
          </div>
          <span className="mt-2 text-[8px] text-slate-500 sm:text-[10px]">
            Resources
          </span>
        </div>

        {/* Node 03 */}
        <div className="absolute bottom-[20%] left-[2%] z-20 flex flex-col items-center sm:left-[5%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151e31] text-[9px] font-semibold text-slate-300 sm:h-12 sm:w-12">
            03
          </div>
          <span className="mt-2 text-[8px] text-slate-500 sm:text-[10px]">
            Certification
          </span>
        </div>

        {/* Node 04 */}
        <div className="absolute bottom-[20%] right-[2%] z-20 flex flex-col items-center sm:right-[5%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151e31] text-[9px] font-semibold text-slate-300 sm:h-12 sm:w-12">
            04
          </div>
          <span className="mt-2 text-[8px] text-slate-500 sm:text-[10px]">
            Support
          </span>
        </div>

        {/* Certificate */}
        <div className="absolute left-1/2 top-1/2 z-30 w-[175px] -translate-x-1/2 -translate-y-1/2 sm:w-[205px]">

          <div className="rounded-[22px] border border-white/10 bg-[#111a2e] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:rounded-[24px] sm:p-6">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0CBFFF] sm:h-14 sm:w-14">
              <CheckCircle2 className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </div>

            <p className="mt-4 text-center text-xs font-semibold text-white sm:text-sm">
              Certificate
            </p>

            <p className="mt-1 text-center text-[9px] text-slate-500">
              Forex Mastery Program
            </p>

            <div className="mt-4 space-y-2">
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="mx-auto h-1.5 w-3/4 rounded-full bg-white/10" />
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-wider text-slate-500">
                  Completion
                </span>

                <span className="text-[8px] font-semibold text-[#0CBFFF]">
                  100%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-[#0CBFFF]" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-20 flex items-center justify-between gap-3">

        <div className="min-w-0">
          <p className="text-xs font-semibold text-white sm:text-sm">
            Complete Learning Journey
          </p>

          <p className="mt-1 text-[8px] text-slate-500 sm:text-[10px]">
            Learn • Practice • Certify
          </p>
        </div>

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0CBFFF]/20 bg-[#0CBFFF]/10 sm:h-9 sm:w-9">
          <ArrowRight className="h-3.5 w-3.5 text-[#0CBFFF] sm:h-4 sm:w-4" />
        </div>

      </div>

    </div>
  </div>


  {/* RIGHT CONTENT */}
  <div className="min-w-0 w-full">

    <div className={eyebrowClass}>
      <Dot />
      What You Will Get
    </div>

    <h3 className="mt-4 max-w-xl font-['Inter'] text-3xl font-bold leading-tight text-[#1a1a2e] sm:text-4xl">
      The Ultimate Forex
      <span className="text-[#0CBFFF]"> Mastery Guide</span>
    </h3>

    <div className="mt-8 space-y-6">
      {[
        {
          icon: Smartphone,
          title: "Structured Forex Courses",
          desc: "Follow an easy learning path covering forex basics, technical analysis, price action, risk management, and advanced trading strategies.",
        },
        {
          icon: FileText,
          title: "Practical Learning Material",
          desc: "Access video lessons, trading guides, market examples, downloadable PDFs, and real-world case studies.",
        },
        {
          icon: Award,
          title: "Professional Certifications",
          desc: "Earn certificates after completing each course and track your progress with confidence.",
        },
        {
          icon: Clock,
          title: "Live Market Insights & Updates",
          desc: "Stay ahead with regular market updates, new learning materials, live webinars, and expert guidance.",
        },
        {
          icon: Users2,
          title: "Guidance from Industry Experts",
          desc: "Learn directly from experienced forex traders, ask questions, and participate in live sessions.",
        },
        {
          icon: Briefcase,
          title: "Practical Trading Tools",
          desc: "Get access to trading checklists, strategy templates, economic calendar guides, risk calculators, and premium learning materials.",
        },
      ].map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex gap-4">
          <IconTile Icon={Icon} size="lg" />

          <div className="min-w-0">
            <h4 className="font-['Inter'] text-sm font-semibold text-[#1a1a2e]">
              {title}
            </h4>

            <p className="mt-1 text-sm leading-relaxed text-[#4a4a6a]">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>
        </div>
      </section>

      {/* ============ RECENT DISCUSSIONS ============ */}
      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className={eyebrowClass}>
            <Dot />
            Recent Discussions
          </div>
          <h2 className="mt-4 font-['Inter'] text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            What Learners Are Talking About.
          </h2>

          <div className="mt-10 space-y-4">
            {[
              {
                initials: "SC",
                name: "Sarah Chen",
                time: "7 hours ago",
                title: "Understanding Support and Resistance Levels",
                tag: "Technical Analysis",
                msgs: "24 Messages",
              },
              {
                initials: "MR",
                name: "Michael Rodriguez",
                time: "9 hours ago",
                title: "Risk Management Strategies for Beginners",
                tag: "Risk Management",
                msgs: "31 Messages",
              },
              {
                initials: "PS",
                name: "Priya Sharma",
                time: "1 day ago",
                title: "Analyzing Economic Indicators Impact",
                tag: "Fundamental Analysis",
                msgs: "18 Messages",
              },
              {
                initials: "JW",
                name: "James Wilson",
                time: "1 day ago",
                title: "Trading Psychology: Overcoming Fear",
                tag: "Psychology",
                msgs: "27 Messages",
              },
              {
                initials: "AM",
                name: "Aisha Mohammed",
                time: "2 days ago",
                title: "Currency Pair Correlation Explained",
                tag: "Market Fundamentals",
                msgs: "15 Messages",
              },
            ].map(({ initials, name, time, title, tag, msgs }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border-2 border-[#0CBFFF]/30 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0CBFFF] text-xs font-semibold text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-sm text-[#4a4a6a]">
                    <span className="font-semibold text-[#1a1a2e]">{name}</span> · {time}
                  </p>
                  <h3 className="mt-1 font-['Inter'] text-base font-semibold text-[#1a1a2e]">
                    {title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="rounded-full bg-[#0CBFFF]/10 px-3 py-1 font-mono text-[11px] font-medium text-[#0CBFFF]">
                      {tag}
                    </span>
                    <span className="text-xs text-[#4a4a6a]">{msgs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ UPCOMING EVENTS ============ */}
      <section className="bg-[#f8f9fa] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className={eyebrowClass}>
            <Dot />
            Upcoming Events
          </div>
          <h2 className="mt-4 max-w-xl font-['Inter'] text-3xl font-bold leading-tight text-[#1a1a2e] sm:text-4xl">
            Mark Your Calendar for These Forex Trading Sessions
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              {
                day: "15",
                month: "MAR",
                title: "Forex Market Structure Masterclass",
                meta: "6:00 PM - 8:00 PM EST · Dr. Robert Chen",
                reg: "234 registered",
              },
              {
                day: "18",
                month: "MAR",
                title: "Forex Technical Analysis Workshop",
                meta: "7:00 PM - 9:00 PM EST · Emily Thompson",
                reg: "189 registered",
              },
              {
                day: "22",
                month: "MAR",
                title: "Trading Psychology & Discipline",
                meta: "5:00 PM - 7:00 PM EST · Dr. Sarah Williams",
                reg: "312 registered",
              },
              {
                day: "25",
                month: "MAR",
                title: "Risk Management Fundamentals",
                meta: "6:30 PM - 8:30 PM EST · Michael Anderson",
                reg: "267 registered",
              },
            ].map(({ day, month, title, meta, reg }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-[#0CBFFF] text-white">
                  <span className="text-lg font-bold leading-none">{day}</span>
                  <span className="mt-0.5 font-mono text-[9px] tracking-widest">{month}</span>
                </div>
                <div>
                  <h3 className="font-['Inter'] text-sm font-semibold text-[#1a1a2e]">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs text-[#4a4a6a]">{meta}</p>
                  <p className="mt-1 text-xs font-semibold text-[#0CBFFF]">{reg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED EDUCATORS ============ */}
      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className={eyebrowClass}>
            <Dot />
            Featured Educators
          </div>
          <h2 className="mt-4 max-w-xl font-['Inter'] text-3xl font-bold leading-tight text-[#1a1a2e] sm:text-4xl">
            Meet the Experts Leading This Month&apos;s Sessions
          </h2>
          <p className="mt-4 max-w-xl text-[#4a4a6a]">
            Part of the 50+ expert educators running live sessions across the community.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { initials: "RC", name: "Dr. Robert Chen", role: "Market Structure", desc: "Leads the Forex Market Structure Masterclass series." },
              { initials: "ET", name: "Emily Thompson", role: "Technical Analysis", desc: "Runs the Forex Technical Analysis Workshop." },
              { initials: "SW", name: "Dr. Sarah Williams", role: "Trading Psychology", desc: "Hosts the Trading Psychology & Discipline sessions." },
              { initials: "MA", name: "Michael Anderson", role: "Risk Management", desc: "Leads the Risk Management Fundamentals series." },
            ].map(({ initials, name, role, desc }) => (
              <div
                key={name}
                className="rounded-2xl border-2 border-[#0CBFFF]/30 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0CBFFF] text-base font-bold text-white shadow-md">
                  {initials}
                </div>
                <h3 className="mt-4 font-['Inter'] text-sm font-semibold text-[#1a1a2e]">
                  {name}
                </h3>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-[#0CBFFF]">{role}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#4a4a6a]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOUR STEPS ============ */}
      <section className="bg-[#f8f9fa] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className={`${eyebrowClass} justify-center`}>
            <Dot />
            How to Get Involved
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-['Inter'] text-3xl font-bold leading-tight text-[#1a1a2e] sm:text-4xl">
            Start Your First Conversation in Four Steps
          </h2>

          <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Join a Channel", desc: "Pick Telegram, Discord, or YouTube — wherever you already spend time." },
              { step: "02", title: "Introduce Yourself", desc: "Tell the community what you're learning and what you want out of it." },
              { step: "03", title: "Join a Live Session", desc: "Sit in on a weekly masterclass and ask questions in real time." },
              { step: "04", title: "Start Discussing", desc: "Post your first question or analysis in the discussion board." },
            ].map(({ step, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0CBFFF] text-sm font-semibold text-white">
                  {step}
                </div>
                <h3 className="mt-4 font-['Inter'] text-sm font-semibold text-[#1a1a2e]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a4a6a]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMUNITY GUIDELINES ============ */}
      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className={eyebrowClass}>
            <Dot />
            Community Guidelines
          </div>
          <h2 className="mt-4 font-['Inter'] text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            Learn in a Professional and Respectful Environment
          </h2>

          <div className="mt-10 divide-y divide-[#0CBFFF]/20 rounded-2xl border-2 border-[#0CBFFF]/30 px-7">
            {[
              { label: "Education-First:", desc: "All discussions must be educational in nature. No financial advice or specific investment recommendations." },
              { label: "Respectful Dialogue:", desc: "Treat all members with respect. Constructive feedback and diverse perspectives are encouraged." },
              { label: "No Guarantees:", desc: "Do not make claims about guaranteed returns, success rates, or trading performance." },
              { label: "Quality Content:", desc: "Share well-researched analysis, credible sources, and thoughtful questions." },
              { label: "Age Requirement:", desc: "All community members must be 18 years or older." },
            ].map(({ label, desc }) => (
              <p key={label} className="py-5 text-sm leading-relaxed text-[#4a4a6a]">
                <span className="font-semibold text-[#1a1a2e]">{label}</span> {desc}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="bg-[#060913] px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-16 text-center border-2 border-[#0CBFFF]/30"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(12,191,255,0.18) 0%, rgba(11,17,32,0.6) 60%, rgba(6,9,19,0.9) 100%)",
            }}
          >
            <h2 className="font-['Inter'] text-2xl font-bold text-white sm:text-3xl">
              Ready to join our forex trading community?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-slate-400 sm:text-base">
              Connect with forex traders worldwide and accelerate your trading education.
            </p>
            <Link href="https://web.mygtc.app/login/register?ref=afbbUKvf">
              <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
