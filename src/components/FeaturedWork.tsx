"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  const projects = [
    {
      title: "GIH",
      category: "Luxury Hospitality Platform",
      description:
        "A luxury hospitality platform concept designed to showcase resort listings and investment opportunities through a clean, modern interface.",
      image: "/GIH.png",
    },
    {
      title: "DutyFree",
      category: "Professional POS System",
      description:
        "A modern retail and point-of-sale platform tailored for Maldives duty-free operations.",
      image: "/DutyFree.jpeg",
    },
    {
      title: "Salon Zen",
      category: "Salon Management & Booking Platform",
      description:
        "A comprehensive platform for managing salon operations and client bookings.",
      image: "/SalonZen.png",
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
              Recent projects we&apos;ve delivered
            </p>
          </div>

         <Link
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
</Link>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-px bg-white/[0.02]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              
               <Link
  href="/portfolio"
  className="premium-card bg-[#070B14] p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-start gap-6 md:gap-8 group cursor-pointer block"
>
                {/* Project Image */}
                <div className="w-full md:w-1/3 h-48 md:h-36 relative overflow-hidden rounded-lg bg-[#05070d] flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
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
              </Link>
            </motion.div>
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
<Link
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
         </Link>
        </motion.div>

      </div>
    </section>
  );
}
