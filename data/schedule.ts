// data/info.ts 의 일정 문서(2027-susi-schedule)에 적힌 날짜를 기록판용으로 구조화한 것.
// 원문과 같은 출처(입시 컨설팅 자료)이며, 실제 시행일은 대학별 모집요강 확정본과 다를 수 있다.
// 날짜를 고치면 원문 문서(info.ts)도 함께 고친다.

export type ScheduleKind = "apply" | "practical" | "exam" | "result";

export type ScheduleEvent = {
  id: string;
  label: string;
  /** YYYY-MM-DD */
  start: string;
  /** YYYY-MM-DD, 하루짜리면 생략 */
  end?: string;
  kind: ScheduleKind;
  sourceSlug: string;
};

export const scheduleKindLabel: Record<ScheduleKind, string> = {
  apply: "원서접수",
  practical: "실기고사",
  exam: "수능",
  result: "발표",
};

const SRC = "2027-susi-schedule";

export const scheduleEvents: ScheduleEvent[] = [
  { id: "susi-apply", label: "수시 원서접수", start: "2026-09-07", end: "2026-09-11", kind: "apply", sourceSlug: SRC },
  { id: "dongguk-pe", label: "동국대 체육교육과", start: "2026-09-17", end: "2026-09-21", kind: "practical", sourceSlug: SRC },
  { id: "kyonggi", label: "경기대 체육계열", start: "2026-09-19", end: "2026-09-20", kind: "practical", sourceSlug: SRC },
  { id: "sahmyook", label: "삼육대 체육학과", start: "2026-09-20", kind: "practical", sourceSlug: SRC },
  { id: "dankook-life", label: "단국대 생활체육과", start: "2026-09-22", end: "2026-09-23", kind: "practical", sourceSlug: SRC },
  { id: "gachon-yongin", label: "가천대·용인대", start: "2026-10-02", end: "2026-10-05", kind: "practical", sourceSlug: SRC },
  { id: "hanshin", label: "한신대", start: "2026-10-03", kind: "practical", sourceSlug: SRC },
  { id: "suwon", label: "수원대", start: "2026-10-08", end: "2026-10-11", kind: "practical", sourceSlug: SRC },
  { id: "sungkyul", label: "성결대", start: "2026-10-09", end: "2026-10-10", kind: "practical", sourceSlug: SRC },
  { id: "sookmyung-kangnam-1", label: "숙명여대·강남대 (1차)", start: "2026-10-10", end: "2026-10-11", kind: "practical", sourceSlug: SRC },
  { id: "seokyeong", label: "서경대", start: "2026-10-13", end: "2026-10-18", kind: "practical", sourceSlug: SRC },
  { id: "sookmyung-kangnam-2", label: "숙명여대·강남대 (2차)", start: "2026-10-17", end: "2026-10-18", kind: "practical", sourceSlug: SRC },
  { id: "incheon", label: "인천대", start: "2026-10-19", end: "2026-10-21", kind: "practical", sourceSlug: SRC },
  { id: "daejin", label: "대진대", start: "2026-10-22", kind: "practical", sourceSlug: SRC },
  { id: "sangmyung", label: "상명대", start: "2026-10-28", end: "2026-10-29", kind: "practical", sourceSlug: SRC },
  { id: "swu", label: "서울여대", start: "2026-10-31", kind: "practical", sourceSlug: SRC },
  { id: "knsu", label: "한국체육대학교 체육계열", start: "2026-11-04", end: "2026-11-06", kind: "practical", sourceSlug: SRC },
  { id: "dankook-pe", label: "단국대 체육교육과", start: "2026-11-07", end: "2026-11-08", kind: "practical", sourceSlug: SRC },
  { id: "knsu-interview", label: "한체대 특기자·체육교육 면접", start: "2026-11-12", kind: "practical", sourceSlug: SRC },
  { id: "suneung", label: "대학수학능력시험", start: "2026-11-19", kind: "exam", sourceSlug: SRC },
  { id: "suneung-score", label: "수능 성적 통지", start: "2026-12-11", kind: "result", sourceSlug: SRC },
  { id: "jeongsi-apply", label: "정시 원서접수", start: "2027-01-04", end: "2027-01-07", kind: "apply", sourceSlug: SRC },
  { id: "jeongsi-exam", label: "정시 가/나/다군 전형", start: "2027-01-11", end: "2027-01-31", kind: "practical", sourceSlug: SRC },
];

export const SUNEUNG_DATE = "2026-11-19";
