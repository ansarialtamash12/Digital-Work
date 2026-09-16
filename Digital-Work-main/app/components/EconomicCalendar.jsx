// components/EconomicCalendar.jsx
'use client';

import { useEffect, useRef } from 'react';

const EconomicCalendar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear previous content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Create widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container';
    widgetContainer.style.width = '100%';
    widgetContainer.style.height = '100%';

    // Create widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    widgetDiv.style.width = '100%';
    widgetDiv.style.height = '100%';
    widgetContainer.appendChild(widgetDiv);

    // Create script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      isTransparent: true,
      width: "100%",
      height: "100%",
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter: "us,eu,gb,jp,au,ca,nz,ch"
    });

    widgetContainer.appendChild(script);
    containerRef.current.appendChild(widgetContainer);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_45px_rgba(4,10,20,0.35)] mt-[-40px] relative z-10 overflow-hidden">
      <div className="h-[600px] w-full">
        <div ref={containerRef} className="w-full h-full"></div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end gap-6 px-6 py-3 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.2)]">
        <span className="flex items-center gap-1.5 text-[0.75rem] text-[#a9b7c8]">
          <span className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
            <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
            <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
          </span>
          High impact
        </span>
        <span className="flex items-center gap-1.5 text-[0.75rem] text-[#a9b7c8]">
          <span className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#f2b705]"></span>
            <span className="w-2 h-2 rounded-full bg-[#f2b705]"></span>
            <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.08)]"></span>
          </span>
          Medium impact
        </span>
        <span className="flex items-center gap-1.5 text-[0.75rem] text-[#a9b7c8]">
          <span className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
            <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.08)]"></span>
            <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.08)]"></span>
          </span>
          Low impact
        </span>
      </div>
    </div>
  );
};

export default EconomicCalendar;