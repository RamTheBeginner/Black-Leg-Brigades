import React, { useEffect, useRef } from "react";

const TradingViewTickerTape = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "Tesla", proName: "NASDAQ:TSLA" },
        { description: "Apple Inc", proName: "NASDAQ:AAPL" },
        { description: "Nvidia", proName: "NASDAQ:NVDA" },
        { description: "Microsoft", proName: "NASDAQ:MSFT" },
        { description: "Advanced Micro Devices", proName: "NASDAQ:AMD" },
        { description: "Meta", proName: "NASDAQ:META" },
        { description: "Netflix", proName: "NASDAQ:NFLX" },
        { description: "Bitcoin", proName: "BINANCE:BTCUSDT" },
        { description: "Ethereum", proName: "BINANCE:ETHUSDT" },
        { description: "Cardano", proName: "BINANCE:ADAUSDT" },
        { description: "Ripple", proName: "BINANCE:XRPUSDT" },
        { description: "Polkadot", proName: "BINANCE:DOTUSDT" },
        { description: "Litecoin", proName: "BINANCE:LTCUSDT" },
        { description: "Chainlink", proName: "BINANCE:LINKUSDT" },
        { description: "Stellar", proName: "BINANCE:XLMUSDT" }
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "compact",
      locale: "en"
    });

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={widgetRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTickerTape;
