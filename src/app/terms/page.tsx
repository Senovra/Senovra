import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of Senovra's website and services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">

        {/* BACKGROUND GLOWS (MATCHED SYSTEM) */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#7dd3fc]/[0.04] blur-[140px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#a78bfa]/[0.03] blur-[140px] rounded-full" />
        </div>

        {/* HERO */}
        <section className="relative px-6 mb-20">
          <div className="max-w-5xl mx-auto text-center relative z-10">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8
              bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#a1a1aa]">
                Legal
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Terms of </span>
              <span className="gradient-text">Service</span>
            </h1>

            <p className="text-[#a1a1aa] max-w-2xl mx-auto font-light leading-relaxed">
              Clear, straightforward terms that govern your use of our website and services.
            </p>

            <p className="text-sm text-[#71717a] mt-6">
              Last updated: May 26, 2026
            </p>

          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 space-y-8 relative z-10">

          {[
            {
              title: "Acceptance of Terms",
              text: [
                "By accessing and using the Senovra website, you agree to be bound by these Terms of Service.",
                "If you do not agree with any part of these terms, please do not use our website or services.",
              ],
            },
            {
              title: "Use of Website",
              text: [
                "You may use our website for lawful purposes only.",
                "You agree not to attempt to disrupt or misuse the website.",
              ],
            },
            {
              title: "Intellectual Property Rights",
              text: [
                "All content on this website—including text, graphics, logos, images, code and design—is the property of Senovra unless otherwise stated.",
                "Client work displayed in our portfolio remains the property of respective clients and is shown with permission.",
                "Ownership and usage rights for custom projects are defined in individual agreements.",
              ],
            },
            {
              title: "Services & Project Communication",
              text: [
                "Project scope, pricing and timelines are defined separately through proposals and contracts.",
                "We reserve the right to decline projects that do not align with our direction or capacity.",
              ],
            },
            {
              title: "Limitation of Liability",
              text: [
                "Senovra is not responsible for indirect damages, downtime, or third-party service issues.",
                "All services are provided on an “as is” basis without guarantees of uninterrupted availability.",
              ],
            },
            {
              title: "External Links",
              text: [
                "We are not responsible for content or policies of third-party websites linked from our site.",
              ],
            },
            {
              title: "Changes to Terms",
              text: [
                "We may update these Terms at any time.",
                "Continued use of the website means acceptance of the updated terms.",
                "Changes will be reflected on this page with an updated date.",
              ],
            },
          ].map((section, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden
                bg-white/[0.02] backdrop-blur-xl
                border border-white/[0.08]
                rounded-xl p-8 md:p-10
                hover:bg-white/[0.03]
                hover:border-white/20
                hover:-translate-y-1
                transition-all duration-300
                group
              "
            >
              {/* glow layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.08),transparent_60%)]" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-normal mb-4 text-white">
                  {section.title}
                </h2>

                <div className="text-[#a1a1aa] font-light leading-relaxed space-y-3">
                  {section.text.map((t, idx) => (
                    <p key={idx}>{t}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CONTACT */}
          <div className="premium-card p-8 md:p-10 rounded-xl
            bg-gradient-to-br from-[#7dd3fc]/10 via-[#a78bfa]/10 to-transparent
            border border-white/10 backdrop-blur-xl">

            <h2 className="text-2xl md:text-3xl font-normal mb-4 text-white">
              Questions About Terms?
            </h2>

            <p className="text-[#a1a1aa] mb-6 font-light">
              If you have any questions, contact us anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@senovra.com"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10
                text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                support@senovra.com
              </a>

              
            </div>
          </div>

        </section>

        <Footer />
      </main>
    </>
  );
}