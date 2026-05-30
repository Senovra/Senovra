"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, MapPin, Calendar, Code2 } from "lucide-react";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Tilt Card — subtle 3-D perspective on mouse move
───────────────────────────────────────────────────────────── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Year Stamp — animated on card hover
───────────────────────────────────────────────────────────── */
function YearStamp({ year }: { year: string }) {
  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.div
        className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full
          bg-black/40 border border-white/[0.08] backdrop-blur-md
          overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          whileHover={{ translateX: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        {/* FIXED: cyan like all other Calendar icons */}
        <Calendar size={9} className="text-[#7dd3fc] relative z-10" />
        <span className="text-[10px] text-[#7dd3fc] relative z-10 tabular-nums tracking-wider">
          {year}
        </span>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tag Chip
───────────────────────────────────────────────────────────── */
function TagChip({ label, index }: { label: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full
        bg-white/[0.03] border border-white/[0.08] text-[#71717a]
        group-hover:border-[#7dd3fc]/20 group-hover:text-[#a1a1aa]
        transition-all duration-300"
    >
      <Code2 size={9} className="text-[#7dd3fc]/60" />
      {label}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Collection Stat — refined number + label
───────────────────────────────────────────────────────────── */
function CollectionStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-6 first:pl-0 last:pr-0">
      <span
        className="text-2xl bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent"
        style={{ 
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 300,
          letterSpacing: '-0.02em',
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-[0.22em] text-[#52525b] font-medium">
        {label}
      </span>
    </div>
  );
}
/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
export default function PortfolioClient() {
  const [collectionHovered, setCollectionHovered] = useState(false);
  const collectionMouseX = useMotionValue(0);
  const collectionMouseY = useMotionValue(0);

  const handleCollectionMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    collectionMouseX.set(e.clientX - rect.left);
    collectionMouseY.set(e.clientY - rect.top);
  };

  const projects = [
    {
      title: "EatSafe",
      category: "Diet Recommendation Platform",
      description:
        "An AI-powered web application that provides personalized diet recommendations based on user health profiles and nutritional science.",
      tags: ["Python", "PostgreSQL", "NeuralFM"],
      year: "2023",
      image: "/EatSafe.png",
    },
    {
      title: "Salon Zen",
      category: "Salon Management & Booking Platform",
      description:
        "A comprehensive platform for managing salon operations and client bookings, streamlining scheduling, staff management and customer experiences.",
      tags: ["Laravel", "SQLite"],
      year: "2022",
      image: "/SalonZen.png",
    },
    {
      title: "SafeSure",
      category: "Vehicle Insurance Mobile Application",
      description:
        "A mobile application designed to simplify motor vehicle insurance management for users, offering policy tracking, claims and renewal workflows.",
      tags: ["Java", "Flutter", "Firebase"],
      year: "2024",
      image: "/SafeSure.png",
    },
    {
      title: "DutyFree",
      category: "Professional POS System",
      description:
        "A modern retail and point-of-sale platform tailored for Maldives duty-free operations, built to streamline transactions, inventory management and customer experiences at scale.",
      tags: ["Node.js", "React.js", "Supabase"],
      year: "2026",
      image: "/DutyFree.jpeg",
      location: "Maldives Retail",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden">
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
            {/* Badge */}
            <div className="text-center mb-6">
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                  bg-white/[0.03] border border-white/[0.08]
                  backdrop-blur-xl relative overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#7dd3fc]/10 via-[#a78bfa]/10 to-[#7dd3fc]/10" />
                <div className="relative z-10 w-1.5 h-1.5 bg-[#7dd3fc] rounded-full animate-pulse" />
                <span className="relative z-10 text-[10px] font-semibold tracking-[0.28em] uppercase font-display bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
                  OUR PORTFOLIO
                </span>
              </motion.div>
            </div>

            {/* ── Senovra Collection — interactive spotlight card ── */}
            <motion.div
              onMouseMove={handleCollectionMouse}
              onMouseEnter={() => setCollectionHovered(true)}
              onMouseLeave={() => setCollectionHovered(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative text-center mt-10 mb-20 p-8 md:p-10 rounded-2xl
                bg-white/[0.03] border border-white/[0.08] backdrop-blur-md
                overflow-hidden cursor-default"
            >
              {/* Top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7dd3fc] to-transparent opacity-70" />

              {/* Mouse-follow spotlight */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: useTransform(
                    [collectionMouseX, collectionMouseY],
                    ([mx, my]) =>
                      collectionHovered
                        ? `radial-gradient(320px circle at ${mx}px ${my}px, rgba(125,211,252,0.07), transparent 70%)`
                        : "none"
                  ),
                }}
              />

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none border border-[#7dd3fc]/0 transition-all duration-500"
                animate={{
                  borderColor: collectionHovered
                    ? "rgba(125,211,252,0.15)"
                    : "rgba(125,211,252,0)",
                }}
              />

              {/* Sparkles icon — spins slowly on hover */}
              <motion.div
                animate={{ rotate: collectionHovered ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mb-4"
              >
                <Sparkles
                  className="text-[#7dd3fc] mx-auto"
                  size={28}
                  strokeWidth={1}
                />
              </motion.div>

              {/* UNCHANGED text */}
              <h2 className="font-medium text-white mb-3 text-[clamp(22px,2.5vw,34px)] leading-tight">
                The{" "}
                <span className="gradient-text font-medium">
                  Senovra Collection
                </span>
              </h2>

              <p className="text-[#a1a1aa] text-base max-w-xl mx-auto font-light leading-relaxed">
                High-performance digital experiences built for ambitious brands
                and businesses.
              </p>

              {/* Stats row — refined, fades in on hover */}
              <motion.div
                initial={false}
                animate={{
                  opacity: collectionHovered ? 1 : 0,
                  y: collectionHovered ? 0 : 10,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 pt-6 border-t border-white/[0.06]"
              >
                <div className="flex items-center justify-center divide-x divide-white/[0.06]">
                  <CollectionStat value="100%" label="Client Satisfaction" />
                  <CollectionStat value="4+" label="Industries" />
                  <CollectionStat value="2020 – 2026" label="Timeline" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── GIH Flagship ─────────────────────────────────────────── */}
        <section className="px-4 md:px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="premium-card overflow-hidden rounded-3xl group
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#7dd3fc]/20
                hover:shadow-[0_0_60px_rgba(125,211,252,0.06)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Image — UNCHANGED */}
                <div className="relative overflow-hidden min-h-[400px] bg-[#05070d] flex items-center justify-center p-6">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.08),transparent_60%)]" />
                  <img
                    src="/GIH.png"
                    alt="GIH"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.03]"
                    style={{ maxHeight: "400px" }}
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7dd3fc]/10 border border-[#7dd3fc]/20 backdrop-blur-xl">
                      <div className="w-2 h-2 rounded-full bg-[#7dd3fc] animate-pulse" />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#7dd3fc]">
                        Flagship Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content — UNCHANGED except Calendar icon color fixed */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#7dd3fc] text-sm uppercase tracking-wider mb-3">
                    Luxury Hospitality Platform
                  </span>
                  <h2 className="text-4xl md:text-6xl font-medium mb-4">GIH</h2>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#7dd3fc]/[0.06] border border-[#7dd3fc]/20 text-[#7dd3fc]">
                      <MapPin size={11} />
                      Maldives Hospitality
                    </span>
                    {/* FIXED: Calendar icon now blue like MapPin */}
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#7dd3fc]/[0.06] border border-[#7dd3fc]/20 text-[#7dd3fc]">
                      <Calendar size={11} />
                      2026
                    </span>
                  </div>

                  <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
                    Senovra's flagship hospitality platform, designed for the
                    Maldives luxury resort sector. GIH combines premium visual
                    storytelling, resort discovery and investment-focused
                    experiences within a high-performance modern web platform.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Node.js", "React.js"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa]
                          group-hover:border-[#7dd3fc]/20 group-hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <section className="px-4 md:px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#52525b] font-medium whitespace-nowrap">
                More Projects
              </span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
          </div>
        </section>

        {/* ── Project Cards Grid ───────────────────────────────────── */}
        <section className="px-4 md:px-6 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <TiltCard
                    className="group relative premium-card rounded-2xl overflow-hidden flex flex-col
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#7dd3fc]/20
                      hover:shadow-[0_8px_40px_rgba(125,211,252,0.08)]
                      cursor-default h-full"
                  >
                    {/* Radial glow */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.07),transparent_65%)]" />

                    {/* ── Screenshot ── */}
                    <div
                      className="relative w-full bg-[#05070d] flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ height: "260px" }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                      />

                      {/* Year stamp — FIXED: now cyan */}
                      <YearStamp year={project.year} />

                      {/* Category pill */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <motion.span
                          initial={{ opacity: 0, x: -6 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="inline-flex items-center text-[10px] uppercase tracking-[0.18em]
                            px-2.5 py-1 rounded-full
                            bg-black/50 border border-[#7dd3fc]/20
                            text-[#7dd3fc] backdrop-blur-md"
                        >
                          {project.category}
                        </motion.span>
                      </div>

                      {/* Bottom fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#070B14] to-transparent" />
                    </div>

                    {/* ── Body ── */}
                    <div className="relative z-10 flex flex-col flex-1 p-6">

                      <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 flex-1 font-light">
                        {project.description}
                      </p>

                      {project.location && (
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#7dd3fc]/[0.06] border border-[#7dd3fc]/20 text-[#7dd3fc]">
                            <MapPin size={11} />
                            {project.location}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                        {project.tags.map((tag, idx) => (
                          <TagChip key={tag} label={tag} index={idx} />
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
