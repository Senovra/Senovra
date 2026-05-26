import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <FeaturedWork />
        <About />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
}