import { Search, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const POINTS = [
  {
    icon: Search,
    title: "Help Traders Get Started",
    body: "As an Introducing Broker, you help new traders connect with a trusted brokerage and provide useful learning resources to support them as they start their trading journey.",
  },
  {
    icon: TrendingUp,
    title: "Earn IB Commissions",
    body: "Earn a consistent income through the IB commission model. Rather than charging your referrals directly, you earn commissions from the broker based on their trading activity.",
  },
  {
    icon: ShieldCheck,
    title: "Generate Long-Term Revenue",
    body: "It is one of the core advantages of IB commissions that they can continue as long as your referred clients remain active — building a strong, life-long income.",
  },
];

const STEPS = [
  { label: "Join Free", step: "Step 1" },
  { label: "Learn & Master Forex", step: "Step 2" },
  { label: "Open Broker Account", step: "Step 3" },
  { label: "Refer New Traders", step: "Step 4", highlight: true },
  { label: "Earn IB Commissions", step: "Step 5", highlight: true },
  { label: "Grow Your Network", step: "Step 6", highlight: true },
  { label: "Build Long-Term Income", step: "Step 7", highlight: true },
];

export default function IBSection() {
  return (
    <section id="ib" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:items-start">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent sm:text-xs">
            Become an Introducing Broker (IB)
          </span>
          <h2 className="mt-2 max-w-md text-[22px] font-extrabold leading-tight tracking-tight text-navy-900 sm:mt-3 sm:text-[28px] lg:text-4xl font-['Inter']">
            Transform Your Trading Knowledge into a Sustainable Income
          </h2>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-slateink/80 sm:mt-4 sm:text-[15px]">
            Once you have a good understanding of the forex trading market,
            you can grow beyond trading by becoming an Introducing Broker
            (IB). As an IB, you introduce new traders to a trusted and
            regulated broker and earn commissions based on their trading
            activity. If you are new in the forex market and want to
            kickstart your career, reach out to the Forpips team today.
          </p>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-3 sm:gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-11 sm:w-11">
                  <p.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy-900 sm:text-base">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slateink/80 sm:mt-1.5 sm:text-sm">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/gtcgofullsupport"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/5 sm:mt-8 sm:px-6 sm:py-3"
          >
            Learn About IB
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-2xl border border-navy-700/10 bg-navy-900 p-4 text-white shadow-card sm:p-6 lg:p-8">
          {/* Flow visual */}
          <svg
            className="mx-auto mb-4 w-full max-w-[280px] sm:max-w-md lg:mb-6"
            viewBox="0 0 460 130"
            aria-hidden="true"
          >
            <g stroke="#2C4568" strokeWidth="1.5" strokeDasharray="3 4" fill="none">
              <path d="M70,65 C130,65 130,25 190,25" />
              <path d="M70,65 C130,65 130,65 190,65" />
              <path d="M70,65 C130,65 130,105 190,105" />
            </g>
            <circle cx="55" cy="65" r="26" fill="#0EA5E9" />
            <text x="55" y="70" textAnchor="middle" fontWeight="700" fontSize="11" fill="#052934">
              YOU
            </text>
            <g fill="#16233F" stroke="#2C4568" strokeWidth="1.5">
              <circle cx="205" cy="25" r="15" />
              <circle cx="205" cy="65" r="15" />
              <circle cx="205" cy="105" r="15" />
            </g>
            <g fill="#8FA3C4">
              <circle cx="205" cy="25" r="4" />
              <circle cx="205" cy="65" r="4" />
              <circle cx="205" cy="105" r="4" />
            </g>
            <g stroke="#3DC8FA" strokeWidth="1.5" fill="none" opacity="0.8">
              <path d="M220,25 C300,25 340,65 400,65" />
              <path d="M220,65 L400,65" />
              <path d="M220,105 C300,105 340,65 400,65" />
            </g>
            <circle cx="410" cy="65" r="22" fill="none" stroke="#3DC8FA" strokeWidth="2" />
            <text x="410" y="60" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="9" fill="#3DC8FA">
              EARN
            </text>
            <text x="410" y="72" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="9" fill="#3DC8FA">
              $$
            </text>
          </svg>

          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-accent-light sm:mb-3 sm:text-xs">
            Your Seven Step Journey to Becoming an IB
          </div>
          <div className="divide-y divide-white/10">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="flex items-center justify-between py-2 text-xs sm:py-2.5 sm:text-sm"
              >
                <span className="text-white/90">{s.label}</span>
                <span
                  className={
                    s.highlight ? "font-semibold text-mint" : "text-muted"
                  }
                >
                  {s.step}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] leading-relaxed text-muted sm:mt-5 sm:text-xs">
            If you are new in the forex market and want to kickstart your
            career, reach out to the Forpips team today and start growing
            your capital.
          </p>
        </div>
      </div>
    </section>
  );
}
