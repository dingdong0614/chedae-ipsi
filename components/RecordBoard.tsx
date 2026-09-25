import type { RecordBoard as Board } from "@/data/records";
import { pairedRows } from "@/data/records";

/** 대학별 만점 기준표. 남·여를 한 줄에 놓고, 최고값만 강조색. 막대는 0부터 시작. */
export default function RecordBoard({ board }: { board: Board }) {
  const rows = pairedRows(board);
  const maxM = Math.max(...rows.map((r) => r.male));
  const maxF = Math.max(...rows.map((r) => r.female ?? 0));
  const scale = Math.max(maxM, maxF);

  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">{board.event} 대학별 만점 기준 (단위 {board.unit})</caption>
      <thead>
        <tr className="border-b-2 border-hi/80 text-[13px] text-lo">
          <th scope="col" className="py-2 pr-3 font-semibold">대학</th>
          <th scope="col" className="py-2 pr-3 text-right font-semibold">남 3kg</th>
          <th scope="col" className="hidden py-2 pr-3 font-semibold sm:table-cell" aria-hidden />
          <th scope="col" className="py-2 text-right font-semibold">여 2kg</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.school} className="border-b border-line">
            <th scope="row" className="py-2.5 pr-3 text-[15px] font-semibold text-hi">
              {r.school}
            </th>
            <td className={`num py-2.5 pr-3 text-right text-[17px] font-bold ${r.male === maxM ? "text-signal" : "text-hi"}`}>
              {r.male.toFixed(1)}
            </td>
            <td className="hidden w-1/3 py-2.5 pr-3 sm:table-cell" aria-hidden>
              <span className="flex flex-col gap-1">
                <span className="h-1.5 rounded-full bg-[#6b7480]" style={{ width: `${(r.male / scale) * 100}%` }} />
                {r.female !== null && (
                  <span className="h-1.5 rounded-full bg-[#3d444d]" style={{ width: `${(r.female / scale) * 100}%` }} />
                )}
              </span>
            </td>
            <td className={`num py-2.5 text-right text-[17px] font-bold ${r.female === maxF ? "text-signal" : "text-hi"}`}>
              {r.female?.toFixed(1) ?? "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
