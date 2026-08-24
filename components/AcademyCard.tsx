import Link from "next/link";
import type { Academy } from "@/data/academies";
import { regions } from "@/data/regions";
import SampleBadge from "./SampleBadge";

export default function AcademyCard({ academy, index }: { academy: Academy; index: number }) {
  const region = regions.find((r) => r.slug === academy.regionSlug);

  return (
    <Link
      href={`/academies/${academy.slug}`}
      className="group block border border-line bg-paper p-6 transition hover:border-ink"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-ink/40">NO.{String(index + 1).padStart(2, "0")}</span>
        {academy.sample && <SampleBadge />}
      </div>
      <h3 className="mt-3 text-xl font-black tracking-tight group-hover:text-signal-ink">{academy.name}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/50">{region?.name}</p>
      <p className="mt-4 text-sm text-ink/80">{academy.intro}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {academy.subjects.map((s) => (
          <span key={s} className="border border-line px-2 py-1 font-mono text-[11px] text-ink/70">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
