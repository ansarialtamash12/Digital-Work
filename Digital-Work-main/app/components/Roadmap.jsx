"use client";

const STOPS = [
  {
    idx: "01",
    title: "Forex Market Fundamentals",
    body: "Build a strong foundation by learning how the forex market operates with Forpips. Understand currency pairs, pip values, lot sizes, and the factors that influence price movements.",
  },
  {
    idx: "02",
    title: "Technical Analysis",
    body: "Master the art of reading price charts using technical indicators, candlestick patterns, support and resistance levels, and trend analysis to identify potential trading opportunities.",
  },
  {
    idx: "03",
    title: "Fundamental Analysis",
    body: "Discover how global economic events, central bank policies, interest rates, inflation, and financial news impact currency prices and the market landscape.",
  },
  {
    idx: "04",
    title: "Risk Management",
    body: "Protect your trading capital with proven risk management techniques. Learn position sizing, stop-loss placement, and strategies for preserving long-term profitability.",
  },
  {
    idx: "05",
    title: "Trading Mindset",
    body: "Develop the discipline required for consistent trading success. Learn how to control emotions, manage stress, and stick to a defined trading plan.",
  },
  {
    idx: "06",
    title: "Practical Market Trading",
    body: "Use your trading knowledge in real market conditions through hands-on trading experience. Refine your strategies and build confidence with practical market analysis.",
  },
  {
    idx: "07",
    title: "Become a Successful IB",
    body: "Take your expertise beyond trading by joining the Introducing Broker (IB) program. Learn how to build a referral network and earn recurring IB commissions.",
  },
];

export default function Roadmap() {
  return (
    <section className="w-full overflow-hidden bg-[#071625] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* ================================
            HEADING
        ================================= */}

        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]">
            The Forpips Learning Roadmap
          </h2>

          <p className="mt-4 text-base font-medium text-[#91A8C0] sm:text-lg lg:text-xl">
            Your Step-by-Step Path to Becoming a Confident Trader &
            Introducing Broker
          </p>

          <p className="mx-auto mt-4 max-w-[760px] text-sm leading-7 text-[#7891AB] sm:text-[15px]">
            Start smart, trade confidently. Master the fundamentals step by
            step, unlock advanced strategies, and build the skills to become
            a successful trader and Introducing Broker (IB).
          </p>
        </div>

        {/* =================================================
            DESKTOP
        ================================================== */}

        <div className="relative mt-14 hidden lg:block">

          {/* ================================
              GRAPH
          ================================= */}

          <div className="relative h-[225px] w-full">

            <svg
              viewBox="0 0 1400 225"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="roadmapGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#3DC8FA"
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="100%"
                    stopColor="#3DC8FA"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {/* Graph Area */}

              <path
                d="
                  M35 190
                  L255 155
                  L475 170
                  L695 105
                  L915 125
                  L1135 55
                  L1365 15
                  L1365 225
                  L35 225
                  Z
                "
                fill="url(#roadmapGradient)"
              />

              {/* Graph Line */}

              <path
                d="
                  M35 190
                  L255 155
                  L475 170
                  L695 105
                  L915 125
                  L1135 55
                  L1365 15
                "
                fill="none"
                stroke="#3DC8FA"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}

              <g fill="#3DC8FA">
                <circle cx="35" cy="190" r="5" />
                <circle cx="255" cy="155" r="5" />
                <circle cx="475" cy="170" r="5" />
                <circle cx="695" cy="105" r="5" />
                <circle cx="915" cy="125" r="5" />
                <circle cx="1135" cy="55" r="5" />
                <circle cx="1365" cy="15" r="6" />
              </g>
            </svg>
          </div>

          {/* ================================
              CARDS
          ================================= */}

          <div className="relative z-10 -mt-[10px] grid grid-cols-7 gap-4">

            {STOPS.map((stop) => (
              <article
                key={stop.idx}
                className="
                  group
                  flex
                  h-[345px]
                  flex-col
                  rounded-[17px]
                  border
                  border-[#344F69]
                  bg-[#1A3046]
                  px-4
                  py-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#3DC8FA]/50
                  hover:bg-[#1D354C]
                "
              >

                {/* Number */}

                <div className="font-mono text-[15px] font-bold text-[#32C5FF]">
                  {stop.idx}
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-3
                    min-h-[42px]
                    text-[14px]
                    font-bold
                    leading-[21px]
                    text-white
                  "
                >
                  {stop.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-[12px]
                    leading-[20px]
                    text-[#91AAC3]
                  "
                >
                  {stop.body}
                </p>

              </article>
            ))}

          </div>
        </div>

        {/* =================================================
            TABLET / MOBILE
        ================================================== */}

        <div className="mt-12 lg:hidden">

          <div className="relative">

            {/* Timeline */}

            <div
              className="
                absolute
                bottom-0
                left-[17px]
                top-0
                w-[2px]
                bg-[#3DC8FA]/25
              "
            />

            <div className="space-y-6">

              {STOPS.map((stop) => (
                <div
                  key={stop.idx}
                  className="relative flex items-start gap-4"
                >

                  {/* Number */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#3DC8FA]/40
                      bg-[#071625]
                      font-mono
                      text-[10px]
                      font-bold
                      text-[#3DC8FA]
                    "
                  >
                    {stop.idx}
                  </div>

                  {/* Card */}

                  <article
                    className="
                      flex-1
                      rounded-2xl
                      border
                      border-[#344F69]
                      bg-[#1A3046]
                      p-5
                    "
                  >
                    <h3 className="text-sm font-bold leading-5 text-white">
                      {stop.title}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-[#91AAC3]">
                      {stop.body}
                    </p>
                  </article>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}