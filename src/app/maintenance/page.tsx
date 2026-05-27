"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#020308] relative overflow-hidden flex items-center justify-center px-6">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#7dd3fc]/[0.05] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#a78bfa]/[0.04] blur-[140px] rounded-full" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 85%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8
          bg-white/[0.03] border border-white/10 backdrop-blur-xl"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />

          <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#a1a1aa]">
            Maintenance
          </span>
        </motion.div>

        {/* Animated Wrench */}
        <motion.div
          animate={{
            rotate: [0, -12, 12, -8, 8, 0],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-24 h-24 rounded-3xl bg-white/[0.03]
            border border-white/[0.08]
            backdrop-blur-xl
            flex items-center justify-center"
          >
            <Wrench
              className="w-10 h-10 text-[#7dd3fc]"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-normal mb-6 leading-[1.05] tracking-tight"
        >
          <span className="text-white">Site Under </span>
          <span className="gradient-text">Maintenance</span>
        </motion.h1>

       {/* Description */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="max-w-xl mx-auto mb-10"
>
  <p
    className="text-[#a1a1aa] text-base md:text-lg font-light leading-relaxed"
  >
    We&apos;re currently making improvements to refine the Senovra experience.
    <br />
    The website will be back online shortly. 
    <br/>
    We thank you for your patience.
  </p>

  {/* Team Badge */}
  <div
    className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full
    bg-white/[0.03] border border-white/[0.08]
    backdrop-blur-xl"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc] animate-pulse" />

    <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#a1a1aa]">
      Senovra Team
    </span>
  </div>
</motion.div>
        {/* Support Button Centered */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="mailto:support@senovra.com"
            className="px-7 py-3 rounded-xl bg-white/[0.04]
            border border-white/[0.1]
            backdrop-blur-xl
            text-white/80
            hover:text-white
            hover:bg-white/[0.07]
            hover:border-[#7dd3fc]/30
            transition-all duration-300"
          >
            support@senovra.com
          </a>
        </motion.div>
      </div>
    </main>
  );
}