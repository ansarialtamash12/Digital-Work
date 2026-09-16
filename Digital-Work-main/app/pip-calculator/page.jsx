import { generateMetadata } from "@/lib/seo-config";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import PipCalculator from "../components/PipCalculator";
import FAQItem from "../components/FAQItem";
import FeatureCard from "../components/FeatureCard";

export const metadata = generateMetadata('pipCalculator');

export default function PipCalculatorPage() {
  return (
    <main>
      <HeroSection
        eyebrow="FREE FOREX TRADING TOOL"
        title="Pip Calculator"
        description="Find out exactly what one pip is worth on any currency pair, in your own account currency, before you place the trade — not after."
      >
        <PipCalculator />
      </HeroSection>
     
      <section className="py-[70px] bg-[#060c17]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[640px] mb-[42px]">
            <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-[14px]">
              WHY IT MATTERS
            </span>
            <h2 className="font-poppins font-semibold text-white text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15]">
              Pip value is the first number every risk plan needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              number="1"
              title="Position sizing"
              description="Work backwards from the amount you're willing to risk to the exact lot size that matches it."
            />
            <FeatureCard
              number="2"
              title="Stop-loss planning"
              description="Convert a stop-loss distance in pips into a real monetary figure before you enter the trade."
            />
            <FeatureCard
              number="3"
              title="Comparing pairs"
              description="Pip value differs across pairs — check it whenever you trade something outside your usual majors."
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
              Pip calculator — common questions
            </h2>
          </div>

          <div className="max-w-[760px]">
            <FAQItem
              question='What exactly is a pip?'
              answer="A pip (percentage in point) is the standard unit of price movement in forex. For most currency pairs it's the fourth decimal place (0.0001); for pairs quoted in Japanese yen, it's the second decimal place (0.01)."
              isOpen={true}
            />
            <FAQItem
              question="Why does pip value change between currency pairs?"
              answer="Pip value depends on the quote currency of the pair and the current exchange rate back into your account currency. That's why the same 0.1 lot position can be worth a different amount on EUR/USD versus GBP/JPY."
            />
            <FAQItem
              question="Does this calculator use live exchange rates?"
              answer="It uses indicative reference rates intended for learning and planning. For the exact pip value on a live position, always check the figure shown on your broker's trading platform."
            />
            <FAQItem
              question="How do I use pip value to manage risk?"
              answer="Multiply your stop-loss distance in pips by the pip value to see the exact amount at risk in your account currency, then size your position so that figure matches the amount you're comfortable risking."
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0f1a2b] to-[#060c17] border-t border-[rgba(255,255,255,0.08)] py-14 text-center">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="font-poppins font-semibold text-white text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] mb-2.5">
            Want to understand the "why" behind these numbers?
          </h2>
          <p className="text-[#a9b7c8] max-w-[50ch] mx-auto leading-[1.7] mb-6">
           Our free Risk Management module walks through position sizing and pip math step by step, taught by mentors with 20+ years in the market.
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
  );
}
