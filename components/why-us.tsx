"use client";

import { useInView } from "@/hooks/use-in-view";
import { Zap, Shield, Eye, Headphones } from "lucide-react";

const reasons = [
  { icon: Zap, label: "Fast Delivery" },
  { icon: Shield, label: "Clean & Scalable" },
  { icon: Eye, label: "Transparent Pricing" },
  { icon: Headphones, label: "Ongoing Support" },
];

export function WhyUs() {
  const { ref, isInView } = useInView();

  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why WEMAKING
          </span>
          <h2
            className={`font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance transition-all duration-600 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Built to deliver.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.label}
              className={`group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 hover:bg-card hover:shadow-md ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isInView ? `${200 + index * 120}ms` : "0ms",
              }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                <reason.icon className="h-6 w-6" />
              </div>
              <span className="font-heading text-sm font-bold text-foreground md:text-base">
                {reason.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
