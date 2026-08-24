export type Academy = {
  slug: string;
  name: string;
  regionSlug: string;
  address: string;
  phone: string;
  kakaoUrl?: string;
  subjects: string[];
  founded: string;
  intro: string;
  tags: string[];
  /** 실제 학원 정보로 교체되기 전까지의 예시 데이터 표시용 */
  sample: true;
};

// TODO(doion): 아래 항목은 전부 예시(sample) 데이터입니다.
// 실제 학원 정보를 받는 대로 sample 플래그와 함께 교체하세요.
export const academies: Academy[] = [
  {
    slug: "sample-power-athletics",
    name: "파워체대입시학원 (예시)",
    regionSlug: "seoul",
    address: "서울 노원구 동일로 000 (예시 주소)",
    phone: "02-000-0000",
    subjects: ["100m", "제자리멀리뛰기", "메디신볼", "윗몸일으키기"],
    founded: "2018",
    intro: "실기 종목별 담당 코치를 두고 주 6일 개인 기록 관리를 진행하는 예시 학원입니다.",
    tags: ["실기전문", "1:1기록관리"],
    sample: true,
  },
  {
    slug: "sample-record-lab",
    name: "레코드랩 체육입시 (예시)",
    regionSlug: "gyeonggi-incheon",
    address: "경기 수원시 영통구 000로 00 (예시 주소)",
    phone: "031-000-0000",
    subjects: ["배드민턴", "농구", "체력검사", "면접"],
    founded: "2015",
    intro: "구기 종목 실기와 면접 대비를 함께 준비하는 예시 학원입니다.",
    tags: ["구기종목", "면접대비"],
    sample: true,
  },
  {
    slug: "sample-southgate-sports",
    name: "사우스게이트 스포츠아카데미 (예시)",
    regionSlug: "busan-gyeongnam",
    address: "부산 금정구 000대로 00 (예시 주소)",
    phone: "051-000-0000",
    subjects: ["100m", "체력검사", "수영"],
    founded: "2020",
    intro: "지역 대학 실기고사 기준에 맞춘 소수정예반을 운영하는 예시 학원입니다.",
    tags: ["소수정예", "지역대학특화"],
    sample: true,
  },
];
