import { STATS } from "@/lib/data/content";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="relative -mt-px bg-navy py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container relative">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-y-0">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-gold/10 px-2 text-center md:border-l md:first:border-l-0"
            >
              <p className="font-display text-3xl font-bold text-white md:text-4xl lg:text-[2.75rem]">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-2 max-w-[10rem] text-xs uppercase tracking-wider2 text-white/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
