import { Check, X } from "lucide-react";

const ROWS = [
  { label: "Course cost", other: "Paid", fp: "Free" },
  { label: "Ongoing support", other: "Limited", fp: "24/7" },
  { label: "Active community", other: "Rare", fp: "Yes" },
  { label: "Mentor access", other: "Recorded videos only", fp: "Live mentors" },
  { label: "IB path included", other: "Rarely", fp: "Yes" },
];

export default function CompareTable() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Why Choose Forpips
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl lg:text-4xl font-['Inter']">
            Compare before you commit to anyone.
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-navy-700/10 sm:block lg:mt-12">
          <div className="grid grid-cols-3 bg-navy-900 px-6 py-4 text-sm font-bold text-white">
            <div>Feature</div>
            <div>Typical Paid Courses</div>
            <div>Forpips</div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                i % 2 === 0 ? "bg-paper" : "bg-white"
              }`}
            >
              <div className="font-semibold text-navy-900">{row.label}</div>
              <div className="flex items-center gap-2 text-slateink/60">
                <X className="h-4 w-4 text-rose-400" />
                {row.other}
              </div>
              <div className="flex items-center gap-2 font-semibold text-navy-900">
                <Check className="h-4 w-4 text-mint" />
                {row.fp}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Card Layout */}
        <div className="mt-10 space-y-4 sm:hidden">
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`rounded-xl border border-navy-700/10 p-4 ${
                i % 2 === 0 ? "bg-paper" : "bg-white"
              }`}
            >
              <div className="mb-3 font-semibold text-navy-900">{row.label}</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slateink/60">
                  <X className="h-4 w-4 text-rose-400 shrink-0" />
                  <span className="text-xs text-slate-400">Typical Paid Courses:</span>
                  <span>{row.other}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                  <Check className="h-4 w-4 text-mint shrink-0" />
                  <span className="text-xs text-slate-400">Forpips:</span>
                  <span>{row.fp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
