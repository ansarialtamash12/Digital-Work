"use client";

import { memo, useState, useEffect, useRef } from "react";
import { Poppins, Space_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

function Icon({ type, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    mail: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 6l8 7 8-7" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
    send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />,
    community: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M7 15v-3a3 3 0 016 0v3M13 15v-2a2 2 0 014 0v2" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5M12 17h.01" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a4 4 0 018 0v2" />
      </>
    ),
    play: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="M10 9l5 3-5 3z" />
      </>
    ),
    warning: (
      <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="M20 6L9 17l-5-5" />,
  };

  return <svg {...common}>{icons[type]}</svg>;
}

function Badge3D({ type, size = "md" }) {
  const sizes = {
    sm: "h-11 w-11 rounded-[12px]",
    md: "h-12 w-12 rounded-[12px]",
  };
  const iconSize = size === "sm" ? 18 : 20;
  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-[#0CBFFF] text-white shadow-[0_6px_14px_rgba(12,191,255,0.35)] ${sizes[size]}`}
    >
      <Icon type={type} size={iconSize} />
    </div>
  );
}

function Eyebrow({ children, dark = false, center = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.25em] ${
        dark ? "text-[#0CBFFF]" : "text-[#0CBFFF]"
      } ${center ? "justify-center" : ""}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          dark ? "bg-[#0CBFFF]" : "bg-[#0CBFFF]"
        }`}
      />
      {children}
    </span>
  );
}

const touchCards = [
  {
    icon: "mail",
    title: "Email",
    lines: [
      <a
        key="email"
        className="font-semibold text-[#0CBFFF] hover:text-[#0CBFFF]/80"
        href="mailto:education@forpips.com"
      >
        education@forpips.com
      </a>,
      "We'll respond within 24-48 hours",
    ],
  },
  {
    icon: "globe",
    title: "Global Reach",
    lines: ["LLC, Office 405, Warba Center, Al Muraqabad, Dubai, UAE"],
  },
  {
    icon: "clock",
    title: "Office Hours",
    lines: ["Monday - Friday", "9:00 AM - 6:00 PM (GMT)"],
  },
  {
    icon: "chat",
    title: "WhatsApp",
    lines: [
      <a
        key="wa"
        className="font-semibold text-[#0CBFFF] hover:text-[#0CBFFF]/80"
        href="https://wa.me/+971566376773"
        target="_blank"
        rel="noopener noreferrer"
      >
        +971 56 637 6773
      </a>,
      "For quick questions on the go",
    ],
  },
];

const connectCards = [
  {
    icon: "send",
    title: "Telegram",
    desc: "Community & daily updates",
    link: "http://t.me/gtcgofullsupport",
    linkText: "Open →",
  },
  {
    icon: "chat",
    title: "WhatsApp",
    desc: "Direct line to our team",
    link: "https://wa.me/+971566376773",
    linkText: "Chat →",
  },
  {
    icon: "community",
    title: "Community",
    desc: "Ask fellow learners & mentors",
    link: "https://t.me/+bjtMg5b1kC5mY2U0",
    linkText: "Visit →",
  },
];

const inquiryCards = [
  {
    icon: "book",
    title: "Course & Enrollment Support",
    desc: "Have questions about our forex trading courses, learning paths, pricing, or enrollment? Our team is here to guide you.",
    pill: "~24-48h response",
  },
  {
    icon: "help",
    title: "Technical Support",
    desc: "Need help accessing your account, course materials, live sessions, or learning resources? We are ready to assist.",
    pill: "~24-48h response",
  },
  {
    icon: "briefcase",
    title: "Partnership Opportunities",
    desc: "Interested in collaborating with ForPips or exploring IB Commission, affiliate, or educational partnership opportunities? Let's connect.",
    pill: "2-4 week review",
  },
  {
    icon: "play",
    title: "General Inquiries",
    desc: "Have a general question about ForPips, our forex education platform, or any of our services? Looking forward to hearing from you.",
    pill: "~2-3 business days",
  },
];

const faqs = [
  {
    q: "What types of educational programs are offered by Forpips?",
    a: "We offer comprehensive educational programs in Forex trading, stock market analysis, technical analysis, fundamental analysis, risk management, and trading psychology. Our programme is designed for both beginner and experienced traders.",
  },
  {
    q: "Do Forpips provide financial advice or trading signals?",
    a: "No, our team is strictly focused only on education. We do not provide financial advice, investment recommendations, or trading signals. If someone is giving any financial advice on behalf of us, you can reach out to us anytime.",
  },
  {
    q: "How can I become a partner institution?",
    a: (
      <>
        To become a partner, you can easily visit our{" "}
        <a
          href="https://forpips.com/partnership"
          className="font-semibold text-[#0CBFFF] hover:text-[#0CBFFF]/80"
        >
          Academy Partnership Program
        </a>{" "}
        page to learn about eligibility criteria and benefits. You can submit
        an application through this contact form or email us directly.
      </>
    ),
  },
  {
    q: "Are courses suitable for beginners?",
    a: "Yes, we offer programs suitable for all levels of users, from complete beginners to intermediate learners. Our structured curriculum helps you progress at your own pace.",
  },
  {
    q: "What certifications do your instructors have?",
    a: (
      <>
        All our instructors hold professional certifications such as CFA,
        CMT, and FRM, with extensive real-world experience in financial
        markets. Visit our{" "}
        <a
          href="https://forpips.com/experts"
          className="font-semibold text-[#0CBFFF] hover:text-[#0CBFFF]/80"
        >
          Experts
        </a>{" "}
        page to learn more about our faculty.
      </>
    ),
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${delay}s` }}
      className={`translate-y-5 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

const ContactUs = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const successRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    const form = e.currentTarget;
    form.reset();
    successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setFormSuccess(false), 6000);
  };

  return (
    <main
      ref={sectionRef}
      className={`${poppins.variable} ${spaceMono.variable} w-full overflow-hidden bg-[#f8f9fa] font-[family-name:var(--font-poppins)] text-[#1a1a2e]`}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#070d1b] px-5 py-16 text-center md:min-h-[320px] md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-16 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#0CBFFF]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-[760px]">
          <Reveal className="mb-4 flex justify-center">
            <Eyebrow dark center>
              We&apos;re Here for You
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-[700px] text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[36px] md:text-[44px] font-['Inter']">
              Contact ForPips; We Are Here to Support Your Forex Learning
              Journey
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-[640px] text-[13px] leading-[1.75] text-slate-400 md:text-[14px]">
              Have questions about our forex trading courses? The ForPips
              team is always ready to assist you. Whether you are a beginner
              or an experienced trader, we are a dedicated team of
              professionals that provide the guidance and support you need
              to achieve your trading goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          GET IN TOUCH - Cards with #0CBFFF
      ========================================================= */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mb-10 max-w-[680px]">
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="mt-3 text-[22px] font-extrabold  leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[28px] font-['Inter']">
              Let&apos;s Connect and Take Your Forex Learning Journey to the
              Next Level
            </h2>
            <p className="mt-3 text-[13px] leading-[1.7] text-[#4a4a6a] md:text-[14px]">
              Get expert forex trading guidance, mentorship, courses, and
              responsive support from the ForPips team today.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {touchCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 0.06}
                className="group rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-6 shadow-[0_3px_16px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <Badge3D type={card.icon} size="sm" />
                <h3 className="mt-4 text-[14px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.7] text-[#4a4a6a]">
                  {card.lines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < card.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONNECT INSTANTLY - Cards with #0CBFFF
      ========================================================= */}
      <section className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mb-10 max-w-[680px]">
            <Eyebrow>Connect Instantly</Eyebrow>
            <h2 className="mt-3 text-[22px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[28px] font-['Inter']">
              Don&apos;t want to wait 24 hours?
            </h2>
            <p className="mt-3 text-[13px] leading-[1.7] text-[#4a4a6a] md:text-[14px]">
              These channels are usually faster for quick, informal questions
              than the contact form below.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {connectCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 0.08}
                className="group flex items-center justify-between gap-3 rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-5 shadow-[0_3px_16px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <div className="flex items-center gap-3">
                  <Badge3D type={card.icon} size="sm" />
                  <div>
                    <h3 className="text-[13px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#4a4a6a]">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[12px] font-bold text-[#0CBFFF] transition-all duration-300 hover:text-[#0CBFFF]/80 hover:translate-x-1"
                >
                  {card.linkText}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SEND US A MESSAGE
      ========================================================= */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-10 max-w-[680px] text-center">
            <Eyebrow center>Send Us a Message</Eyebrow>
            <h2 className="mt-3 text-[22px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[28px] font-['Inter']">
              Prefer to write it all out?
            </h2>
          </Reveal>

          <Reveal className="mx-auto max-w-[680px]">
            <div className="rounded-[16px] border-2 border-[#0CBFFF]/30 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 md:p-9">
              <div
                ref={successRef}
                className={`mb-5 flex items-center gap-2 rounded-[10px] bg-[#0CBFFF]/10 px-4 py-3 text-[12px] font-medium text-[#0CBFFF] transition-all ${
                  formSuccess
                    ? "max-h-24 opacity-100"
                    : "max-h-0 overflow-hidden p-0 opacity-0"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="shrink-0"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Thanks — your message has been queued. We&apos;ll reply
                within 24-48 hours.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-1.5 block text-[12px] font-bold text-[#1a1a2e]"
                      htmlFor="cf-name"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-[8px] border-2 border-[#0CBFFF]/30 bg-[#f8f9fa] px-3.5 py-2.5 text-[13px] text-[#1a1a2e] outline-none transition focus:border-[#0CBFFF] focus:bg-white focus:ring-2 focus:ring-[#0CBFFF]/20"
                      type="text"
                      id="cf-name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1.5 block text-[12px] font-bold text-[#1a1a2e]"
                      htmlFor="cf-email"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-[8px] border-2 border-[#0CBFFF]/30 bg-[#f8f9fa] px-3.5 py-2.5 text-[13px] text-[#1a1a2e] outline-none transition focus:border-[#0CBFFF] focus:bg-white focus:ring-2 focus:ring-[#0CBFFF]/20"
                      type="email"
                      id="cf-email"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="mb-1.5 block text-[12px] font-bold text-[#1a1a2e]"
                      htmlFor="cf-subject"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-[8px] border-2 border-[#0CBFFF]/30 bg-[#f8f9fa] px-3.5 py-2.5 text-[13px] text-[#1a1a2e] outline-none transition focus:border-[#0CBFFF] focus:bg-white focus:ring-2 focus:ring-[#0CBFFF]/20"
                      type="text"
                      id="cf-subject"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="mb-1.5 block text-[12px] font-bold text-[#1a1a2e]"
                      htmlFor="cf-message"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="min-h-[130px] w-full resize-y rounded-[8px] border-2 border-[#0CBFFF]/30 bg-[#f8f9fa] px-3.5 py-2.5 text-[13px] text-[#1a1a2e] outline-none transition focus:border-[#0CBFFF] focus:bg-white focus:ring-2 focus:ring-[#0CBFFF]/20"
                      id="cf-message"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]"
                    >
                      Send Message
                    </button>
                    <p className="mt-3 text-center text-[11px] leading-[1.6] text-[#4a4a6a]/60">
                      This form is a front-end preview — connect it to your
                      email service or backend to go live.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          COMMON INQUIRIES - Cards with #0CBFFF
      ========================================================= */}
      <section className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-10 max-w-[680px] text-center">
            <Eyebrow center>Common Inquiries</Eyebrow>
            <h2 className="mt-3 text-[22px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[28px] font-['Inter']">
              Find the Right Team for Your Questions
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inquiryCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 0.08}
                className="group rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-6 shadow-[0_3px_16px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20"
              >
                <Badge3D type={card.icon} size="sm" />
                <h3 className="mt-4 text-[13px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[11.5px] leading-[1.65] text-[#4a4a6a]">
                  {card.desc}
                </p>
                <span className="mt-4 inline-block rounded-full bg-[#0CBFFF]/10 px-3 py-1 font-[family-name:var(--font-mono)] text-[9.5px] font-bold text-[#0CBFFF]">
                  {card.pill}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ - With #0CBFFF
      ========================================================= */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-10 max-w-[680px] text-center">
            <Eyebrow center>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-3 text-[22px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[28px] font-['Inter']">
              Things to Know Before You Contact Us
            </h2>
          </Reveal>

          <div className="mx-auto mb-6 max-w-[780px] rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="border-b border-[#0CBFFF]/20 py-5 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[14px] font-bold text-[#1a1a2e] transition-colors duration-300 hover:text-[#0CBFFF]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0CBFFF]/10 text-[#0CBFFF] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Icon type="plus" size={13} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[12.5px] leading-[1.75] text-[#4a4a6a]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal className="mx-auto max-w-[780px]">
            <div className="flex items-start gap-3 rounded-[12px] border-2 border-[#0CBFFF]/30 bg-[#0CBFFF]/5 px-5 py-4 transition-all duration-300 hover:border-[#0CBFFF]">
              <span className="mt-0.5 shrink-0 text-[#0CBFFF]">
                <Icon type="warning" size={18} />
              </span>
              <p className="text-[11.5px] leading-[1.7] text-[#1a1a2e]">
                <strong className="font-bold">Important Notice:</strong>{" "}
                ForPips provides educational services only. We do not offer
                financial advice, investment recommendations, or trading
                signals. Inquiries related to such services cannot be
                addressed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA - With #0CBFFF
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#070d1b] px-5 py-14 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[440px] -translate-x-1/2 rounded-full bg-[#0CBFFF]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-[1180px]">
          <Reveal className="relative mx-auto max-w-[1050px] overflow-hidden rounded-[14px] border-2 border-[#0CBFFF]/30 bg-[#0d182c] px-6 py-12 text-center shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 md:px-10 md:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[360px] -translate-x-1/2 rounded-full bg-[#0CBFFF]/15 blur-[80px]" />

            <h2 className="relative text-[23px] font-extrabold text-white transition-colors duration-300 hover:text-[#0CBFFF] md:text-[28px] font-['Inter']">
              Still have questions?
            </h2>

            <p className="relative mx-auto mt-4 max-w-[560px] text-[12px] leading-[1.75] text-slate-400 md:text-[13px]">
              Email us directly, or drop into the community — either way, a
              real person will get back to you.
            </p>

            <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:education@forpips.com" target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]"
              >
                Email Us
              </a>
              <a
                href="https://forpips.com/community" target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#02BFFD] hover:shadow-[0_0_15px_rgba(2,191,253,0.35)]"
              >
                Join the Community
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default memo(ContactUs);
