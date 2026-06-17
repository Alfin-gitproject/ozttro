"use client";

import svgPaths from "../../imports/Service/svg-e6cgud15vi";
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem, motion } from "./animations";

/* ─── Icon box helpers ──────────────────────────────────────── */
function IconBox({ d, vw, teal }: { d: string; vw: string; teal?: boolean }) {
  return (
    <div
      className={[
        "rounded-[12px] size-[56px] flex items-center justify-center shrink-0 border",
        teal
          ? "bg-[rgba(0,219,233,0.1)] border-[rgba(0,219,233,0.2)]"
          : "bg-[rgba(181,196,255,0.1)] border-[rgba(181,196,255,0.2)]",
      ].join(" ")}
    >
      <svg className="w-6 h-6" viewBox={vw} fill="none">
        <path d={d} fill={teal ? "#00DBE9" : "#B5C4FF"} />
      </svg>
    </div>
  );
}

/* ─── Section 1 — Core Export Services ─────────────────────── */
const services = [
  {
    d: svgPaths.p1901f300, vw: "0 0 27.5 27.5", teal: false,
    title: "Premium Spice Exports",
    desc: "Exporting high-quality spices like Cardamom, Turmeric, and Black Pepper from trusted sources.",
  },
  {
    d: svgPaths.p29083e80, vw: "0 0 25 25", teal: true,
    title: "Global Sourcing Network",
    desc: "Working directly with farmers and cooperatives to ensure quality products at competitive prices.",
  },
  {
    d: svgPaths.p1ec38700, vw: "0 0 20 25", teal: false,
    title: "Export Documentation",
    desc: " Managing customs paperwork, quality certificates, and export documents for smooth international trade.",
  },
  {
    d: svgPaths.pc00c480, vw: "0 0 27.5 20", teal: true,
    title: "International Logistics",
    desc: " Reliable shipping with complete tracking from dispatch to delivery.",
  },
  {
    d: svgPaths.peca8400, vw: "0 0 25 22.5", teal: false,
    title: "Quality Processing",
    desc: " Modern processing and testing to ensure purity, freshness, and consistent quality.",
  },
  {
    d: svgPaths.pe8b9c80, vw: "0 0 25 20", teal: true,
    title: "Private Label & Bulk Supply ",
    desc: " Custom packaging and private labeling solutions for wholesalers, retailers, and hospitality businesses.",
  },
];

function CoreExportServices() {
  return (
    <section className="bg-black pt-[100px] md:pt-[140px] pb-16 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[80px]">
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center mb-14 md:mb-16 gap-4">
          <p className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[3.6px] uppercase">
            SERVICE ECOSYSTEM
          </p>
          <h1 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">
            Integrated Export Infrastructure
          </h1>
        </FadeUp>

        {/* Cards grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="backdrop-blur-[10px] bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-10 flex flex-col gap-4"
                whileHover={{ y: -6 }}
              >
                <IconBox d={s.d} vw={s.vw} teal={s.teal} />
                <h3 className="font-['Manrope'] font-semibold text-[#e5e2e3] text-[26px] md:text-[32px] tracking-[-0.32px] leading-[1.25] mt-2">
                  {s.title}
                </h3>
                <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.7)] text-[15px] md:text-[16px] leading-[24px]">
                  {s.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─── Section 2 — Who We Serve Globally ────────────────────── */
const partners = [
  { d: svgPaths.p3eedaa00, vw: "0 0 30.1408 27", teal: false, label: "FOOD DISTRIBUTORS" },
  { d: svgPaths.p3399c200, vw: "0 0 25.5 24", teal: true, label: "SPICE BRANDS" },
  { d: svgPaths.pbe0f218, vw: "0 0 32.9636 28.5", teal: false, label: "RETAIL CHAINS" },
  { d: svgPaths.pc611100, vw: "0 0 30 27", teal: true, label: "WHOLESALE MARKETS" },
  { d: svgPaths.p36df7c0, vw: "0 0 30 27", teal: false, label: "IMPORT COMPANIES" },
  { d: svgPaths.p280a6f80, vw: "0 0 22.5 30", teal: true, label: "HOSPITALITY GROUPS" },
];

function WhoWeServe() {
  return (
    <section className="bg-black pb-16 md:pb-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-[80px]">
        <FadeUp className="flex flex-col items-center text-center mb-12 gap-4">
          <p className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[3.6px] uppercase">
            STRATEGIC PARTNERS
          </p>
          <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">
            Who We Serve Globally
          </h2>
        </FadeUp>
        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p, i) => (
            <StaggerItem key={i} className="h-full">
              <motion.div
                className="backdrop-blur-[10px] bg-white/[0.03] border border-white/[0.08] rounded-[16px] flex flex-col items-center justify-center gap-4 py-10 px-4 h-full"
                whileHover={{ y: -6 }}
              >
                <svg className="w-8 h-7 shrink-0" viewBox={p.vw} fill="none">
                  <path d={p.d} fill={p.teal ? "#00DBE9" : "#B5C4FF"} />
                </svg>
                <span className="font-['Manrope'] font-normal text-[#e5e2e3] text-[11px] text-center uppercase tracking-[0.5px] leading-[16px]">
                  {p.label}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─── Section 3 — Real-Time Logistics Monitoring ───────────── */
function LogisticsMonitoring() {
  return (
    <section className="bg-black pb-16 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[80px]">
        <div className="backdrop-blur-[10px] bg-white/[0.03] border border-[rgba(181,196,255,0.2)] rounded-[32px] p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <FadeLeft className="flex flex-col gap-6">
              <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">
                Real-Time Logistics Monitoring
              </h2>
              <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[16px] md:text-[18px] leading-[32px]">
                Our advanced tracking system helps partners monitor their shipments from dispatch to delivery. With live updates, complete product traceability, and real-time shipment data, you always know where your goods are and their current status.
              </p>
              {/* Feature rows */}
              <div className="flex flex-col gap-6 mt-2">
                {[
                  {
                    icon: null, dot: true,
                    title: "Live Tracking Active",
                    desc: "GPS monitored cold-chain containers.",
                  },
                  {
                    d: svgPaths.p382b1fc0, vw: "0 0 22 16",
                    title: "Automated Customs",
                    desc: "Pre-cleared documentation for 120+ ports.",
                  },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-full size-12 flex items-center justify-center shrink-0">
                      {f.dot ? (
                        <div className="bg-[#00dbe9] rounded-full size-3" />
                      ) : (
                        <svg className="w-5 h-4" viewBox={f.vw} fill="none">
                          <path d={f.d} fill="#B5C4FF" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-['Manrope'] font-bold text-[#e5e2e3] text-[16px] leading-[24px]">{f.title}</p>
                      <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.6)] text-[14px] leading-[21px]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeLeft>

            {/* Right — shipment card */}
            <FadeRight>
              <div className="bg-[#080808] border border-white/5 rounded-[16px] p-5 sm:p-8 flex flex-col gap-6 sm:gap-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-['Manrope'] font-normal text-[rgba(229,226,227,0.5)] text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] uppercase truncate">
                    ACTIVE SHIPMENT: #OZT-7822
                  </span>
                  <span className="bg-[#003e42] text-[#00b1bd] font-['Manrope'] font-bold text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 rounded-[4px] shrink-0">
                    IN TRANSIT
                  </span>
                </div>

                {/* Origin → Destination */}
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <div>
                    <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.5)] text-[11px] sm:text-[12px] leading-[18px]">Origin</p>
                    <p className="font-['Manrope'] font-semibold text-[#e5e2e3] text-[16px] sm:text-[24px] md:text-[32px] tracking-[-0.32px] leading-[1.25] whitespace-nowrap">Kochi, IN</p>
                  </div>
                  <svg className="w-5 h-8 shrink-0 opacity-80" viewBox="0 0 20 30" fill="none">
                    <path d={svgPaths.p9d63b80} fill="#B5C4FF" />
                  </svg>
                  <div className="text-right">
                    <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.5)] text-[11px] sm:text-[12px] leading-[18px]">Destination</p>
                    <p className="font-['Manrope'] font-semibold text-[#e5e2e3] text-[16px] sm:text-[24px] md:text-[32px] tracking-[-0.32px] leading-[1.25] whitespace-nowrap">Rotterdam, NL</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#b5c4ff] to-[#00dbe9]" />
                </div>

                {/* Sensor data */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "TEMP", value: "22.4° C" },
                    { label: "HUMIDITY", value: "58%" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-[12px] p-4"
                    >
                      <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.5)] text-[10px] uppercase tracking-wider mb-1">{s.label}</p>
                      <p className="font-['Manrope'] font-bold text-[#e5e2e3] text-[16px] leading-[24px]">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4 — Export Pipeline ──────────────────────────── */
const pipeline = [
  {
    d: svgPaths.p2d4ee00, vw: "0 0 25 25", teal: false,
    label: "1. Sourcing", color: "#B5C4FF",
    desc: "Direct sourcing from audited farm networks.",
  },
  {
    d: svgPaths.p718edc0, vw: "0 0 22.5713 22.5", teal: true,
    label: "2. Inspection", color: "#00DBE9",
    desc: "Lab testing for moisture, oil, and purity.",
  },
  {
    d: svgPaths.p1ee3ab40, vw: "0 0 22.5398 23.1324", teal: false,
    label: "3. Processing", color: "#B5C4FF",
    desc: "Climate-controlled sorting and cleaning.",
  },
  {
    d: svgPaths.peca8400, vw: "0 0 25 22.5", teal: true,
    label: "4. Documentation", color: "#00DBE9",
    desc: "Export compliance and shipping prep.",
  },
  {
    d: svgPaths.pc00c480, vw: "0 0 27.5 20", teal: false,
    label: "5. Logistics", color: "#B5C4FF",
    desc: "Priority global freight with live tracking.",
  },
  {
    d: svgPaths.p38c2e700, vw: "0 0 25.0938 20", teal: true,
    label: "6. Delivery", color: "#00DBE9",
    desc: "Door-to-door fulfillment at your warehouse.",
  },
];

function ExportPipeline() {
  return (
    <section className="bg-black pb-20 md:pb-28">
      <div className="max-w-[1120px] mx-auto px-6 md:px-[80px]">
        <FadeUp>
          <h2 className="font-['Manrope'] font-bold text-[#e5e2e3] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15] text-center mb-14 md:mb-16">
            The Export Pipeline
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#00dbe9] to-transparent" />

          <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-3">
            {pipeline.map((s, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div
                    className="relative bg-[#131314] rounded-full size-20 flex items-center justify-center shrink-0 z-10 border"
                    style={{
                      borderColor: s.teal ? "rgba(0,219,233,0.3)" : "rgba(181,196,255,0.3)",
                      boxShadow: s.teal
                        ? "0 0 6px rgba(0,219,233,0.1) inset"
                        : "0 0 6px rgba(181,196,255,0.1) inset",
                    }}
                  >
                    <svg className="w-5 h-5" viewBox={s.vw} fill="none">
                      <path d={s.d} fill={s.color} />
                    </svg>
                  </div>
                  <p
                    className="font-['Manrope'] font-bold text-[11px] tracking-[1.8px] mt-1"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </p>
                  <p className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.6)] text-[13px] leading-[20px]">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ─── Page root ─────────────────────────────────────────────── */
export function ServicePage() {
  return (
    <div className="bg-black font-['Manrope']">
      <CoreExportServices />
      <WhoWeServe />
      <LogisticsMonitoring />
      <ExportPipeline />
    </div>
  );
}
