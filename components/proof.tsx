"use client";

import { useInView } from "@/hooks/use-in-view";
import { Building2, Users, Briefcase } from "lucide-react";

export function Proof() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-24 bg-primary/[0.03]">
      <div ref={ref} className="mx-auto max-w-5xl px-6 text-center">
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-8 transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Proof
          </span>
        </div>

        <h2
          className={`font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance mb-5 transition-all duration-600 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Built for founders &<br />
          growing businesses.
        </h2>

        <p
          className={`mx-auto max-w-lg text-sm text-muted-foreground mb-10 transition-all duration-600 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We partner with ambitious teams to turn their ideas into
          production-ready SaaS products.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: Building2, stat: "50+", label: "Projects Shipped" },
            { icon: Users, stat: "30+", label: "Happy Clients" },
            { icon: Briefcase, stat: "3+", label: "Years Building" },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isInView ? `${400 + index * 150}ms` : "0ms",
              }}
            >
              <item.icon className="h-5 w-5 text-primary mb-2" />
              <span className="font-heading text-xl font-bold text-foreground md:text-2xl">
                {item.stat}
              </span>
              <span className="text-xs text-muted-foreground md:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
