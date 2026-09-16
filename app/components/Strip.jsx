"use client";

import { useState } from "react";

const marketGroups = [
  {
     
    cards: [
      {
        symbol: "XPTUSD",
        price: "1756.13",
        bid: "1752.13",
        ask: "1760.12",
        icon: "◈",
        iconStyle: "bg-slate-200 text-slate-500",
      },
      {
        symbol: "XAGUSD",
        price: "65.138",
        bid: "65.123",
        ask: "65.153",
        icon: "◈",
        iconStyle: "bg-slate-200 text-slate-500",
      },
      {
        symbol: "XAUAUD",
        price: "6905.44",
        bid: "6901.48",
        ask: "6909.41",
        icon: "▰",
        iconStyle: "bg-[#d6a800] text-white",
      },
      {
        symbol: "XAUCHF",
        price: "4335.21",
        bid: "4331.18",
        ask: "4339.42",
        icon: "▥",
        iconStyle: "bg-[#fff5cc] text-[#d6a800]",
      },
    ],
  }, 
];

function TickerCard({ item }) {
  return (
    <article className="flex w-[270px] shrink-0 items-center justify-between rounded-[24px] bg-white px-5 py-3 shadow-[0_0px_5px_rgba(15,23,42,0.11)] 
    ring-1 ring-slate-100 sm:w-[290px]">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold ${item.iconStyle}`}
        >
          {item.icon}
        </div>

        <p className="text-sm font-semibold text-[#2e2e34]">
          {item.symbol}
        </p>
      </div>

      <div className="text-right">
        <p className="flex items-center justify-end gap-1 text-base font-bold text-emerald-600">
          {item.price}
          <span className="text-sm leading-none">↑</span>
        </p>

        <p className="mt-1 whitespace-nowrap text-xs font-semibold">
          <span className="text-red-500">{item.bid}</span>
          <span className="mx-1 text-slate-300">/</span>
          <span className="text-emerald-600">{item.ask}</span>
        </p>
      </div>
    </article>
  );
}

export default function MarketStrip() {
  const [activeTab, setActiveTab] = useState("metals");

  const activeMarket =
    marketGroups.find((market) => market.id === activeTab) ?? marketGroups[0];

  const loopCards = [...activeMarket.cards, ...activeMarket.cards];

  return (
    <>
      <section className="w-full sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px]">
          
          {/* Right → Left infinite cards slider */}
          <div className="w-full overflow-hidden">
            <div
              key={activeMarket.id}
              className="flex w-max gap-4 px-4 [animation:slideLeft_24s_linear_infinite] hover:[animation-play-state:paused] sm:px-5"
            >
              {loopCards.map((item, index) => (
                <TickerCard key={`${item.symbol}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .\\[animation\\:slideLeft_24s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}