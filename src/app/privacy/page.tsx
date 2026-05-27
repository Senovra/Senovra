import type { Metadata } from "next";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Senovra protects and manages your personal information with transparency and care.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">

        {/* Background (same system as About/Hero) */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#7dd3fc]/[0.04] blur-[140px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#a78bfa]/[0.03] blur-[140px] rounded-full" />
        </div>

        {/* HERO */}
        <section className="relative px-6 mb-20">
          <div className="max-w-5xl mx-auto text-center relative z-10">

            {/* Badge (same style as your other pages) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8
              bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#a1a1aa]">
                Legal
              </span>
            </div>

            {/* Heading (MATCHED to your system) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Privacy </span>
              <span className="gradient-text">Policy</span>
            </h1>

            <p className="text-[#a1a1aa] max-w-2xl mx-auto font-light leading-relaxed">
              Your privacy matters to us. <br /> Here's how we collect, use and protect your information with complete transparency.
            </p>

            <p className="text-sm text-[#71717a] mt-6">
              Last updated: May 26, 2026
            </p>

          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 space-y-8 relative z-10">

          {/* CARD SYSTEM (MATCHED TO PREMIUM-CARD STYLE) */}
          {[
            {
              title: "Information We Collect",
              content: (
                <>
                  <p>
                    When you interact with Senovra, we may collect certain information to provide you with the best possible experience. This includes:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li>• Contact Information: Name, email address, phone number and company details when you reach out through our contact form or inquiry channels.</li>
                    <li>• Project Details: Information you provide about your project requirements, goals, timeline and budget.</li>
                    <li>• Technical Data: Browser type, device information, IP address and browsing behavior through cookies and analytics tools.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "How We Use Your Information",
              content: (
                <>
                  <p>
                    We use the information we collect to deliver exceptional service and improve your experience:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li>• Respond to inquiries and provide project quotes</li>
                    <li>• Communicate project updates, deliverables and timelines</li>
                    <li>• Improve website functionality and user experience</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Cookies & Analytics",
              content: (
                <>
                  <p>
                    We use cookies and analytics tools to understand website usage and improve performance.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li>• Most visited pages</li>
                    <li>• User navigation patterns</li>
                    <li>• Content engagement insights</li>
                  </ul>
                  <p className="mt-4">
                    You can disable cookies through your browser settings.
                  </p>
                </>
              ),
            },
            {
              title: "Data Protection & Security",
              content: (
                <>
                  <p>
                    We take your data security seriously and use industry-standard practices to protect it.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li>• We never sell or rent personal data</li>
                    <li>• Data is shared only with trusted service providers</li>
                    <li>• Security practices are regularly reviewed</li>
                    <li>• We comply with applicable data protection laws</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Third-Party Links",
              content: (
                <p>
                  Our website may contain links to external sites. We are not responsible for their content or privacy practices.
                </p>
              ),
            },
            {
              title: "Your Rights",
              content: (
                <>
                  <p>You may request:</p>
                  <ul className="mt-4 space-y-3">
                    <li>• Access to your personal data</li>
                    <li>• Corrections or updates</li>
                    <li>• Deletion of your information</li>
                    <li>• Opt-out of communications</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Changes to This Policy",
              content: (
                <p>
                  We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated date.
                </p>
              ),
            },
          ].map((section, i) => (
            <div
              key={i}
              className="premium-card p-8 md:p-10 rounded-xl bg-white/[0.02]
              border border-white/[0.08] backdrop-blur-xl
              hover:border-white/[0.12] transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-normal mb-4 text-white">
                {section.title}
              </h2>

              <div className="text-[#a1a1aa] font-light leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}

          {/* CONTACT */}
          <div className="premium-card p-8 md:p-10 rounded-xl
            bg-gradient-to-br from-[#7dd3fc]/10 via-[#a78bfa]/10 to-transparent
            border border-white/10 backdrop-blur-xl">

            <h2 className="text-2xl md:text-3xl font-normal mb-4 text-white">
              Questions About Privacy?
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