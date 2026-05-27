"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col relative overflow-hidden">

        {/* Ambient Glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#7dd3fc]/[0.04] blur-[140px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#a78bfa]/[0.03] blur-[140px] rounded-full" />
        </div>

        {/* Main Content */}
        <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
          <div className="max-w-2xl mx-auto text-center relative z-10 w-full">

            {/* Error Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10
                bg-white/[0.03] border border-white/[0.08]
                backdrop-blur-xl"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(248,113,113,0.6)]" />
              <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#a1a1aa]">
                Error
              </span>
            </motion.div>

            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <span
                className="block text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter
                  bg-gradient-to-b from-white/10 to-white/[0.02] bg-clip-text text-transparent
                  select-none"
              >
                404
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl font-medium leading-snug tracking-tight mb-4 text-white"
            >
              Page Not Found
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#a1a1aa] font-light leading-relaxed mb-12 max-w-md mx-auto"
            >
              The page you're looking for doesn't exist or may have been moved.
              Check the URL or return to a known page.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mx-auto mb-12"
            />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-xl
                  bg-white/[0.04] border border-white/[0.08]
                  text-white/70 hover:text-white
                  hover:bg-white/[0.07] hover:border-white/[0.14]
                  backdrop-blur-xl transition-all duration-300 text-sm font-light w-full sm:w-auto justify-center"
              >
                <ArrowLeft
                  size={15}
                  className="text-[#7dd3fc] group-hover:-translate-x-0.5 transition-transform duration-300"
                />
                Return Home
              </Link>

              <Link
                href="mailto:support@senovra.com"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-xl
                  bg-white/[0.04] border border-white/[0.08]
                  text-white/70 hover:text-white
                  hover:bg-white/[0.07] hover:border-white/[0.14]
                  backdrop-blur-xl transition-all duration-300 text-sm font-light w-full sm:w-auto justify-center"
              >
                Contact Support
                <ArrowRight
                  size={15}
                  className="text-[#a78bfa] group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </Link>
            </motion.div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}