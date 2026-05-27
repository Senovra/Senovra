"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "GIH",
      category: "Luxury Hospitality Platform",
      description:
        "A luxury hospitality platform concept designed to showcase resort listings and investment opportunities through a clean, modern interface.",
      tags: ["Next.js", "TypeScript", "Node.js", "React.js"],
      year: "2026",
      image:
        "/GIH.png",
      featured: true,
    },
    {
      title: "EatSafe",
      category: "Diet Recommendation Platform",
      description:
        "An AI-powered web application that provides personalized diet recommendations.",
      tags: ["Python", "PostgreSQL", "NeuralFM"],
      year: "2023",
      image:
        "/EatSafe.png",
    },
    {
      title: "Salon Zen",
      category: "Salon Management & Booking Platform",
      description:
        "A comprehensive platform for managing salon operations and client bookings.",
      tags: ["Laravel", "SQLite"],
      year: "2022",
      image:
        "/SalonZen.png",
    },
    {
      title: "SafeSure",
      category: "Vehicle Insurance Mobile Application",
      description:
        "A mobile application designed to simplify motor vehicle insurance management for users.",
      tags: ["Java", "Flutter", "Firebase"],
      year: "2024",
      image:
        "/SafeSure.png",
    },
    {
      title: "DutyFree",
      category: "Professional POS System",
      description:
        "A professional POS system designed to streamline retail operations and enhance customer experience.",
      tags: ["Node.js", "React.js", "Supabase"],
      year: "2023",
      image:
        "/DutyFree.jpeg",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7dd3fc]/[0.04] blur-[140px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a78bfa]/[0.03] blur-[140px] rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <div className="text-center mb-6">
  <motion.div
    whileHover={{ scale: 1.03, y: -1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
    bg-white/[0.03] border border-white/[0.08] 
    backdrop-blur-xl relative overflow-hidden group cursor-default"
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#7dd3fc]/10 via-[#a78bfa]/10 to-[#7dd3fc]/10" />

    {/* Pulse Dot */}
    <div className="relative z-10 w-1.5 h-1.5 bg-[#7dd3fc] rounded-full animate-pulse" />

    {/* Text */}
    <span className="relative z-10 text-[10px] font-semibold tracking-[0.28em] uppercase font-display bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent transition-all duration-300">
      OUR PORTFOLIO
    </span>
  </motion.div>
</div>

             {/* SUBTITLE GLASS CARD (SEPARATED, NOT COMPETING) */}
            <motion.div
              className="relative text-center mt-10 mb-20 p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7dd3fc] to-transparent opacity-70" />

              <Sparkles
                className="text-[#7dd3fc] mx-auto mb-4"
                size={28}
                strokeWidth={1}
              />

              <h2 className="font-medium text-white mb-3 text-[clamp(22px,2.5vw,34px)] leading-tight">
                The{" "}
                <span className="gradient-text font-medium">
                  Senovra Collection
                </span>
              </h2>

              <p className="text-[#a1a1aa] text-base max-w-xl mx-auto font-light leading-relaxed">
                High-performance digital experiences built for ambitious brands and businesses.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Grid - All Equal Sizing */}
        <section className="px-4 md:px-6 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className={`premium-card group cursor-pointer overflow-hidden rounded-xl relative ${
                    project.featured ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${
                      project.featured ? "h-[400px] md:h-[600px]" : "h-[320px]"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-black/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" /><div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7dd3fc]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <span className="text-xs text-white/80 font-light">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-xs text-[#7dd3fc] mb-2 font-light tracking-wide uppercase">
                      {project.category}
                    </div>

                    <h3
                      className={`font-normal mb-3 text-white ${
                        project.featured
                          ? "text-2xl md:text-4xl"
                          : "text-xl md:text-2xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-[#a1a1aa] font-light leading-relaxed mb-4 ${
                        project.featured
                          ? "text-base md:text-lg max-w-2xl"
                          : "text-sm"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(125,211,252,0.1),transparent_50%)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-6 pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="premium-card text-center p-10 md:p-16 rounded-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7dd3fc]/5 via-transparent to-[#a78bfa]/5" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight">
                  <span className="text-white">Ready To Build Something </span>
                  <span className="gradient-text font-normal">Extraordinary?</span>
                </h2>

                <p className="text-base md:text-lg text-[#a1a1aa] mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                  Let's discuss your project and create a high-performance digital experience.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.06] hover:border-[#7dd3fc]/30 transition-all duration-300 group"
                >
                  <span className="text-sm font-light">Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}