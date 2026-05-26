"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Web Development", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "Branding", href: "/services" },
      { label: "Digital Experiences", href: "/services" },
    ],
    Contact: [
      {
        label: "info@senovra.com",
        href: "mailto:info@senovra.com",
        icon: <Mail className="w-3.5 h-3.5" />,
      },
      {
        label: "+94 77 898 9476",
        href: "tel:+94778989476",
        icon: <Phone className="w-3.5 h-3.5" />,
      },
      {
        label: "Colombo, Sri Lanka",
        href: null,
        icon: <MapPin className="w-3.5 h-3.5" />,
      },
    ],
  };

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Senovra Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="font-display text-lg gradient-text-navbar">
                Senovra
              </span>
            </Link>

            <p className="text-gray-400 text-sm mb-3">
              Your Vision. Perfected.
            </p>

            <p className="text-gray-500 text-xs">
              Premium digital experiences that elevate brands.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold mb-3 text-sm">
              Company
            </h3>

            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#7dd3fc] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-bold mb-3 text-sm">
              Services
            </h3>

            <ul className="space-y-2">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#7dd3fc] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-display font-bold mb-3 text-sm">
              Contact
            </h3>

            <ul className="space-y-2.5">
              {footerLinks.Contact.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#7dd3fc] transition-colors text-sm flex items-center gap-2"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ) : (
                    <div className="text-gray-400 text-sm flex items-center gap-2">
                      {link.icon}
                      {link.label}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Senovra. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-[#7dd3fc] transition-colors text-xs"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-[#7dd3fc] transition-colors text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}