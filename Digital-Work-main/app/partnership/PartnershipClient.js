"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Image as ImageIcon,
  BarChart3,
  Headphones,
  BookOpen,
  Megaphone,
  Users,
  Globe,
  FileText,
  Wallet,
  ShieldCheck,
  Link2,
  Gift,
  TrendingUp,
  Award,
  Target,
  ChevronDown,
  ArrowRight,
  Landmark,
} from "lucide-react";

import Link from "next/link";

const features = [
  {
    icon: GraduationCap,
    title: "Forex & IB Training",
    desc: "Master trading, IB strategies & client acquisition",
  },
  {
    icon: ImageIcon,
    title: "IB Marketing Resources",
    desc: "Banners, landing pages & social media content",
  },
  {
    icon: BarChart3,
    title: "Wide IB Commission Opportunities",
    desc: "Recurring commissions & performance rewards",
  },
  {
    icon: Headphones,
    title: "Dedicated IB Support",
    desc: "Expert advice & step-by-step guidance",
  },
];

const toolkit = [
  {
    icon: BookOpen,
    title: "Learning Portal",
    desc: "Master forex trading skills, enhance IB fundamentals, get expert insights on client acquisition, and build business through structured guidance.",
  },
  {
    icon: Megaphone,
    title: "Promotional Materials",
    desc: "Leverage best quality visuals, landing pages, social media creatives, and promotional content to generate more referrals from across the globe.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Track record of every referral performance, monitor conversions, and access campaign results to make smarter business decisions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Receive dedicated support, expert advice, and step-by-step guidance from the Forpips professional team to help you expand your business.",
  },
];

const learnItems = [
  {
    title: "Forex Trading Essentials",
    desc: "Forex Market Fundamentals, Currency Pairs & Pip Calculation, Technical Analysis, Fundamental Analysis, Risk & Money Management, Trading Psychology",
  },
  {
    title: "Forex IB Business Mastery",
    desc: "What is an Introducing Broker?, Client Acquisition Strategies, Digital Marketing for IBs, Referral Funnel Optimization, Commission & Revenue Models, Scaling Your IB Business",
  },
  {
    title: "Meet the Experts",
    desc: "Learn from industry experts behind your IB success",
  },
];

const certChecklist = ["Forex & Stock Markets", "Risk Management", "Trading Psychology"];

const partnerAdv = [
  {
    title: "Forex & IB Training",
    items: ["Master forex trading", "Client acquisition", "Designed for both beginner and experienced partners", "Introducing strategies", "Commission models"],
  },
  {
    title: "IB Marketing Resources",
    items: ["With Forpips, promote your Forex IB services", "Landing pages", "Grow your IB business", "High-quality banners & marketing assets", "Social media content"],
  },
];

const audience = [
  { icon: Users, title: "Enthusiastic Traders" },
  { icon: FileText, title: "Content Creators" },
  { icon: Globe, title: "Website Owners" },
  { icon: GraduationCap, title: "Financial Educators" },
];

const steps = [
  { step: "01", action: "Apply to Become an IB", outcome: "Complete online application" },
  { step: "02", action: "Complete Your IB Training", outcome: "Access structured forex and IB training" },
  { step: "03", action: "Get Your Referral Link", outcome: "Receive your unique referral link" },
  { step: "04", action: "Refer & Earn Commissions", outcome: "Share link and earn recurring IB commissions" },
];

const commissionBenefits = ["Recurring commissions", "Performance rewards", "Proven strategies for passive income", "Reliable source of long-term income"];
const dedicatedSupport = ["Receive dedicated support", "Expert advice", "Step-by-step guidance from Forpips team", "Achieve long-term success"];

const experts = [
  { icon: TrendingUp, tag: "TRADING", title: "Forex Trading Experts", desc: "Master forex trading skills and IB fundamentals" },
  { icon: Target, tag: "STRATEGY", title: "Client Acquisition Specialists", desc: "Expert insights on client acquisition and business building" },
  { icon: Megaphone, tag: "MARKETING", title: "Marketing Resources Team", desc: "Promote your Forex IB services with high-quality assets" },
  { icon: Headphones, tag: "SUPPORT", title: "Dedicated Support Team", desc: "Expert advice and step-by-step guidance for your success" },
];

const journey = [
  { icon: FileText, title: "Apply to Become an IB", desc: "Complete online application with your details. The Forpips team will reach out and contact you." },
  { icon: BookOpen, title: "Complete Your IB Training", desc: "Access structured and Introducing Broker training to understand markets and referral strategies." },
  { icon: Link2, title: "Get Your Referral Link", desc: "After completing training, receive your unique referral link to start attracting new traders." },
  { icon: Gift, title: "Refer & Earn Commissions", desc: "Share your referral link, introduce traders to trusted broker partners, and earn recurring IB commissions." },
];

const faqs = [
  { q: "What is a Forex Introducing Broker (IB)?", a: "A Forex Introducing Broker (IB) is a partner who refers traders to a broker and earns commissions based on their referred clients' trading activity." },
  { q: "Who can join the Forex IB Partner Program?", a: "Traders, content creators, website owners, financial educators, and anyone with a network interested in forex can join the program." },
  { q: "Is there any fee to join the Forex IB Partner Program?", a: "No, joining the Forpips Forex IB Partner Program is completely free." },
  { q: "How do I earn Forex IB commissions?", a: "You earn commissions when traders you refer sign up and trade using your unique referral link." },
  { q: "Do I need trading experience to become an IB?", a: "No prior trading experience is required, though our training portal will help you understand the essentials." },
  { q: "Can I track my referrals and commissions?", a: "Yes, our analytics and reporting dashboard lets you track every referral and commission in real time." },
  { q: "How long does the approval process take?", a: "Approval is typically completed within a few business days after submitting your application." },
];

// Card component for consistency
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 ${className}`}>
    {children}
  </div>
);

function SectionEyebrow({ children }) {
  return (
    <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0CBFFF] mb-3">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0CBFFF]" />
      {children}
    </p>
  );
}

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-[#0CBFFF]/20 py-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-semibold text-[#1a1a2e]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#0CBFFF] transition-transform duration-300 cursor-pointer ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#4a4a6a] text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function PartnershipClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="font-sans bg-[#f8f9fa] text-[#1a1a2e]">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#0B1C33]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0CBFFF] mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0CBFFF]" />
              Forex IB Partner Program
            </p>
            <h1 className="text-4xl font-['Inter'] sm:text-5xl font-bold leading-tight text-white">
              Turn Your Network into Income with Our{" "}
              <span className="text-[#0CBFFF]">Forex IB Partner Program</span>
            </h1>
            <p className="mt-6 text-slate-300 max-w-lg leading-relaxed">
              Start your journey as a Forex Introducing Broker (IB). Learn how top
              traders earn competitive commissions, and build a successful forex
              partnership.
            </p>
            <Link href="https://t.me/gtcgofullsupport">
              <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">
                Apply for Partnership
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border-2 border-[#0CBFFF]/30 bg-[#0B1526] h-[380px] sm:h-[440px] overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line x1="24" y1="50" x2="58" y2="50" stroke="#475569" strokeWidth="0.4" strokeDasharray="2 2" />
                <line x1="58" y1="50" x2="76" y2="27" stroke="#0CBFFF" strokeWidth="0.4" />
                <line x1="58" y1="50" x2="84" y2="50" stroke="#0CBFFF" strokeWidth="0.4" />
                <line x1="58" y1="50" x2="78" y2="73" stroke="#0CBFFF" strokeWidth="0.4" />
              </svg>

              <div className="absolute left-[24%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 sm:h-32 sm:w-32 rounded-2xl bg-[#16233F] border-2 border-[#0CBFFF]/30 flex flex-col items-center justify-center gap-3 shadow-lg">
                <Landmark className="h-9 w-9 sm:h-10 sm:w-10 text-slate-300" strokeWidth={1.5} />
                <span className="text-[9px] sm:text-[10px] tracking-widest font-semibold bg-[#0CBFFF]/20 text-[#0CBFFF] px-2 py-0.5 rounded">
                  INSTITUTION
                </span>
              </div>

              <div className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#0CBFFF] flex items-center justify-center shadow-[0_0_45px_12px_rgba(12,191,255,0.35)]">
                <span className="text-[#0B1220] font-bold text-[10px] sm:text-xs tracking-wide text-center">
                  FORPIPS
                </span>
              </div>

              <div className="absolute left-[76%] top-[27%] -translate-x-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#16233F] border-2 border-[#0CBFFF]/30 flex items-center justify-center">
                <span className="text-[10px] sm:text-[11px] text-slate-200 font-medium">Cert.</span>
              </div>
              <div className="absolute left-[84%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#16233F] border-2 border-[#0CBFFF]/30 flex items-center justify-center">
                <span className="text-[10px] sm:text-[11px] text-slate-200 font-medium">Curr.</span>
              </div>
              <div className="absolute left-[78%] top-[73%] -translate-x-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#16233F] border-2 border-[#0CBFFF]/30 flex items-center justify-center">
                <span className="text-[10px] sm:text-[11px] text-slate-200 font-medium">Train.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURE STRIP ---------------- */}
      <div className="border-t border-[#0CBFFF]/20 bg-[#0B1C33]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-[#0CBFFF]/15 flex items-center justify-center">
                <Icon className="h-5 w-5 text-[#0CBFFF]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* ---------------- TOOLKIT ---------------- */}
      <section className="bg-[#f8f9fa] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow>What You Will Get</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e]">
              Forex IB Success Toolkit: Everything You Need to Grow as a
              Successful Forex IB Partner
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolkit.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div className="h-12 w-12 rounded-xl bg-[#0CBFFF] flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-2 font-['Inter'] transition-colors duration-300 group-hover:text-[#0CBFFF]">{title}</h3>
                <p className="text-sm text-[#4a4a6a] leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHAT YOU WILL LEARN ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionEyebrow>Road to Forex IB Learning</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mb-8">
              What You Will Learn in the IB Program
            </h2>
            <div className="space-y-7">
              {learnItems.map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-[#0CBFFF]/10 flex items-center justify-center mt-0.5">
                    <ShieldCheck className="h-5 w-5 text-[#0CBFFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e]">{title}</h3>
                    <p className="text-sm text-[#4a4a6a] mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-[#0B1C33] p-8">
            <div className="space-y-4">
              {certChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-[#132A47] rounded-xl px-5 py-4"
                >
                  <span className="text-white text-sm font-medium">{item}</span>
                  <div className="h-6 w-6 rounded-full bg-[#0CBFFF] flex items-center justify-center">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0B1C33]" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-dashed border-[#0CBFFF]/30 py-6 text-center">
              <p className="text-xs tracking-widest text-[#0CBFFF] uppercase">Certification Ready</p>
              <p className="text-white text-sm mt-1">Recognition on completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PARTNER ADVANTAGES ---------------- */}
      <section className="bg-[#f8f9fa] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <SectionEyebrow>Partner Advantages</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mb-4 text-left">
              Everything You Need to Succeed as a Forex IB Partner
            </h2>
            <p className="text-[#4a4a6a] leading-relaxed">
              We help forex IB partners with expert training, marketing tools, and
              ongoing support to build a successful referral business. Attract more
              traders, increase commissions, strengthen client relationships, and
              maximize your long-term earning potential with confidence, regardless
              of your market experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerAdv.map(({ title, items }) => (
              <Card key={title}>
                <h3 className="font-semibold text-[#1a1a2e] mb-5 transition-colors duration-300 group-hover:text-[#0CBFFF]">{title}</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#4a4a6a]">
                      <ShieldCheck className="h-4 w-4 text-[#0CBFFF] mt-0.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHO CAN PARTNER ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <SectionEyebrow>Who Can Partner</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mb-14">
            Ready to Grow as a Successful Forex IB?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <div className="h-12 w-12 rounded-xl bg-[#0CBFFF] flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-[#1a1a2e] text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="bg-[#f8f9fa] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mb-14">
            Start Your Forex IB Journey in Just Four Simple Steps
          </h2>
          <div className="bg-white rounded-2xl border-2 border-[#0CBFFF]/30 overflow-hidden text-left">
            <div className="hidden sm:grid grid-cols-[80px_1fr_1fr] bg-[#0B1C33] text-white text-xs font-semibold tracking-widest uppercase px-8 py-4">
              <span>Step</span>
              <span>Action</span>
              <span>Outcome</span>
            </div>
            {steps.map(({ step, action, outcome }) => (
              <div
                key={step}
                className="grid sm:grid-cols-[80px_1fr_1fr] px-8 py-6 border-b border-[#0CBFFF]/10 last:border-0 items-center"
              >
                <span className="text-xs font-bold text-[#0CBFFF]">{step}</span>
                <span className="text-sm font-medium text-[#1a1a2e]">{action}</span>
                <span className="text-sm text-[#4a4a6a]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ---------------- WIDE IB COMMISSION OPPORTUNITIES ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#0CBFFF]  text-xs font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-4">
              Wide IB Commission Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e] leading-tight">
              Boost your earning potential with recurring commissions and performance rewards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Commission Benefits Card */}
            <div className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
              <h3 className="text-2xl font-bold font-['Inter'] text-[#1a1a2e] mb-6">Commission Benefits</h3>
              <ul className="space-y-4">
                {commissionBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0CBFFF] text-white  flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[#4a4a6a] text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dedicated IB Support Card */}
            <div className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 md:delay-75">
              <h3 className="text-2xl font-bold font-['Inter'] text-[#1a1a2e] mb-6">Dedicated IB Support</h3>
              <ul className="space-y-4">
                {dedicatedSupport.map((support) => (
                  <li key={support} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0CBFFF] text-white flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[#4a4a6a] text-lg">{support}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1a2e] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-2xl border-2 border-[#0CBFFF]/30 px-6 py-8">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
  <div className="max-w-6xl mx-auto px-6 lg:px-10">
    <div className="bg-[#0B1C33] rounded-3xl border border-[#0CBFFF]/20 p-10 md:p-14 text-center shadow-xl">
      <h2 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-white mb-6 leading-tight">
        Unlock unlimited earning potential with our Forex IB Partner Program
      </h2>
      <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 text-sm md:text-base">
        Learn from industry experts, refer traders to trusted forex brokers, earn recurring IB commissions, and access premium education, exclusive marketing tools, and dedicated support to build a thriving, long-term forex business with confidence.
      </p>
      <Link href="https://t.me/gtcgofullsupport" target="_blank">
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]">
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </button>
      </Link>
    </div>
  </div>
</section>
    </div>
  );
}