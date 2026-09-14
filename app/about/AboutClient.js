"use client"

import React from 'react';
import {
  BookOpen, CheckCircle, Users, ShieldCheck,
  Calendar, Award, Globe
} from 'lucide-react';
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#0CBFFF]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#0CBFFF]" />
      {children}
    </span>
  );
}

export default function AboutClient() {

  // ---- Our Story graph data — replace with real yearly milestones ----
  // Each point is { x: 0-100, y: 0-100 (0 = bottom) }. The path below is
  // built from these so the line always matches the dots.
  const graphPoints = [
    { x: 4, y: 12 },
    { x: 20, y: 28 },
    { x: 38, y: 42 },
    { x: 56, y: 58 },
    { x: 76, y: 76 },
    { x: 96, y: 92 },
  ];
  const toSvgY = (y) => 100 - y; // flip so higher value = higher on screen
  const linePath = graphPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${toSvgY(p.y)}`)
    .join(' ');

  const values = [
    { icon: BookOpen, title: 'Learner First Approach', desc: 'Our learners are at the heart of everything we do. Our goal is to make forex education simple, clear, and useful for beginners as well as experienced learners, so they can explore the market easily.' },
    { icon: CheckCircle, title: 'Keep Learning', desc: 'The forex market is not static, it is always changing, so it becomes very important for our team to learn and adapt continuously. We are always improving our educational content and resources to help learners stay informed and understand new market concepts.' },
    { icon: Users, title: 'Growth Oriented ', desc: 'We are committed to helping you build a strong foundation in forex trading, from basic concepts to advanced topics, our learning journey supports your journey step by step.' },
    { icon: ShieldCheck, title: 'Practical & Simple Education', desc: 'We believe learning forex should not feel complicated, that is why we focus on easy explanations, practical examples, and useful resources that make complex forex trading concepts easier to understand. ' },
  ];

  const stats = [
    { icon: Calendar, value: '2023', label: '[Placeholder] Founded' },
    { icon: Users, value: '15,000+', label: 'Active learners' },
    { icon: Award, value: '50+', label: 'Expert educators' },
    { icon: Globe, value: '[X]+', label: '[Placeholder] Countries reached' },
  ];

  const milestones = [
    { year: '2025', title: 'Forpips Is Founded', desc: 'Forpips begins its journey with a vision to simplify forex education and help aspiring traders understand the market through clear, structured, and beginner-friendly learning.' },
    { year: '2025', title: 'Forex Curriculum Launches', desc: 'Our first structured forex trading courses go live, covering essential topics such as market basics, technical analysis, risk management, and trading psychology.' },
    { year: '2025', title: 'Stock Market & IB Academy Added', desc: 'As our learning community grows, we expand our educational offerings with new tracks covering the stock market and Introducing Broker (IB) education, giving learners more opportunities to develop their financial knowledge.' },
    { year: '2026', title: 'Community Reaches 15,000+ Learners', desc: 'Forpips reaches a major milestone as our learning community grows to more than 15,000 learners. This achievement motivates us to continue creating valuable, simple, and practical financial education for our growing community.' },
  ];

  const leaders = [
    { initials: 'FN', name: 'Mr. Ali', role: 'Founder & CEO', bio: 'Mr. Ali is a visionary entrepreneur and sales leader with expertise in business development, strategic partnerships, and revenue growth. He builds successful high tech businesses, leads high-performing teams, and creates sustainable growth through innovative sales strategies.' },
    { initials: 'CN', name: 'Mr. Khushal Sharma', role: 'Head of Education', bio: 'Mr. Khushal Sharma is an entrepreneur and forex educator with 10+ years of experience in business development, financial markets, and leadership. He helps traders build strong market knowledge, develop disciplined approaches, and understand global forex opportunities.' },
    { initials: 'ON', name: 'Akanksha Saxena', role: 'Head of Operations', bio: 'Ms. Akanksha Saxena is a seasoned entrepreneur, marketing leader, and financial markets mentor with 8+ years of experience in Forex, Web3, digital assets, business growth, and strategic marketing.' },
    { initials: 'CN', name: 'Mr. Baha', role: 'Head of Community', bio: 'Mr. Baha is a globally recognized marketing strategist and entrepreneur with 21+ years of experience in business growth, brand development, international markets, and strategy.' },
  ];

  return (
    <div className={`${spaceMono.variable} font-sans bg-white text-[#1a1a2e] antialiased`}>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0B1220] text-white pt-20 pb-28 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <SectionEyebrow>ABOUT FORPIPS</SectionEyebrow>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight mt-5">
            About Forpips - {" "}
            <span className="text-[#0CBFFF]">Making Forex Education Simple, Practical & Accessible</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed text-lg">
            Forpips is a forex education platform dedicated to making learning about forex trading simple and accessible. We provide easy-to-understand educational content, structured courses, practical resources, and guidance for learners. Our goal is to help aspiring traders build a strong foundation, understand the forex market better, and develop knowledge they can apply to their trading journey.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY SECTION ================= */}
      <section className="bg-[#f8f9fa] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>OUR STORY</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mt-4 mb-6">
              Empowering Every Trader Through Simple Forex Education
            </h2>
            <p className="text-[#4a4a6a] leading-relaxed mb-4">
              Forpips was established in 2025 with a simple vision: to make forex trading education easy for everyone. We noticed that many beginners struggled to find reliable learning resources and often felt upset by complex trading concepts. That is why we built a platform that simplifies forex education through structured courses, easy lessons, and practical learning materials, so that every type of trader can understand with any effort.
            </p>
            <p className="text-[#4a4a6a] leading-relaxed">
              Our journey started with a passion for helping aspiring traders gain the knowledge and confidence required to understand the forex market. Today, Forpips continues to support learners at every stage by providing quality forex trading education, expert insights, and resources designed to make learning more effective. We believe that with the right education, anyone can build a strong foundation and take the first step toward becoming a more profitable trader.
            </p>
          </div>

          {/* Graph card — Founded → Today line chart */}
          <div className="bg-[#0B1220] rounded-2xl p-8 h-64 md:h-80 relative shadow-xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#0CBFFF]/40 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full h-full">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* trend line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="#0CBFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#glow)"
                />

                {/* dots */}
                {graphPoints.map((p, i) => (
                  <circle key={i} cx={p.x} cy={toSvgY(p.y)} r="1.6" fill="#0CBFFF" stroke="#0B1220" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
                ))}
              </svg>

              <span className="absolute text-[10px] tracking-wide font-[family-name:var(--font-mono)] text-slate-500" style={{ left: `${graphPoints[0].x}%`, top: `${toSvgY(graphPoints[0].y)}%`, transform: 'translate(-4px, 14px)' }}>FOUNDED</span>
              <span className="absolute text-[10px] tracking-wide font-[family-name:var(--font-mono)] text-slate-500" style={{ left: `${graphPoints[graphPoints.length - 1].x}%`, top: `${toSvgY(graphPoints[graphPoints.length - 1].y)}%`, transform: 'translate(-34px, -22px)' }}>TODAY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VALUES ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionEyebrow>MISSION & VALUES</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mt-4 mb-4 text-center">
            What are the Core Values of Forpips?
          </h2>
          <p className="text-[#4a4a6a] text-center max-w-2xl mx-auto mb-12">
            At Forpips, our core values shape the way we teach, support, and help our learners to grow. We focus on simple learning, continuous improvement, practical knowledge, and learner success to make forex education more engaging, for everyone.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 text-center">
                <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:bg-[#0CBFFF]">
                  <Icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-2 font-['Inter'] transition-colors duration-300 group-hover:text-[#0CBFFF]">{title}</h3>
                <p className="text-sm text-[#4a4a6a] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BY THE NUMBERS ================= */}
      <section className="bg-[#0B1220] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionEyebrow>BY THE NUMBERS</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-white mt-4 mb-12">
            Where We Stand Today.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="h-14 w-14 rounded-full bg-[#0CBFFF]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-[#0CBFFF]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
                <div className="text-slate-400 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY SECTION ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <SectionEyebrow>OUR JOURNEY</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mt-4 mb-4">
                Milestones That Shape Forpips
              </h2>
              <p className="text-[#4a4a6a] text-sm">
                Every journey starts with an idea. At Forpips, our goal is simple: to make forex learning easy, practical, and open to everyone. From our beginning to building a growing learning community, every step shows our effort to make forex education better.
              </p>
            </div>

            <div className="md:w-2/3">
              {milestones.map((m, i) => (
                <div key={i} className={`relative pl-6 ${i !== milestones.length - 1 ? 'pb-8' : ''}`}>
                  {i !== milestones.length - 1 && (
                    <span className="absolute left-[5px] top-3 bottom-0 w-px bg-[#0CBFFF]/20" />
                  )}
                  <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#0CBFFF]" />
                  <div className="text-[11px] font-[family-name:var(--font-mono)] font-semibold text-[#0CBFFF] tracking-wide mb-1">[{m.year.replace(/[\[\]]/g, '')}]</div>
                  <h4 className="font-semibold text-[#1a1a2e] mb-1">{m.title}</h4>
                  <p className="text-sm text-[#4a4a6a]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="bg-[#f8f9fa] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionEyebrow>LEADERSHIP TEAM</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mt-4 mb-4">
            Meet the Minds Behind ForPips
          </h2>
          <p className="text-[#4a4a6a] mb-12 text-sm">
            Meet the passionate minds behind Forpi, traders, strategists, and innovators united by one vision: simplifying trading, empowering people, and building a smarter financial journey for everyone.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {leaders.map((p, i) => (
              <div key={i} className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 text-center">
                <div className="w-16 h-16 rounded-full bg-[#0CBFFF]/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
                  <span className="text-[#0CBFFF] font-bold text-lg transition-all duration-300 group-hover:text-white">{p.initials}</span>
                </div>
                <h4 className="font-semibold text-[#1a1a2e]">{p.name}</h4>
                <p className="text-xs text-[#0CBFFF] font-semibold tracking-wide uppercase mb-2">{p.role}</p>
                <p className="text-xs text-[#4a4a6a] leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEGAL / REGISTERED INFO ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionEyebrow>REGISTERED & COMPLIANT</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mt-4 mb-10">
            The Legal Basics.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-[#0CBFFF]/30 rounded-2xl p-8">
              <h3 className="font-semibold text-[#1a1a2e] mb-4">Company Details</h3>
              {[
                ['Legal name', '[Placeholder] ForPips LLC'],
                ['Registered office', 'Office 405, Warba Center, Al Muraqabad, Dubai, UAE'],
                ['Entity type', '[Placeholder] LLC'],
                ['Contact', 'education@forpips.com'],
              ].map(([label, value], i, arr) => (
                <div key={label} className={`flex justify-between items-center py-3 text-sm ${i !== arr.length - 1 ? 'border-b border-[#0CBFFF]/10' : ''}`}>
                  <span className="text-[#4a4a6a]">{label}</span>
                  <span className="text-[#1a1a2e] font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>

            <div className="border-2 border-[#0CBFFF]/30 rounded-2xl p-8">
              <h3 className="font-semibold text-[#1a1a2e] mb-4">What We Are — and Aren't</h3>
              {[
                ['We are', 'An education platform'],
                ['We are not', 'A broker or advisor'],
                ['We do not', 'Give trading signals'],
                ['We do not', 'Guarantee returns'],
              ].map(([label, value], i, arr) => (
                <div key={i} className={`flex justify-between items-center py-3 text-sm ${i !== arr.length - 1 ? 'border-b border-[#0CBFFF]/10' : ''}`}>
                  <span className="text-[#4a4a6a]">{label}</span>
                  <span className="text-[#1a1a2e] font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BOX ================= */}
      <section className="bg-[#0B1220] px-6 pt-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-3xl p-12 text-center border border-white/10 shadow-2xl relative overflow-hidden"
            style={{ background: 'radial-gradient(circle at 30% 20%, rgba(12,191,255,0.18), transparent 55%), #0f1a2e' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-white mb-2 relative z-10">Want to learn more about us?</h2>
            <p className="text-slate-400 mb-8 text-sm relative z-10">Reach out directly, or start exploring the curriculum this whole company is built around.</p>
            <div className="flex justify-center gap-4 flex-wrap relative z-10">
              <Link href="https://www.youtube.com/@forpipsEducation" target='_blank' className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">Start Learning Free</Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[0_0_15px_rgba(12,191,255,0.35)]">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}