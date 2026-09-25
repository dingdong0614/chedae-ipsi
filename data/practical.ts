// data/info.ts 의 실기 종목 문서(한국체육대학교 공개 시행 규정 기준)를 기록지 한 장으로 옮긴 것.
// 문서 본문을 고치면 여기도 같이 고친다. 대학마다 세부 규정이 다르다.

export type PracticalRow = {
  event: string;
  unit: string;
  how: string;
  tries: string;
  foul: string;
  sourceSlug: string;
};

export const practicalSheet: PracticalRow[] = [
  {
    event: "100m 달리기",
    unit: "초",
    how: "스탠딩스타트(블록 없음), 스파이크 허용. 가슴이 결승선을 통과한 시점",
    tries: "1회",
    foul: "레인 이탈, 부정출발 1회",
    sourceSlug: "100m-run-rules",
  },
  {
    event: "제자리멀리뛰기",
    unit: "cm",
    how: "구름선에서 착지한 몸 중 구름선에 가장 가까운 지점까지",
    tries: "2회 중 좋은 기록",
    foul: "선 밟기, 이단 점프, 20초 초과, 판 옆으로 벗어남",
    sourceSlug: "standing-long-jump-rules",
  },
  {
    event: "10m 왕복달리기",
    unit: "1/100초",
    how: "반대편 버튼 터치, 출발선 버튼 터치 후 다시 반대편 통과",
    tries: "1회 (부정출발 시 1회 추가)",
    foul: "버튼 소리·불빛 신호가 안 들어옴",
    sourceSlug: "10m-shuttle-run-rules",
  },
  {
    event: "메디신볼 던지기",
    unit: "m",
    how: "남 3kg · 여 2kg, 양발 붙이고 오버헤드 드로우. 착지면 중심 측정",
    tries: "2회 중 좋은 기록",
    foul: "발이 먼저 떨어짐, 투척라인 밟음, 좌우 약 2m 밖, 10초 초과",
    sourceSlug: "medicine-ball-throw-standard",
  },
  {
    event: "팔굽혀펴기",
    unit: "회",
    how: "가슴과 봉 사이 10cm 이하, 팔꿈치 약 90도까지 내려가면 1회. 여자는 무릎 대고 실시하는 경우가 많음",
    tries: "대학별",
    foul: "대학별 자세 규정",
    sourceSlug: "pushup-backstrength-rules",
  },
  {
    event: "배근력",
    unit: "kg",
    how: "배근력계 위에서 손잡이를 당김. 등·복부·하지까지 쓰는 전신 근력",
    tries: "대학별",
    foul: "대학별 자세 규정",
    sourceSlug: "pushup-backstrength-rules",
  },
];

// 커뮤니티 문서에서 그대로 옮긴 말 (data/info.ts community 분류)
export const communityLines = [
  { quote: "실기가 진짜 잘하는 거 아니면 수시 지원 신중하게", from: "체대입시 갤러리에 반복해서 올라오는 조언", slug: "community-susi-reality-check" },
  {
    quote: "집 앞 학원(주 3회, 대학생 코치)이랑 조금 먼 학원(주 2회, 경력 있는 코치) 중 어디가 나아요?",
    from: "학원 고를 때 가장 흔한 질문",
    slug: "community-academy-picking",
  },
  { quote: "가볍게 기록만 한 번 확인하고 푹 쉰다", from: "실기고사 전날 루틴으로 자주 나오는 답", slug: "community-timing-and-routine" },
];
