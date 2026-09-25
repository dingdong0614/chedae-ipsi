// data/info.ts 의 메디신볼 문서(medicine-ball-throw-standard)에 적힌 대학별 만점 기준을 표로 구조화한 것.
// 출처: 입시 컨설팅 자료. 매년 조정될 수 있으므로 반드시 지원 대학의 당해 연도 모집요강으로 확인.

export type RecordRow = { school: string; value: number };

export type RecordBoard = {
  id: string;
  event: string;
  unit: string;
  note: string;
  sourceSlug: string;
  male: RecordRow[];
  female: RecordRow[];
};

export const medicineBallBoard: RecordBoard = {
  id: "medicine-ball",
  event: "메디신볼 던지기",
  unit: "m",
  note: "남 3kg · 여 2kg · 대학별 만점 기준",
  sourceSlug: "medicine-ball-throw-standard",
  male: [
    { school: "상명대", value: 12.7 },
    { school: "한양대", value: 12.6 },
    { school: "가천대", value: 12.5 },
    { school: "서경대", value: 12.5 },
    { school: "한체대", value: 12.4 },
    { school: "국민대", value: 12 },
    { school: "세종대", value: 12 },
    { school: "중앙대", value: 12 },
    { school: "연세대", value: 11.5 },
    { school: "경기대", value: 11.5 },
  ],
  female: [
    { school: "상명대", value: 10.4 },
    { school: "한체대", value: 10 },
    { school: "국민대", value: 10 },
    { school: "경기대", value: 10 },
    { school: "세종대", value: 10 },
    { school: "한양대", value: 9.8 },
    { school: "가천대", value: 9.8 },
    { school: "서경대", value: 9.8 },
    { school: "중앙대", value: 9 },
    { school: "연세대", value: 9 },
  ],
};

/** 대학별로 남·여 기준을 한 줄에 */
export function pairedRows(board: RecordBoard) {
  return board.male.map((m) => ({
    school: m.school,
    male: m.value,
    female: board.female.find((f) => f.school === m.school)?.value ?? null,
  }));
}
