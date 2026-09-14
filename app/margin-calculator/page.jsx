import { generateMetadata } from "@/lib/seo-config";
import FAQItem from "../components/FAQItem";
import FeatureCard from "../components/FeatureCard";
import MarginCalculator from "../components/MarginCalculator";
import Link from "next/link";

export const metadata = generateMetadata('marginCalculator');

export default function MarginCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0a1420] ">
      <div className="max-w-[1180px] mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mb-10 ">
          <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-4">
            FREE FOREX TRADING TOOL
          </span>
          <h1 className="font-poppins font-semibold text-white text-[clamp(2rem,4vw,2.9rem)] leading-[1.15] max-w-[14ch] mb-2">
            Margin Calculator
          </h1>
          <p className="text-[#a9b7c8] max-w-[58ch] text-[1.05rem] leading-[1.7]">
            Check exactly how much margin a position will lock up before you
            open it, so you always know what's left as free margin.
          </p>
        </div>

        {/* Calculator */}
        <MarginCalculator />
      </div>

      <section className="py-[70px] bg-[#060c17]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[640px] mb-[42px]">
            <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-[14px]">
              WHY IT MATTERS
            </span>
            <h2 className="font-poppins font-semibold text-white text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15]">
              Margin isn't a fee — it's collateral your broker holds
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              number="1"
              title="Avoid margin calls"
              description="Know your used margin upfront so a string of open trades doesn't quietly eat your free margin."
            />
            <FeatureCard
              number="2"
              title="Compare leverage levels"
              description="See exactly how much less margin the same trade needs at 1:200 versus 1:50 before you decide."
            />
            <FeatureCard
              number="3"
              title="Plan multiple positions"
              description="Check the margin for each pair you're considering so you can size a whole portfolio of trades sensibly."
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
              Margin calculator — common questions
            </h2>
          </div>

          <div className="max-w-[760px]">
            <FAQItem
              question="What's the difference between margin and leverage?"
              answer="Leverage is the ratio your broker offers (e.g. 1:100). Margin is the actual amount of money — in your account currency — that gets set aside to open a position at that leverage."
              isOpen={true}
            />
            <FAQItem
              question="What happens if I don't have enough free margin?"
              answer="Your broker's platform won't let the trade open, or if your existing trades move against you enough to breach the margin requirement, you may face a margin call or automatic position closeout — check your broker's specific policy."
            />
            <FAQItem
              question="Does higher leverage mean lower risk?"
              answer="No — leverage changes how much margin a trade requires, not the size of the trade itself. Your pip value and total risk exposure stay identical regardless of leverage."
            />
            <FAQItem
              question="Is this the exact margin my broker will charge?"
              answer="This calculator uses indicative reference rates for learning purposes. Always check your broker's platform for the precise margin requirement before opening a live position."
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0f1a2b] to-[#060c17] border-t border-[rgba(255,255,255,0.08)] py-14 text-center">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="font-poppins font-semibold text-white text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] mb-2.5">
           Understand leverage before you use it
          </h2>
          <p className="text-[#a9b7c8] max-w-[50ch] mx-auto leading-[1.7] mb-6">
            Our free Risk Management module covers margin, leverage, and position sizing from the ground up — taught by mentors with real market experience.
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
