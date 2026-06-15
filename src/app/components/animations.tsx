"use client";

import { motion, useScroll, useTransform, useSpring, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

/* ── Shared transition presets ──────────────────────────────── */
export const ease = [0.25, 0.1, 0.25, 1] as const;
export const easeOut = [0.0, 0.0, 0.2, 1] as const;

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: ease } },
};

export const FADE_LEFT: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const FADE_RIGHT: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const SCALE_UP: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: easeOut } },
};

export const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const STAGGER_FAST: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const VP = { once: true, margin: "-80px" };

/* ── Reusable wrappers ──────────────────────────────────────── */
export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={FADE_IN}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={FADE_LEFT}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={FADE_RIGHT}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={SCALE_UP}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", fast = false }: { children: ReactNode; className?: string; fast?: boolean }) {
  return (
    <motion.div
      variants={fast ? STAGGER_FAST : STAGGER}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger child — use inside <Stagger> */
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={FADE_UP} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Parallax container ─────────────────────────────────────── */
export function Parallax({ children, strength = 80, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [-strength / 2, strength / 2]);
  const y = useSpring(raw, { stiffness: 80, damping: 20 });
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* Re-export motion for direct use */
export { motion, useScroll, useTransform, useSpring };
