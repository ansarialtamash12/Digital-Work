"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { navLinks } from "../constant/constant";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      {/* Header */}
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo.webp"
            alt="ForPips"
            width={200}
            height={80}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 min-[1212px]:flex lg:gap-7">
  {navLinks.map(({ label, href }) => {
    const isExternal = href.startsWith("http");

    return isExternal ? (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          whitespace-nowrap
          font-[Inter,ui-sans-serif,sans-serif]
          text-[13px]
          font-medium
          transition-colors
          duration-200
          hover:text-[#02BFFD]
          lg:text-sm
        "
        style={{
          color: pathname === href ? "#02BFFD" : "#000000",
        }}
      >
        {label}
      </a>
    ) : (
      <Link
        key={label}
        href={href}
        className="
          whitespace-nowrap
          font-[Inter,ui-sans-serif,sans-serif]
          text-[13px]
          font-medium
          transition-colors
          duration-200
          hover:text-[#02BFFD]
          lg:text-sm
        "
        style={{
          color: pathname === href ? "#02BFFD" : "#000000",
        }}
      >
        {label}
      </Link>
    );
  })}
</nav>



        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 min-[1212px]:flex lg:gap-3">
          <a
            href="https://app.forpips.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              whitespace-nowrap
              rounded-full
              border
              border-slate-200
              px-4
              py-2
              text-[13px]
              font-semibold
              text-slate-900
              transition-all
              duration-200
              hover:border-[#02BFFD]
              hover:text-[#02BFFD]
              lg:px-5
              lg:text-sm
            "
          >
             Login
          </a>

          <a
            href="https://app.forpips.com/user/register"
            target="_blank"
            rel="noopener noreferrer"
            className="
              whitespace-nowrap
              rounded-full
              bg-[#0bb9f6]
              px-4
              py-2
              text-[13px]
              font-semibold
              text-white
              shadow-md
              shadow-sky-500/20
              transition-all
              duration-200
              hover:bg-[#08aee9]
              lg:px-5
              lg:text-sm
            "
          >
            Open  Account
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            text-slate-700
            transition-all
            duration-200
            hover:border-[#02BFFD]
            hover:text-[#02BFFD]
            min-[1212px]:hidden
          "
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`
          absolute
          left-0
          top-full
          z-50
          w-full
          border-b
          border-slate-200
          bg-white
          shadow-xl
          transition-all
          duration-300
          min-[1212px]:hidden
          ${
            isOpen
              ? "visible max-h-[calc(100vh-72px)] translate-y-0 overflow-y-auto opacity-100"
              : "invisible max-h-0 -translate-y-2 overflow-hidden opacity-0"
          }
        `}
      >
        <nav className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          {/* Navigation Links */}
          <div className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="
                  border-b
                  border-slate-100
                  py-3.5
                  font-[Inter,ui-sans-serif,sans-serif]
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-[#02BFFD]
                "
                style={{
                  color: pathname === href ? '#02BFFD' : '#000000'
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-3 pb-6">

            {/* Client Login */}
            <a
              href="https://app.forpips.com/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                block
                w-full
                rounded-full
                border
                border-slate-200
                px-5
                py-3
                text-center
                text-sm
                font-semibold
                text-slate-900
                transition-all
                duration-200
                hover:border-[#02BFFD]
                hover:text-[#02BFFD]
              "
            >
               Login
            </a>

            {/* Open Trading Account */}
            <a
              href="https://app.forpips.com/user/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                block
                w-full
                rounded-full
                bg-[#0bb9f6]
                px-5
                py-3
                text-center
                text-sm
                font-semibold
                text-white
                shadow-md
                shadow-sky-500/20
                transition-all
                duration-200
                hover:bg-[#08aee9]
              "
            >
              Open  Account 
            </a>

          </div>
        </nav>
      </div>
    </header>
  );
}
