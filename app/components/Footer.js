import Image from "next/image";
import Link from "next/link";
import { courseLinks, toolLinks, ibLinks, companyLinks } from "../constant/constant";



const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <h4 className="font-[Poppins,Inter,sans-serif] text-[12px] font-semibold uppercase tracking-[0.24em] text-slate-100 sm:text-[13px]">
      {title}
    </h4>
    {links.map(({ label, href }) => (
      <Link
        key={label}
        href={href}
        className="font-[Inter,ui-sans-serif,system-ui] text-[13px] leading-6 text-slate-400 transition-all duration-200 hover:text-sky-400 hover:translate-x-1 sm:text-[14px]"
      >
        {label}
      </Link>
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer id="tools" className="bg-[#060913] px-4 py-12 sm:px-6 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* ============ TOP ============ */}
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.75fr_0.75fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1 lg:pr-8">
            {/* Logo */}
            <Image
              src="/footer-logo.webp"
              alt="ForPips"
              width={245}
              height={64}
              priority
              className="
      h-auto
      w-[180px]
      object-contain
      sm:w-[210px]
      md:w-[225px]
      lg:w-[240px]
      xl:w-[245px]
    "
              style={{ width: 'auto', height: 'auto' }}
            />

            {/* Description */}
            <p
              className="
      max-w-[420px]
      font-[Inter,ui-sans-serif,system-ui]
      text-[13px]
      leading-6
      text-slate-400
      sm:text-[15px]
      sm:leading-7
      md:text-[16px]
    "
            >
              A free Forex education and Introducing Broker academy. We teach, mentor,
              and guide — we do not broker, invest, or signal.
            </p>

            {/* Social Icons */}
            <div className="mt-3 flex items-center gap-3 sm:gap-4">
              {/* Telegram */}
              <Link
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                href="https://t.me/gtcgofullsupport"
                className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        text-slate-400
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-all
        duration-200
        hover:border-sky-400
        hover:bg-sky-500/10
        hover:text-sky-400

        sm:h-11
        sm:w-11
      "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                href="https://www.instagram.com/forpips_official/"
                className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        text-slate-400
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-all
        duration-200
        hover:border-sky-400
        hover:bg-sky-500/10
        hover:text-sky-400

        sm:h-11
        sm:w-11
      "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                href="https://www.youtube.com/@forpipsEducation"
                className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        text-slate-400
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-all
        duration-200
        hover:border-sky-400
        hover:bg-sky-500/10
        hover:text-sky-400

        sm:h-11
        sm:w-11
      "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                >
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <path d="M10 9l5 3-5 3z" />
                </svg>
              </Link>
            </div>
          </div>

          <FooterColumn title="Courses" links={courseLinks} />
          <FooterColumn title="Trading Tools" links={toolLinks} />
          <FooterColumn title="IB Program" links={ibLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        {/* ============ DISCLAIMER ============ */}
        <p className="mt-8 font-[Inter,ui-sans-serif,system-ui] text-[13px] leading-6 text-slate-500 sm:text-[14px] sm:leading-7">
          <strong className="font-semibold text-slate-300">Risk &amp; disclosure: </strong>
          Forpips is an educational platform. We are not a Forex broker, investment company,
          or signal provider, and nothing on this site is financial advice. Forex and CFD
          trading carries a high level of risk and may not be suitable for everyone — you can
          lose more than your initial deposit. Introducing Broker commission is paid by
          third-party regulated brokers and is never fixed or guaranteed; it depends entirely
          on referred clients&apos; trading activity. Always verify a broker&apos;s regulatory
          status independently before opening an account.
        </p>

        {/* ============ BOTTOM BAR ============ */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 font-[Inter,ui-sans-serif,system-ui] text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:text-[13px]">
          <span>© 2026 Forpips. All rights reserved.</span>
          <span className="text-slate-400">Education only — not a broker, not investment advice.</span>
        </div>
      </div>
    </footer>
  );
}