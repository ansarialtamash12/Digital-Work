
'use client';

const HeroSection = ({ children, eyebrow, title, description }) => {
  return (
    <section className="relative bg-[#0a1420] overflow-hidden py-16 px-0">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(180deg, transparent 0%, #0a1420 92%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='260' viewBox='0 0 900 260'%3E%3Cpolyline points='0,180 90,150 180,190 270,80 360,120 450,40 540,95 630,55 720,110 810,30 900,70' fill='none' stroke='%23142238' stroke-width='2'/%3E%3C/svg%3E")
          `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right, top right",
          backgroundSize: "cover, 900px 260px",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-6 relative">
        {/* Eyebrow */}
        {eyebrow && (
          <span className="inline-block bg-[rgba(41,171,226,0.12)] border border-[rgba(41,171,226,0.22)] text-[#3fc1f0] text-[0.78rem] font-semibold tracking-[0.02em] px-4 py-[7px] rounded-full mb-5">
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h1 className="font-poppins font-semibold text-white text-[clamp(2rem,4vw,2.9rem)] leading-[1.15] max-w-[14ch] mb-2">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[#a9b7c8] max-w-[68ch] text-[1.05rem] leading-[1.7]">
          {description}
        </p>
      </div>

      {/* Children (Widget) */}
      {children && (
        <div className="max-w-[1180px] mx-auto px-6 mt-10">
          {children}
        </div>
      )}
    </section>
  );
};

export default HeroSection;