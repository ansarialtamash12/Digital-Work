export const courseLinks = [
  { label: "Forex Basics", href: "#courses" },
  { label: "Technical Analysis", href: "#courses" },
  { label: "Risk Management", href: "#courses" },
  { label: "Gold Trading", href: "#courses" },
];

export const toolLinks = [
  { label: "Pip Calculator", href: "/pip-calculator" },
  { label: "Margin Calculator", href: "/margin-calculator" },
  { label: "Economic Calendar", href: "/economic-calendar" },
  { label: "Currency Strength Meter", href: "/current_strength_meter" },
];

export const ibLinks = [
  { label: "How It Works", href: "#ib" },
  { label: "Commission Structure", href: "#ib" },
  { label: "IB FAQ", href: "#faq" },
];

export const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Use", href: "/" },
  { label: "Risk Disclaimer", href: "/" },
];


export const navLinks = [
  { label: "Home", href: "/" },
  { label: " Academy", href: "/academy" },
  { label: "Community", href: "/community" },
  { label: "IB Academy", href: "/partnership" },
  { label: "Experts", href: "/experts" },
  { label: "Videos", href: "/videos" },
  { label: "Blog", href: "https://www.forpips.com/blog/author/john/" },
  { label: "Contact", href: "/contact" },
];

export const MARKETPOSTS = [
  {
    category: "Gold",
    title: "XAUUSD: Reading the Session Volatility",
    body: "Where gold tends to break, and why the London open matters most.",
  },
  {
    category: "EURUSD",
    title: "EURUSD Levels Worth Watching",
    body: "Key support and resistance zones heading into the next session.",
  },
  {
    category: "Economic Events",
    title: "This Week's High-Impact Events",
    body: "The releases most likely to move your open positions.",
  },
];

export const ACADEMYPOSTS = [
  {
    title: "Knowledge Comes First",
    category: "Education",
    body: "Start with a strong foundation in forex trading through accessible, easy-to-understand lessons. Our educational resources are designed to help you build confidence before making any trading decisions."
  },
  {
    title: "Guidance from Experts",
    category: "Mentorship",
    body: "Learn from seasoned market experts who bring years of real-world trading experience. Gain practical insights, proven strategies, and valuable techniques to navigate the financial markets with confidence."
  },
  {
    title: "Supportive Trading Community",
    category: "Community",
    body: "Join a community where your questions matter. Connect with experienced mentors and fellow traders, exchange ideas, and receive timely guidance to accelerate your learning journey."
  },
  {
    title: "Unbiased Broker Insights",
    category: "Broker Education",
    body: "Understand the key factors that matter when selecting a broker, including regulation, spreads, trading platforms, execution quality, and account features. We provide the knowledge so you can make the right choice for your trading needs."
  },
  {
    title: "Grow with an IB Opportunity",
    category: "Income",
    body: "Turn your trading knowledge into an additional income stream through our Introducing Broker (IB) program. Learn how to build your network, earn IB commissions, and create long-term business opportunities while helping others begin their trading journey."
  }
];


// Currency to USD rates (indicative)
export const CCY_TO_USD = {
  USD: 1,
  EUR: 1.09,
  GBP: 1.27,
  JPY: 0.0067,
  CHF: 1.12,
  CAD: 0.73,
  AUD: 0.66,
  NZD: 0.61,
  SGD: 0.74,
};

// Currency pairs
export const PAIRS = [
  { sym: "EUR/USD", base: "EUR", quote: "USD" },
  { sym: "GBP/USD", base: "GBP", quote: "USD" },
  { sym: "USD/JPY", base: "USD", quote: "JPY" },
  { sym: "USD/CHF", base: "USD", quote: "CHF" },
  { sym: "AUD/USD", base: "AUD", quote: "USD" },
  { sym: "USD/CAD", base: "USD", quote: "CAD" },
  { sym: "NZD/USD", base: "NZD", quote: "USD" },
  { sym: "EUR/JPY", base: "EUR", quote: "JPY" },
  { sym: "GBP/JPY", base: "GBP", quote: "JPY" },
  { sym: "EUR/GBP", base: "EUR", quote: "GBP" },
  { sym: "EUR/CHF", base: "EUR", quote: "CHF" },
  { sym: "EUR/AUD", base: "EUR", quote: "AUD" },
  { sym: "EUR/CAD", base: "EUR", quote: "CAD" },
  { sym: "EUR/NZD", base: "EUR", quote: "NZD" },
  { sym: "GBP/CHF", base: "GBP", quote: "CHF" },
  { sym: "GBP/AUD", base: "GBP", quote: "AUD" },
  { sym: "GBP/CAD", base: "GBP", quote: "CAD" },
  { sym: "GBP/NZD", base: "GBP", quote: "NZD" },
  { sym: "AUD/JPY", base: "AUD", quote: "JPY" },
  { sym: "AUD/CAD", base: "AUD", quote: "CAD" },
  { sym: "AUD/CHF", base: "AUD", quote: "CHF" },
  { sym: "AUD/NZD", base: "AUD", quote: "NZD" },
  { sym: "NZD/JPY", base: "NZD", quote: "JPY" },
  { sym: "NZD/CAD", base: "NZD", quote: "CAD" },
  { sym: "NZD/CHF", base: "NZD", quote: "CHF" },
  { sym: "CAD/JPY", base: "CAD", quote: "JPY" },
  { sym: "CAD/CHF", base: "CAD", quote: "CHF" },
  { sym: "CHF/JPY", base: "CHF", quote: "JPY" },
  { sym: "USD/SGD", base: "USD", quote: "SGD" },
];

// Lot sizes
export const LOT_SIZES = {
  standard: 100000,
  mini: 10000,
  micro: 1000,
  nano: 100,
};

// Convert currency
export const convertCcy = (amount, from, to) => {
  if (from === to) return amount;
  const usd = amount * CCY_TO_USD[from];
  return usd / CCY_TO_USD[to];
};

// Get pip size for currency
export const pipSizeFor = (quote) => {
  return quote === "JPY" ? 0.01 : 0.0001;
};

// Format money
export const fmtMoney = (n, ccy) => {
  if (isNaN(n) || !isFinite(n)) return '—';
  const symbols = { USD: "$", EUR: "€", GBP: "£", JPY: "¥", CHF: "Fr", CAD: "$", AUD: "$", NZD: "$", SGD: "$" };
  const s = symbols[ccy] || "";
  const decimals = Math.abs(n) < 1 ? 4 : 2;
  return s + n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + " " + ccy;
};