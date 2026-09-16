"use client";

const STEPS = [
  { n: "01", label: "Join Free", h: 26 },
  { n: "02", label: "Learn & Master", h: 38 },
  { n: "03", label: "Open Broker Account", h: 50 },
  { n: "04", label: "Refer Traders", h: 64 },
  { n: "05", label: "Earn Commission", h: 76 },
  { n: "06", label: "Grow Network", h: 90 },
  { n: "07", label: "Long-Term Income", h: 108 },
];

export default function Journey() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        {/* Header */}
        <div>
          <div className="flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0CBFFF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0CBFFF] sm:text-[13px]">
              Your Seven Step Journey
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#1a1a2e] sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl font-['Inter']">
            Becoming an <span className="text-[#0CBFFF]">Introducing Broker (IB)</span>
          </h2>

          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-5 sm:text-base md:text-lg">
            Follow these 7 simple steps to start your journey as an Introducing Broker.
          </p>
        </div>

        {/* Desktop Chart - Bigger and clearer */}
        <div className="hidden mt-10 sm:mt-12 lg:mt-16 sm:flex items-end justify-center gap-4 sm:gap-8 lg:gap-12">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center">
              {/* Bar */}
              <div className="flex h-[140px] w-8 items-end sm:h-[160px] sm:w-10 lg:w-25">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-[#0CBFFF] to-[#0CBFFF]/60 shadow-lg shadow-[#0CBFFF]/20 transition-all duration-300 hover:shadow-[#0CBFFF]/40 hover:scale-y-105 origin-bottom"
                  style={{ height: `${s.h}px` }}
                />
              </div>
              {/* Step Number */}
              <span className="mt-3 font-mono text-xs font-bold text-[#0CBFFF] sm:text-sm lg:text-base">
                {s.n}
              </span>
              {/* Step Label */}
              <div className="mt-1 text-[10px] font-semibold leading-tight text-[#1a1a2e] sm:text-xs lg:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mt-8 space-y-3 sm:hidden">
          {STEPS.map((s) => (
            <div key={s.n} className="flex items-center gap-4 rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-4 transition hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0CBFFF]/10 font-mono text-sm font-bold text-[#0CBFFF]">
                {s.n}
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-bold text-[#1a1a2e]">
                  {s.label}
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-[#0CBFFF]/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0CBFFF] to-[#0CBFFF]/60"
                    style={{ width: `${(s.h / 108) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}