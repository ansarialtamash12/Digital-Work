"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Is Forpips a forex broker?",
    a: "No, Forpips is not a forex broker. It is a forex trading education platform for those who want to step into this market. Our primary aim is to teach you how to trade and how to build an IB business.",
  },
  {
    q: "What do you mean by an Introducing Broker (IB)?",
    a: "An Introducing Broker (IB) is an individual or business that refers new traders to a forex broker and earns commission on their trading activity. It is an established role in the forex industry, and Forpips teaches you how to do it properly and compliantly.",
  },
  {
    q: "Is education actually free on Forpips?",
    a: "Yes, every course offered by Forpips is completely free. Our platform is funded through IB partnerships, so we can teach without charging fees to enthusiasts.",
  },
  {
    q: "Do I need trading experience to begin?",
    a: "Not at all. To start your journey, you don't need prior experience or a degree — just a basic willingness to learn and build understanding of the market step by step.",
  },
  {
    q: "How much money can I make as an IB?",
    a: "Your IB earnings depend on your broker's commission structure and the trading activity of the traders you refer. There is no fixed figure. Forpips can help you find reliable brokers, but does not promise fixed earnings.",
  },
  {
    q: "Which broker should I choose?",
    a: "We don't push a single broker, since each one has different rules and regulations. Our team can help you understand regulation, spreads, execution, and withdrawal history so you can choose a broker that fits your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent sm:text-xs">
            FAQs
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-900 sm:mt-3 sm:text-3xl lg:text-4xl font-['Inter']">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-8 space-y-3 sm:mt-10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-navy-700/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-navy-900 sm:gap-4 sm:px-5 sm:py-4"
                >
                  <span className="text-[13px] sm:text-sm">{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-7 sm:w-7">
                    {isOpen ? (
                      <Minus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    ) : (
                      <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-3.5 text-[13px] leading-relaxed text-slateink/80 sm:px-5 sm:pb-4 sm:text-sm">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
