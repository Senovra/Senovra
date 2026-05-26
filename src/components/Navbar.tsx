"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  if (isMobileMenuOpen) {
    const scrollY = window.scrollY;

    // Lock scroll (mobile menu open)
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    // Restore scroll
    const scrollY = document.body.style.top;

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    // restore scroll position
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
  };
}, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Senovra Logo"
                fill
                className="object-contain premium-glow"
              />
            </div>

            <span
              className="font-display text-xl font-semibold tracking-tight
                         bg-gradient-to-r from-[#7dd3fc] via-[#a78bfa] to-[#b829ff]
                         bg-clip-text text-transparent"
            >
              Senovra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-medium 
                         bg-white/5 backdrop-blur-md 
                         border border-white/10 
                         hover:bg-white/10 hover:border-white/20
                         transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass p-2 rounded-lg"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU (REFINED BUBBLE STYLE) */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <div className="fixed inset-0 z-40 md:hidden overflow-hidden">

      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0b0f1a]/70 to-black/90 backdrop-blur-3xl"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full flex flex-col justify-center items-center px-10"
      >

        {/* HEADER BADGE (CLEAN GLASS VERSION) */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full
                          bg-white/[0.03] border border-white/10 backdrop-blur-md">

            <p className="text-[10px] tracking-[0.3em] font-medium uppercase
                          bg-gradient-to-r from-[#7dd3fc] via-[#a78bfa] to-[#b829ff]
                          bg-clip-text text-transparent">
              Navigation
            </p>

          </div>
        </div>

        {/* NAV ITEMS (CLEAN + SUBTLE SEPARATION) */}
        <div className="flex flex-col items-center w-full">

          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="w-full max-w-[240px]"
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-4 text-xl font-light text-white/80
                           hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>

              {/* SOFT DIVIDER */}
              {index !== navLinks.length - 1 && (
                <div className="w-full flex justify-center py-2">
                  <div className="relative w-20 h-px bg-white/10">

                    {/* glow core */}
                    <div className="absolute inset-0 bg-[#7dd3fc]/20 blur-md opacity-60" />

                  </div>
                </div>
              )}
            </motion.div>
          ))}

        </div>

        {/* CONTACT (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 rounded-full text-sm font-medium 
                       bg-white/5 backdrop-blur-md 
                       border border-white/10 
                       hover:bg-white/10 hover:border-white/20
                       transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>

      </motion.div>
    </div>
  )}
</AnimatePresence>
    </>
  );
}