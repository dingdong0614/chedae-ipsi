import Link from "next/link";
import type { Academy } from "@/data/academies";
import { regions } from "@/data/regions";
import { hasCallablePhone } from "@/lib/academy";
import SampleBadge from "./SampleBadge";
import { IconChevron } from "./Icons";

/** 학원 한 줄: 이름·지역·종목·전화. 목록(전화번호부) 형태 */
export default function AcademyCard({ academy, showRegion = true }: { academy: Academy; showRegion?: boolean }) {
  const region = regions.find((r) => r.slug === academy.regionSlug);
  const callable = hasCallablePhone(academy);

  return (
    <Link
      href={`/academies/${academy.slug}`}
      className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 py-3.5 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_9rem_1.25rem] sm:px-2"
    >
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-[16px] font-bold text-hi group-hover:text-signal">{academy.name}</span>
          {academy.sample && <SampleBadge />}
        </span>
        <span className="mt-0.5 block truncate text-sm text-lo">
          {showRegion && region ? `${region.name} · ` : ""}
          {academy.address}
        </span>
      </span>
      <span className="col-span-2 row-start-2 text-sm text-body sm:col-span-1 sm:row-start-auto">{academy.subjects.join(" · ")}</span>
      <span className={`row-start-1 text-right text-sm sm:row-start-auto sm:text-left ${callable ? "num text-hi" : "text-lo"}`}>
        {callable ? academy.phone : "번호 확인 중"}
      </span>
      <IconChevron className="hidden h-5 w-5 text-lo group-hover:text-signal sm:block" />
    </Link>
  );
}
