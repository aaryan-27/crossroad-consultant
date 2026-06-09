"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";

export function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-4 sm:grid-rows-2">
        <button
          onClick={() => setLightbox(true)}
          className="group relative col-span-4 row-span-2 aspect-[16/10] overflow-hidden rounded-2xl sm:col-span-3"
        >
          <Image
            src={images[active]}
            alt={`${name} — view ${active + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            <Expand className="h-3.5 w-3.5" /> View Gallery
          </span>
        </button>

        <div className="col-span-4 grid grid-cols-4 gap-3 sm:col-span-1 sm:grid-cols-1">
          {images.slice(0, 4).map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-xl ring-2 transition ${
                active === i ? "ring-gold" : "ring-transparent hover:ring-gold/40"
              }`}
            >
              <Image src={src} alt={`${name} thumbnail ${i + 1}`} fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[70] grid place-items-center bg-navy/90 p-4 backdrop-blur"
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl"
            >
              <Image src={images[active]} alt={name} fill sizes="100vw" className="object-cover" />
            </motion.div>
            <div className="mt-4 flex gap-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative h-16 w-20 overflow-hidden rounded-lg ring-2 transition ${
                    active === i ? "ring-gold" : "ring-white/20"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
