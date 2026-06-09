import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  crumbs: { name: string; href: string }[];
  children?: React.ReactNode;
};

/** Shared navy hero band for interior pages with breadcrumb + optional bg image. */
export function PageHero({ eyebrow, title, subtitle, image, crumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 text-white md:pt-36 md:pb-20">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/60" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container relative">
        <Breadcrumbs items={crumbs} light />
        {eyebrow && <p className="eyebrow !text-gold-300 mt-6">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
