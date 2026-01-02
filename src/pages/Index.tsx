import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import OfferBanner from "@/components/OfferBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen pb-20 sm:pb-0">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <OfferBanner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
