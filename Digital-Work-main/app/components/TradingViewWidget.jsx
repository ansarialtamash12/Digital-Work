"use client";

import { useEffect, useRef } from "react";

export default function TradingViewWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://widgets.tradingview-widget.com/w/en/tv-market-overview.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const symbolSectors = [
    {
      sectionName: "Indices",
      symbols: ["FOREXCOM:SPXUSD", "FOREXCOM:NSXUSD", "FOREXCOM:DJI", "FOREXCOM:UKXGBP"]
    },
    {
      sectionName: "Stocks",
      symbols: ["NASDAQ:AAPL", "NASDAQ:ADBE", "NASDAQ:NVDA", "NASDAQ:TSLA"]
    },
    {
      sectionName: "Crypto",
      symbols: ["BITSTAMP:BTCUSD", "BITSTAMP:ETHUSD", "CRYPTO:XRPUSD"]
    }
  ];

  return (
    <div ref={widgetRef} className="rounded-xl bg-navy-900/70">
      <div>
        <tv-market-overview
          symbol-sectors={JSON.stringify(symbolSectors)}
          theme="dark"
          show-header="false"
          exchange="US"
          time-frame="12M"
          item-size="normal"
          mode="custom"
          assets-type="stocks"
          chart-size="normal"
          exportparts="tv-unselected-button, tv-selected-button, tv-chart-bg, tv-chart-bg-pane"
          style={{ "--b": "" }}
        />
      </div>
    </div>
  );
}
