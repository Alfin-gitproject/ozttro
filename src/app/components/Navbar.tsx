"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import imgOzttro from "../../imports/Home/logo1.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { label: "Home",    to: "/" },
    { label: "About",   to: "/about" },
    { label: "Service", to: "/service" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname === to;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-[24px] bg-[#1c1b1c]/95 border-b border-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1512px] mx-auto px-6 md:px-[100px] h-[72px] md:h-[80px] flex items-center justify-between">
        <Link href="/">
          <motion.img
            src={imgOzttro.src ?? imgOzttro}
            alt="OZTTRO"
            className="h-[64px] md:h-[56px] lg:h-[100px] w-auto"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.to}
              className="relative group"
            >
              <span className={[
                "font-['Poppins'] text-[15px] tracking-[1.6px] transition-colors duration-200",
                isActive(l.to) ? "font-bold text-[#0266ff]" : "font-medium text-white hover:text-white/80",
              ].join(" ")}>
                {l.label}
              </span>
              {isActive(l.to) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0266ff] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/service"
            className="font-['Manrope'] font-bold text-[#e5e2e3] text-[12px] tracking-[1.8px] cursor-pointer hover:text-[#00dbe9] transition-colors"
          >
            Explore
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 12px 24px rgba(2,102,255,0.45)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#0266ff] shadow-[0_8px_16px_rgba(2,102,255,0.3)] rounded-full px-6 py-3 text-white font-['Manrope'] font-bold text-[12px] tracking-[1.8px] border border-white/20 cursor-pointer"
            >
              Global Enquiry
            </motion.button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white origin-center transition-all" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white origin-center transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-[#1c1b1c]/98 backdrop-blur-[24px] border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.to}
                    className={[
                      "font-['Poppins'] text-[18px] tracking-[2px] transition-colors text-center block",
                      isActive(l.to) ? "font-bold text-[#0266ff]" : "font-medium text-white",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="mt-2">
                <motion.button
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#0266ff] rounded-full px-8 py-3 text-white font-['Manrope'] font-bold text-[12px] tracking-[1.8px] cursor-pointer"
                >
                  Global Enquiry
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
