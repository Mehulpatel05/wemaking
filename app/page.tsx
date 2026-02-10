import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Proof } from "@/components/proof";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}
