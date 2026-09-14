import { generateMetadata } from "@/lib/seo-config";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import FAQItem from "../components/FAQItem";
import TradingViewWidget from "../components/TradingViewWidget2";

export const metadata = generateMetadata('currencyStrengthMeter');


// ============ MAIN PAGE COMPONENT ============
export default function CurrencyStrengthMeter() {
  return (
    <>
      <main>
        <HeroSection
          eyebrow="LIVE FOREX TRADING TOOL"
          title="Currency Strength Meter"
          description="See which major currencies are strongest and weakest right now, and spot pairs where that strength and weakness line up."
        >
          <TradingViewWidget
            widgetType="forex-heat-map"
            height="560px"
            currencies={[
              "EUR",
              "USD",
              "JPY",
              "GBP",
              "CHF",
              "AUD",
              "CAD",
              "NZD",
            ]}
          />
        </HeroSection>
        <section className="py-[70px] bg-[#060c17]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="max-w-[640px] mb-[42px]">
              <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-[14px]">
                HOW TO READ IT
              </span>
              <h2 className="font-poppins font-semibold text-white text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15]">
                Turn relative strength into a trade idea
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard
                number="1"
                title="Find the extremes"
                description="The strongest and weakest currencies on the map are the two legs of the pair most likely to be trending hardest."
              />
              <FeatureCard
                number="2"
                title="Avoid the middle"
                description="Two currencies sitting close in strength usually means their pair is range-bound or choppy — often best left alone."
              />
              <FeatureCard
                number="3"
                title="Confirm, don't predict"
                description="Use strength readings to confirm a setup you've already found on the chart, not as a signal on its own."
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
                Currency strength meter — common questions
              </h2>
            </div>

            <div className="max-w-[760px]">
              <FAQItem
                question='What does "currency strength" actually measure?'
                answer="It measures how a currency is performing against a basket of other major currencies over a chosen period, rather than against just one pair — giving a broader read on demand for that currency."
                isOpen={true}
              />
              <FAQItem
                question="How do I turn this into a pair to watch?"
                answer="Pairing the strongest currency against the weakest currency on the map often produces the pair with the clearest directional trend at that moment."
              />
              <FAQItem
                question="Should I trade purely off strength readings?"
                answer="It's best used alongside price action and your own analysis, not as a standalone signal — treat it as one more piece of context before you decide."
              />
              <FAQItem
                question="How often does the strength data update?"
                answer="The heat map above refreshes with live market data, so it reflects current session activity rather than a fixed daily snapshot."
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0f1a2b] to-[#060c17] border-t border-[rgba(255,255,255,0.08)] py-14 text-center">
          <div className="max-w-[1180px] mx-auto px-6">
            <h2 className="font-poppins font-semibold text-white text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] mb-2.5">
              Learn to combine strength with structure
            </h2>
            <p className="text-[#a9b7c8] max-w-[50ch] mx-auto leading-[1.7] mb-6">
              Our Technical Analysis Essentials course covers how to line up
              strength, trend, and support/resistance before you take a trade.
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
