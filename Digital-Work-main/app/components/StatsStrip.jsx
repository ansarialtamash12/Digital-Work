"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Globe2, Headphones, Users } from "lucide-react";

const STATS = [
  { icon: Clock, target: 20, suffix: "+", label: "Years Mentor Experience" },
  { icon: Users, target: 18000, suffix: "+", label: "Students Taught" },
  { icon: Globe2, target: 66, suffix: "+", label: "Countries Reached" },
  { icon: Headphones, target: null, suffix: "", label: "Live Support", display: "24/7" },
];

function Counter({ target }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
            else setValue(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function StatsStrip() {
  return (
    <section className="border-y border-navy-700/10 bg-white py-8 sm:py-10 mb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-12 sm:w-12">
              <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <div>
              <div className="text-xl font-extrabold text-navy-900 sm:text-2xl lg:text-3xl">
                {stat.target !== null ? (
                  <>
                    <Counter target={stat.target} />
                    <span className="text-accent">{stat.suffix}</span>
                  </>
                ) : (
                  stat.display
                )}
              </div>
              <div className="text-[10px] font-medium text-slateink/70 sm:text-xs lg:text-sm">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
