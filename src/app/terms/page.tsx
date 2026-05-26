import type { Metadata } from "next";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Senovra",
  description: "The terms and conditions governing your use of Senovra's website and services.",
};

export default function TermsOfService() {
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
              Terms of Service
            </h1>

            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Clear, straightforward terms that govern your use of our website and collaboration with our studio.
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
              Acceptance of Terms
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                By accessing and using the Senovra website, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
              <p>
                These terms apply to all visitors, users, and clients who access or interact with our website and services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Use of Website
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Use the website in any way that violates applicable laws or regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Attempt to gain unauthorized access to our systems or networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Interfere with or disrupt the integrity or performance of the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Reproduce, distribute, or modify any content without our explicit permission</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                All content on this website—including but not limited to text, graphics, logos, images, code, and design—is the exclusive property of Senovra and is protected by international copyright, trademark, and intellectual property laws.
              </p>
              <p>
                <span className="text-white/80 font-medium">Portfolio Work:</span> Client projects showcased in our portfolio remain the intellectual property of their respective owners. We display these works with permission to demonstrate our capabilities.
              </p>
              <p>
                <span className="text-white/80 font-medium">Custom Projects:</span> Ownership and usage rights for custom development work are defined in individual project agreements and contracts.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Services & Project Communication
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Information about our services displayed on this website is for general informational purposes. Final project scope, deliverables, timelines, and pricing are established through:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Initial consultation and discovery phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Written proposals and project agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Signed contracts and statements of work</span>
                </li>
              </ul>
              <p className="pt-2">
                We reserve the right to decline projects that do not align with our values, capabilities, or capacity.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                To the fullest extent permitted by law, Senovra shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Your use or inability to use our website or services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Any errors, omissions, or inaccuracies in content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Unauthorized access to or alteration of your transmissions or data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Any other matter related to our website or services</span>
                </li>
              </ul>
              <p className="pt-2">
                This website and all content are provided "as is" without warranties of any kind, either express or implied.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              External Links
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by Senovra. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
              <p>
                We strongly advise you to review the terms of service and privacy policies of any third-party sites you visit.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Indemnification
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless Senovra and its team members from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Your use of our website or services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3fc] mt-1.5">•</span>
                  <span>Your violation of these Terms of Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1.5">•</span>
                  <span>Your violation of any rights of another party</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We reserve the right to modify or replace these Terms of Service at any time. Changes will be effective immediately upon posting to this page with an updated "Last Updated" date.
              </p>
              <p>
                Your continued use of our website after any changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10
                        hover:border-white/[0.12] transition-all duration-300">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4
                         bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
              Governing Law
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                These Terms of Service shall be governed by and construed in accordance with applicable international laws, without regard to conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these terms or your use of our website will be resolved through good faith negotiation or, if necessary, through binding arbitration.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-[#7dd3fc]/10 via-[#a78bfa]/10 to-transparent 
                        backdrop-blur-xl border border-[#7dd3fc]/20 rounded-2xl p-8 md:p-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 text-white">
              Questions About Terms?
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              If you have any questions or concerns about these Terms of Service, we're here to help clarify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:legal@senovra.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                         bg-white/5 border border-white/10 text-white/80 hover:text-white
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                legal@senovra.com
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