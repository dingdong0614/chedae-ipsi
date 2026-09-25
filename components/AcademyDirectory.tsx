"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import type { Academy } from "@/data/academies";
import type { Region } from "@/data/regions";
import AcademyCard from "./AcademyCard";
import { IconSearch } from "./Icons";

const noop = () => () => {};
const readRegionParam = () => new URLSearchParams(window.location.search).get("region");

export default function AcademyDirectory({ academies, regions }: { academies: Academy[]; regions: Region[] }) {
  // 서버 HTML에는 전체 목록(SEO), 브라우저에서는 ?region= 공유 링크를 반영
  const urlRegion = useSyncExternalStore(noop, readRegionParam, () => null);
  const [picked, setPicked] = useState<string | null>(null);
  const fromUrl = urlRegion && regions.some((r) => r.slug === urlRegion) ? urlRegion : "all";
  const regionFilter = picked ?? fromUrl;
  const setRegionFilter = setPicked;
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of academies) m.set(a.regionSlug, (m.get(a.regionSlug) ?? 0) + 1);
    return m;
  }, [academies]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return academies.filter((a) => {
      if (regionFilter !== "all" && a.regionSlug !== regionFilter) return false;
      if (!q) return true;
      return [a.name, a.address, a.intro, ...a.subjects].join(" ").toLowerCase().includes(q);
    });
  }, [academies, regionFilter, query]);

  function pickRegion(slug: string) {
    setRegionFilter(slug);
    const url = new URL(window.location.href);
    if (slug === "all") url.searchParams.delete("region");
    else url.searchParams.set("region", slug);
    window.history.replaceState(null, "", url);
  }

  const chips = [{ slug: "all", name: "전체", count: academies.length }, ...regions.map((r) => ({ ...r, count: counts.get(r.slug) ?? 0 }))];

  return (
    <div>
      <label htmlFor="academy-q" className="sr-only">
        학원 이름·동네로 검색
      </label>
      <div className="relative">
        <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-lo" />
        <input
          id="academy-q"
          type="search"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="학원 이름, 동네로 찾기 (예: 수성구)"
          className="h-12 w-full rounded-xl border border-line-strong bg-surface pl-12 pr-4 text-base text-hi placeholder:text-lo focus:border-signal focus:outline-none"
        />
      </div>

      <div
        role="radiogroup"
        aria-label="지역"
        className="chip-row -mx-4 mt-4 flex gap-5 overflow-x-auto border-b border-line px-4 sm:mx-0 sm:px-0"
      >
        {chips.map((c) => {
          const on = regionFilter === c.slug;
          return (
            <button
              key={c.slug}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => pickRegion(c.slug)}
              className={`-mb-px inline-flex min-h-12 shrink-0 items-center gap-1.5 border-b-2 px-0.5 text-[15px] font-semibold transition-colors ${
                on ? "border-signal text-hi" : "border-transparent text-lo hover:text-hi"
              }`}
            >
              {c.name}
              <span className={`num text-xs ${on ? "text-signal" : "text-lo"}`}>{c.count}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-lo" aria-live="polite">
        <span className="num font-bold text-hi">{filtered.length}</span>곳
        {regionFilter !== "all" && ` · ${regions.find((r) => r.slug === regionFilter)?.name}`}
        {query.trim() && ` · "${query.trim()}"`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 border-y border-line py-10">
          <p className="text-lg font-bold text-hi">이 조건에 맞는 학원이 아직 없어요</p>
          <p className="mt-1 text-sm text-lo">다른 지역을 보거나, 찾는 학원을 알려주시면 정리해 둘게요.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setQuery("");
                pickRegion("all");
              }}
              className="press min-h-11 rounded-full bg-signal px-5 text-sm font-bold text-on-signal"
            >
              전체 학원 보기
            </button>
            <Link
              href="/contact?type=register"
              className="press inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold text-hi"
            >
              학원 추가 요청하기
            </Link>
          </div>
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {filtered.map((a) => (
            <li key={a.slug}>
              <AcademyCard academy={a} showRegion={regionFilter === "all"} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
