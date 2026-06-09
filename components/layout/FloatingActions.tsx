"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, MapPin } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp — desktop + mobile (sits above mobile nav) */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-all duration-500 hover:scale-110 md:bottom-6 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-7 w-7" />
      </a>

      {/* Sticky bottom mobile nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-4">
          <a
            href={telLink()}
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-navy"
          >
            <Phone className="h-5 w-5 text-gold-600" />
            Call
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-navy"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            WhatsApp
          </a>
          <Link
            href="/contact#book-visit"
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-navy"
          >
            <CalendarCheck className="h-5 w-5 text-gold-600" />
            Site Visit
          </Link>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-navy"
          >
            <MapPin className="h-5 w-5 text-gold-600" />
            Directions
          </a>
        </div>
      </nav>
    </>
  );
}
