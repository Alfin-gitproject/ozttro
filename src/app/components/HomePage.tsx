"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { FadeUp, FadeIn, FadeLeft, FadeRight, ScaleUp, Stagger, StaggerItem, Parallax } from "./animations";
import svgPaths from "../../imports/Home/svg-wn5xcdn5w2";

const heroVideo = "/hero-video.mp4";
import imgGradientImport from "../../imports/Home/36ea541e467b25a1f06c7d237e58e071cf4862ca.png";
import imgBlackPepperImport from "../../imports/Home/e015bc418d63502421e8fd6aa43adecf12caa23f.png";
import imgCinnamonImport from "../../imports/Home/06835955baeb614bb5d56ce8c9b523a5a471d0e6.png";
import imgSpice2Import from "../../imports/Home/acc5d3e6df5f4852f4bec58b10ed6a22feda885a.png";
import imgSpice3Import from "../../imports/Home/abd22b13740d0ce926e298ed7784f744f3838c35.png";
import imgPremiumSpicesCollectionImport from "../../imports/Home/8cc41e4c149c6573c70f2e5c9c7f4a3e84ddf19e.png";

const imgGradient = typeof imgGradientImport === "string" ? imgGradientImport : imgGradientImport.src;
const imgBlackPepper = typeof imgBlackPepperImport === "string" ? imgBlackPepperImport : imgBlackPepperImport.src;
const imgCinnamon = typeof imgCinnamonImport === "string" ? imgCinnamonImport : imgCinnamonImport.src;
const imgSpice2 = typeof imgSpice2Import === "string" ? imgSpice2Import : imgSpice2Import.src;
const imgSpice3 = typeof imgSpice3Import === "string" ? imgSpice3Import : imgSpice3Import.src;
const imgPremiumSpicesCollection = typeof imgPremiumSpicesCollectionImport === "string" ? imgPremiumSpicesCollectionImport : imgPremiumSpicesCollectionImport.src;

/* ── Hero with video ────────────────────────────────────────── */
function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 140]), { stiffness: 60, damping: 18 });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-end pb-12 md:pb-6">
      {/* Video background — rendered at native resolution, NO scale transform */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[1.15]"
          style={{ objectPosition: "center center" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Minimal overlays — keep video as visible as possible */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }} />
      </div>

      {/* Content fades on scroll */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1512px] mx-auto w-full px-6 md:px-[100px] pt-[100px] md:pt-[140px]"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-[rgba(0,219,233,0.1)] border border-[rgba(0,219,233,0.3)] rounded-full px-4 py-1.5 mb-6"
        >
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="size-1.5 rounded-full bg-[#00dbe9]"
          />
          <span className="font-['Manrope'] font-bold text-[#00dbe9] text-[11px] tracking-[1.8px]">ESTABLISHED 2014 • GLOBAL REACH</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
          className="font-['Manrope'] font-extrabold text-[#e5e2e3] text-[40px] sm:text-[56px] md:text-[68px] tracking-[-2.4px] md:tracking-[-3.2px] leading-[1.1] mb-5 max-w-[700px]"
        >
          Defining{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b5c4ff] to-[#00dbe9]">Global</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b5c4ff] to-[#00dbe9]">Spice</span>{" "}
          Excellence.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.0, 0.0, 0.2, 1] }}
          className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.8)] text-[15px] md:text-[17px] leading-[28px] md:leading-[32px] mb-6 max-w-[512px]"
        >

          We carefully select the world's finest spices and export them to the highest quality standards. Our goal is to provide our customers with the best quality and smooth trading experience by ensuring accuracy and reliability at every stage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap gap-4 mb-10 md:mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 12px_24px rgba(2,102,255,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0266ff] shadow-[0_8px_16px_rgba(2,102,255,0.3)] rounded-[8px] px-10 py-[17px] font-['Manrope'] font-bold text-[#f9f7ff] text-[12px] tracking-[1.8px] transition-shadow"
          >
            Start Sourcing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            className="backdrop-blur-[10px] bg-white/5 border border-white/20 rounded-[8px] px-10 py-[17px] font-['Manrope'] font-bold text-[#e5e2e3] text-[12px] tracking-[1.8px]"
          >
            Quality Protocol
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 pb-6 border-t border-white/10 pt-6"
        >
          {[
            { val: "10+", label: "Years of Authority" },
            null,
            { val: "250+", label: "Global Partners" },
            null,
            { val: "Live", label: "Export Tracking", dot: true },
          ].map((s, i) =>
            s === null ? (
              <div key={i} className="w-px h-[48px] bg-white/10 hidden md:block self-center" />
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 + i * 0.1 }}
                className="flex flex-col items-center text-center min-w-[140px] md:min-w-0"
              >
                {s.dot ? (
                  <div className="flex items-center justify-center gap-2 mb-0.5">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-[#00dbe9] rounded-full shadow-[0_0_8px_#00dbe9] size-2 shrink-0"
                    />
                    <p className="font-['Manrope'] font-semibold text-[#00dbe9] text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.2]">{s.val}</p>
                  </div>
                ) : (
                  <p className="font-['Manrope'] font-semibold text-[#00dbe9] text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.2]">{s.val}</p>
                )}
                <p className="font-['Manrope'] font-bold text-[rgba(229,226,227,0.5)] text-[11px] tracking-[1.8px]">{s.label}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Hidden to avoid overlap with centered stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ── Premium Exports ────────────────────────────────────────── */
function PremiumExports() {
  return (
    <section className="bg-black py-16 md:py-[80px]">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[100px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <FadeLeft>
            <div className="flex flex-col gap-4 max-w-[500px]">
              <p className="font-['Manrope'] font-bold text-[#00dbe9] text-[12px] tracking-[1.2px]">THE COLLECTION</p>
              <h2 className="font-['Manrope'] font-bold text-white text-[36px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">Our Premium Exports</h2>
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[1.8px] group-hover:underline">View Full Catalog</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d={svgPaths.p1e74ffc0} fill="#B5C4FF" />
              </svg>
            </div>
          </FadeRight>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Main featured card */}
          <StaggerItem className="md:col-span-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-[24px] overflow-hidden h-[300px] md:h-[400px] backdrop-blur-[10px] bg-white/5 border border-white/10"
            >
              <img src={imgPremiumSpicesCollection} alt="Master Spice Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <img src={imgGradient} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="backdrop-blur-[6px] bg-black/50 border border-white/10 rounded-full px-3 py-1 font-['Manrope'] font-bold text-white text-[12px] tracking-[1.8px]">Grade A</span>
                <h3 className="font-['Manrope'] font-semibold text-white text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.25] mt-2 mb-1">Master Spice Collection</h3>
                <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[14px] md:text-[16px] leading-[24px]">Premium-quality spices sourced from around the world, specially selected for exceptional taste and professional cooking.</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-[24px] overflow-hidden h-[300px] md:h-[400px] backdrop-blur-[10px] bg-white/5 border border-white/10"
            >
              <img src={imgBlackPepper} alt="Black Pepper" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-['Manrope'] font-semibold text-white text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.25] mb-1">Black Pepper</h3>
                <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[14px] md:text-[16px] leading-[24px]">Premium Tellicherry &amp; Malabar Black Pepper</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-[24px] overflow-hidden h-[300px] md:h-[400px] backdrop-blur-[10px] bg-white/5 border border-white/10"
            >
              <img src={imgCinnamon} alt="Ceylon Cinnamon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-['Manrope'] font-semibold text-white text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.25] mb-1">Ceylon Cinnamon</h3>
                <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[14px] md:text-[16px] leading-[24px]">Premium Alba  &amp; C5 Special Grade Cinnamon</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem className="md:col-span-3">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-[24px] overflow-hidden h-[300px] md:h-[400px] backdrop-blur-[10px] bg-white/5 border border-white/10 flex items-center"
            >
              <div className="absolute top-2 right-2 bg-[rgba(2,102,255,0.1)] blur-[40px] rounded-full size-[256px]" />
              <div className="relative z-10 p-8 md:p-10 w-full">
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  {[
                    { val: "40+", label: "Countries\nExported" },
                    { val: "10k", label: "Metric Tons\nAnnually" },
                    { val: "100%", label: "Traceability" },
                    { val: "ISO", label: "22000:2018\nCertified" },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                      <p className="font-['Manrope'] font-bold text-white text-[40px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">{s.val}</p>
                      <p className="font-['Manrope'] font-bold text-[#c4c6d3] text-[11px] tracking-[1.8px] whitespace-pre-line leading-[16px] mt-1">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div aria-hidden className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none" />
            </motion.div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

/* ── Precision Trade ────────────────────────────────────────── */
function PrecisionTrade() {
  const cards = [
    { icon: svgPaths.p2256d300, vw: "0 0 20 25", title: "Certified Quality", desc: "Stringent multi-tier testing and international certifications ensuring only the finest harvest reaches your facility" },
    { icon: svgPaths.p29083e80, vw: "0 0 25 25", title: "Global Sourcing", desc: "Working directly with trusted farmers and cooperatives around the world to ensure quality spices at competitive prices." },
    { icon: svgPaths.p29048800, vw: "0 0 25 23.75", title: "Seamless Logistics", desc: "From sourcing to delivery, we ensure smooth operations, live tracking, and timely worldwide shipping." },
    { icon: svgPaths.p3fb16680, vw: "0 0 27.5 20", title: "Trade Finance", desc: "Flexible payment options and financial support tailored to build strong, long-term business partnerships." },
    { icon: svgPaths.p1f38cd00, vw: "0 0 24.375 20", title: "Compliance Ready", desc: "Fully compliant with international export regulations, quality standards, and required shipping documentation." },
    { icon: svgPaths.p3f7ba400, vw: "0 0 21.2443 21.2404", title: "Sustainability", desc: "Direct support for regenerative agriculture and ethical farming practices to protect future harvests." },
  ];
  return (
    <section className="bg-black py-16 md:py-[80px]">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[100px]">
        <FadeUp className="text-center mb-10 md:mb-14">
          <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15] mb-4">PRECISION TRADE. STRATEGIC SCALE.</h2>
          <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[16px] leading-[24px] max-w-[576px] mx-auto">
            From careful sourcing to timely delivery, we ensure quality, reliability, and excellence at every stage.
          </p>
        </FadeUp>
        <Stagger fast className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.18)" }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-[12px] p-8 flex flex-col gap-3 cursor-default"
            >
              <div className="bg-[rgba(11,48,130,0.2)] border border-[rgba(181,196,255,0.2)] rounded-[8px] size-[56px] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox={c.vw} fill="none"><path d={c.icon} fill="#00DBE9" /></svg>
              </div>
              <h3 className="font-['Manrope'] font-semibold text-[#e5e2e3] text-[24px] md:text-[28px] tracking-[-0.32px] leading-[1.2] mt-2">{c.title}</h3>
              <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.7)] text-[15px] md:text-[16px] leading-[24px]">{c.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ── Luxury Exports ─────────────────────────────────────────── */
function LuxuryExports() {
  const products = [
    { img: imgPremiumSpicesCollection, origin: "ORIGIN: WESTERN GHATS", name: "Green Cardamom", desc: "Grade 8mm+ jumbo pods, bold aroma, vibrant color." },
    { img: imgSpice2, origin: "ORIGIN: MALABAR COAST", name: "Black Pepper", desc: "High-density Tellicherry bold, intense heat and essential oils." },
    { img: imgSpice3, origin: "ORIGIN: ERODE", name: "Turmeric", desc: "Curcumin rich, sun-dried fingers and ultra-fine powder." },
  ];
  return (
    <section className="bg-black py-16 md:py-[80px]">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[100px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <FadeLeft>
            <div className="flex flex-col gap-4 max-w-[500px]">
              <p className="font-['Manrope'] font-bold text-[#00dbe9] text-[12px] tracking-[1.2px] uppercase">The OZTTRO Portfolio</p>
              <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[36px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">Luxury Grade Exports</h2>
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[1.8px] group-hover:underline">View Complete Catalog</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p1a406200} fill="#B5C4FF" /></svg>
            </div>
          </FadeRight>
        </div>
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-[16px] overflow-hidden aspect-[4/5] backdrop-blur-[10px] bg-white/5 border border-white/5 cursor-default"
            >
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                <p className="font-['Manrope'] font-bold text-[#00dbe9] text-[12px] tracking-[1.8px]">{p.origin}</p>
                <h3 className="font-['Manrope'] font-semibold text-[#e5e2e3] text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.25]">{p.name}</h3>
                <p className="font-['Manrope'] font-normal text-[rgba(229,226,227,0.7)] text-[15px] leading-[24px] pb-2">{p.desc}</p>
                <motion.button whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }} className="w-full backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-[8px] py-3 font-['Manrope'] font-bold text-[#e5e2e3] text-[12px] tracking-[1.8px]">
                  Specifications
                </motion.button>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ── Export Pipeline ────────────────────────────────────────── */
function ExportPipeline() {
  const steps = [
    { icon: svgPaths.p21b88680, vw: "0 0 22.01 20", label: "1. Procurement", desc: "Direct sourcing from audited farm networks." },
    { icon: svgPaths.p376fb300, vw: "0 0 14 19", label: "2. Analysis", desc: "Lab testing for moisture, oil content & purity." },
    { icon: svgPaths.p643d217, vw: "0 0 20 20", label: "3. Processing", desc: "Climate-controlled sorting & industrial cleaning." },
    { icon: svgPaths.pc679c40, vw: "0 0 16 20", label: "4. Compliance", desc: "Customized packaging & export documentation." },
    { icon: svgPaths.p146eb80, vw: "0 0 22 16", label: "5. Dispatch", desc: "Priority global freight with live cargo tracking." },
  ];
  return (
    <section className="bg-[#1c1b1c] py-16 md:py-[60px]">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[116px]">
        <FadeUp>
          <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15] text-center mb-10 md:mb-16">The Export Pipeline</h2>
        </FadeUp>
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ originX: 0 }}
            className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[rgba(0,219,233,0.4)] to-transparent"
          />
          <Stagger fast className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgba(0,219,233,0.3)" }}
                  className="relative bg-[#131314] border-2 border-[rgba(0,219,233,0.5)] rounded-full size-16 flex items-center justify-center shrink-0 z-10"
                >
                  <svg className="w-5 h-5" viewBox={s.vw} fill="none"><path d={s.icon} fill="#00DBE9" /></svg>
                </motion.div>
                <p className="font-['Manrope'] font-bold text-[#e5e2e3] text-[11px] tracking-[1.8px] mt-2">{s.label}</p>
                <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.6)] text-[13px] leading-[20px]">{s.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ── Certifications ─────────────────────────────────────────── */
function Certifications() {
  const certs = [
    { icon: svgPaths.p295ae000, vw: "0 0 24 31.5", label: "ISO 22000" },
    { icon: svgPaths.p3bb1200, vw: "0 0 33 31.5", label: "HACCP CERTIFIED" },
    { icon: svgPaths.p3f983240, vw: "0 0 30 30", label: "FSSAI REGISTERED" },
    { icon: svgPaths.p31641a00, vw: "0 0 24 30", label: "SPICES BOARD INDIA" },
    { icon: svgPaths.p345427e0, vw: "0 0 33 25.8", label: "USDA ORGANIC" },
  ];
  return (
    <section className="bg-[#131314] py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[1512px] mx-auto px-6 md:px-[116px]"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <svg className="w-6 h-8" viewBox={c.vw} fill="none"><path d={c.icon} fill="#E5E2E3" /></svg>
              <span className="font-['Manrope'] font-bold text-[#e5e2e3] text-[11px] tracking-[1.8px]">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ── Global Trade ───────────────────────────────────────────── */
function GlobalTrade() {
  return (
    <section className="bg-black py-16 md:py-[80px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeLeft className="lg:col-span-2">
            <motion.div
              whileHover={{ borderColor: "rgba(181,196,255,0.2)" }}
              className="backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-[16px] p-8 md:p-10 h-full"
            >
              <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15] mb-4">Global Trade Sovereignty</h2>
              <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[16px] leading-[24px] mb-8">Operating at the intersection of traditional agriculture and high-speed global commerce.</p>
              <div className="grid grid-cols-2 gap-8">
                {[{ val: "42+", label: "Countries Reached" }, { val: "12M+", label: "KG Exported Yearly" }].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                    <p className="font-['Manrope'] font-bold text-[#00dbe9] text-[40px] md:text-[48px] leading-[1.1]">{s.val}</p>
                    <p className="font-['Manrope'] font-bold text-[rgba(229,226,227,0.5)] text-[11px] tracking-[1.8px] mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeLeft>

          <FadeRight>
            <motion.div
              whileHover={{ borderColor: "rgba(181,196,255,0.2)" }}
              className="backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-[16px] p-8 md:p-10 flex flex-col justify-center"
            >
              <svg className="mb-6" viewBox="0 0 275.333 18" fill="none" style={{ maxWidth: 275 }}>
                <path d={svgPaths.p1c110f00} fill="#00DBE9" />
              </svg>
              <p className="font-['Manrope'] font-normal text-[#e5e2e3] text-[16px] md:text-[18px] leading-[32px] mb-8">
                "OZTTRO's consistency in spice density and color has been the cornerstone of our premium seasoning line for five years."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-[#0b3082] rounded-full size-12 shrink-0" />
                <div>
                  <p className="font-['Manrope'] font-bold text-[#e5e2e3] text-[16px] leading-[24px]">Marco Van Der Zee</p>
                  <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[12px] uppercase tracking-wider">Director, Eurospice Global</p>
                </div>
              </div>
            </motion.div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

/* ── Page root ──────────────────────────────────────────────── */
export function HomePage() {
  return (
    <>
      <Hero />
      <PremiumExports />
      <PrecisionTrade />
      <LuxuryExports />
      <ExportPipeline />
      <Certifications />
      <GlobalTrade />
    </>
  );
}
