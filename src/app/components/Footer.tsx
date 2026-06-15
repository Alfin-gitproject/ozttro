"use client";

import { useState } from "react";
import imgOzttro from "../../imports/Home/050501e02414c271f1c74ea4920a4ce4b3740e30.png";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#131314] pt-12 md:pt-16 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <img src={typeof imgOzttro === "string" ? imgOzttro : imgOzttro.src} alt="OZTTRO" className="h-[40px] md:h-[52px] w-auto self-start" />
            <p className="font-['Manrope'] font-normal text-[rgba(229,226,227,0.5)] text-[14px] leading-[23px]">
              Elevating the world's spice markets through technological precision and agricultural integrity.
            </p>
          </div>

          {/* Operations */}
          <div className="flex flex-col gap-6">
            <p className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[1.8px]">Operations</p>
            <div className="flex flex-col gap-3">
              {["Strategic Sourcing", "Export Compliance", "Partner Portal"].map((item) => (
                <span key={item} className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.6)] text-[16px] leading-[24px] cursor-pointer hover:text-[#c4c6d3] transition-colors">{item}</span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <p className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[1.8px]">Company</p>
            <div className="flex flex-col gap-3">
              {["Privacy Policy", "Terms of Trade", "Quality Standards"].map((item) => (
                <span key={item} className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.6)] text-[16px] leading-[24px] cursor-pointer hover:text-[#c4c6d3] transition-colors">{item}</span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 pb-6">
            <p className="font-['Manrope'] font-bold text-[#b5c4ff] text-[12px] tracking-[1.8px]">Newsletter</p>
            <p className="font-['Manrope'] font-normal text-[rgba(229,226,227,0.5)] text-[12px] leading-[16px]">Receive global spice market insights monthly.</p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-black/20 border border-white/10 rounded-l-[8px] px-4 py-2.5 font-['Manrope'] text-[14px] text-white placeholder-[#6b7280] outline-none focus:border-[#00dbe9]/50 transition-colors"
              />
              <button className="bg-[#00dbe9] rounded-r-[8px] px-4 py-2.5 flex items-center justify-center hover:bg-[#00c4d1] transition-colors">
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                  <path d="M0 16V0L19 8L0 16V16M2 13L13.85 8L2 3V6.5L8 8L2 9.5V13V13M2 13V8V3V6.5V6.5V9.5V9.5V13V13" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Manrope'] font-bold text-[rgba(229,226,227,0.3)] text-[11px] tracking-[1.8px] text-center md:text-left">
            © 2026 OZTTRO. DEFINING GLOBAL SPICE EXCELLENCE.
          </p>
          <div className="flex items-center gap-6">
            {/* Globe icon */}
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10.0125 20C8.6375 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3625 0 9.9875C0 8.6125 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.6375 0 10.0125 0C11.3875 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.6125 20 9.9875C20 11.3625 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3875 20 10.0125 20Z" fill="#E5E2E3" fillOpacity="0.3" />
            </svg> */}
            {/* Share icon */}
            {/* <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z" fill="#E5E2E3" fillOpacity="0.3" />
            </svg> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
