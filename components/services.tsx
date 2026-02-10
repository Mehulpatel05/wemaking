"use client";

import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";
import { Layers, Rocket, CreditCard } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Mini SaaS Products",
    description: "Fully functional software",
  },
  {
    icon: Rocket,
    title: "MVP for Startups",
    description: "Launch fast, iterate faster",
  },
  {
    icon: CreditCard,
    title: "Subscription Systems",
    description: "Payments built in",
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What We Make
          </span>
          <h2
            className={`font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance transition-all duration-600 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Products that ship.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isInView ? `${200 + index * 150}ms` : "0ms",
              }}
            >
              <div className="absolute top-0 left-0 h-1 w-12 rounded-tl-2xl bg-primary/60 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services Image */}
        <div
          className={`relative overflow-hidden rounded-2xl transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/services-visual.jpg"
            alt="SaaS products showcase by WEMAKING"
            width={1200}
            height={500}
            className="h-auto w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
