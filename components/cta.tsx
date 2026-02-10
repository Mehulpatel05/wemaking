"use client";

import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.03]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2
          className={`font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance mb-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Have an idea?
          <br />
          <span className="text-primary">Let{"'"}s make it.</span>
        </h2>

        <p
          className={`mx-auto max-w-md text-sm text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Tell us about your project and we{"'"}ll get back to you within 24
          hours with a free demo plan.
        </p>

        <div
          className={`flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://wa.me/918306590731"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
          >
            <MessageCircle className="h-5 w-5" />
            Talk on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:swatmehul5@gmail.com"
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-accent"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
