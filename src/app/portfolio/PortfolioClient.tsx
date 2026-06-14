"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, MapPin, Calendar, Code2, CheckCircle2, Clock, Wrench } from "lucide-react";
import { useRef, useState, useEffect, type ReactNode } from "react";


/* ─────────────────────────────────────────────────────────────
   Hook — detect mobile (no hover capability)
───────────────────────────────────────────────────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(hover: none)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

/* ─────────────────────────────────────────────────────────────
   Status Badge
───────────────────────────────────────────────────────────── */
type StatusType = "completed" | "in development" | "maintenance";

const statusConfig: Record<
  StatusType,
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    icon: React.ReactNode;
  }
> = {
  completed: {
    label: "Completed",
    color: "text-emerald-400",
    bg: "bg-emerald-400/[0.06]",
    border: "border-emerald-400/20",
    icon: <CheckCircle2 size={9} className="text-emerald-400" />,
  },
  "in development": {
    label: "In Development",
    color: "text-amber-400",
    bg: "bg-amber-400/[0.06]",
    border: "border-amber-400/20",
    icon: <Clock size={9} className="text-amber-400" />,
  },
  maintenance: {
    label: "Maintenance",
    color: "text-[#7dd3fc]",
    bg: "bg-[#7dd3fc]/[0.06]",
    border: "border-[#7dd3fc]/20",
    icon: <Wrench size={9} className="text-[#7dd3fc]" />,
  },
};

function StatusBadge({ status }: { status: StatusType }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full
        ${config.bg} border ${config.border} ${config.color}
        uppercase tracking-[0.15em] font-medium`}
    >
      {config.icon}
      {config.label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tilt Card — desktop only; mobile gets tap feedback instead
───────────────────────────────────────────────────────────── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [tapped, setTapped] = useState(false);

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
    if (isMobile) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  /* Mobile tap feedback */
  const handleTouchStart = () => {
    if (!isMobile) return;
    setTapped(true);
    setTimeout(() => setTapped(false), 400);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      style={
        isMobile
          ? {}
          : { rotateX, rotateY, transformStyle: "preserve-3d" }
      }
      animate={
        isMobile && tapped
          ? { scale: 0.985 }
          : { scale: 1 }
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Year Stamp
───────────────────────────────────────────────────────────── */
function YearStamp({ year }: { year: string }) {
  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.div
        className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full
          bg-black/40 border border-white/[0.08] backdrop-blur-md overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          whileHover={{ translateX: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
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
        /* desktop */ lg:group-hover:border-[#7dd3fc]/20 lg:group-hover:text-[#a1a1aa]
        /* mobile always visible */ max-lg:border-[#7dd3fc]/15 max-lg:text-[#a1a1aa]
        transition-all duration-300"
    >
      <Code2 size={9} className="text-[#7dd3fc]/60" />
      {label}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Collection Stat
───────────────────────────────────────────────────────────── */
function CollectionStat({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        flex flex-col items-center
        gap-1
        py-4 md:py-0
        px-0 md:px-6
        w-full md:w-auto
      "
    >
      <span
        className="text-xl md:text-2xl bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
      <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.18em] md:tracking-[0.22em] text-[#52525b] font-medium">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Mobile Glow — always-on subtle cyan border glow for mobile
───────────────────────────────────────────────────────────── */
function MobileGlow() {
  return (
    <div className="lg:hidden absolute inset-0 rounded-2xl pointer-events-none border border-[#7dd3fc]/10" />
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
export default function PortfolioClient() {
  const [collectionHovered, setCollectionHovered] = useState(false);
  const isMobile = useIsMobile();
  const collectionMouseX = useMotionValue(0);
  const collectionMouseY = useMotionValue(0);

  // Always create the transform hook, regardless of device.
// React hooks must never be called conditionally.
const spotlightBackground = useTransform(
  [collectionMouseX, collectionMouseY],
  ([mx, my]) =>
    collectionHovered
      ? `radial-gradient(320px circle at ${mx}px ${my}px, rgba(125,211,252,0.07), transparent 70%)`
      : "none"
);

  const handleCollectionMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    collectionMouseX.set(e.clientX - rect.left);
    collectionMouseY.set(e.clientY - rect.top);
  };

  const projects: {
    title: string;
    category: string;
    description: string;
    tags: string[];
    year: string;
    image: string;
    status: StatusType;
    location?: string;
  }[] = [
    {
      title: "EatSafe",
      category: "Diet Recommendation Platform",
      description:
        "An AI-powered web application that provides personalized diet recommendations based on user health profiles and nutritional science.",
      tags: ["Python", "PostgreSQL", "NeuralFM"],
      year: "2023",
      image: "/EatSafe.png",
      status: "completed",
    },
    {
      title: "Salon Zen",
      category: "Salon Management & Booking Platform",
      description:
        "A comprehensive platform for managing salon operations and client bookings, streamlining scheduling, staff management and customer experiences.",
      tags: ["Laravel", "SQLite"],
      year: "2022",
      image: "/SalonZen.png",
      status: "completed",
    },
    {
      title: "SafeSure",
      category: "Vehicle Insurance Mobile Application",
      description:
        "A mobile application designed to simplify motor vehicle insurance management for users, offering policy tracking, claims and renewal workflows.",
      tags: ["Java", "Flutter", "Firebase"],
      year: "2024",
      image: "/SafeSure.png",
      status: "completed",
    },
    {
      title: "DutyFree",
      category: "Professional POS System",
      description:
        "A modern retail and point-of-sale platform tailored for Maldives duty-free operations, built to streamline transactions, inventory management and customer experiences at scale.",
      tags: ["Node.js", "React.js", "Supabase"],
      year: "2026",
      image: "/DutyFree.jpeg",
      status: "maintenance",
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

            {/* ── Senovra Collection card ── */}
            <motion.div
              onMouseMove={handleCollectionMouse}
              onMouseEnter={() => !isMobile && setCollectionHovered(true)}
              onMouseLeave={() => {
                if (!isMobile) setCollectionHovered(false);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative text-center mt-10 mb-20 p-8 md:p-10 rounded-2xl
                bg-white/[0.03] border border-white/[0.08] backdrop-blur-md
                overflow-hidden cursor-default"
            >
              {/* Top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7dd3fc] to-transparent opacity-70" />

              {/* Mouse-follow spotlight — desktop only */}
{!isMobile && (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: spotlightBackground,
    }}
  />
)}

              {/* Mobile: static ambient glow */}
              <div className="lg:hidden absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.04),transparent_70%)]" />

              {/* Border glow on hover — desktop */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none border border-[#7dd3fc]/0 transition-all duration-500"
                animate={{
                  borderColor: collectionHovered
                    ? "rgba(125,211,252,0.15)"
                    : "rgba(125,211,252,0)",
                }}
              />

              {/* Sparkles icon */}
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

              {/* Desktop: fades in on hover — Mobile: scroll-triggered */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                animate={
                  !isMobile
                    ? {
                        opacity: collectionHovered ? 1 : 0,
                        y: collectionHovered ? 0 : 10,
                      }
                    : undefined
                }
                className="mt-6 pt-6 border-t border-white/[0.06]"
              >
                <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
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
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="premium-card overflow-hidden rounded-3xl group
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#7dd3fc]/20
                hover:shadow-[0_0_60px_rgba(125,211,252,0.06)]
                max-lg:border-[#7dd3fc]/10
                max-lg:shadow-[0_0_40px_rgba(125,211,252,0.04)]"
            >
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Image */}
                <div className="relative overflow-hidden min-h-[300px] lg:min-h-[400px] bg-[#05070d] flex items-center justify-center p-4 lg:p-6">
                  <div className="lg:hidden absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.06),transparent_60%)]" />
                  <div className="hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.08),transparent_60%)]" />

                  <img
                    src="/GIH.png"
                    alt="GIH"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.03]"
                    style={{ maxHeight: "340px" }}
                  />
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#7dd3fc]/10 border border-[#7dd3fc]/20 backdrop-blur-xl">
                      <div className="w-2 h-2 rounded-full bg-[#7dd3fc] animate-pulse" />
                      <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-[#7dd3fc]">
                        Flagship Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-12 flex flex-col justify-center">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[#7dd3fc] text-xs lg:text-sm uppercase tracking-wider mb-2 lg:mb-3 block"
                  >
                    Luxury Hospitality Platform
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-3 lg:mb-4"
                  >
                    GIH
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-4 lg:mb-6"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#7dd3fc]/[0.06] border border-[#7dd3fc]/20 text-[#7dd3fc]">
                      <MapPin size={11} />
                      Maldives Hospitality
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#7dd3fc]/[0.06] border border-[#7dd3fc]/20 text-[#7dd3fc]">
                      <Calendar size={11} />
                      2026
                    </span>
                    {/* GIH status badge */}
                    <StatusBadge status="in development" />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-[#a1a1aa] text-base lg:text-lg leading-relaxed mb-6 lg:mb-8"
                  >
                    Senovra&apos;s flagship hospitality platform, designed for the
                    Maldives luxury resort sector. GIH combines premium visual
                    storytelling, resort discovery and investment-focused
                    experiences within a high-performance modern web platform.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-2"
                  >
                    {["Next.js", "TypeScript", "Node.js", "React.js"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full
                          lg:bg-white/[0.03] lg:border-white/[0.08] lg:text-[#a1a1aa]
                          lg:group-hover:border-[#7dd3fc]/20 lg:group-hover:text-white
                          max-lg:bg-white/[0.03] max-lg:border max-lg:border-[#7dd3fc]/15 max-lg:text-[#c4c4c4]
                          border transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
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
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <TiltCard
                    className="group relative premium-card rounded-2xl overflow-hidden flex flex-col
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#7dd3fc]/20
                      hover:shadow-[0_8px_40px_rgba(125,211,252,0.08)]
                      max-lg:border-[#7dd3fc]/10
                      max-lg:shadow-[0_4px_24px_rgba(125,211,252,0.05)]
                      cursor-default h-full"
                  >
                    {/* Radial glow */}
                    <div className="absolute inset-0 z-0 pointer-events-none
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700
                      lg:bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.07),transparent_65%)]
                      max-lg:opacity-100 max-lg:bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.04),transparent_70%)]"
                    />

                    <MobileGlow />

                    {/* ── Screenshot ── */}
                    <div
                      className="relative w-full bg-[#05070d] flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ height: "240px" }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                        initial={{ scale: 0.96, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1 + index * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ willChange: "transform" }}
                      />

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
                    <div className="relative z-10 flex flex-col flex-1 p-5 lg:p-6">

                      {/* Title + Status row */}
                      <div className="flex items-start justify-between gap-3 mb-2 lg:mb-3">
                        <motion.h3
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.15 + index * 0.06,
                          }}
                          className="text-2xl md:text-3xl font-medium text-white leading-tight"
                        >
                          {project.title}
                        </motion.h3>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + index * 0.06,
                          }}
                          className="flex-shrink-0 pt-1"
                        >
                          <StatusBadge status={project.status} />
                        </motion.div>
                      </div>

                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + index * 0.06,
                        }}
                        className="text-[#a1a1aa] text-sm leading-relaxed mb-4 flex-1 font-light"
                      >
                        {project.description}
                      </motion.p>

                      {project.location && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.25 }}
                          className="mb-4"
                        >
                          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#7dd3fc]/[0.06] border border-[#7dd3fc]/20 text-[#7dd3fc]">
                            <MapPin size={11} />
                            {project.location}
                          </span>
                        </motion.div>
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
