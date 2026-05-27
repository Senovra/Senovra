"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a78bfa]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7dd3fc]/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >

        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Ready to Build Something{" "}
          <span className="gradient-text">Extraordinary?</span>
        </h2>
        <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Let&apos;s discuss your project and bring your vision to life with premium digital solutions.
        </p>
        <a
          href="/contact"
          className="glass-button px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
        >
          Start Your Journey <ArrowRight className="w-4 h-4" />
        </a>

      </motion.div>
    </section>
  );
}