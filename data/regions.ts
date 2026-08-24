export type Region = {
  slug: string;
  name: string;
};

export const regions: Region[] = [
  { slug: "seoul", name: "서울" },
  { slug: "gyeonggi-incheon", name: "경기/인천" },
  { slug: "busan-gyeongnam", name: "부산/경남" },
  { slug: "daegu-gyeongbuk", name: "대구/경북" },
  { slug: "daejeon-chungcheong", name: "대전/충청" },
  { slug: "gwangju-jeolla", name: "광주/전라" },
];
