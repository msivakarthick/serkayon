
import { useState , useEffect } from "react";
import {
  PlayCircle,
  ArrowRight,
  Zap,
  Activity,
  Cpu,
  Factory,
} from "lucide-react";
import { useNavigate  } from "react-router-dom";


import em1 from "../assets/product-display/e1.png"
import em2 from "../assets/product-display/e2.png"
import em3 from "../assets/product-display/e3.png"
import em4 from "../assets/product-display/e4.png"
import em5 from "../assets/product-display/e5.png"
import em6 from "../assets/product-display/e6.png"
import em7 from "../assets/product-display/e7.png"
import em8 from "../assets/product-display/e8.png"
import { Download } from "lucide-react";

import pm1 from "../assets/product-display/pm-1.png"
import pm2 from "../assets/product-display/pm-2.png"
import pm3 from "../assets/product-display/pm-3.png"
import pm4 from "../assets/product-display/pm-4.png"
import pm5 from "../assets/product-display/pm-5.png"
import pm6 from "../assets/product-display/pm-6.png"
import poultry1 from "../assets/product-display/poultry1.png"
import poultry2 from "../assets/product-display/poultry2.png"
import poultry3 from "../assets/product-display/poultry3.png"
import poultry4 from "../assets/product-display/poultry4.png"
import poultry5 from "../assets/product-display/poultry5.png"
import poultry6 from "../assets/product-display/poultry6.png"

import h1 from "../assets//product-display/h1.png"
import h2 from "../assets//product-display/h2.png"
import h3 from "../assets//product-display/h3.png"
import h4 from "../assets//product-display/h4.png"
import h5 from "../assets//product-display/h5.png"
import h6 from "../assets//product-display/h6.png"
import h7 from "../assets//product-display/h7.png"
import { toast } from "react-toastify";




import sampleVideo from "../assets/product-display/Video_Ready_After_Request.mp4"
import ci1 from "../assets/product-display/cii-dashboard.png"
const products = [
 

  
  {
    id: "bio-pm",
    name: "Bio-PM",

   title:"Bio-Predictive Maintenance",

    subtitle:
      "Improve productivity with real-time production intelligence, machine monitoring, and AI-driven operational insights.",

 images: [
      pm1,
      pm2,
      pm3,
      pm4,
      pm5,
      pm6
    ],

    caseStudyRoute: "/case-study/column-integrity/bio-product",

    youtubeVideo: "https://www.youtube.com/watch?v=Mu_qiCTczLI",
  

 features: [
      "Live production dashboards",
      "OEE & downtime analytics",
      "Machine performance monitoring",
      "AI-powered operational insights",
    ],
  },
 {
    id: "poultry",
    name: "Poultry ERP",

    title: "Feed Mill ERP",

    
    subtitle:
      "Digitize feed mill operations with complete production, inventory, quality, and traceability management.",
 images: [
   poultry1,
   poultry2,
   poultry3,
   poultry4,
   poultry5,
      poultry6,
   
    ],

    caseStudyRoute: "/case-study/poultry-feed-mills/poultry-erp-dashboard",

    youtubeVideo: null,

  

    features: [
        "End-to-end batch traceability",
      "Inventory & raw material management",
      "Production planning & execution",
      "Business intelligence dashboards",
    ],
  },
  {
    id: "bio-cig",
    name: "Bio-CIG",

    title: "Column Integrity Guard",

   
    subtitle:
      "Continuously monitor packed-bed bioreactor column health to maximize process reliability and product quality.",

   images: [
   ci1
    ],

    caseStudyRoute: "/case-study/column-integrity/column-guard",

    youtubeVideo: null,

  

    features: [
  "Column integrity monitoring",
      "Real-time process analytics",
      "Predictive maintenance alerts",
      "Compliance-ready reporting",
    ],
  },

  


{
  id: "hyundai-pm",

  slug: "hyundai-pm",

  name: "Machine Tools",

  title: "Diameter Quality Inspection",

  subtitle:
    "Real-time diameter inspection platform with automated Cp/Cpk analysis, traceability, historian dashboards, and professional PDF reporting.",

  images: [
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
  ],

  caseStudyRoute:
    "/case-study/machine-tools",

  youtubeVideo: null,

  features: [
    "Real-time diameter inspection monitoring",
    "Automated Cp/Cpk capability analysis",
    "Measurement history & batch traceability",
    "Professional PDF & CSV inspection reports",
  ],
},
{
    id: "em",
    name: "EM",

    title: "Energy Monitoring",

    subtitle:
      "Gain complete visibility into plant-wide energy consumption to reduce costs, improve efficiency, and support sustainability initiatives.",
     images: [
      em1,
      em2,
      em3,
      em8,
      em4,
      em5,
        em6,
      em7,
    ],
    caseStudyRoute: null,

    features: [
       "Real-time utility monitoring",
      "Machine-wise energy analytics",
      "Cost optimization insights",
      "Automated alerts & reports",
    ],
        youtubeVideo: null,
    
  }
];

export default function ProductShowcase() {
const [active, setActive] = useState(() => {
  if (window.location.pathname === "/biopm") {
    return products.find((p) => p.id === "bio-pm");
  }

  const saved = sessionStorage.getItem("activeProduct");
  return products.find((p) => p.id === saved) || products[0];
});
useEffect(() => {
  sessionStorage.setItem("activeProduct", active.id);
}, [active]);
const [currentImage, setCurrentImage] = useState(0);
const navigate = useNavigate();
const [showVideo, setShowVideo] = useState(false);
useEffect(() => {
  setCurrentImage(0);
}, [active]);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % active.images.length);
  }, 2500);

  return () => clearInterval(interval);
}, [active]);


useEffect(() => {
  products.forEach((product) => {
    product.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
}, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6">

        {/* Tabs */}
        <h2 className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16">
  Ready-Made Software Solutions
</h2>

        <div
  id="products"
  className="
    grid
    grid-cols-2
    gap-3
    mb-12

    sm:flex
    sm:flex-wrap
    sm:justify-center
  "
>
  {products.map((product) => (
    <button
      key={product.id}
      onClick={() => setActive(product)}
      className={`
        w-full
        h-11
        rounded-xl
        text-sm
        font-medium
        border
        transition-all
        duration-300

        sm:w-[170px]
        sm:h-14
        sm:text-base
        sm:rounded-2xl

        ${
          active.id === product.id
            ? "bg-[#0B1B64] border-[#0B1B64] border border-white/20 text-white shadow-lg"
            : "bg-white/10 border-white/10 text-slate-300 hover:bg-white/15"
        }
      `}
    >
      {product.name}
    </button>
  ))}
</div>

        {/* Main Content */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">          {/* LEFT SIDE MONITOR */}

{/* LEFT SIDE MONITOR */}

<div className="flex justify-center items-start lg:sticky lg:top-24">

  <div className="w-full max-w-[680px]">

    {/* Monitor */}
    <div className="rounded-[30px] p-3 bg-gradient-to-b from-[#f5f5f5] via-[#cfcfcf] to-[#8e8e8e] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

      <div className="relative overflow-hidden rounded-[18px] bg-black aspect-[16/9]">

        <img
          src={active.images[currentImage]}
          alt={active.title}
          className="absolute inset-0 w-full h-full object-cover "
        />

      </div>

    </div>

    {/* Stand */}

    <div className="flex flex-col items-center">

      <div className="w-20 sm:w-32 h-10 sm:h-14 bg-gradient-to-b from-[#d8d8d8] to-[#8d8d8d]" />

      <div className="w-40 sm:w-64 h-2 sm:h-5 rounded-full bg-gradient-to-b from-[#cfcfcf] to-[#7c7c7c]" />

    </div>

  </div>

</div>

          {/* RIGHT CONTENT */}

          <div
            key={active.id}
  className="animate-fade min-h-[620px] flex flex-col"
          >
            <p className="uppercase tracking-[0.2em] text-[#79d5e4] font-semibold">
              Serkayon Product Suite
            </p>

            <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
              {active.title}
            </h2>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
              {active.subtitle}
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">

              {active.features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-10 w-10 rounded-full bg-[#388B97]/20 flex items-center justify-center">
                    <Zap
                      size={18}
                      className="text-[#4dc6d6]"
                    />
                  </div>

                  <span className="text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
{/* Buttons */}
{/* Buttons */}
<div className="mt-5 w-full max-w-md space-y-4">

  {/* Download Button */}
  {active.id === "bio-pm" && (
    <a
      href={import.meta.env.VITE_BIO_PM_DOWNLOAD}
       onClick={() => {
    toast.success("Download started successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  }}
      className="
        relative
        overflow-hidden
        shine-button
        w-full
        rounded-xl
        bg-[#0387c4]
     
        px-4 sm:px-6
        py-3 sm:py-4
        text-white
        shadow-xl
        flex
        items-center
        justify-center
        gap-3
        hover:scale-[1.02]
        transition-all
      "
    >
      <Download
        size={20}
        className="shrink-0 sm:w-[22px] sm:h-[22px]"
      />

      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-base sm:text-lg">
          Download Software
        </span>

        <span className="text-[11px] sm:text-xs text-white/70">
          7-Day Free Trial
        </span>
      </div>
    </a>
  )}

  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

    {/* Watch Demo */}
    {active.youtubeVideo && (
      <button
        className="
          w-full
          rounded-xl
          bg-[#050f98]
          px-4 sm:px-6
          py-3 sm:py-4
          text-white
          flex
          items-center
          justify-center
          gap-2
          hover:scale-[1.02]
          transition-all
        "
        onClick={() =>
          window.open(
            active.youtubeVideo,
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <PlayCircle
          size={18}
          className="sm:w-5 sm:h-5"
        />

        <span className="text-sm sm:text-base font-medium">
          Watch Demo
        </span>
      </button>
    )}

    {/* Learn More */}
    {active.caseStudyRoute && (
      <button
        className="
          w-full
          rounded-xl
          border
          border-white/15
          px-4 sm:px-6
          py-3 sm:py-4
          text-white
          flex
          items-center
          justify-center
          gap-2
          hover:bg-white/5
          transition-all
        "
        onClick={() => navigate(active.caseStudyRoute)}
      >
        <span className="text-sm sm:text-base font-medium">
          Learn More
        </span>

        <ArrowRight
          size={18}
          className="sm:w-5 sm:h-5"
        />
      </button>
    )}

  </div>

</div>
          </div>

        </div>
      </div>
    {showVideo && (
      <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4">
  <div className="relative w-full max-w-5xl">

    {/* Close Button */}
<button
  onClick={() => setShowVideo(false)}
  className="
    absolute
    top-3 right-3
    sm:top-4 sm:right-4
    z-20
    flex
    h-9 w-9
    sm:h-10 sm:w-10
    items-center
    justify-center
    rounded-full
    bg-black/60
    backdrop-blur-md
    border
    border-white/20
    text-white
    hover:bg-red-500
    hover:scale-110
    active:scale-95
    transition-all
    duration-200
  "
  aria-label="Close video"
>
  <span className="text-lg sm:text-xl leading-none">&times;</span>
</button>

    {/* Video */}
    <div className=" overflow-hidden bg-black">
      <video
        className="w-full aspect-video"
        controls
        autoPlay
      >
        <source src={sampleVideo} type="video/mp4" />
      </video>
    </div>

  </div>
</div>
)}
    </section>
  );
}