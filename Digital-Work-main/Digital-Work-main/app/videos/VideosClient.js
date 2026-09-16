"use client"
import React, { useState, useMemo } from "react";
import {
  Play,
  Star,
  Clock,
  Filter,
  Bell, 
  ArrowRight, 
  X,
} from "lucide-react";

// Featured video (hero section)
const FEATURED_VIDEO_URL = "https://youtu.be/Vt4e-F3gzvI?si=uunOTVw5hCyBGGsK";
const FEATURED_VIDEO_TITLE = "NUPIPS has officially become FORPIPS! 💙";
 
function getYouTubeId(url) {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : "";
}

const categories = [
  "All Videos",
  "Videos Tutorial",
  "Forex Basics for Beginners",
  "Stock Market",
  "Technical Analysis",
  "Risk Management",
  "Psychology",
];

const tagStyles = {
  "Educational Introduction": "bg-[#0CBFFF]/10 text-[#0CBFFF]",
  "Videos Tutorial": "bg-[#0CBFFF]/10 text-[#0CBFFF]",
  "Forex Education": "bg-[#0CBFFF]/10 text-[#0CBFFF]",
  "Stock Market": "bg-[#0CBFFF]/10 text-[#0CBFFF]",
  "Technical Analysis": "bg-[#0CBFFF]/10 text-[#0CBFFF]",
  "Risk Management": "bg-[#0CBFFF]/10 text-[#0CBFFF]",
  Psychology: "bg-[#0CBFFF]/10 text-[#0CBFFF]",
};

// 👇 Har video ka apna alag "videoUrl" hai — poora YouTube link daalein.
// Nayi video add karni ho to bas yahin ek nayi line jodte jaayein.
const videos = [
  { videoUrl: "https://www.youtube.com/watch?v=yPeNMyNNL_4", category: "Videos Tutorial", tag: "Educational Introduction", time: "2 days ago", duration: "0:30", title: "Welcome 2026 | New Opportunities", desc: "Welcome 2026 | New Opportunities, Positive Changes & Growth Ahead | QTCFX", rating: 4.9, reviews: 720 },

  // ===== Forex Basics Series (Lesson 1 - 12) =====
  { videoUrl: "https://www.youtube.com/watch?v=nLzQkysIi_M", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 1: What is the Forex Market?", desc: "Forex Trading Basics for Beginners - understand what the forex market really is.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=5s2GsV1LuW4", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 2: What is Currency & Currency Pair?", desc: "Forex Basics for Beginners - understanding currencies and currency pairs.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=S3Q0dh6ibKc", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 3: What is a Currency Pair in Forex?", desc: "Currency Explained for Beginners - Forex Trading Basics.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=V5D-xrgn0x4", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 4: What is XAUUSD & XAGUSD?", desc: "Gold & Silver in Forex Explained - Forex Basics for Beginners.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=TFn4xnxxQ1g", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 5: How Does Forex Trading Work?", desc: "Forex Market Explained for Beginners.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=cYd3_LQGAt0", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 6: Who Controls the Forex Market?", desc: "Banks, Central Banks & Major Players Explained.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=V8ifAC7W_wI", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 7: Forex vs Stock Market Explained", desc: "Key Differences Every Beginner Should Know.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=weJ9-H3Y12I", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 8: Best Time to Trade Forex", desc: "Forex Trading Sessions Explained.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=jroOmOZWEgE", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 9: What is a Trading Session?", desc: "How Many Forex Trading Sessions Are There?", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=5e-eSJx6K_g", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 10: Four Forex Trading Sessions Explained", desc: "Sydney, Tokyo, London & New York - Forex Basics.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=R_TDrmHEqwM", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 11: What is a Session Overlap in Forex?", desc: "Forex Trading Sessions Explained.", rating: 4.8, reviews: 50 },
  { videoUrl: "https://www.youtube.com/watch?v=LBr_zMy2i6U", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "", title: "Lesson 12: Which Currency Pairs Are Active in Each Forex Session?", desc: "Trading Sessions Explained.", rating: 4.8, reviews: 50 },

  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_2", category: "Videos Tutorial", tag: "Videos Tutorial", time: "3 days ago", duration: "4:15", title: "GTCFX - Account Setup in Phone | Complete Sign Up, Login, KYC, Deposit & Withdrawal...", desc: "GTCFX - Account Setup in Phone | Complete Sign Up, Secure Login, KYC, Deposit & Withdrawal Guide - Hindi", rating: 4.8, reviews: 95 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_3", category: "Videos Tutorial", tag: "Videos Tutorial", time: "4 days ago", duration: "3:45", title: "GTCFX - Account Setup in Phone | Complete Sign Up, Secure Login, KYC, Deposit & Withdrawal...", desc: "GTCFX - Account Setup in Phone | Complete Sign Up, Secure Login, KYC, Deposit & Withdrawal Guide", rating: 4.7, reviews: 78 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_4", category: "Videos Tutorial", tag: "Videos Tutorial", time: "5 days ago", duration: "5:20", title: "GTCFX - Account Setup in Hindi | Step-by-Step Sign Up, Secure KYC, Deposit &...", desc: "GTCFX - Account Setup in Hindi | Step-by-Step Sign Up, Secure Login, KYC, Deposit & Withdrawal Guide", rating: 4.9, reviews: 112 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_5", category: "Videos Tutorial", tag: "Videos Tutorial", time: "6 days ago", duration: "5:20", title: "GTCFX - Account Setup in English | Complete Sign Up, Secure Login, KYC, Deposit & Withdrawal...", desc: "GTCFX - Account Setup in English | Complete Sign Up, Secure Login, KYC, Deposit & Withdrawal Guide", rating: 4.9, reviews: 112 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_6", category: "Forex Education", tag: "Forex Education", time: "1 week ago", duration: "0:42", title: "What is Financial Market?", desc: "A financial market is a broad term for any marketplace where buyers and sellers trade assets...", rating: 4.8, reviews: 101 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_7", category: "Forex Education", tag: "Forex Education", time: "3 days ago", duration: "", title: "What is Forex?", desc: "Forex, short for Foreign Exchange, is the global marketplace for trading national currencies against...", rating: 4.9, reviews: 934 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_8", category: "Stock Market", tag: "Forex Education", time: "4 days ago", duration: "", title: "What is Stock Market?", desc: "The stock market is a regulated marketplace where investors can buy and sell shares of publicly traded...", rating: 4.7, reviews: 356 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_9", category: "Risk Management", tag: "Forex Education", time: "1 week ago", duration: "", title: "What is Risk Management?", desc: "Risk management in Forex trading is the process of identifying, analyzing, and mitigating the potential fin...", rating: 4.7, reviews: 158 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_10", category: "Stock Market", tag: "Stock Market", time: "3 days ago", duration: "22:70", title: "What is Stock Market?", desc: "Basic concepts of equity markets, how stocks are traded, and market participants.", rating: 4.9, reviews: 159 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_11", category: "Stock Market", tag: "Stock Market", time: "4 days ago", duration: "10:45", title: "How to Buy Stocks", desc: "Step-by-step guide to purchasing your first stock through different order types.", rating: 4.9, reviews: 243 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_12", category: "Stock Market", tag: "Stock Market", time: "5 days ago", duration: "20:30", title: "Stock Exchanges Explained", desc: "NYSE, NASDAQ, London Stock Exchange - how they work and their differences.", rating: 4.8, reviews: 112 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_13", category: "Technical Analysis", tag: "Technical Analysis", time: "5 days ago", duration: "19:45", title: "What is Technical Analysis?", desc: "Core principles of chart reading, trends, support/resistance, and technical indicators.", rating: 4.7, reviews: 87 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_14", category: "Technical Analysis", tag: "Technical Analysis", time: "6 days ago", duration: "24:20", title: "Candlestick Patterns", desc: "Complete guide to bullish and bearish candlestick formations.", rating: 4.9, reviews: 199 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_15", category: "Technical Analysis", tag: "Technical Analysis", time: "1 week ago", duration: "20:15", title: "Support and Resistance", desc: "How to identify key price levels and use them in your trading strategy.", rating: 4.8, reviews: 156 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_16", category: "Risk Management", tag: "Risk Management", time: "1 week ago", duration: "18:45", title: "What is Risk Management?", desc: "Essential skills for position sizing, stop losses, and protecting your trading capital.", rating: 4.8, reviews: 90 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_17", category: "Risk Management", tag: "Risk Management", time: "1 week ago", duration: "18:45", title: "Position Sizing", desc: "Calculate optimal trade size based on account equity and risk tolerance.", rating: 4.7, reviews: 145 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_18", category: "Risk Management", tag: "Risk Management", time: "2 weeks ago", duration: "22:15", title: "Stop Loss Strategies", desc: "Different types of stop losses and where to place them effectively.", rating: 4.9, reviews: 167 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_19", category: "Psychology", tag: "Psychology", time: "4 days ago", duration: "20:15", title: "What is Trading Psychology?", desc: "Master emotional control, discipline, and mental resilience for successful trading.", rating: 4.9, reviews: 334 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_20", category: "Psychology", tag: "Psychology", time: "5 days ago", duration: "23:30", title: "Overcoming Fear and Greed", desc: "Techniques to manage emotions and stick to your trading plan.", rating: 4.8, reviews: 158 },
  { videoUrl: "https://www.youtube.com/watch?v=REPLACE_ID_21", category: "Psychology", tag: "Psychology", time: "6 days ago", duration: "21:45", title: "Building Trading Discipline", desc: "Develop habits and routines that lead to consistent trading.", rating: 4.7, reviews: 145 },



].map((v) => ({ ...v, videoId: getYouTubeId(v.videoUrl) }));

const roadmap = [
  "Trading Mindset & Forpips Method",
  "Forex Basics & Market Structure",
  "Charts & Technical Analysis",
  "Risk Management Essentials",
  "Trading Psychology & Discipline",
];

const stats = [
  { label: "Video Tutorials", value: "200+" },
  { label: "Expert Educators", value: "50+" },
  { label: "Active Learners", value: "15K+" },
  { label: "Average Rating", value: "4.9", star: true },
];

// Lightweight card: plain <img> tag (no next.config.js changes needed),
// browser-native lazy loading. iframe mounts only inside the modal on click.
function VideoCard({ video, onPlay }) {
  const [imgError, setImgError] = useState(false);
  const thumbUrl = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;

  return (
    <div className="group bg-white rounded-2xl border-2 border-[#0CBFFF]/30 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
      <button
        type="button"
        onClick={() => onPlay(video)}
        className="relative w-full h-44 bg-[#0a0a1a] flex items-center justify-center group overflow-hidden"
      >
        {video.videoId && !imgError ? (
          <img
            src={thumbUrl}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0CBFFF]/80 to-[#0CBFFF]/20" />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
        <div className="relative h-12 w-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110">
          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
        </div>
        {video.duration && (
          <span className="absolute bottom-2 right-2 flex items-center gap-1 text-[11px] text-white bg-black/50 rounded px-1.5 py-0.5">
            <Clock className="h-3 w-3" />
            {video.duration}
          </span>
        )}
      </button>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-['Inter'] font-semibold uppercase tracking-wide px-2 py-1 rounded ${tagStyles[video.tag] || "bg-[#0CBFFF]/10 text-[#0CBFFF]"}`}>
            {video.tag}
          </span>
          <span className="text-[11px] text-[#4a4a6a]">{video.time}</span>
        </div>
        <h3 className="font-semibold text-[#1a1a2e] text-sm leading-snug mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-[#0CBFFF]">
          {video.title}
        </h3>
        <p className="text-xs text-[#4a4a6a] leading-relaxed mb-4 line-clamp-2">{video.desc}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-[#4a4a6a]">
            <Star className="h-3.5 w-3.5 text-[#0CBFFF] fill-[#0CBFFF]" />
            {video.rating}{" "}
            <span className="text-[#4a4a6a]/60">({video.reviews} reviews)</span>
          </span>
          <button
            onClick={() => onPlay(video)}
            className="text-xs font-semibold text-[#0CBFFF] flex items-center gap-1 transition-all duration-300 hover:gap-2"
          >
            Watch Now <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// iframe sirf yahan mount hota hai — sirf jab user click karke video khole.
function VideoModal({ videoId, title, onClose }) {
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-3 sm:right-3 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          aria-label="Close video"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&playsinline=1`}
            title={title || "Video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default function VideoLibraryPage() {
  const [active, setActive] = useState("All Videos");
  const [activeVideo, setActiveVideo] = useState(null);

  const filtered = useMemo(
    () => (active === "All Videos" ? videos : videos.filter((v) => v.category === active)),
    [active]
  );

  const featuredId = useMemo(() => getYouTubeId(FEATURED_VIDEO_URL), []);

  return (
    <div className="font-sans bg-[#f8f9fa] text-[#1a1a2e]">
      {/* ---------------- HERO ---------------- */}
      <section className="bg-[#f8f9fa] pt-16 pb-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0CBFFF] bg-white border-2 border-[#0CBFFF]/30 rounded-full px-4 py-1.5 mb-6">
            <Play className="h-3.5 w-3.5" />
            Educational Video Library
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight">
            Your Complete Library of{" "}
            <span className="text-[#0CBFFF] font-['Inter']">Forex Trading Video Courses</span>
          </h1>
          <p className="text-[#4a4a6a] mt-5 leading-relaxed max-w-xl mx-auto">
            Do not just watch trading videos, learn the skills that matter.
            Explore simple lessons created by experienced mentors and understand
            how the forex market works, one concept at a time, at your own pace.
          </p>
        </div>
      </section>

      {/* ---------------- FEATURED VIDEO ---------------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border-2 border-[#0CBFFF]/30 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
            <button
              type="button"
              onClick={() =>
                setActiveVideo({
                  videoId: featuredId,
                  title: FEATURED_VIDEO_TITLE,
                })
              }
              className="relative block w-full overflow-hidden rounded-2xl h-96 sm:h-[500px] group"
            >
              <img
                src={`https://i.ytimg.com/vi/${featuredId}/maxresdefault.jpg`}
                alt={FEATURED_VIDEO_TITLE}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://i.ytimg.com/vi/${featuredId}/hqdefault.jpg`;
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0CBFFF] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0CBFFF]/80">
                  <Play className="ml-1 h-6 w-6 fill-white text-white" />
                </div>
              </div>
            </button>

            <div className="text-center mt-8">
              <span className="text-[11px] font-semibold tracking-widest text-[#0CBFFF] uppercase">
                Featured Introduction
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-['Inter'] text-[#1a1a2e] mt-2 transition-colors duration-300 group-hover:text-[#0CBFFF]">
                {FEATURED_VIDEO_TITLE}
              </h2>
              <p className="text-sm text-[#4a4a6a] mt-3 max-w-xl mx-auto leading-relaxed">
                Welcome to Forpips, where Forex and stock market learning is
                simple, practical, and built for confident trading.
              </p>
              <button
                onClick={() =>
                  setActiveVideo({
                    videoId: featuredId,
                    title: FEATURED_VIDEO_TITLE,
                  })
                }
                className="text-[#0CBFFF] font-semibold text-sm mt-3 inline-flex items-center gap-1 transition-all duration-300 hover:gap-2"
              >
                Learn today. Trade smarter. Make better decisions.
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo.videoId}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* ---------------- BROWSE BY CATEGORY ---------------- */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] font-['Inter']">Browse by Category</h2>
            <button className="hidden sm:flex items-center gap-2 text-sm text-[#4a4a6a] border-2 border-[#0CBFFF]/30 rounded-lg px-4 py-2 transition-all duration-300 hover:border-[#0CBFFF] hover:bg-white">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-medium px-4 py-2 rounded-full border-2 transition-all duration-300 ${active === cat
                    ? "bg-[#0CBFFF] text-white border-[#0CBFFF] font-['Inter']"
                    : "bg-white text-[#4a4a6a] border-[#0CBFFF]/30 hover:border-[#0CBFFF] hover:text-[#0CBFFF]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <VideoCard
                key={`${video.title}-${i}`}
                video={video}
                onPlay={(v) => setActiveVideo({ videoId: v.videoId, title: v.title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ROADMAP ---------------- */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border-2 border-[#0CBFFF]/30 bg-gradient-to-br from-[#0CBFFF] to-[#0CBFFF]/40 px-6 sm:px-12 py-12 text-center transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-black font-['Inter']">Your Trading Roadmap</h2>
            <p className="text-black/80 mt-2">Start here and grow step by step with confidence.</p>
            <div className="mt-8 space-y-3 max-w-2xl mx-auto">
              {roadmap.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-4 bg-white/15 border border-white/20 rounded-xl px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                >
                  <span className="h-7 w-7 shrink-0 rounded-full bg-white/25 text-black text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-black/80 text-sm font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- NEWSLETTER ---------------- */}
      <section className="pb-16 pt-5 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-[#0CBFFF]/30 shadow-sm rounded-3xl px-8 sm:px-16 py-14 sm:py-16 text-center transition-all duration-300 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
          <div className="h-16 w-16 rounded-full bg-[#0CBFFF]/10 flex items-center justify-center mx-auto mb-6">
            <Bell className="h-7 w-7 text-[#0CBFFF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Inter'] font-extrabold text-[#1a1a2e]">
            New Content Every Week
          </h2>
          <p className="text-[#4a4a6a] mt-5 leading-relaxed max-w-xl mx-auto text-base sm:text-lg">
            Subscribe to receive notifications about new educational videos,
            market updates, and learning resources.
          </p>
          <form className="mt-8 flex items-center gap-2 border-2 border-[#0CBFFF]/30 rounded-full pl-6 pr-2 py-2 max-w-2xl mx-auto transition-all duration-300 focus-within:border-[#0CBFFF]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-sm"
              required
            />
            <button
              type="submit"
              className="bg-[#0CBFFF] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0CBFFF]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}