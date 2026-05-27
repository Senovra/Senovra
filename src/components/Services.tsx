"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Website Development",
      description:
        "Custom-built websites with modern frameworks. Fast, scalable and optimized for performance.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design Systems",
      description:
        "Cohesive design systems that scale with your brand. Built for consistency and efficiency.",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile Experiences",
      description:
        "Responsive platforms that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Website Maintenance",
      description:
        "Ongoing support and updates to keep your website secure, fast and up-to-date.",
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
          className="mb-12 md:mb-20 text-left md:pl-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 leading-[1.05] tracking-tight max-w-3xl">
            <span className="text-white">Built To Scale. </span>
            <span className="gradient-text font-medium">
              <br/>
              Maintained To Last.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl font-light leading-relaxed">
            Comprehensive web development and maintenance services for modern businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="premium-card p-6 md:p-10 lg:p-12 group cursor-pointer bg-[#070B14]"
            >
              <div className="text-white/30 mb-4 md:mb-6 group-hover:text-[#7dd3fc] transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}