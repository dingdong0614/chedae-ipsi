"use client";

import Link from "next/link";
import { scheduleEvents, SUNEUNG_DATE } from "@/data/schedule";
import { daysBetween, fmtRange } from "@/lib/date";
import { useToday } from "@/lib/useToday";

/** 첫 화면 사진 바로 아래 한 줄 전광판: 수능 D-day, 다음 실기고사, 이번 달 실기 수 */
export default function ScheduleBoard() {
  const today = useToday();

  const nextPractical = today
    ? scheduleEvents.find((e) => e.kind === "practical" && daysBetween(today, e.end ?? e.start) >= 0)
    : null;
  const dNext = today && nextPractical ? daysBetween(today, nextPractical.start) : null;
  const month = today?.slice(0, 7);
  const thisMonth = month ? scheduleEvents.filter((e) => e.kind === "practical" && e.start.startsWith(month)).length : 0;
  const dSuneung = today ? daysBetween(today, SUNEUNG_DATE) : null;

  const cell = "flex min-h-14 w-full flex-wrap items-center gap-x-3 gap-y-1 border-b border-line px-4 py-2 last:border-b-0 md:w-auto md:shrink-0 md:border-b-0 md:px-6";

  return (
    <div className="border-y border-line bg-band">
      <div className="mx-auto flex max-w-6xl flex-wrap divide-line md:flex-nowrap md:divide-x">
        <div className={`${cell} md:pl-8`}>
          <span className="text-sm text-lo">수능</span>
          {dSuneung === null ? (
            <span className="skel h-7 w-16" aria-hidden />
          ) : (
            <span className="num text-2xl font-bold text-signal">{dSuneung > 0 ? `D-${dSuneung}` : dSuneung === 0 ? "D-DAY" : "끝"}</span>
          )}
          <span className="num text-[13px] text-lo">11.19 목</span>
        </div>
        <div className={cell}>
          <span className="text-sm text-lo">다음 실기</span>
          {today === null ? (
            <span className="skel h-5 w-40" aria-hidden />
          ) : nextPractical ? (
            <span className="text-[15px] font-semibold text-hi">
              {nextPractical.label}
              <span className="num ml-2 text-sm font-normal text-body">{fmtRange(nextPractical.start, nextPractical.end)}</span>
              <span className="num ml-2 rounded bg-signal px-1.5 py-0.5 text-[13px] font-bold text-on-signal">
                {dNext! > 0 ? `D-${dNext}` : "진행 중"}
              </span>
            </span>
          ) : (
            <span className="text-sm text-body">정리한 일정은 모두 끝났어요</span>
          )}
        </div>
        {today !== null && thisMonth > 0 && (
          <div className={cell}>
            <span className="text-sm text-lo">이번 달 실기고사</span>
            <span className="num text-lg font-bold text-hi">{thisMonth}</span>
            <span className="text-sm text-lo">건</span>
          </div>
        )}
        <Link href="#schedule" className={`${cell} text-sm font-semibold text-signal hover:underline`}>
          전체 일정
        </Link>
      </div>
    </div>
  );
}
