"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="WEMAKING Logo"
            width={160}
            height={40}
            className="h-8 w-auto md:h-10"
            loading="eager"
            priority
          />
        </a>

        <a
          href="https://wa.me/918306590731"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Contact Us</span>
        </a>
      </nav>
    </header>
  );
}
