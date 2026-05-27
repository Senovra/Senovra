"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import {Code, Palette, Sparkles, Zap, Globe, Smartphone, Shield, Cpu, Layers3} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and cutting-edge technology.",
      features: [
        "Next.js & React Development",
        "Full-Stack Solutions",
        "API Integration",
        "Performance Optimization",
      ],
      gradient: "from-[#7dd3fc] via-[#60a5fa] to-[#a78bfa]",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love and remember.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Interactive Prototypes",
        "Design Systems",
      ],
      gradient: "from-[#7dd3fc] via-[#818cf8] to-[#c084fc]",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Branding",
      description:
        "Comprehensive brand identities that stand out and resonate.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
      ],
      gradient: "from-[#38bdf8] via-[#7dd3fc] to-[#a78bfa]",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Digital Experiences",
      description:
        "Interactive experiences that engage and captivate your audience.",
      features: [
        "Motion Design",
        "3D Animations",
        "Interactive Content",
        "Creative Campaigns",
      ],
      gradient: "from-[#7dd3fc] via-[#a78bfa] to-[#c084fc]",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "E-Commerce",
      description:
        "Powerful online stores that convert visitors into customers.",
      features: [
        "Shopify Development",
        "WooCommerce Solutions",
        "Payment Integration",
        "Conversion Optimization",
      ],
      gradient: "from-[#7dd3fc] via-[#60a5fa] to-[#a78bfa]",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "React Native Apps",
        "iOS Development",
        "Android Development",
        "App Store Optimization",
      ],
      gradient: "from-[#38bdf8] via-[#818cf8] to-[#c084fc]",
    },
  ];

  const highlights = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Performance Driven",
      text: "Optimized architecture built for speed and scalability.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Reliable Systems",
      text: "Stable, secure and engineered for long-term growth.",
    },
    {
      icon: <Layers3 className="w-5 h-5" />,
      title: "Modern Stack",
      text: "Next.js, React, TypeScript and premium UI systems.",
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Laravel",
    "PHP",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Express",
    "Firebase",
    "Docker",
    "AWS",
    "Vercel",
    "GraphQL",
    "Java",
    "MySQL",
    "Redis",
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#a78bfa]/5 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
      OUR SERVICES
    </span>
  </motion.div>
</div>
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight">
              Our <span className="gradient-text">Services</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
              Comprehensive digital solutions tailored to transform your vision
              into reality.
            </p>

            {/* PREMIUM HIGHLIGHT ROW */}
            <div className="grid md:grid-cols-3 gap-5 mt-14">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 group"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7dd3fc]/10 via-[#60a5fa]/10 to-[#a78bfa]/10" />

                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7dd3fc] to-transparent opacity-60" />

                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7dd3fc]/15 to-[#a78bfa]/15 border border-white/[0.08] text-[#7dd3fc] mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-lg">
                        {item.title}
                      </h3>

                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass glass-hover rounded-2xl p-8 group cursor-pointer relative overflow-hidden border border-white/[0.08]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.14] transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="text-[#7dd3fc] mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-500"
                        >
                          <span className="text-[#7dd3fc] mr-2">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH CONVEYOR BELT */}
        <section className="pb-28 overflow-hidden">
          <div className="relative">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#070B14] to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#070B14] to-transparent" />

            {/* Top Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7dd3fc]/5 via-[#a78bfa]/5 to-[#7dd3fc]/5 blur-3xl" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: "linear",
              }}
              className="flex gap-5 w-max"
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl px-7 py-4 flex items-center gap-3 min-w-max cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7dd3fc]/10 via-[#60a5fa]/10 to-[#a78bfa]/10" />

                  {/* Dot */}
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa]" />

                  {/* Text */}
                  <span className="relative z-10 text-sm md:text-base text-white/85 font-medium tracking-wide">
                    {tech}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight">
                Our <span className="gradient-text">Process</span>
              </h2>

              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                A refined approach that ensures excellence at every step
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "Understanding your vision, goals and audience",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Crafting a roadmap for success",
                },
                {
                  step: "03",
                  title: "Creation",
                  description: "Bringing ideas to life with precision",
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Delivering perfection and beyond",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-5xl md:text-6xl font-display font-medium gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {phase.description}
                  </p>
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