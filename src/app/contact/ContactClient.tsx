"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, company, message } = formData;

      const subject = `New Project Inquiry from ${name}`;

      const body = `
New Project Inquiry

-------------------------
Name: ${name}
Email: ${email}
Company: ${company || "Not specified"}

-------------------------
Project Details:
${message}
      `;

      const mailtoLink = `mailto:info@senovra.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // small delay for premium UX feel
      await new Promise((resolve) => setTimeout(resolve, 800));

      window.location.href = mailtoLink;

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

        {/* Background Glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#7dd3fc]/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#a78bfa]/5 blur-[140px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 relative">
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
                  GET IN TOUCH
                </span>
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Begin Your </span>
              <span className="gradient-text">Project</span>
            </h1>

            <p className="text-lg text-[#a1a1aa] max-w-2xl font-light leading-relaxed">
              Share your vision with us. We’ll respond within 24 hours with clarity,
              direction, and next steps.
            </p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="px-6 pb-32 relative">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 relative z-10">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-10"
            >
              <div className="space-y-6">

                {/* Email */}
                <div className="premium-card p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                  <div className="flex items-center gap-3 mb-2 text-[#a1a1aa]">
                    <Mail className="w-4 h-4" />
                    <h3 className="text-sm uppercase tracking-wide">Email</h3>
                  </div>
                  <a
                    href="mailto:info@senovra.com"
                    className="text-lg font-light hover:text-[#7dd3fc] transition-colors"
                  >
                    info@senovra.com
                  </a>
                </div>

                {/* Phone */}
                <div className="premium-card p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                  <div className="flex items-center gap-3 mb-2 text-[#a1a1aa]">
                    <Phone className="w-4 h-4" />
                    <h3 className="text-sm uppercase tracking-wide">Phone</h3>
                  </div>
                  <a
                    href="tel:+94778989476"
                    className="text-lg font-light hover:text-[#7dd3fc] transition-colors"
                  >
                    +94 77 898 9476
                  </a>
                </div>

                {/* Response Time */}
                <div className="premium-card p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                  <div className="flex items-center gap-3 mb-2 text-[#a1a1aa]">
                    <Clock className="w-4 h-4" />
                    <h3 className="text-sm uppercase tracking-wide">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed font-light">
                    We typically respond within 24 hours during business days with a tailored response.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 premium-card p-8 md:p-10 bg-white/[0.02] border border-white/[0.05] rounded-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">

                {[
                  { label: "Name", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Email", name: "email", type: "email", placeholder: "john@company.com" },
                  { label: "Company", name: "company", type: "text", placeholder: "Company Name" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm text-[#a1a1aa] mb-3 uppercase tracking-wide">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-[#7dd3fc]/60 outline-none text-white font-light placeholder:text-[#3f3f46] transition-colors autofill-dark"
                      placeholder={field.placeholder}
                      required={field.name !== "company"}
                    />
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label className="block text-sm text-[#a1a1aa] mb-3 uppercase tracking-wide">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-[#7dd3fc]/60 outline-none text-white font-light placeholder:text-[#3f3f46] resize-none transition-colors"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glass-button px-8 py-4 rounded-full font-light flex items-center gap-2 text-sm hover:scale-[1.02] transition-transform disabled:opacity-50"
                >
                  {isSubmitting ? "Preparing Email..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}