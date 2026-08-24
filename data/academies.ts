export type Academy = {
  slug: string;
  name: string;
  regionSlug: string;
  address: string;
  phone: string;
  kakaoUrl?: string;
  subjects: string[];
  intro: string;
  tags: string[];
  /** 아직 실제 정보를 확보하지 못해 임시로 채워 넣은 예시 데이터일 때만 true */
  sample?: true;
};

// 온라인에 공개된 정보(학원 자체 채널·지역 학원 정보 사이트 등)를 조사해 정리했습니다.
// 학원 측이 직접 제출한 정보가 아니므로, 상호명/전화번호 변경이나 지점 개편이 최신 반영되지 않았을 수 있습니다.
// 연락 전 학원 공식 채널로 최신 정보를 한 번 더 확인하는 것을 권장합니다.
export const academies: Academy[] = [
  {
    slug: "max-daechi",
    name: "맥스 체대입시 (대치)",
    regionSlug: "seoul",
    address: "서울 강남구 역삼로555 더블루타워 1F 102A",
    phone: "1599-8581",
    subjects: ["실기 종합"],
    intro: "전국 다수 지점을 운영하는 체대입시 프랜차이즈 '맥스 체대입시'의 강남 교육원.",
    tags: ["프랜차이즈"],
  },
  {
    slug: "swat-jamsil",
    name: "잠실 SWAT 체대입시",
    regionSlug: "seoul",
    address: "서울 송파구 잠실동 198",
    phone: "02-421-5285",
    subjects: ["실기 종합"],
    intro: "잠실 지역에서 실기 지도를 진행하는 체대입시 학원.",
    tags: ["지역밀착"],
  },
  {
    slug: "final-bundang",
    name: "파이널 체대입시 분당캠퍼스",
    regionSlug: "gyeonggi-incheon",
    address: "경기 성남시 분당구",
    phone: "031-715-0901",
    subjects: ["실기 종합", "입시상담"],
    intro: "고1~고3 체대입시 상담과 실기 지도를 함께 진행하는 분당 지역 학원.",
    tags: ["입시상담"],
  },
  {
    slug: "yonsei-injeong",
    name: "인천연세체대입시 주안1호점",
    regionSlug: "gyeonggi-incheon",
    address: "인천 미추홀구 간석4동 616-75 2층",
    phone: "032-872-1002",
    subjects: ["실기 종합"],
    intro: "인천 미추홀구에 위치한 체대입시 전문 학원.",
    tags: ["지역밀착"],
  },
  {
    slug: "respect-dongnae",
    name: "리스펙 체대입시 동래교육원",
    regionSlug: "busan-gyeongnam",
    address: "부산 동래구 안락동",
    phone: "051-000-0000",
    subjects: ["실기 종합", "웨이트 트레이닝"],
    intro: "전국 다수 지점을 둔 체대입시 프랜차이즈 '리스펙'의 부산 동래 교육원. 자체 체육관·웨이트 시설을 갖췄다고 알려져 있습니다.",
    tags: ["프랜차이즈"],
    sample: true,
  },
  {
    slug: "namcheon-main",
    name: "남천 체대입시 (남천본점)",
    regionSlug: "busan-gyeongnam",
    address: "부산 수영구 남천동",
    phone: "051-627-8238",
    subjects: ["실기 종합", "입시컨설팅"],
    intro: "대학별 전년도 합격 컷 상담을 함께 제공한다고 알려진 부산 남천동 학원. 부산대점·해운대점 등 지점을 운영합니다.",
    tags: ["입시상담"],
  },
  {
    slug: "max-daegu",
    name: "맥스체대입시 대구교육원",
    regionSlug: "daegu-gyeongbuk",
    address: "대구 수성구 달구벌대로 2579 (만촌동) 5층",
    phone: "053-782-0006",
    subjects: ["실기 종합"],
    intro: "전국 다수 지점을 운영하는 체대입시 프랜차이즈 '맥스 체대입시'의 대구 교육원.",
    tags: ["프랜차이즈"],
  },
  {
    slug: "respect-suseong",
    name: "리스펙 체대입시 대구수성교육원",
    regionSlug: "daegu-gyeongbuk",
    address: "대구 수성구 범어동",
    phone: "053-000-0000",
    subjects: ["실기 종합", "웨이트 트레이닝"],
    intro: "약 300평 규모의 체육관·웨이트 시설을 갖췄다고 알려진 체대입시 프랜차이즈 교육원.",
    tags: ["프랜차이즈"],
    sample: true,
  },
  {
    slug: "max-daejeon",
    name: "맥스체대입시 대전교육원",
    regionSlug: "daejeon-chungcheong",
    address: "대전 서구 둔산로 31번길 66",
    phone: "042-523-7112",
    subjects: ["실기 종합"],
    intro: "둔산동에 위치한 체대입시 프랜차이즈 '맥스 체대입시'의 대전 교육원.",
    tags: ["프랜차이즈"],
  },
  {
    slug: "max-gwangju",
    name: "맥스 체대입시 광주교육원",
    regionSlug: "gwangju-jeolla",
    address: "광주 광산구 신창동",
    phone: "062-000-0000",
    subjects: ["실기 종합"],
    intro: "체대입시 프랜차이즈 '맥스 체대입시'의 광주 교육원.",
    tags: ["프랜차이즈"],
    sample: true,
  },
  {
    slug: "ksa-juwol",
    name: "KSA 체대입시학원",
    regionSlug: "gwangju-jeolla",
    address: "광주 남구 주월동",
    phone: "062-000-0000",
    subjects: ["실기 종합"],
    intro: "광주 남구 주월동에 위치한 체대입시 전문 학원.",
    tags: ["지역밀착"],
    sample: true,
  },
];
