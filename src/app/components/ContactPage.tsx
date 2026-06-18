"use client";

import { useState } from "react";
import svgPaths from "../../imports/Service-1/svg-yea6q3n5is";
import imgBgImport from "../../imports/Service-1/20c995e05f4af85773a76fa4bb2f523b14d8726b.png";

const imgBg = typeof imgBgImport === "string" ? imgBgImport : imgBgImport.src;
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem, motion } from "./animations";

/* ── Reusable labelled field wrapper ────────────────────────── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-['Manrope'] font-bold text-[rgba(229,226,227,0.6)] text-[12px] tracking-[1.8px]">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-black/30 border border-white/10 rounded-[12px] px-4 py-3.5 font-['Manrope'] font-normal text-[#c4c6d3] text-[16px] placeholder-[#6b7280] outline-none focus:border-[#00dbe9]/40 transition-colors";

/* ── Contact form section ───────────────────────────────────── */
function EnquiryForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", country: "", product: "", message: "",
  });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Trade Enquiry from ${form.name}${form.company ? " – " + form.company : ""}`
    );
    const body = encodeURIComponent(
      `Full Name: ${form.name}\n` +
      `Company: ${form.company}\n` +
      `Email: ${form.email}\n` +
      `Country: ${form.country}\n` +
      `Product Requirement: ${form.product}\n\n` +
      `Message:\n${form.message}`
    );
    window.location.href = `mailto:ozttroexport@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <FadeLeft className="flex flex-col gap-8">
      {/* Heading */}
      <div className="flex flex-col gap-4">
        <h1 className="font-['Manrope'] font-bold text-white text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.15]">
          Global Enquiry Desk
        </h1>
        <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[15px] md:text-[16px] leading-[24px]">
          Submit your bulk requirement and our trade specialists will get back to you within 4 hours.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Full Name">
            <input className={inputCls} placeholder="John Doe" value={form.name} onChange={set("name")} />
          </Field>
          <Field label="Company Name">
            <input className={inputCls} placeholder="Global Trade Inc." value={form.company} onChange={set("company")} />
          </Field>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Email Address">
            <input type="email" className={inputCls} placeholder="john@company.com" value={form.email} onChange={set("email")} />
          </Field>
          <Field label="Country">
            <input className={inputCls} placeholder="e.g. United Kingdom" value={form.country} onChange={set("country")} />
          </Field>
        </div>

        {/* Product requirement */}
        <Field label="Product Requirement">
          <input className={inputCls} placeholder="e.g. Bulk Green Cardamom 8mm" value={form.product} onChange={set("product")} />
        </Field>

        {/* Message */}
        <Field label="Message">
          <textarea
            className={inputCls + " min-h-[120px] resize-y"}
            placeholder="Detail your specific export needs..."
            value={form.message}
            onChange={set("message")}
          />
        </Field>

        {/* Submit */}
        <motion.button
          type="submit"
          className="w-full sm:w-fit px-10 py-3.5 bg-[#0266ff] shadow-[0_8px_16px_rgba(2,102,255,0.3)] rounded-[12px] font-['Manrope'] font-bold text-white text-[15px] md:text-[16px] hover:bg-blue-600 transition-colors cursor-pointer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Enquiry
        </motion.button>
      </form>
    </FadeLeft>
  );
}

/* ── Contact info cards ─────────────────────────────────────── */
function InfoCard({
  iconD, iconVw, iconBg, border,
  label, value,
}: {
  iconD: string; iconVw: string; iconBg: string; border: string;
  label: string; value: string;
}) {
  return (
    <motion.div
      className={`backdrop-blur-[20px] bg-white/5 border ${border} rounded-[16px] p-8 flex flex-col gap-4`}
      whileHover={{ y: -6 }}
    >
      <div className={`${iconBg} rounded-[12px] size-12 flex items-center justify-center shrink-0`}>
        <svg className="w-5 h-5" viewBox={iconVw} fill="none">
          <path d={iconD} fill="currentColor" />
        </svg>
      </div>
      <div>
        <p className="font-['Manrope'] font-bold text-[rgba(229,226,227,0.5)] text-[12px] tracking-[1.8px] uppercase mb-1">{label}</p>
        <p className="font-['Manrope'] font-semibold text-white text-[16px] md:text-[18px] leading-[32px]">{value}</p>
      </div>
    </motion.div>
  );
}

const infoCards = [
  {
    iconD: svgPaths.p2b19980, iconVw: "0 0 25 20",
    iconBg: "bg-[rgba(0,62,66,0.3)] text-[#00DBE9]",
    border: "border-white/10",
    label: "EMAIL INQUIRY", value: "ozttroexport@gmail.com",
  },
  {
    iconD: svgPaths.p297b0200, iconVw: "0 0 22.5 22.5",
    iconBg: "bg-[rgba(2,102,255,0.2)] text-[#B3C5FF]",
    border: "border-white/10",
    label: "GLOBAL OPERATIONS", value: "+91 9961420005",
  },
  {
    iconD: svgPaths.p682b940, iconVw: "0 0 20 25",
    iconBg: "bg-white/10 text-white",
    border: "border-white/10",
    label: "HEADQUARTERS", value: "Kerala, India",
  },
  {
    iconD: svgPaths.p126cb000, iconVw: "0 0 25 25",
    iconBg: "bg-[rgba(34,197,94,0.1)] text-[#4ADE80]",
    border: "border-[rgba(34,197,94,0.2)]",
    label: "INSTANT SUPPORT", value: "WhatsApp Support",
  },
];

/* ── HQ detail card ─────────────────────────────────────────── */
function HQCard() {
  return (
    <motion.div
      className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-[24px] p-10 flex flex-col gap-6"
      whileHover={{ y: -6 }}
    >
      <div>
        <p className="font-['Manrope'] font-bold text-[#b3c5ff] text-[12px] tracking-[1.8px] mb-3">GLOBAL HEADQUARTERS</p>
        <h3 className="font-['Manrope'] font-semibold text-white text-[24px] md:text-[32px] tracking-[-0.32px] leading-[1.25]">
          OZTTRO Exports Private Limited
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {[
          {
            d: svgPaths.p1869180, vw: "0 0 16 20",
            text: "Building 42A, Export Zone Road, Kochi - 682030, Kerala, India.",
          },
          {
            d: svgPaths.p256e1340, vw: "0 0 20 20",
            text: "Mon - Sat: 09:00 - 18:00 (IST)",
          },
          {
            d: svgPaths.p13e73800, vw: "0 0 20 16",
            text: "ozttroexport@gmail.com",
          },
        ].map((row, i) => (
          <div key={i} className="flex items-start gap-4">
            <svg className="w-4 h-5 mt-0.5 shrink-0" viewBox={row.vw} fill="none">
              <path d={row.d} fill="#00DBE9" />
            </svg>
            <p className="font-['Manrope'] font-normal text-[#c4c6d3] text-[15px] md:text-[16px] leading-[24px]">{row.text}</p>
          </div>
        ))}
      </div>

      <motion.a
        href="https://www.google.com/maps/place/10%C2%B006'42.3%22N+76%C2%B028'35.8%22E/@10.1117487,76.474022,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.1117487!4d76.4765969!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center bg-white/5 border border-white/10 rounded-[12px] py-3.5 font-['Manrope'] font-bold text-[#e5e2e3] text-[12px] tracking-[1.8px] hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Directions
      </motion.a>
    </motion.div>
  );
}

/* ── CTA banner ─────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-black pb-16 md:pb-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-[80px]">
        <div className="relative rounded-[40px] overflow-hidden bg-[#0266ff] p-12 md:p-24 flex flex-col items-center text-center gap-8">
          {/* Background texture */}
          <img
            src={imgBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <FadeUp>
              <h2 className="font-['Manrope'] font-extrabold text-white text-[40px] sm:text-[56px] md:text-[80px] tracking-[-3.2px] leading-[1.2] max-w-[896px]">
                Start Your Global Trade Journey With Ozttro
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-['Manrope'] font-normal text-[rgba(255,255,255,0.8)] text-[15px] md:text-[16px] leading-[24px] max-w-[672px]">
                The world's most premium kitchens and industries await the aroma of Kerala. Let's facilitate your expansion.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <motion.button
                className="bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-[16px] px-12 py-5 font-['Manrope'] font-bold text-[#0b3082] text-[20px] md:text-[32px] tracking-[-0.32px] hover:bg-gray-50 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a Global Quote
              </motion.button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page root ──────────────────────────────────────────────── */
export function ContactPage() {
  return (
    <div className="bg-black font-['Manrope']">
      {/* Main two-column section */}
      <section className="pt-[100px] md:pt-[140px] pb-16 md:pb-24">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left — form */}
            <EnquiryForm />

            {/* Right — info cards + HQ */}
            <FadeRight className="flex flex-col gap-6">
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoCards.map((c, i) => (
                  <StaggerItem key={i}>
                    <InfoCard {...c} />
                  </StaggerItem>
                ))}
              </Stagger>
              <HQCard />
            </FadeRight>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
