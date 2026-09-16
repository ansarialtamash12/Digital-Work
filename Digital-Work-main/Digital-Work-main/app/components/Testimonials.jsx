"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    quote:
      "The roadmap gave me an actual order to learn in — I stopped jumping between YouTube videos.",
    name: "Rohit S.",
    loc: "Noida, India",
    initials: "RS",
  },
  {
    quote:
      "Risk management module alone was worth more than the paid course I'd bought a year earlier.",
    name: "Ananya K.",
    loc: "Bengaluru, India",
    initials: "AK",
  },
  {
    quote:
      "Started as a student, now referring a small group of traders as an IB. Slow, steady, no hype.",
    name: "Michael J.",
    loc: "Manila, Philippines",
    initials: "MJ",
  },
  {
    quote:
      "Mentors actually reply. That alone put this above every free Discord I'd tried before.",
    name: "Sara P.",
    loc: "Dubai, UAE",
    initials: "SP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0CBFFF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0CBFFF] sm:text-[13px]">
              Student Success Stories
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#1a1a2e] sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl font-['Inter']">
            Placeholder <span className="text-[#0CBFFF]">Testimonials.</span>
          </h2>

          <p className="mt-3 text-sm text-[#4a4a6a] sm:mt-5 sm:text-base md:text-lg">
            Real stories from traders who transformed their journey with us.
          </p>
        </div>

        {/* Testimonials Swiper */}
        <div className="relative mt-10 sm:mt-12">
          {/* Left Arrow */}
          <button
            type="button"
            className="testimonial-prev absolute left-[-18px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#0CBFFF]/30 bg-white text-[#0CBFFF] shadow-[0_5px_20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-[#0CBFFF] hover:text-white hover:shadow-[0_8px_25px_rgba(12,191,255,0.35)] max-xl:left-[-10px] max-md:left-[-6px]"
            aria-label="Previous testimonial"
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
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!overflow-hidden !px-1"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <figure
                  className="group h-full w-full rounded-[20px] border-2 border-[#E1E7EF] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[0_10px_30px_rgba(12,191,255,0.15)] sm:rounded-[24px] sm:p-8"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-[14px] w-[14px] fill-[#0CBFFF] text-[#0CBFFF] sm:h-[17px] sm:w-[17px]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-5 min-h-[80px] text-[14px] font-normal leading-[1.6] text-[#1a1a2e] sm:mt-7 sm:min-h-[105px] sm:text-[16px] sm:leading-[1.7]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* User */}
                  <figcaption className="mt-5 flex items-center gap-3 sm:mt-7 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0CBFFF] text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(12,191,255,0.25)] transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(12,191,255,0.40)] sm:h-11 sm:w-11 sm:text-xs">
                      {t.initials}
                    </span>

                    <div>
                      <div className="text-[14px] font-bold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#0CBFFF] sm:text-[15px]">
                        {t.name}
                      </div>

                      <div className="mt-1 text-xs text-[#4a4a6a]/60 sm:text-sm">
                        {t.loc}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            type="button"
            className="testimonial-next absolute right-[-18px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#0CBFFF]/30 bg-white text-[#0CBFFF] shadow-[0_5px_20px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-[#0CBFFF] hover:text-white hover:shadow-[0_8px_25px_rgba(12,191,255,0.35)] max-xl:right-[-10px] max-md:right-[-6px]"
            aria-label="Next testimonial"
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