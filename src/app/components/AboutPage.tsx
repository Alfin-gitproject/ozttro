"use client";

import svgPaths from "../../imports/About/svg-7nn3yhe4f3";
import imgIndianSpicesImport from "../../imports/About/bc215694bdd9ffabaaf0fd41aac648f35f2af606.png";
import imgWorldMapImport from "../../imports/About/6a7fbb3677a23d88b0ee517d1fd677cb27da68cb.png";

const imgIndianSpices = typeof imgIndianSpicesImport === "string" ? imgIndianSpicesImport : imgIndianSpicesImport.src;
const imgWorldMap = typeof imgWorldMapImport === "string" ? imgWorldMapImport : imgWorldMapImport.src;
import { FadeUp, FadeLeft, FadeRight, ScaleUp, Stagger, StaggerItem, motion } from "./animations";

export function AboutPage() {
  return (
    <div className="bg-black font-['Manrope']">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-[80px] md:pt-[100px] bg-[#131314] relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute right-[10%] top-[15%] w-[494px] h-[520px] bg-[rgba(181,196,255,0.1)] blur-[75px] rounded-full pointer-events-none" />

        <div className="max-w-[1512px] mx-auto px-6 md:px-[97px] py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — image + stats */}
            <FadeLeft className="relative rounded-[16px] overflow-hidden h-[340px] sm:h-[480px] lg:h-[600px]">
              <img
                src={imgIndianSpices}
                alt="Indian Spices Selection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />

              {/* Stats grid */}
              <Stagger className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                {[
                  { val: "10+", label: "YEARS EXPERIENCE" },
                  { val: "10000+", label: "SATISFIED CLIENTS" },
                  { val: "250+", label: "EXPORT PRODUCTS" },
                  { val: "ISO", label: "CERTIFIED", icon: true },
                ].map((s, i) => (
                  <StaggerItem key={i}>
                    <ScaleUp className="backdrop-blur-[10px] bg-white/[0.03] border border-white/[0.08] rounded-[12px] p-5 flex items-center justify-between">
                      {s.icon ? (
                        <>
                          <span className="font-bold text-[#e5e2e3] text-[18px] leading-[28px]">{s.val}</span>
                          <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                            <path d={svgPaths.p13774060} fill="#00DBE9" />
                          </svg>
                        </>
                      ) : (
                        <div>
                          <p className="font-bold text-[#00dbe9] text-[22px] md:text-[24px] leading-[32px]">{s.val}</p>
                          <p className="font-normal text-[rgba(229,226,227,0.6)] text-[10px] leading-[15px] mt-0.5">{s.label}</p>
                        </div>
                      )}
                    </ScaleUp>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeLeft>

            {/* Right — text */}
            <FadeRight className="flex flex-col gap-8 lg:pt-[80px]">
              <div className="flex flex-col gap-6">
                <FadeUp>
                  <h1 className="font-bold text-[#e5e2e3] text-[36px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">
                    Built For International Trade.
                  </h1>
                </FadeUp>
                <div className="flex flex-col gap-6 text-[#c4c6d3] text-[15px] md:text-[16px] leading-[24px]">
                  <p>
                    OZTTRO began with a singular vision: to bridge the gap between India's rich agricultural heritage and the rigorous demands of the global luxury market. We don't just export spices; we export a standard of excellence that spans the entire value chain.
                  </p>
                  <p>
                    Our infrastructure is designed for high-volume, precision logistics. From state-of-the-art processing facilities in the heart of spice-growing regions to a sophisticated digital tracking ecosystem, every kilogram of OZTTRO spice is a testament to technological integration and traditional mastery.
                  </p>
                </div>
              </div>

              {/* Divider + CTA */}
              <div className="border-t border-white/5 pt-12">
                <motion.button
                  className="flex items-center gap-4 group"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="size-12 rounded-full border border-[rgba(0,219,233,0.3)] flex items-center justify-center group-hover:border-[#00dbe9] transition-colors">
                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
                      <path d={svgPaths.p30eba500} fill="#E5E2E3" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#e5e2e3] text-[12px] tracking-[1.2px]">SEE THE OPERATIONS FILM</span>
                </motion.button>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────── */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <FadeLeft>
              <motion.div
                className="relative backdrop-blur-[10px] bg-white/[0.03] border border-white/[0.08] rounded-[16px] overflow-hidden p-10 md:p-12 flex flex-col gap-6"
                whileHover={{ y: -6 }}
              >
                {/* Decorative icon */}
                <svg className="absolute top-0 right-0 opacity-10 w-[143px] h-[143px]" viewBox="0 0 143.082 143.078" fill="none">
                  <path d={svgPaths.p3183300} fill="#E5E2E3" />
                </svg>
                <h2 className="font-semibold text-[#b5c4ff] text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.25] relative z-10">Our Mission</h2>
                <p className="font-normal text-[#c4c6d3] text-[16px] md:text-[18px] leading-[29px] relative z-10">
                  To architect a transparent, high-efficiency spice supply chain that empowers local cultivators while delivering unparalleled purity and flavor profiles to global food manufacturers and luxury retailers.
                </p>
              </motion.div>
            </FadeLeft>

            {/* Vision */}
            <FadeRight>
              <motion.div
                className="relative backdrop-blur-[10px] bg-white/[0.03] border border-[rgba(0,219,233,0.3)] rounded-[16px] overflow-hidden p-10 md:p-12 flex flex-col gap-6"
                whileHover={{ y: -6 }}
              >
                {/* Decorative icon */}
                <svg className="absolute top-0 right-0 opacity-10 w-[152px] h-[124px]" viewBox="0 0 152 124" fill="none">
                  <path d={svgPaths.p36293380} fill="#00DBE9" />
                </svg>
                <h2 className="font-semibold text-[#00dbe9] text-[28px] md:text-[32px] tracking-[-0.32px] leading-[1.25] relative z-10">Our Vision</h2>
                <p className="font-normal text-[#c4c6d3] text-[16px] md:text-[18px] leading-[29px] relative z-10">
                  To be the global benchmark for spice excellence, where the name OZTTRO is synonymous with innovation, ethical sourcing, and the definitive standard of sensory quality across all 7 continents.
                </p>
              </motion.div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Global Operations Framework ─────────────────────────── */}
      <section className="bg-black pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
          <FadeUp>
            <h2 className="font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15] text-center mb-14 md:mb-16">
              Global Operations Framework
            </h2>
          </FadeUp>

          {/* Map card */}
          <ScaleUp>
            <div className="relative aspect-video bg-[#1c1b1c] rounded-[24px] overflow-hidden border border-white/5">
              {/* Map background */}
              <img
                src={imgWorldMap}
                alt="Export Network Map"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              {/* Stats overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8">
                <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full max-w-[1024px]">
                  {[
                    { val: "42+", label: "DESTINATIONS" },
                    { val: "12M+", label: "KG ANNUALLY" },
                    { val: "98%", label: "RETENTION" },
                    { val: "24/7", label: "TRADE SUPPORT" },
                  ].map((s, i) => (
                    <StaggerItem key={i}>
                      <div className="flex flex-col items-center gap-2">
                        <p className="font-bold text-[#00dbe9] text-[36px] sm:text-[48px] leading-[1.0] text-center">{s.val}</p>
                        <p className="font-bold text-[rgba(229,226,227,0.5)] text-[11px] tracking-[1.8px] text-center">{s.label}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                {/* Live tracking badge */}
                <div className="backdrop-blur-[10px] bg-white/[0.03] border border-[rgba(0,219,233,0.2)] rounded-full px-6 py-3 flex items-center gap-3">
                  <div className="size-2 rounded-full bg-[#00dbe9] shadow-[0_0_6px_#00dbe9]" />
                  <span className="font-bold text-[#e5e2e3] text-[12px] tracking-[1.8px]">LIVE EXPORT TRACKING ACTIVE</span>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────────────────────── */}
      <section className="bg-black py-12 md:py-16">
        <div className="max-w-[1120px] mx-auto px-6 md:px-[80px] text-center">
          <FadeUp>
            <p className="font-light text-[#e5e2e3] text-[28px] sm:text-[36px] md:text-[48px] tracking-[-0.96px] leading-[1.2]">
              "Driven By Precision.{" "}
              <span className="font-extrabold text-[#b5c4ff]">Built On Trust.</span>"
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="bg-black pb-20 md:pb-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-[80px]">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Uncompromising Ethics",
                desc: "We operate with radical transparency, ensuring that every partner in our ecosystem is treated with dignity and fairness.",
              },
              {
                title: "Technological Foresight",
                desc: "Integrating AI and blockchain to forecast market trends and secure immutable supply chain data.",
              },
              {
                title: "Heritage Mastery",
                desc: "Protecting the ancient wisdom of Indian spice cultivation through modern scientific validation.",
              },
            ].map((v, i) => (
              <StaggerItem key={i}>
                <h3 className="font-normal text-[#e5e2e3] text-[20px] md:text-[24px] leading-[32px] mb-4">{v.title}</h3>
                <p className="font-normal text-[rgba(229,226,227,0.6)] text-[15px] md:text-[16px] leading-[24px]">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
