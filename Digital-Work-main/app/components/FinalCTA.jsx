import { ArrowRight } from "lucide-react";
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="bg-navy-950 py-16 text-white sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-navy-800/60 px-6 py-10 text-center sm:px-8 sm:py-12 lg:px-14 lg:py-14">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl font-['Inter']">
            Ready to start your trading journey?
          </h2>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base">
            Learn forex trading for free and build your career with Forpips.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link href="https://www.youtube.com/@forpipsEducation" target="_blank"
            
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]"
            >
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="https://t.me/+bjtMg5b1kC5mY2U0" target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#02BFFD] hover:shadow-[0_0_15px_rgba(2,191,253,0.35)]"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
