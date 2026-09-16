"use client";

import { ArrowRight, Award, Users } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";
import Strip from '@/app/components/Strip';
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home"
      className="relative bg-navy-950 pb-4 pt-12 text-white sm:pb-2 sm:pt-24 position-big-div">
      {/* Background SVG */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-[300px] w-full opacity-70 sm:h-[420px]"
        viewBox="0 0 1400 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,360 L80,340 L160,368 L240,300 L320,320 L400,250 L480,270 L560,190 L640,220 L720,150 L800,175 L880,110 L960,140 L1040,80 L1120,105 L1200,55 L1280,90 L1400,20 L1400,420 L0,420 Z"
          fill="url(#heroFade)"
        />
        <path
          d="M0,360 L80,340 L160,368 L240,300 L320,320 L400,250 L480,270 L560,190 L640,220 L720,150 L800,175 L880,110 L960,140 L1040,80 L1120,105 L1200,55 L1280,90 L1400,20"
          fill="none"
          stroke="#0EA5E9"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-10">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
            All-in-One Forex &amp; IB Education
          </span>
          <h1 className="mt-5 text-[clamp(28px,5vw,58px)] leading-[1.1] mb-5 tracking-tight font-['Inter']">
            Unlock Your Trading
            <br />
            Potential and Start
            <br />
            Your Journey as a
            <br />
            Successful
            <br />
            <span className="text-accent-light text-[#02C0FC]">Introducing Broker</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Gain a solid understanding of forex trading, from market
            fundamentals and leverage to effective trading strategies. Expand
            your knowledge while discovering how IB Commission works and how
            becoming an Introducing Broker can create additional earning
            opportunities. Connect with the Forpips team today and take the
            next step in your trading journey.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="https://www.youtube.com/@forpipsEducation"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]"
            >
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.mygtc.app/login/register?ref=afbbUKvf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#02BFFD] hover:shadow-[0_0_15px_rgba(2,191,253,0.35)]"
            >
              Become an Introducing Broker
            </Link>
          </div>
        </div>

        {/* Right Content - Chart with Badges */}
        <div className="relative">
          {/* Chart Card - Bigger padding and border-radius */}
          <div className="rounded-3xl border border-white/10 bg-navy-800/80 p-4 sm:p-5 shadow-2xl backdrop-blur overflow-auto">
            {/* Chart Header */}
            <div className="mb-3 flex items-center gap-2 px-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 rounded-full bg-white/5 px-3 py-1 text-xs text-muted">
                Live Trading Chart
              </span>
            </div>

            {/* Chart */}
            <div className="h-[300px] sm:h-[400px] lg:h-[450px]">
              <TradingViewWidget />
            </div>

            {/* "World markets by TradingView" */}
            <div className="mt-2 text-center text-[10px] text-muted/60">
              World markets by TradingView
            </div>
          </div>

          {/* Desktop floating badge - Left (20+ yrs) */}
          <div className="animate-float absolute -left-4 -top-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/90 px-4 py-3 text-xs shadow-card backdrop-blur lg:flex xl:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-light">
              <Award className="h-4 w-4" />
            </span>
            <div>
              <strong className="block text-sm text-white">20+ YRS</strong>
              <span className="text-muted">Mentor Experience</span>
            </div>
          </div>

          {/* Desktop floating badge - Right (18,000+) */}
          <div
            className="animate-float absolute -bottom-6 -right-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/90 px-4 py-3 text-xs shadow-card backdrop-blur lg:flex xl:flex"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-light">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <strong className="block text-sm text-white">18,000+</strong>
              <span className="text-muted">Students Taught</span>
            </div>
          </div>

          {/* Mobile badges - shown below chart */}
          <div className="mt-6 flex flex-col gap-3 sm:hidden lg:hidden">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/90 px-4 py-3 text-xs shadow-card backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-light">
                <Award className="h-4 w-4" />
              </span>
              <div>
                <strong className="block text-sm text-white">20+ yrs</strong>
                <span className="text-muted">mentor experience</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/90 px-4 py-3 text-xs shadow-card backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-light">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <strong className="block text-sm text-white">18,000+</strong>
                <span className="text-muted">students taught</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <div className="position-strip">
        <Strip />
      </div>
    </section>
  );
}