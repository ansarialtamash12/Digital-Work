'use client';

import { useEffect, useRef, useState } from 'react';

const TradingViewWidget = ({ 
  widgetType = 'forex-heat-map', 
  height = '560px',
  currencies = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
  countryFilter = "us,eu,gb,jp,au,ca,nz,ch",
  importanceFilter = "-1,0,1"
}) => {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = '';

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container';
    widgetContainer.style.width = '100%';
    widgetContainer.style.height = '100%';

    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    widgetDiv.style.width = '100%';
    widgetDiv.style.height = '100%';
    widgetContainer.appendChild(widgetDiv);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const widgetConfigs = {
      'forex-heat-map': {
        src: 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js',
        config: {
          width: "100%",
          height: "100%",
          currencies: currencies,
          isTransparent: true,
          colorTheme: "dark",
          locale: "en"
        }
      },
      'economic-calendar': {
        src: 'https://s3.tradingview.com/external-embedding/embed-widget-events.js',
        config: {
          colorTheme: "dark",
          isTransparent: true,
          width: "100%",
          height: "100%",
          locale: "en",
          importanceFilter: importanceFilter,
          countryFilter: countryFilter
        }
      },
      'market-overview': {
        src: 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js',
        config: {
          colorTheme: "dark",
          isTransparent: true,
          width: "100%",
          height: "100%",
          locale: "en"
        }
      }
    };

    const config = widgetConfigs[widgetType] || widgetConfigs['forex-heat-map'];
    script.src = config.src;
    script.innerHTML = JSON.stringify(config.config);

    widgetContainer.appendChild(script);
    containerRef.current.appendChild(widgetContainer);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isMounted, widgetType, currencies, countryFilter, importanceFilter]);

  return (
    <div 
      className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[20px] shadow-[0_20px_45px_rgba(4,10,20,0.35)] relative z-10 overflow-hidden"
      style={{ height }}
    >
      <div className="w-full h-full">
        <div ref={containerRef} className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default TradingViewWidget;