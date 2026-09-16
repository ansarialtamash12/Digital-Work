import { generateMetadata } from "@/lib/seo-config";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import FAQItem from "../components/FAQItem";
import TradingViewWidget from "../components/TradingViewWidget2";

export const metadata = generateMetadata('economicCalendar');
// ============ MAIN PAGE COMPONENT ============
export default function EconomicCalendar() {
  return (
    <>
      <main>
        <HeroSection
          eyebrow="LIVE ECONOMIC CALENDAR"
          title="Economic Calendar"
          description="See every high, medium and low impact release for the week, live — the same events our weekly market analysis is built around."
        >
          <TradingViewWidget
            widgetType="economic-calendar"
            height="600px"
            countryFilter="us,eu,gb,jp,au,ca,nz,ch"
            importanceFilter="-1,0,1"
          />
        </HeroSection>
        <section className="py-[70px] bg-[#060c17]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="max-w-[640px] mb-[42px]">
              <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-[14px]">
                HOW TO READ IT
              </span>
              <h2 className="font-poppins font-semibold text-white text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15]">
                Read the calendar like a fundamentals trader
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard
                number="1"
                title="Filter by impact"
                description="Focus on high-impact, red-flagged events first — they're the ones most likely to move price sharply."
              />
              <FeatureCard
                number="2"
                title="Compare forecast vs. previous"
                description="The market usually reacts to the surprise — how far the actual figure lands from the forecast, not the number alone."
              />
              <FeatureCard
                number="3"
                title="Plan around the release"
                description="Many traders widen stops or step aside just before major releases, then reassess once volatility settles."
              />
            </div>
          </div>
        </section>

        <section className="px-0 pt-[70px] pb-[88px]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="max-w-[640px] mb-[42px]">
              <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-[14px]">
                FAQ
              </span>
              <h2 className="font-poppins font-semibold text-white text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15]">
               Economic calendar — common questions
              </h2>
            </div>

            <div className="max-w-[760px]">
              <FAQItem
                question='What counts as a "high-impact" event?'
                answer="High-impact events are releases historically shown to move currency prices significantly — think central bank interest rate decisions, non-farm payrolls, and CPI inflation data."
                isOpen={true}
              />
              <FAQItem
                question="Should I trade during high-impact news?"
                answer="It's higher risk: spreads widen and price can whip in both directions within seconds. Many traders reduce position size or wait until the initial volatility passes before entering."
              />
              <FAQItem
                question="What time zone are events shown in?"
                answer="The calendar widget automatically displays times based on your device and browser settings."
              />
              <FAQItem
                question="Where can I get a plain-language read on the week's events?"
                answer="Our weekly market analysis on the homepage breaks down the events most likely to affect open positions in simple language, updated every week."
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0f1a2b] to-[#060c17] border-t border-[rgba(255,255,255,0.08)] py-14 text-center">
          <div className="max-w-[1180px] mx-auto px-6">
            <h2 className="font-poppins font-semibold text-white text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] mb-2.5">
              Want the calendar explained, not just displayed?
            </h2>
            <p className="text-[#a9b7c8] max-w-[50ch] mx-auto leading-[1.7] mb-6">
              Our Economic Calendar & Events course covers how to interpret releases and trade around volatility with confidence.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                href="https://www.youtube.com/@forpipsEducation"
                className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full font-semibold text-[0.95rem] bg-[#29abe2] text-[#04131c] hover:bg-[#3fc1f0] transition-all"
              >
                Start Learning Free
              </Link>
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full font-semibold text-[0.95rem] bg-transparent border border-[rgba(255,255,255,0.14)] text-white hover:border-[#29abe2] transition-all"
              >
                Explore the Academy
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
