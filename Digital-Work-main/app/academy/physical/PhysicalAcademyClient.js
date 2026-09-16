"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarClock,
  ChevronDown,
  List,
  Map,
  MapPin,
  Navigation,
  Search,
  Star,
  Users,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

const academies = [
  {
    city: "mumbai",
    cityLabel: "Mumbai",
    location: "Mumbai, Maharashtra",
    name: "ForPips Academy — Andheri West",
    tags: ["Live trading floor", "Weekend batches"],
    courses: ["forex", "technical"],
    rating: "4.8",
    reviews: 132,
    position: "left-[18%] top-[31%]",
  },
  {
    city: "noida",
    cityLabel: "Noida (Delhi NCR)",
    location: "Noida, Delhi NCR",
    name: "ForPips Academy — Sector 62",
    tags: ["1-on-1 mentorship", "Hindi + English"],
    courses: ["forex", "ib"],
    rating: "4.6",
    reviews: 89,
    position: "left-[43%] top-[47%]",
  },
  {
    city: "bengaluru",
    cityLabel: "Bengaluru",
    location: "Bengaluru, Karnataka",
    name: "ForPips Academy — Indiranagar",
    tags: ["Beginner friendly", "Evening batches"],
    courses: ["forex", "technical"],
    rating: "4.9",
    reviews: 211,
    position: "left-[64%] top-[28%]",
  },
  {
    city: "pune",
    cityLabel: "Pune",
    location: "Pune, Maharashtra",
    name: "ForPips Academy — Baner",
    tags: ["Live trading floor", "Weekend batches"],
    courses: ["forex", "technical"],
    rating: "4.7",
    reviews: 64,
    position: "left-[29%] top-[64%]",
  },
  {
    city: "ahmedabad",
    cityLabel: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    name: "ForPips Academy — Navrangpura",
    tags: ["Hindi + English", "Beginner friendly"],
    courses: ["forex", "ib"],
    rating: "4.5",
    reviews: 47,
    position: "left-[77%] top-[22%]",
  },
  {
    city: "jaipur",
    cityLabel: "Jaipur",
    location: "Jaipur, Rajasthan",
    name: "ForPips Academy — Vaishali Nagar",
    tags: ["1-on-1 mentorship", "Weekend batches"],
    courses: ["forex", "ib"],
    rating: "4.7",
    reviews: 58,
    position: "left-[54%] top-[70%]",
  },
];

const benefits = [
  {
    icon: UserCheck,
    title: "Hands-On Mentorship",
    copy: "Learn face to face from experienced traders who review your charts in real time.",
  },
  {
    icon: Navigation,
    title: "Live Trading Floor",
    copy: "Sit alongside active traders and see strategies applied to live markets.",
  },
  {
    icon: CalendarClock,
    title: "Structured Batches",
    copy: "Fixed weekday and weekend schedules keep you accountable and consistent.",
  },
  {
    icon: Users,
    title: "Peer Learning",
    copy: "Learn alongside others, share insights, and stay motivated together.",
  },
];

const faqs = [
  {
    question: "Is there a fee to attend a physical academy?",
    answer:
      "Pricing varies by academy and program. Each partner academy sets its own in-person course fees, separate from ForPips' free online curriculum.",
  },
  {
    question: "Are these academies officially operated by ForPips?",
    answer:
      "These are independent partner academies that follow ForPips' curriculum and mentorship standards, not directly owned or operated by ForPips.",
  },
  {
    question: "Can I switch between online and in-person learning?",
    answer:
      "Yes. Your free online curriculum progress stays with your account regardless of whether you also attend a physical academy.",
  },
  {
    question: "Do I need prior experience before joining?",
    answer:
      "No. Most partner academies welcome complete beginners and start from the fundamentals.",
  },
];

function AcademyCard({ academy }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-200/70">
      <div className="flex h-32 items-center justify-center bg-cyan-50 text-cyan-300">
        <Building2 className="h-11 w-11" aria-hidden="true" />
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-sm font-semibold text-slate-900">{academy.name}</h3>
        <p className="mb-3 flex items-center gap-1 text-xs text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          {academy.location}
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {academy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-4 flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          <span className="font-semibold text-slate-700">{academy.rating}</span>
          <span className="text-slate-400">({academy.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/gtcgofullsupport"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 flex-1 items-center justify-center rounded-lg bg-cyan-400 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            View details
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(academy.location)}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Get directions to ${academy.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-cyan-400 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PhysicalAcademyClient() {
  const [city, setCity] = useState("all");
  const [course, setCourse] = useState("all");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("list");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredAcademies = useMemo(() => {
    const normalizedQuery = submittedQuery.trim().toLowerCase();
    return academies.filter((academy) => {
      const matchesCity = city === "all" || academy.city === city;
      const matchesCourse =
        course === "all" || academy.courses.includes(course);
      const searchable = `${academy.name} ${academy.location} ${academy.tags.join(" ")}`.toLowerCase();
      return matchesCity && matchesCourse && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [city, course, submittedQuery]);

  function handleSearch(event) {
    event.preventDefault();
    setSubmittedQuery(query);
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#070B14]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-10" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 1200 260" preserveAspectRatio="none" fill="none">
            <polyline points="0,200 60,190 120,210 180,175 240,160 300,185 360,140 420,155 480,110 540,125 600,85 660,100 720,60 780,80 840,40 900,60 960,25 1020,45 1080,15 1140,35 1200,10" stroke="#22D3EE" strokeWidth="2" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            Academy — Offline Learning
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Find a ForPips Academy Near You
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore partner training centers offering hands-on forex education, live mentorship, and structured in-person batches across India.
          </p>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-12 max-w-4xl px-6">
        <form onSubmit={handleSearch} className="flex flex-col gap-2.5 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 sm:flex-row">
          <label className="flex h-11 flex-1 items-center gap-2 rounded-lg border border-slate-200 px-3 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100">
            <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Filter by city</span>
            <select value={city} onChange={(event) => setCity(event.target.value)} className="h-full w-full bg-transparent text-sm text-slate-700 outline-none">
              <option value="all">All cities</option>
              {academies.map((academy) => <option key={academy.city} value={academy.city}>{academy.cityLabel}</option>)}
            </select>
          </label>
          <label className="flex h-11 flex-1 items-center gap-2 rounded-lg border border-slate-200 px-3 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100">
            <BookOpen className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Filter by course</span>
            <select value={course} onChange={(event) => setCourse(event.target.value)} className="h-full w-full bg-transparent text-sm text-slate-700 outline-none">
              <option value="all">Any course</option>
              <option value="forex">Forex fundamentals</option>
              <option value="technical">Technical analysis</option>
              <option value="ib">IB & partnership</option>
            </select>
          </label>
          <label className="flex h-11 flex-1 items-center gap-2 rounded-lg border border-slate-200 px-3 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100">
            <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Search academies</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name or location" className="h-full w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
          </label>
          <button type="submit" className="flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-4 pt-16">
        <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {[["12+", "Partner academies"], ["8", "Cities"], ["500+", "Students trained offline"], ["4.8★", "Average rating"]].map(([value, label]) => (
            <div key={label}><p className="text-3xl font-extrabold text-slate-900">{value}</p><p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Partner Academies</h2>
            <p className="mt-1 text-sm text-slate-500">{filteredAcademies.length} locations match your filters</p>
          </div>
          <div className="flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 p-1" aria-label="Academy view">
            <button type="button" onClick={() => setView("list")} aria-pressed={view === "list"} className={`flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-semibold ${view === "list" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>
              <List className="h-3.5 w-3.5" aria-hidden="true" /> List
            </button>
            <button type="button" onClick={() => setView("map")} aria-pressed={view === "map"} className={`flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-semibold ${view === "map" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>
              <Map className="h-3.5 w-3.5" aria-hidden="true" /> Map
            </button>
          </div>
        </div>

        {view === "list" ? (
          filteredAcademies.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAcademies.map((academy) => <AcademyCard key={academy.city} academy={academy} />)}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
              <p className="font-semibold text-slate-900">No academies match those filters.</p>
              <p className="mt-2 text-sm text-slate-500">Try another city, course, or search term.</p>
            </div>
          )
        ) : (
          <div className="relative h-96 overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_25%,transparent_25%),linear-gradient(45deg,#f1f5f9_25%,transparent_25%)] bg-[length:42px_42px]">
            <div className="absolute inset-0 bg-white/30" aria-hidden="true" />
            {filteredAcademies.map((academy) => (
              <a key={academy.city} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(academy.location)}`} target="_blank" rel="noreferrer" className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-cyan-400 px-2.5 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-900/10 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 ${academy.position}`} aria-label={`Open map directions for ${academy.name}`}>
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {academy.cityLabel.split(" ")[0]}
              </a>
            ))}
            {!filteredAcademies.length && <p className="absolute inset-0 z-10 flex items-center justify-center text-sm text-slate-500">No map locations match those filters.</p>}
            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 shadow-sm">
              Select a pin to open directions
            </div>
          </div>
        )}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-900">Why Learn at a Physical Academy</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">A structured room, a real mentor, and a cohort that keeps you moving.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mb-1.5 text-sm font-semibold text-slate-900">{title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">Things to Know Before You Visit</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-xl border border-slate-200">
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                {faq.question}
                <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {openFaq === index && <p className="px-4 pb-4 text-sm leading-relaxed text-slate-500">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#070B14]">
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Don&apos;t See an Academy in Your City?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">We&apos;re expanding to new cities every quarter. Tell us where you&apos;d like a ForPips Academy next — or apply to open one yourself.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://t.me/gtcgofullsupport" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#070B14]">Suggest a City <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <Link href="/partnership" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 text-sm font-semibold text-slate-950 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#070B14]">Partner With Us <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
