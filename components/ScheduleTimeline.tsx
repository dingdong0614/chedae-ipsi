"use client";

import { scheduleEvents, scheduleKindLabel, type ScheduleEvent } from "@/data/schedule";
import { daysBetween, fmtRange, weekday } from "@/lib/date";
import { useToday } from "@/lib/useToday";

function Row({ e, today }: { e: ScheduleEvent; today: string | null }) {
  const past = today ? daysBetween(today, e.end ?? e.start) < 0 : false;
  const toStart = today ? daysBetween(today, e.start) : null;
  const live = today !== null && toStart !== null && toStart <= 0 && !past;
  const showKind = e.kind !== "practical" && !e.label.includes(scheduleKindLabel[e.kind]);
  return (
    <li className="flex items-baseline gap-3 py-2">
      <span className={`num w-[92px] shrink-0 text-[13px] ${past ? "text-lo line-through decoration-line-strong" : "text-body"}`}>
        {fmtRange(e.start, e.end)}
        {!e.end && <span className="ml-1 text-lo">{weekday(e.start)}</span>}
      </span>
      <span className={`min-w-0 flex-1 text-[15px] leading-snug ${past ? "text-lo" : e.kind === "exam" ? "font-bold text-hi" : "text-hi"}`}>
        {e.label}
        {showKind && <span className="ml-1.5 text-[13px] text-lo">{scheduleKindLabel[e.kind]}</span>}
      </span>
      <span className="num w-14 shrink-0 text-right text-[13px] font-bold">
        {today === null ? (
          <span className="skel inline-block h-4 w-10 align-middle" />
        ) : past ? (
          <span className="font-normal text-lo">끝</span>
        ) : live ? (
          <span className="text-signal">진행 중</span>
        ) : (
          <span className={toStart! <= 7 ? "text-signal" : "text-body"}>D-{toStart}</span>
        )}
      </span>
    </li>
  );
}

/** 월별 일정표. columns=true면 홈에서 달별 세로 칸으로 */
export default function ScheduleTimeline({ columns = false }: { columns?: boolean }) {
  const today = useToday();

  const groups = new Map<string, ScheduleEvent[]>();
  for (const e of scheduleEvents) {
    const ym = e.start.slice(0, 7);
    const key = ym >= "2026-12" ? "2026-12" : ym;
    groups.set(key, [...(groups.get(key) ?? []), e]);
  }
  const title = (k: string) => (k === "2026-12" ? "12월 이후 · 정시" : `${Number(k.slice(5))}월`);

  return (
    <div className={columns ? "grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2" : "space-y-6"}>
      {[...groups.entries()].map(([k, events]) => (
        <div key={k}>
          <p className="flex items-baseline justify-between border-b-2 border-hi/80 pb-1.5">
            <span className="text-lg font-bold text-hi">{title(k)}</span>
            <span className="num text-[13px] text-lo">{events.length}건</span>
          </p>
          <ul className="divide-y divide-line">
            {events.map((e) => (
              <Row key={e.id} e={e} today={today} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
