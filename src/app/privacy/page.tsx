import type { Metadata } from "next";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Senovra",
  description: "Learn how Senovra protects and manages your personal information with transparency and care.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#020308] pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
                          bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa]
                            shadow-[0_0_8px_rgba(125,211,252,0.6)]" />
              <span className="text-[10px] tracking-[0.3em] font-medium uppercase
                             bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
                Legal
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6
                         bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent
                         leading-tight">
              Privacy Policy
            </h1>

            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. Here's how we collect, use, and protect your information with complete transparency.
            </p>

            <p className="text-sm text-white/30 mt-6">
              Last updated: May 26, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
          
          {/* Section 1 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Information We Collect
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                When you interact with Senovra, we may collect certain information to provide you with the best possible experience. This includes:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span><span className="text-white/80 font-medium">Contact Information:</span> Name, email address, phone number, and company details when you reach out through our contact form or inquiry channels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span><span className="text-white/80 font-medium">Project Details:</span> Information you provide about your project requirements, goals, timeline, and budget.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span><span className="text-white/80 font-medium">Technical Data:</span> Browser type, device information, IP address, and browsing behavior through cookies and analytics tools.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We use the information we collect to deliver exceptional service and improve your experience:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Respond to your inquiries and provide project quotes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Communicate project updates, deliverables, and timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Improve our website functionality and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Send occasional updates about our services (you can opt out anytime)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Cookies & Analytics
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to analyze website traffic and improve performance. These help us understand:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Which pages are most visited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>How users navigate our site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>What content resonates with our audience</span>
                </li>
              </ul>
              <p className="pt-2">
                You can control cookies through your browser settings. Note that disabling cookies may limit certain website features.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Data Protection & Security
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We take your data security seriously. All information is stored securely and protected using industry-standard encryption protocols. We:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Never sell or rent your personal information to third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Only share data with trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Regularly review and update our security measures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Comply with applicable data protection regulations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Third-Party Links
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Our website may contain links to external sites operated by third parties. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Your Rights
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                You have complete control over your personal information. You may:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Request access to the data we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Request corrections or updates to your information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Request deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Opt out of marketing communications at any time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on this page with a new "Last Updated" date.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-[#7dd3fc]/10 via-[#a78bfa]/10 to-transparent 
                        backdrop-blur-xl border border-[#7dd3fc]/20 rounded-2xl p-8 md:p-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 text-white">
              Questions About Privacy?
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:privacy@senovra.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                         bg-white/5 border border-white/10 text-white/80 hover:text-white
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                privacy@senovra.com
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-white font-medium
                         hover:shadow-[0_0_30px_rgba(125,211,252,0.3)] transition-all duration-300"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}