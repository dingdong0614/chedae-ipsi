import Link from "next/link";
import { practicalSheet } from "@/data/practical";

/** 종목별 시행 규정 기록지. 데스크톱은 표, 모바일은 종목별 줄. */
export default function RuleSheet() {
  return (
    <>
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="sr-only">실기 종목별 시행 규정</caption>
        <thead>
          <tr className="border-b-2 border-hi/80 text-[13px] text-lo">
            <th scope="col" className="w-[170px] py-2.5 pr-4 font-semibold">종목</th>
            <th scope="col" className="w-[80px] py-2.5 pr-4 font-semibold">단위</th>
            <th scope="col" className="py-2.5 pr-4 font-semibold">어떻게 재나</th>
            <th scope="col" className="w-[150px] py-2.5 pr-4 font-semibold">시도</th>
            <th scope="col" className="w-[280px] py-2.5 font-semibold">이러면 파울</th>
          </tr>
        </thead>
        <tbody>
          {practicalSheet.map((r) => (
            <tr key={r.event} className="border-b border-line align-top">
              <th scope="row" className="py-4 pr-4">
                <Link href={`/info/${r.sourceSlug}`} className="text-[16px] font-bold text-hi underline-offset-4 hover:text-signal hover:underline">
                  {r.event}
                </Link>
              </th>
              <td className="num py-4 pr-4 text-signal">{r.unit}</td>
              <td className="py-4 pr-4 text-[15px] text-body">{r.how}</td>
              <td className="py-4 pr-4 text-[15px] text-hi">{r.tries}</td>
              <td className="py-4 text-[15px] text-body">{r.foul}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="divide-y divide-line border-y-2 border-t-hi/80 border-b-line md:hidden">
        {practicalSheet.map((r) => (
          <li key={r.event}>
            <Link href={`/info/${r.sourceSlug}`} className="block py-4">
              <span className="flex items-baseline justify-between gap-3">
                <span className="text-[17px] font-bold text-hi">{r.event}</span>
                <span className="num text-sm text-signal">{r.unit}</span>
              </span>
              <span className="mt-1 block text-[15px] text-body">{r.how}</span>
              <span className="mt-2 grid grid-cols-[3.5rem_1fr] gap-x-2 gap-y-1 text-sm">
                <span className="text-lo">시도</span>
                <span className="text-hi">{r.tries}</span>
                <span className="text-lo">파울</span>
                <span className="text-body">{r.foul}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
