"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Target, Zap, Award } from "lucide-react";


/* Counter Component (UNCHANGED) */
function Counter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * eased));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Precision Craftsmanship",
      description:
        "Every interaction is considered. Every pixel is intentional. Every transition is designed to feel effortless.",
    },
    {
      icon: Zap,
      title: "Bold Innovation",
      description:
        "We explore emerging technologies and translate them into refined digital experiences with purpose.",
    },
    {
      icon: Users,
      title: "Human Collaboration",
      description:
        "We work closely with clients to shape ideas into systems that are both beautiful and scalable.",
    },
    {
      icon: Award,
      title: "Relentless Excellence",
      description:
        "We refine until nothing feels unnecessary — only clarity, balance, and intent remain.",
    },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 30, suffix: "+", label: "Global Clients" },
    { value: 5, suffix: "+", label: "Years of Craft" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const floatingItems = [
    "Design Systems",
    "Scalable Architecture",
    "Performance First",
    "API Integration",
    "UX Engineering",
    "Clean Code",
    "Motion Design",
    "Cloud Ready",
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="pt-32 md:pt-40 pb-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7dd3fc]/[0.04] blur-[140px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#a78bfa]/[0.03] blur-[140px] rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-6">
              <div className="w-1.5 h-1.5 bg-[#7dd3fc] rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.28em] uppercase font-medium text-[#a1a1aa]">
                ABOUT SENOVRA
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">
                Engineering Digital Systems That Scale With{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent font-normal">
                Ambition
              </span>
            </h1>

            <p className="text-[#a1a1aa] max-w-2xl mx-auto">
              We build high-performance websites for ambitious businesses that demand speed, precision, and scalability.
            </p>
          </motion.div>
        </section>

        {/* STORY (IMPROVED BUT FIXED INTERACTIVITY) */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Foundation",
                text: "Senovra was built on the belief that digital experiences should feel effortless.",
              },
              {
                title: "Engineering",
                text: "We combine performance-focused architecture with refined UI systems.",
              },
              {
                title: "Execution",
                text: "Every build is optimized for speed, scale, and long-term evolution.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#7dd3fc]/10 to-[#a78bfa]/10 transition" />

                <h3 className="text-white font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a1a1aa]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FLOATING VALUE STREAM (KEPT) */}
        <section className="py-10 overflow-hidden">
          <div className="flex gap-3 animate-[marquee_18s_linear_infinite] w-max px-4">
            {[...floatingItems, ...floatingItems].map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs text-[#a1a1aa]"
              >
                {item}
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* STATS (FULLY RESTORED - EXACT STRUCTURE) */}
        <section ref={ref} className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="premium-card text-center p-6 md:p-8 rounded-xl group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-light gradient-text mb-2 md:mb-3">
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                      active={inView}
                    />
                  </div>

                  <div className="text-[#a1a1aa] text-xs md:text-sm font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* PRINCIPLES (RESTORED HEADING + ORIGINAL STYLE) */}
<section className="py-16 md:py-24 px-4 md:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADING (RESTORED) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight text-center">
        <span className="text-white">The Principles That </span>
        <br />
        <span className="gradient-text">Guide Everything</span>
      </h2>

      <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto font-light leading-relaxed">
        A small set of values that define how we think, design, and build.
      </p>
    </motion.div>

    {/* CARDS (UNCHANGED STRUCTURE) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {values.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={title}
          className="premium-card p-6 md:p-8 rounded-xl group cursor-pointer relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.06),transparent_60%)]" />

          <div className="relative z-10">
            <Icon className="text-[#7dd3fc] mb-4" size={18} />

            <h3 className="text-white mb-2 font-medium">
              {title}
            </h3>

            <p className="text-sm text-[#a1a1aa]">
              {description}
            </p>
          </div>
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