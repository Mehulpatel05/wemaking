"use client";

import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Image
              src="/logo.jpg"
              alt="WEMAKING Logo"
              width={140}
              height={36}
              className="h-8 w-auto"
              style={{ width: "auto", height: "32px" }}
            />
            <p className="text-sm text-muted-foreground">
              We build SaaS that works.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://wa.me/918306590731"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+918306590731"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
              <span>+91 8306590731</span>
            </a>
            <a
              href="mailto:swatmehul5@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Contact via Email"
            >
              <Mail className="h-4 w-4" />
              <span>swatmehul5@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} WEMAKING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
