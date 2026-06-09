import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";
import { telLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-navy px-4 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative">
        <p className="font-display text-[8rem] font-bold leading-none text-gold-foil">404</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl">This page has moved on</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          The page you&apos;re looking for doesn&apos;t exist — but your perfect property
          investment still does. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-gold">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link href="/residential" className="btn-ghost">
            <Search className="h-4 w-4" /> Browse Projects
          </Link>
          <a href={telLink()} className="btn-ghost">
            <Phone className="h-4 w-4" /> Call an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}
