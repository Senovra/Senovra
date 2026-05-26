"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Northfield Capital",
      category: "Investment Platform",
      description:
        "Real-time investment platform with advanced data visualization and portfolio management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Arcadia Hotels",
      category: "Hospitality Platform",
      description:
        "Modern booking platform with integrated property management and guest services.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      title: "Meridian Health",
      category: "Healthcare Portal",
      description:
        "Secure patient portal with appointment scheduling and medical record access.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:section-spacing px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 md:pl-6 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Selected </span>
              <span className="gradient-text font-medium">Work</span>
            </h2>
            <p className="text-base md:text-lg text-[#a1a1aa] font-light">
              Recent projects we've delivered
            </p>
          </div>

          {/* VIEW ALL BUTTON - Desktop only */}
          <a
            href="/portfolio"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white
            bg-white/[0.03] border border-white/[0.08]
            backdrop-blur-md
            hover:bg-white/[0.06]
            hover:border-white/[0.15]
            transition-all duration-300 group whitespace-nowrap"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-px bg-white/[0.02]">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href="/portfolio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="premium-card bg-[#070B14] p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-start gap-6 md:gap-8 group cursor-pointer block"
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 h-48 md:h-32 relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-40" />
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <div className="text-xs md:text-sm text-[#a1a1aa] mb-2 font-light">
                  {project.category}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3">
                  {project.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm md:text-base font-light leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Arrow Icon - Hidden on mobile */}
              <div className="hidden md:block ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-5 h-5 text-[#a1a1aa]" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="md:hidden mt-8 text-center"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-light text-white
            bg-white/[0.03] border border-white/[0.08]
            backdrop-blur-md
            hover:bg-white/[0.06]
            hover:border-white/[0.15]
            transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}