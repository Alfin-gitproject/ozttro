"use client";

import { motion } from "motion/react";
import { Wrench, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export function MaintenancePage() {
  const steps = [
    { name: "Platform Core Update", status: "completed", desc: "Upgraded Next.js architecture for faster speeds" },
    { name: "Logistics Portal Sync", status: "active", desc: "Connecting real-time spice consignment tracking" },
    { name: "Global CDN Optimization", status: "pending", desc: "Deploying Edge nodes for instant international loading" },
  ];

  return (
    <div className="min-h-screen bg-black text-[#e5e2e3] font-['Manrope'] relative flex flex-col justify-between overflow-hidden px-6 py-12">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0266ff]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00dbe9]/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Header / Logo */}
      <header className="relative z-10 max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-['Manrope'] font-extrabold text-[24px] tracking-[-1px] text-white">
            OZTTRO<span className="text-[#00dbe9]">.</span>
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-[rgba(0,219,233,0.08)] border border-[rgba(0,219,233,0.2)] rounded-full px-3 py-1">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="size-1.5 rounded-full bg-[#00dbe9]"
          />
          <span className="font-['Manrope'] font-bold text-[#00dbe9] text-[10px] tracking-[1.5px] uppercase">
            Maintenance Mode Active
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[800px] mx-auto w-full flex flex-col items-center justify-center my-auto py-12 text-center gap-10">
        
        {/* Animated Icon Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#0266ff]/20 blur-[30px] rounded-full scale-125" />
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Wrench className="w-10 h-10 text-[#00dbe9]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Details */}
        <div className="flex flex-col gap-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-['Manrope'] font-extrabold text-[36px] sm:text-[48px] md:text-[56px] tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.1] text-white"
          >
            Refining the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b5c4ff] to-[#00dbe9]">
              Spice Pipeline
            </span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-['Manrope'] font-normal text-[rgba(196,198,211,0.8)] text-[16px] md:text-[18px] leading-[28px] max-w-[600px] mx-auto"
          >
            We are performing essential portal updates to improve trading speeds, contract tracking, and export analytics. Our team is working to bring it back online.
          </motion.p>
        </div>

        {/* Maintenance Progress Tracker */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-[10px] text-left flex flex-col gap-4 max-w-[640px]"
        >
          <h3 className="font-['Manrope'] font-bold text-[12px] text-[#b5c4ff] tracking-[1.5px] uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00dbe9]" /> Update Progress
          </h3>
          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1">
                  {step.status === "completed" ? (
                    <div className="size-4 rounded-full border border-[#4ade80] flex items-center justify-center">
                      <div className="size-2 rounded-full bg-[#4ade80]" />
                    </div>
                  ) : step.status === "active" ? (
                    <div className="size-4 rounded-full border border-[#00dbe9] flex items-center justify-center animate-pulse">
                      <div className="size-2 rounded-full bg-[#00dbe9]" />
                    </div>
                  ) : (
                    <div className="size-4 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="size-2 rounded-full bg-white/10" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className={`font-semibold text-[14px] md:text-[15px] ${step.status === "completed" ? "text-white/60 line-through" : "text-white"}`}>
                      {step.name}
                    </p>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${
                      step.status === "completed" ? "text-[#4ade80]/70" :
                      step.status === "active" ? "text-[#00dbe9]" : "text-white/30"
                    }`}>
                      {step.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-white/40 font-normal leading-[18px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full flex flex-col gap-4"
        >
          <p className="font-['Manrope'] font-bold text-[11px] tracking-[1.8px] text-[rgba(229,226,227,0.4)] uppercase">
            Need Immediate Assistance?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <a 
              href="mailto:ozttroexport@gmail.com" 
              className="group backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#0266ff]/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-[rgba(2,102,255,0.15)] text-[#b5c4ff] rounded-lg p-2 group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <p className="font-bold text-[10px] tracking-[1.5px] text-white/50 uppercase">Email Us</p>
              <p className="text-[13px] text-white font-medium select-all">ozttroexport@gmail.com</p>
            </a>
            
            <a 
              href="tel:+919961420005" 
              className="group backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#00dbe9]/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-[rgba(0,219,233,0.15)] text-[#00dbe9] rounded-lg p-2 group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <p className="font-bold text-[10px] tracking-[1.5px] text-white/50 uppercase">Call Ops</p>
              <p className="text-[13px] text-white font-medium select-all">+91 9961420005</p>
            </a>

            <div 
              className="group backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-white/20 transition-all duration-300"
            >
              <div className="bg-white/10 text-white rounded-lg p-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="font-bold text-[10px] tracking-[1.5px] text-white/50 uppercase">Headquarters</p>
              <p className="text-[13px] text-white font-medium">Kerala, India</p>
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-[1200px] mx-auto w-full text-center border-t border-white/5 pt-6">
        <p className="font-['Manrope'] font-bold text-[10px] tracking-[1.8px] text-[rgba(229,226,227,0.3)]">
          © 2026 OZTTRO. ALL SYSTEM CHANNELS RESERVED.
        </p>
      </footer>
    </div>
  );
}
