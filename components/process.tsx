"use client";

import { useInView } from "@/hooks/use-in-view";
import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    label: "Idea",
    sub: "Define & Plan",
  },
  {
    icon: Code2,
    label: "Build",
    sub: "Design & Develop",
  },
  {
    icon: Rocket,
    label: "Launch",
    sub: "Deploy & Scale",
  },
];

export function Process() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" className="py-16 md:py-24 bg-card">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How It Works
          </span>
          <h2
            className={`font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-balance transition-all duration-600 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three steps. That{"'"}s it.
          </h2>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center flex-1">
              <div
                className={`flex flex-col items-center text-center flex-1 transition-all duration-600 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isInView ? `${300 + index * 250}ms` : "0ms",
                }}
              >
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-sm text-muted-foreground">{step.sub}</p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div
                  className={`flex items-center mx-2 transition-all duration-700 ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: isInView
                      ? `${500 + index * 250}ms`
                      : "0ms",
                  }}
                >
                  <div className="h-[2px] w-16 bg-primary/20 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out ${
                        isInView ? "w-full" : "w-0"
                      }`}
                      style={{
                        transitionDelay: isInView
                          ? `${700 + index * 250}ms`
                          : "0ms",
                      }}
                    />
                  </div>
                  <div className="h-0 w-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex flex-col gap-8 md:hidden">
          {steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center">
              <div
                className={`flex flex-col items-center text-center transition-all duration-600 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isInView ? `${300 + index * 200}ms` : "0ms",
                }}
              >
                <div className="relative mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-sm text-muted-foreground">{step.sub}</p>
              </div>

              {/* Vertical connector */}
              {index < steps.length - 1 && (
                <div
                  className={`mt-4 flex flex-col items-center transition-all duration-500 ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: isInView
                      ? `${400 + index * 200}ms`
                      : "0ms",
                  }}
                >
                  <div className="h-8 w-[2px] bg-primary/30" />
                  <div className="h-0 w-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
