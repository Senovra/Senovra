"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: 30, label: "Projects Delivered", suffix: "+" },
    { number: 100, label: "Client Satisfaction", suffix: "%" },
    { number: 24, label: "24h Response Time", suffix: "h" },
    { number: 6, label: "Years Experience", suffix: "+" },
  ];

  const principles = [
    {
      title: "Precision Engineering",
      description: "Built for speed, clarity, and scale.",
    },
    {
      title: "Performance First",
      description: "Speed and UX are always priority.",
    },
    {
      title: "Long-Term Support",
      description: "We maintain and evolve everything we build.",
    },
    {
      title: "Technical Partnership",
      description: "We work as long-term partners, not vendors.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:section-spacing px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-[#7dd3fc]/[0.02] rounded-full blur-[140px] md:blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight">
            <span className="text-white">Building Systems That </span>
            <span className="gradient-text font-medium">Scale</span>
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto font-light leading-relaxed px-4">
            We engineer modern websites for performance, scalability and longevity.
          </p>
        </motion.div>

        {/* Stats & Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16 md:mb-24">
          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 md:gap-8"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="border-l border-white/10 pl-4 md:pl-6"
              >
                <div className="text-2xl md:text-3xl gradient-text font-light">
                  {s.number}
                  {s.suffix || ""}
                </div>
                <div className="text-xs md:text-sm text-[#a1a1aa] font-light mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* PRINCIPLES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="p-5 md:p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 cursor-pointer group"
              >
                <h3 className="text-base md:text-lg font-medium group-hover:text-[#7dd3fc] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-[#a1a1aa] text-xs md:text-sm mt-2 font-light leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
