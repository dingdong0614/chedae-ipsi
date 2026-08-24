"use client";

import { useMemo, useState } from "react";
import type { Academy } from "@/data/academies";
import type { Region } from "@/data/regions";
import AcademyCard from "./AcademyCard";

export default function AcademyDirectory({ academies, regions }: { academies: Academy[]; regions: Region[] }) {
  const [regionFilter, setRegionFilter] = useState<string | "all">("all");

  const filtered = useMemo(
    () => (regionFilter === "all" ? academies : academies.filter((a) => a.regionSlug === regionFilter)),
    [academies, regionFilter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setRegionFilter("all")}
          className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest transition ${
            regionFilter === "all" ? "border-ink bg-ink text-paper" : "border-line text-ink/60 hover:border-ink"
          }`}
        >
          전체
        </button>
        {regions.map((r) => (
          <button
            key={r.slug}
            onClick={() => setRegionFilter(r.slug)}
            className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest transition ${
              regionFilter === r.slug ? "border-ink bg-ink text-paper" : "border-line text-ink/60 hover:border-ink"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 font-mono text-sm text-ink/40">해당 지역에 등록된 학원이 아직 없습니다.</p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <AcademyCard key={a.slug} academy={a} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
