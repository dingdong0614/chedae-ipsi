// 사진은 전부 UNSPLASH_POOL(대표 확인본)에서 고른 Unsplash 무료 라이선스 사진. 목록은 docs/image-credits.md
export type PhotoKey =
  | "lanes"
  | "sprint"
  | "coach"
  | "stopwatch"
  | "race"
  | "stadium"
  | "timer"
  | "sprintPack"
  | "schoolRun";

export const PHOTOS: Record<PhotoKey, { id: string; alt: string; credit: string }> = {
  lanes: { id: "photo-1474546652694-a33dd8161d66", alt: "번호가 적힌 빨간 육상 트랙 레인", credit: "Austris Augusts" },
  sprint: { id: "photo-1538061210394-c72c824af0fb", alt: "트랙에서 스프린트 경주를 하는 선수들", credit: "Jonathan Chng" },
  coach: { id: "photo-1717643543235-e2812d10a0e1", alt: "트랙에 선 학생과 코치", credit: "Quan Jing" },
  stopwatch: { id: "photo-1704265586142-db3e17d0dea0", alt: "검은 배경의 스톱워치", credit: "William Warby" },
  race: { id: "photo-1720799359333-974848b7dd8b", alt: "붉은 트랙에서 달리기 경주를 하는 학생들", credit: "Rosario Fernandes" },
  stadium: { id: "photo-1606416550697-3d653df8d9a7", alt: "파란 하늘 아래 육상 경기장", credit: "wen chao" },
  timer: { id: "photo-1666027092835-7e668416b7c8", alt: "00:00.00을 표시한 디지털 타이머", credit: "reyna" },
  sprintPack: { id: "photo-1532444458054-01a7dd3e9fca", alt: "트랙 스프린트 경주 중인 선수들", credit: "Jonathan Chng" },
  schoolRun: { id: "photo-1636588365992-3988d894bffb", alt: "운동장을 달려 결승선으로 들어오는 학생들", credit: "Jeffrey Chai" },
};

export function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}
