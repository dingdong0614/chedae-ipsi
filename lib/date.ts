// 날짜 계산은 한국 시간 기준 "그날"로만 다룬다(시·분 무시).

export function todayKST(): string {
  const now = new Date(Date.now() + 9 * 60 * 60 * 1000);
  return now.toISOString().slice(0, 10);
}

function toUTC(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return Date.UTC(y, m - 1, day);
}

/** a에서 b까지 남은 일수 (b가 미래면 양수) */
export function daysBetween(a: string, b: string) {
  return Math.round((toUTC(b) - toUTC(a)) / 86_400_000);
}

export function fmtMD(d: string) {
  const [, m, day] = d.split("-");
  return `${m}.${day}`;
}

export function fmtRange(start: string, end?: string) {
  return end && end !== start ? `${fmtMD(start)}~${fmtMD(end)}` : fmtMD(start);
}

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];
export function weekday(d: string) {
  return WEEK[new Date(toUTC(d)).getUTCDay()];
}
