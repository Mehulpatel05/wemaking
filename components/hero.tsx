"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background pt-20">
      {/* Animated Background Accents */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute -top-20 -right-20 h-80 w-80 rounded-full border-[3px] border-primary/10 transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute -bottom-32 -left-32 h-96 w-96 rounded-full border-[3px] border-primary/8 transition-all duration-1000 delay-300 ease-out ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute top-1/3 left-0 h-[2px] bg-primary/10 transition-all duration-1000 delay-500 ease-out ${
            mounted ? "w-40" : "w-0"
          }`}
        />
        <div
          className={`absolute bottom-1/3 right-0 h-[2px] bg-primary/10 transition-all duration-1000 delay-700 ease-out ${
            mounted ? "w-32" : "w-0"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* Text Content */}
        <div>
          <h1
            className={`font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-balance">
              We Build Mini SaaS
              <br />
              <span className="text-primary">That Works.</span>
            </span>
          </h1>

          <p
            className={`mt-4 max-w-md text-base text-muted-foreground md:text-lg transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From idea to live product.
          </p>

          <div
            className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://wa.me/918306590731"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 hover:gap-3"
            >
              Get Free Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-accent"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <Image
              src="/hero-visual.jpg"
              alt="Modern SaaS dashboard built by WEMAKING"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
          {/* Small floating accent */}
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-xl bg-primary/10" />
        </div>
      </div>
    </section>
  );
}
