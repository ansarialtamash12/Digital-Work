"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MENTORS = [
   {
    name: "MR. SHIVRAJ SINGH",
    role: "Transformational Coach | Financial Markets Expert | Leadership Mentor | Sales & Marketing Strategist ",
    body: "Mr. Shivraj Singh is a highly experienced Transformational Coach, Financial Markets Expert, Leadership Mentor, and Sales & Marketing Strategist with 27 years of experience in financial markets, sales, direct selling, leadership, and business development.Over nearly three decades, he has built and led teams of millions of people, gained worldwide global exposure, and played a significant role in transforming thousands of lives through coaching, leadership, financial awareness, sales expertise, and business development.",
    image: "/profile/profile9.webp",
  },
  {
    name: "Mr. Ali",
    role: "Entrepreneur | Sales Strategist | Business Development Leader | IT Business Owner ",
    body: "Mr. Ali is a visionary entrepreneur and accomplished sales leader with extensive experience in business development, strategic partnerships, and revenue growth. As the founder and owner of multiple IT companies, he has successfully built and scaled technologydriven businesses while leading high-performing sales teams. His expertise lies in identifying market opportunities, driving customer acquisition, and creating sustainable business growth through innovative sales strategies and strong client relationships. ",
    image: "/profile/profile1.webp",
  },
  {
    name: "Mr. Khushal Sharma ",
    role: "Entrepreneur I Business Strategist I Forex Educator ",
    body: "Mr. Khushal Sharma is an entrepreneur and forex educator with 10+ years of experience in business development, financial markets, and leadership. He is passionate about helping traders build strong market knowledge, develop disciplined trading approaches, and understand opportunities within the global forex market. He focuses on practical learning, strategic thinking, and developing a deeper understanding of financial markets. His experience helps traders gain confidence and approach the market with discipline and clarity. ",
    image: "/profile/profile5.webp",
  },
  {
    name: "Mr. Baha ",
    role: "Marketing Strategist | Business Visionary | Global Entrepreneur ",
    body: "Mr. Baha is a globally recognized marketing strategist and entrepreneur with 21+ years of experience in business growth, brand development, and international markets. He brings expertise in financial market positioning, forex business development, strategic growth, and building long-term client relationships. His expertise helps businesses identify new opportunities, strengthen market presence, and build lasting relationships. He focuses on strategic growth, effective marketing, and sustainable business development. ",
    image: "/profile/profile3.webp",
  },
  {
    name: "Mr. Mukesh Jha",
    role: "Business Consultant | Entrepreneur | Forex Mentor",
    body: "Mr. Mukesh Jha is a seasoned business consultant and forex mentor with 17+ years of experience in business management, financial markets, and strategic planning. He focuses on helping professionals and traders develop practical market knowledge, manage risk effectively, and build a structured approach toward forex trading and business growth. His expertise combines strategic business planning, financial market insights, and practical guidance to help individuals make informed decisions and achieve sustainable growth.",
    image: "/profile/profile4.webp",
  },
  {
    name: "Mr. Dushyant Kumar ",
    role: "Business Leader | Growth Strategist | Corporate Mentor ",
    body: "Mr. Dushyant Kumar is a highly accomplished business leader and corporate strategist with 10+ years of experience in business development, leadership, and organizational growth. He specializes in financial markets, business expansion, and sustainable growth strategies. Known for strategic thinking and strong leadership, he transforms complex challenges into practical growth opportunities. His focus on innovation, partnerships, and long-term value creation drives sustainable business growth. ",
    image: "/profile/profile2.webp"
  },
  {
    name: "Mr. Prakash Janawade ",
    role: "Global Trading & Investment Mentor | Stock Market Research Analyst | Financial Educator ",
    body: "Prakash Janawade is a globally focused trading and investment mentor with 10+ years of real-world market experience, making financial markets practical, structured, and easy to understand. As a NISM Certified Research Analyst and AMFI Certified professional, he combines market research, technical analysis, trading psychology, risk management, and systematic decision-making. His expertise helps traders and investors build knowledge, confidence, manage risk, and make informed decisions across changing markets. ",
    image: "/profile/profile6.webp",
      },
  {
    name: "Mr. Safdar Ali ",
    role: "Forex Educator | Trading Mentor | Sales & Business Development Specialist  ",
    body: "Safdar Ali is an experienced Forex educator and trading mentor with extensive international expertise in financial markets, sales, client relationships, and business development. He specializes in practical Forex education, market understanding, risk management, and trading psychology. With networks of 4.5M+ people across 103 countries, he brings strong market knowledge, leadership, communication, and realworld business experience to his mentoring and educational approach for aspiring traders. ",
    image: "/profile/profile7.webp", 
  },
    {
    name: "Ms. Akanksha Saxena ",
    role: "Entrepreneur | Forex & Web3 Leader | Marketing Head | Financial Markets Mentor ",
    body: "Ms. Akanksha Saxena is a seasoned entrepreneur, marketing leader, and financial markets mentor with 8+ years of experience across Forex, Web3, digital assets, business growth, and strategic marketing. She combines market expertise, entrepreneurial vision, and leadership skills to build strong networks, drive sustainable business growth, and help individuals understand emerging financial opportunities. Her strategic approach focuses on innovation, effective marketing, and creating long-term value across evolving global markets. ",
    image: "/profile/profile8.webp", 
  },
  {
    name: "Ms. Sadaf Ali ",
    role: "Financial Markets Expert | Global Network Builder | Trading & Business Development Leader",
    body: "Sadaf Ali is an experienced Financial Markets Professional with strong expertise in trading, digital assets, exchanges, business development, and global team building. Since 2023, Sadaf has built and led large international networks comprising thousands of members, with experience across multiple financial and digital-asset platforms and involvement in building and developing multimillion-dollar business operations.",
    image: "/profile/Sadaf.png", 
  },
];

export default function Mentors() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-[1480px] px-4 sm:px-5 md:px-8">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0CBFFF] sm:text-xs">
            Our Experts
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1a1a2e] md:text-3xl lg:text-4xl font-['Inter']">
            Meet Our <span className="text-[#0CBFFF]">Forex Experts</span>
          </h2>

          <p className="mt-3 text-sm font-medium text-[#4a4a6a] md:text-base lg:text-lg">
            Grow with the people who trade, not just teach.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-[#4a4a6a]/70 sm:text-sm md:text-base">
            Meet the mentors dedicated to helping you build confidence and
            improve your trading skills.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            className="mentor-prev absolute left-[-18px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#0CBFFF]/30 bg-white
             text-[#0CBFFF] shadow-[0_5px_20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-[#0CBFFF] hover:text-white hover:shadow-[0_8px_25px_rgba(12,191,255,0.35)]
              max-xl:left-[-10px] max-md:left-[-25px]"
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
            {MENTORS.map((mentor) => (
              <SwiperSlide key={mentor.name} className="!h-auto">
                <article
                  className="
                    group
                    line-clamp-5
                    leading-[1.7]
                    flex 
                    w-full
                    flex-col
                    items-center
                    rounded-[25px]
                    border-2
                    border-[#E1E7EF]
                    bg-white
                    px-5
                    py-7
                    text-center
                    shadow-[0_3px_8px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#0CBFFF]
                    hover:shadow-[0_12px_28px_rgba(12,191,255,0.15)] 
                    sm:px-7
                    sm:py-9  
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      shrink-0
                      overflow-hidden
                      rounded-full
                      shadow-[0_14px_28px_rgba(12,191,255,0.22)]
                      transition-all
                      duration-300
                      group-hover:shadow-[0_14px_28px_rgba(12,191,255,0.35)]
                      h-[90px]
                      w-[90px]
                      sm:h-[110px]
                      sm:w-[110px]
                    "
                  >
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={110}
                      height={110}
                      sizes="(max-width: 640px) 90px, 110px"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-[16px] font-bold leading-6 text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF] sm:mt-7 sm:text-[18px]">
                    {mentor.name}
                  </h3>

                  {/* Role */}
                  <div
                    className="
                    
                      mt-2
                      max-w-[360px]
                      text-[13px]
                      font-semibold
                      leading-5
                      tracking-[0.04em]
                      text-[#0CBFFF]
                      sm:text-[15px]
                      sm:leading-6
                    "
                  >
                    {mentor.role}
                  </div>

                  {/* Description */}
                  <p
                    className="
                    h-[300px]
                      mt-4
                      max-w-[380px]
                      text-[13px]
                      leading-[22px]
                      text-[#4a4a6a]
                      sm:mt-5
                      sm:text-[15px]
                      sm:leading-[25px]
                      mt-3 text-[#4a4a6a]
                      [text-align:justify]
                    "
                  >
                    {mentor.body}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            type="button"
            className="mentor-next absolute right-[-18px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border 
            border-[#0CBFFF]/30 bg-white text-[#0CBFFF] shadow-[0_5px_20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-[#0CBFFF] 
            hover:text-white hover:shadow-[0_8px_25px_rgba(12,191,255,0.35)] max-xl:right-[-10px] max-md:right-[-15px]"
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
  );
}
