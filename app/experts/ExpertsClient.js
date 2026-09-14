"use client";

import { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins, Space_Mono } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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

/* =========================================================
   MENTORS
========================================================= */

const mentors = [
  {
    name: "MR. SHIVRAJ SINGH",
    role:
      "Transformational Coach | Financial Markets Expert | Leadership Mentor | Sales & Marketing Strategist",
    image: "/profile/profile9.webp",
    description:
      "Mr. Shivraj Singh is a highly experienced Transformational Coach, Financial Markets Expert, Leadership Mentor, and Sales & Marketing Strategist with 27 years of experience in financial markets, sales, direct selling, leadership, and business development.Over nearly three decades, he has built and led teams of millions of people, gained worldwide global exposure, and played a significant role in transforming thousands of lives through coaching, leadership, financial awareness, sales expertise, and business development.",
    expertise: [
      "Transformational Coaching & Mentoring",
      "Financial Markets & Market Knowledge",
      "Leadership Development & Team Building",
      "Sales & Marketing Strategy",
      "Direct Selling & Business Development",
      "People Development & Motivation",
      "Global Networking & Exposure",
    ],
  },
  {
    name: "Mr. Ali",
    role:
      "Entrepreneur | Sales Strategist | Business Development Leader | IT Business Owner",
    image: "/profile/profile1.webp",
    description:
      "Mr. Ali is a visionary entrepreneur and accomplished sales leader with extensive experience in business development, strategic partnerships, and revenue growth. As the founder and owner of multiple IT companies, he has successfully built and scaled technology-driven businesses while leading high-performing sales teams. His expertise lies in identifying market opportunities, driving customer acquisition, and creating sustainable business growth through innovative sales strategies and strong client relationships.",
    expertise: [
      "Sales Leadership & Business Development",
      "Revenue Growth & Strategic Partnerships",
      "Client Acquisition & Relationship Management",
      "Entrepreneurship & Business Strategy",
      "IT Services & Digital Solutions",
      "Team Leadership & Organizational Growth",
      "Forex Market & Trading Industry Understanding",
    ],
  },

  {
    name: "Mr. Khushal Sharma",
    role: "Entrepreneur | Business Strategist | Forex Educator",
    image: "/profile/profile5.webp",
    description:
      "Mr. Khushal Sharma is an entrepreneur and forex educator with 10+ years of experience in business development, financial markets, and leadership. He is passionate about helping traders build strong market knowledge, develop disciplined trading approaches, and understand the opportunities within the global forex market.",
    expertise: [
      "Forex Trading Education",
      "Market Structure & Price Action",
      "Technical & Fundamental Analysis",
      "Risk Management & Trading Discipline",
      "Trading Psychology & Trader Mindset",
      "Forex Market Analysis & Strategy",
      "Currency Pairs & Market Dynamics",
      "Business Development & Sales Strategy",
      "Client Relationship & Trader Support",
      "Forex Industry & Market Opportunities",
    ],
  },

  {
    name: "Mr. Baha",
    role: "Marketing Strategist | Business Visionary | Global Entrepreneur",
    image: "/profile/profile3.webp",
    description:
      "Mr. Baha is a globally recognized marketing strategist and entrepreneur with 21+ years of experience in business growth, brand development, and international markets. He brings strong expertise in financial market positioning, forex business development, strategic growth, and building long-term client relationships across global markets.",
    expertise: [
      "Forex Business & Market Strategy",
      "Financial Market Positioning",
      "Global Marketing & Brand Strategy",
      "Forex Client Acquisition & Growth",
      "Business Development & Market Expansion",
      "Strategic Partnerships & Networking",
      "Sales Growth & Performance",
      "International Market Opportunities",
      "Forex Business Development & Partnerships",
    ],
  },

  {
    name: "Mr. Mukesh Jha",
    role: "Business Consultant | Entrepreneur | Forex Mentor",
    image: "/profile/profile4.webp",
    description:
      "Mr. Mukesh Jha is a seasoned business consultant and forex mentor with 17+ years of experience in business management, financial markets, and strategic planning. He focuses on helping professionals and traders develop practical market knowledge, manage risk effectively, and build a structured approach toward forex trading and business growth.",
    expertise: [
      "Forex Trading Education & Mentoring",
      "Currency Market Analysis",
      "Trading Strategy Development",
      "Risk & Capital Management",
      "Fundamental & Technical Market Insights",
      "Trader Psychology & Discipline",
      "Business Consulting & Strategic Planning", 
      "Client Acquisition & Relationship Building",
      "Leadership & Business Growth",
      "Trader Relationship & Client Management",
    ],
  },

  {
    name: "Mr. Dushyant Kumar",
    role: "Business Leader | Growth Strategist | Corporate Mentor",
    image: "/profile/profile2.webp",
    description:
      "Mr. Dushyant Kumar is an accomplished business leader and corporate strategist with 10+ years of experience in business development, leadership, and organizational growth. He brings a strong understanding of financial markets and business expansion, helping professionals and entrepreneurs identify opportunities and build sustainable growth strategies.",
    expertise: [
      "Business Strategy & Market Planning",
      "Forex & Financial Market Understanding",
      "Business Development & Expansion",
      "Sales & Revenue Growth",
      "Strategic Partnerships",
      "Leadership & Team Development",
      "Client Acquisition & Relationship Management",
      "Financial Market Opportunities",
      "Corporate Growth & Decision Making",
    ],
  },


  {
    name: "Prakash Janawade",
    role: "Global Trading & Investment Mentor | Stock Market Research Analyst | Financial Educator",
    image: "/profile/profile6.webp",
    description:
      "Prakash Janawade is a globally focused trading and investment mentor with 10+ years of real-world market experience, dedicated to making financial markets practical, structured, and easier to understand. As a NISM Certified Research Analyst and AMFI Certified professional, he combines market research, technical analysis, trading psychology, risk management, and systematic decisionmaking to help traders and investors build confidence and make informed decisions.",
    expertise: [
      "Stock Market Research & Analysis",
      "Trading & Investment Education",
      "Technical & Fundamental Analysis",
      "Equities, Indices & Derivatives",
      "Forex, Gold & Commodities",
      "Algorithmic Trading & Trading Systems",
      "Risk Management & Trading Psychology",
      "Portfolio Building & Investment Strategies",
      "Financial Market Mentoring",
    ],
  },


  {
    name: "Mr. Safdar Ali",
    role: "Forex Educator | Trading Mentor | Sales & Business Development Specialist",
    image: "/profile/profile7.webp",
    description:
      "Safdar Ali is an experienced Forex educator and trading mentor with extensive international experience in financial markets, sales, client relationships, and business development. With a strong background in building global networks and mentoring people across different markets, he focuses on making Forex trading, market understanding, risk management, and trading psychology practical and easy to understand.",
    expertise: [
      "Forex Trading Education",
      "Market Understanding & Analysis",
      "Trading Psychology & Discipline",
      "Risk Management",
      "Client & Trader Mentoring",
      "Forex Business & Sales Strategy",
      "Network & Team Development",
      "Trading & Business Psychology",
      "International Market Experience",
    ],
  },

  {
    name: "Akanksha Saxena ",
    role: "Entrepreneur | Forex & Web3 Leader | Marketing Head | Financial Markets Mentor",
    image: "/profile/profile8.webp",
    description:
      " Ms. Akanksha Saxena is a seasoned entrepreneur, marketing leader, and financial markets mentor with 8+ years of experience across Forex, Web3, digital assets, business growth, and strategic marketing. She combines market knowledge, entrepreneurial vision, and leadership expertise to build strong networks, drive business growth, and help individuals understand emerging financial opportunities.",
    expertise: [
      "Forex & Financial Markets",
      "Web3 & Digital Assets",
      "Trading & Market Education",
      "Sales & Business Development",
      "Strategic Marketing & Branding",
      "Business & Network Growth ",
      "Leadership & Team Development",
      "Trading Psychology & Risk Management",
      "Forex Industry Growth & Market Opportunities",
    ],
  },
  {
    name: "Ms. Sadaf Ali",
    role: "Financial Markets Expert | Global Network Builder | Trading & Business Development Leader",
    image: "/profile/Sadaf.png",
    description:
      "Sadaf Ali is an experienced Financial Markets Professional with strong expertise in trading, digital assets, exchanges, business development, and global team building. Since 2023, Sadaf has built and led large international networks comprising thousands of members, with experience across multiple financial and digital-asset platforms and involvement in building and developing multimillion-dollar business operations.",
    expertise: [
      "Financial Markets & Trading",
      "Digital Assets & Exchanges",
      "Global Team Building",
      "Business Development",
      "Investor & Client Relations",
      "Leadership & Network Development",
      "International Market Expansion",
      "Strategic Partnerships & Growth",
    ],
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    badge: "FMS",
    title: "Forex Market Specialist",
    description:
      "Expertise in currency markets, market structure, and macroeconomic analysis.",
  },
  {
    badge: "TAE",
    title: "Technical Analysis Expert",
    description:
      "Specialized in price action, chart patterns, technical indicators, and trend analysis.",
  },
  {
    badge: "RMP",
    title: "Risk Management Professional",
    description:
      "Focused on capital saving, position sizing, leverage, and disciplined trading.",
  },
  {
    badge: "TPC",
    title: "Trading Psychology Coach",
    description:
      "Helping traders build emotional discipline, consistency, and decision-making skills.",
  },
  {
    badge: "SDE",
    title: "Strategy Development Expert",
    description:
      "Experienced in creating and refining profitable forex trading strategies.",
  },
  {
    badge: "TM",
    title: "Trading Mentor",
    description:
      "Providing practical guidance, live market insights, and personalized learning support.",
  },
];

/* =========================================================
   PHILOSOPHY
========================================================= */

const philosophy = [
  {
    icon: "book",
    title: "Practical Learning First",
    description:
      "Our aim is to focus on hands-on forex education that helps learners understand real market conditions instead of relying on unrealistic profit expectations.",
    points: [
      "Learn through real market examples",
      "Step-by-step trading lessons",
      "Build practical trading skills",
    ],
  },
  {
    icon: "chart",
    title: "Proven Trading Strategies",
    description:
      "Our courses teach structured trading strategies based on technical analysis, market behavior, and disciplined decision-making to help traders improve consistency.",
    points: [
      "Price action techniques",
      "Technical analysis methods",
      "Strategy-based learning",
    ],
  },
  {
    icon: "shield",
    title: "Smart Risk Management",
    description:
      "We designed our lessons to focus on saving trading capital, controlling emotions, and following a disciplined approach for long-term success in the forex market.",
    points: [
      "Effective risk management",
      "Emotional trading control",
      "Consistent trading mindset",
    ],
  },
];

/* =========================================================
   MINI FEATURES
========================================================= */

const miniFeatures = [
  {
    icon: "music",
    title: "Real Market Practice",
    description:
      "Apply your knowledge through live market examples, trading practices, and practical case studies designed to boost your trading skills.",
  },
  {
    icon: "clock",
    title: "Continuous Learning",
    description:
      "Stay updated with new trading strategies, fresh educational content, market insights, and ongoing mentor guidance to keep improving your journey.",
  },
  {
    icon: "chart",
    title: "Track Your Progress",
    description:
      "Measure your learning with quizzes, practical assignments, and performance reviews that help identify strengths and areas for improvement.",
  },
  {
    icon: "users",
    title: "Interactive Learning",
    description:
      "Participate in live webinars, mentor Q&A sessions, discussion forums, and collaborative learning experiences with other traders.",
  },
];

/* =========================================================
   LEARNING METHODS
========================================================= */

const learningMethods = [
  {
    icon: "play",
    title: "Recorded Courses",
    description:
      "Every specialization above maps to a structured course you can start today.",
    link: "https://www.youtube.com/@forpipsEducation",
    linkText: "View curriculum →",
  },
  {
    icon: "calendar",
    title: "Live Sessions",
    description:
      "Join weekly masterclasses hosted by our faculty, with real-time Q&A.",
    link: "https://t.me/+bjtMg5b1kC5mY2U0",
    linkText: "See upcoming events →",
  },
  {
    icon: "play",
    title: "Video Library",
    description:
      "Rewatch any faculty-led lesson at your own pace, whenever you need it.",
    link: "https://forpips.com/videos",
    linkText: "Watch videos →",
  },
];

/* =========================================================
   ICONS
========================================================= */

function Icon({ type, small = false }) {
  const common = {
    width: small ? 16 : 22,
    height: small ? 16 : 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </>
    ),

    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),

    check: (
      <>
        <path d="M20 6 9 17l-5-5" />
      </>
    ),

    chart: (
      <>
        <line x1="4" y1="19" x2="4" y2="10" />
        <line x1="10" y1="19" x2="10" y2="5" />
        <line x1="16" y1="19" x2="16" y2="12" />
        <line x1="22" y1="19" x2="22" y2="3" />
      </>
    ),

    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    music: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),

    play: (
      <>
        <polygon points="5 3 19 12 5 21 5 3" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  };

  return <svg {...common}>{icons[type]}</svg>;
}

/* =========================================================
   3D BADGE
========================================================= */

function Badge3D({ type, size = "md" }) {
  const sizes = {
    sm: "h-9 w-9 rounded-[10px]",
    md: "h-11 w-11 rounded-[12px]",
    lg: "h-14 w-14 rounded-[14px]",
  };

  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-[#0CBFFF] text-white shadow-[0_6px_14px_rgba(12,191,255,0.35)] ${sizes[size]}`}
    >
      <Icon type={type} small={size === "sm"} />
    </div>
  );
}

/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({ children, dark = false, center = true }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.25em] ${dark ? "text-[#0CBFFF]" : "text-[#0CBFFF]"
        } ${center ? "justify-center" : ""}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-[#0CBFFF]" : "bg-[#0CBFFF]"
          }`}
      />

      {children}
    </span>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

function Section4() {
  const sectionRef = useRef(null);
  const [counter, setCounter] = useState(0);

  /* =========================================================
     REVEAL ANIMATION
  ========================================================= */

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
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     COUNTER
  ========================================================= */

  useEffect(() => {
    const counterElement = document.querySelector("[data-counter]");

    if (!counterElement) return;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = 50;
          const duration = 1400;
          const start = performance.now();

          const updateCounter = (now) => {
            const progress = Math.min(
              (now - start) / duration,
              1
            );

            const eased = 1 - Math.pow(1 - progress, 3);

            setCounter(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCounter(target);
            }
          };

          requestAnimationFrame(updateCounter);

          counterObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
      }
    );

    counterObserver.observe(counterElement);

    return () => counterObserver.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className={`${poppins.variable} ${spaceMono.variable} w-full overflow-hidden bg-[#f8f9fa] font-[family-name:var(--font-poppins)] text-[#1a1a2e]`}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#070d1b] px-5 py-20 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#0CBFFF]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[800px] text-center">
          <div
            data-reveal
            className="mb-4 flex translate-y-6 justify-center opacity-0 transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 font-extrabold uppercase text-lg sm:text-xl md:text-2xl"
          >
            <Eyebrow dark>Expert Forex Mentors</Eyebrow>
          </div>

          <h1
            data-reveal
            className="mx-auto max-w-[760px] translate-y-6 font-['Inter'] text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-white opacity-0 transition-all duration-700 delay-100 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:text-[38px] md:text-[46px]"
          >
            Our Forex Trading Experts: Empowering Every Trader to Succeed
          </h1>

          <p
            data-reveal
            className="mx-auto mt-5 max-w-[650px] translate-y-6 text-[15px] leading-[1.75] text-slate-400 opacity-0 transition-all duration-700 delay-200 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:text-[16px]"
          >
            Our experts bring years of real-market experience to every lesson,
            helping you understand forex trading with confidence. With us you
            can easily explore practical strategies, market analysis, and risk
            management techniques from professionals dedicated to empowering
            traders at every stage.
          </p>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="bg-white px-5 py-10 md:py-12">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-8">
          {[
            {
              icon: "users",
              value: (
                <>
                  <span data-counter>{counter}</span>+
                </>
              ),
              label: "Expert forex mentors",
            },
            {
              icon: "clock",
              value: "10–18+",
              label: "Years of market experience",
            },
            {
              icon: "book",
              value: "4",
              label: "Core specializations",
            },
            {
              icon: "check",
              value: "Practical",
              label: "Real-market focused learning",
            },
          ].map((item, index) => (
            <div
              key={item.label}
              data-reveal
              className="flex items-center gap-3 opacity-0 transition-all duration-700 data-[visible=true]:opacity-100"
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              <Badge3D type={item.icon} size="sm" />

              <div>
                <div className="font-[family-name:var(--font-mono)] text-[20px] font-bold leading-none text-[#1a1a2e] md:text-[22px]">
                  {item.value}
                </div>

                <div className="mt-1.5 text-[13px] font-medium text-[#4a4a6a] md:text-[14px]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FACULTY / PROFILES
      ====================================================== */}

      <section className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">

          {/* HEADING */}

          <div
            data-reveal
            className="mx-auto mb-10 max-w-[680px] translate-y-6 text-center text-[12.5px] opacity-0 transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
          >
            <Eyebrow>Our Faculty</Eyebrow>

            <h2 className="mt-3 font-['Inter'] text-[24px] font-bold leading-[1.2] tracking-[-0.015em] text-[#1a1a2e] md:text-[32px]">
              Explore Four Specializations Within One Faculty.
            </h2>

            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.7] text-[#4a4a6a] md:text-[16px]">
              Master every aspect of forex trading with industry experts.
              Learn everything from the basics to advanced strategies,
              covering risk management, technical analysis, and trading
              psychology through simple, practical lessons.
            </p>
          </div>

          {/* =================================================
              CAROUSEL
          ================================================= */}

          <div
            data-reveal
            className="relative translate-y-6 opacity-0 transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">

            {/* LEFT ARROW */}

            <button
              type="button"
              className="mentor-prev absolute left-[-18px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center
               rounded-full border border-[#0CBFFF]/30 bg-white text-[#0CBFFF] shadow-[0_5px_20px_rgba(15,23,42,0.12)] transition-all 
               duration-300 hover:bg-[#0CBFFF] hover:text-white hover:shadow-[0_8px_25px_rgba(12,191,255,0.35)] max-xl:left-[-10px] max-md:left-[-15px]"
              aria-label="Previous mentor"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* SWIPER */}

            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              speed={700}
              slidesPerView={1}
              spaceBetween={20}
              centeredSlides={false}
              watchOverflow={false}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".mentor-prev",
                nextEl: ".mentor-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },

                640: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="!overflow-hidden !px-1"
            >
              {mentors.map((mentor, index) => (
                <SwiperSlide
                  key={`${mentor.name}-${index}`}
                  className="!h-auto"
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white shadow-[0_3px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_10px_30px_rgba(12,191,255,0.20)]">

                    {/* IMAGE */}

                    <div className="h-[250px] w-full shrink-0 overflow-hidden bg-slate-200">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        width={400}
                        height={250}
                        sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 50vw, 33vw"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        priority={index < 3}
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col p-5">

                      <h3 className="text-[20px] font-bold leading-tight text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                        {mentor.name}
                      </h3>

                      <h6 className="mt-2 text-[13px] font-semibold leading-[1.5] text-[#0CBFFF]">
                        {mentor.role}
                      </h6>

                      <p className="mt-3 text-[14px] text-[#4a4a6a] [text-align:justify]">
                        {mentor.description}
                      </p>

                      <h3 className="mt-5 text-[15px] font-bold text-[#1a1a2e]">
                        Expertise
                      </h3>

                      <ul className="mt-2 space-y-1">
                        {mentor.expertise.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] leading-[1.5] text-[#4a4a6a]"
                          >
                            <span className="mr-1 text-[#0CBFFF]">
                              •
                            </span>

                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* RIGHT ARROW */}

            <button
              type="button"
              className="mentor-next absolute right-[-18px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#0CBFFF]/30
               bg-white text-[#0CBFFF] shadow-[0_5px_20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-[#0CBFFF] hover:text-white 
               hover:shadow-[0_8px_25px_rgba(12,191,255,0.35)] max-xl:right-[-10px] max-md:right-[-15px]"
              aria-label="Next mentor"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS
      ====================================================== */}

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">

          <div
            data-reveal
            className="mx-auto mb-10 max-w-[720px] text-center opacity-0 transition-all duration-700 data-[visible=true]:opacity-100"
          >
            <Eyebrow>Professional Certifications</Eyebrow>

            <h2 className="mt-3 font-['Inter'] text-[23px] font-bold leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[29px]">
              Meet the Forpips Team of Experienced Forex Professionals with
              Proven Market Expertise.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {certifications.map((item, index) => (
              <div
                key={item.badge}
                data-reveal
                className="group translate-y-5 rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-5 text-center opacity-0 shadow-[0_3px_14px_rgba(15,23,42,0.03)] transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_10px_30px_rgba(12,191,255,0.20)]"
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#0CBFFF] font-[family-name:var(--font-mono)] text-[10px] font-bold text-white shadow-[0_6px_14px_rgba(12,191,255,0.35)] transition-all duration-300 group-hover:scale-110">
                  {item.badge}
                </div>

                <h3 className="text-[13px] font-bold leading-[1.35] text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.65] text-[#4a4a6a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TEACHING PHILOSOPHY
      ====================================================== */}

      <section className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">

          <div
            data-reveal
            className="mx-auto mb-10 max-w-[720px] text-center opacity-0 transition-all duration-700 data-[visible=true]:opacity-100"
          >
            <Eyebrow>Our Teaching Philosophy</Eyebrow>

            <h2 className="mt-3 font-['Inter'] text-[24px] font-bold leading-[1.25] tracking-[-0.015em] text-[#1a1a2e] md:text-[30px]">
              Building Skilled, Disciplined, and Confident Forex Traders
              Across the Globe.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className="group translate-y-5 rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-6 opacity-0 shadow-[0_3px_16px_rgba(15,23,42,0.035)] transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_10px_30px_rgba(12,191,255,0.20)]"
                style={{
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                <Badge3D type={item.icon} size="lg" />

                <h3 className="mt-4 text-[18px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] leading-[1.7] text-[#4a4a6a]">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-[15px] font-medium text-[#4a4a6a]"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0CBFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>

                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MINI FEATURES */}

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {miniFeatures.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className="group flex items-center gap-4 rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-5 opacity-0 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-700 data-[visible=true]:opacity-100 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_10px_30px_rgba(12,191,255,0.20)]"
                style={{
                  transitionDelay: `${index * 0.06}s`,
                }}
              >
                <Badge3D type={item.icon} size="sm" />

                <div>
                  <h4 className="text-[15px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-[14px] leading-[1.6] text-[#4a4a6a]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW TO LEARN
      ====================================================== */}

      <section className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">

          <div
            data-reveal
            className="mx-auto mb-10 text-center opacity-0 transition-all duration-700 data-[visible=true]:opacity-100"
          >
            <Eyebrow>How to Learn From Our Experts</Eyebrow>

            <h2 className="mt-3 font-['Inter'] text-[24px] font-bold leading-[1.25] text-[#1a1a2e] md:text-[29px]">
              Three Ways to Join This Faculty.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {learningMethods.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className="group translate-y-5 rounded-[12px] border-2 border-[#0CBFFF]/30 bg-white p-6 opacity-0 shadow-[0_3px_16px_rgba(15,23,42,0.035)] transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_10px_30px_rgba(12,191,255,0.20)]"
                style={{
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                <Badge3D type={item.icon} size="lg" />

                <h3 className="mt-4 text-[18px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] leading-[1.7] text-[#4a4a6a]">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[15px] font-bold text-[#0CBFFF] transition-all duration-300 hover:translate-x-1 hover:text-[#0CBFFF]/80"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#070d1b] px-5 py-14 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[440px] -translate-x-1/2 rounded-full bg-[#0CBFFF]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-[1180px]">
          <div
            data-reveal
            className="group relative mx-auto max-w-[1050px] translate-y-5 overflow-hidden rounded-[14px] border-2 border-[#0CBFFF]/30 bg-[#0d182c] px-6 py-12 text-center opacity-0 shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_15px_40px_rgba(12,191,255,0.20)] md:px-10 md:py-16"
          >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[360px] -translate-x-1/2 rounded-full bg-[#0CBFFF]/15 blur-[80px]" />

            <h2 className="relative font-['Inter'] text-[26px] font-bold text-white transition-colors duration-300 group-hover:text-[#0CBFFF] md:text-[30px]">
              Ready to learn from expert forex mentors?
            </h2>

            <p className="relative mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.75] text-slate-400 md:text-[16px]">
              Every course on ForPips is taught or reviewed by this faculty —
              practical strategies, real risk management, and proven
              techniques, not empty promises.
            </p>

            <Link
              href="https://www.youtube.com/@forpipsEducation"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-300 border border-accent hover:bg-[#02BFFD] hover:border-white hover:shadow-[0_0_20px_rgba(2,191,253,0.5)]"
            >
              Start Learning Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default memo(Section4);
