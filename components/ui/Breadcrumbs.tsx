import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span className={cn("font-medium", light ? "text-gold-200" : "text-gold-700")}>
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className={cn(
                    "transition-colors",
                    light ? "text-white/60 hover:text-white" : "text-ink/50 hover:text-navy"
                  )}
                >
                  {c.name}
                </Link>
              )}
              {!last && (
                <ChevronRight className={cn("h-3 w-3", light ? "text-white/30" : "text-ink/30")} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
