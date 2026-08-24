export type InfoCategory = {
  slug: string;
  index: string;
  title: string;
  description: string;
};

export const infoCategories: InfoCategory[] = [
  {
    slug: "practical-test",
    index: "01",
    title: "실기 종목별 기준",
    description: "100m, 제자리멀리뛰기, 메디신볼 등 종목별 측정 방법과 대학별 환산 기준.",
  },
  {
    slug: "admission-guide",
    index: "02",
    title: "대학별 입시요강",
    description: "수시/정시 전형별 반영 비율, 실기·학생부·수능 비중 정리.",
  },
  {
    slug: "schedule",
    index: "03",
    title: "입시 일정",
    description: "원서 접수, 실기고사, 합격자 발표 등 연간 일정.",
  },
  {
    slug: "terms",
    index: "04",
    title: "용어·제도 이해",
    description: "수시/정시, 학생부종합, 특기자전형 등 처음 준비하는 학부모·학생을 위한 용어 정리.",
  },
];

export type InfoArticle = {
  slug: string;
  categorySlug: string;
  title: string;
  summary: string;
  updatedAt: string;
  body: string[];
  /** 실제 데이터로 교체되기 전까지의 예시 콘텐츠 표시용 */
  sample: true;
};

// TODO(doion): 아래 항목은 전부 예시(sample) 데이터입니다.
// 실제 기준표/요강/일정 텍스트를 받는 대로 sample 플래그와 함께 교체하세요.
export const infoArticles: InfoArticle[] = [
  {
    slug: "100m-standard",
    categorySlug: "practical-test",
    title: "100m 달리기 대학별 기준표 (예시)",
    summary: "체대입시에서 가장 비중이 큰 100m 기록의 대학별 만점·기준 구간을 정리한 예시 문서입니다.",
    updatedAt: "2026-08-01",
    body: [
      "이 문서는 예시 데이터입니다. 실제 대학별 기록 기준표가 준비되면 이 내용을 교체해주세요.",
      "일반적으로 100m는 남/여 기준이 다르게 적용되며, 대학마다 만점 구간과 감점 구간이 다르게 설정됩니다.",
      "예시: A대학 남자 기준 11.8초 이내 만점, B대학 여자 기준 14.5초 이내 만점 (실제 수치 아님).",
    ],
    sample: true,
  },
  {
    slug: "susi-vs-jeongsi",
    categorySlug: "terms",
    title: "수시와 정시, 체대입시에서는 뭐가 다를까 (예시)",
    summary: "체육특기자 전형이 아닌 일반 체대입시생이 꼭 구분해야 할 수시·정시 차이를 정리한 예시 문서입니다.",
    updatedAt: "2026-07-20",
    body: [
      "이 문서는 예시 데이터입니다. 실제 설명 텍스트가 준비되면 이 내용을 교체해주세요.",
      "수시는 학생부와 실기, 면접을 종합적으로 평가하는 경우가 많고, 정시는 수능 성적과 실기 비중이 큰 편입니다.",
      "대학마다 반영 비율이 크게 다르므로 지원 전 요강을 꼭 확인해야 합니다.",
    ],
    sample: true,
  },
  {
    slug: "2027-schedule",
    categorySlug: "schedule",
    title: "2027학년도 체대입시 대략 일정 (예시)",
    summary: "원서 접수부터 실기고사, 발표까지 큰 흐름을 잡기 위한 예시 일정입니다.",
    updatedAt: "2026-08-10",
    body: [
      "이 문서는 예시 데이터입니다. 실제 연간 일정이 준비되면 이 내용을 교체해주세요.",
      "수시 원서접수는 통상 9월, 실기고사는 10~11월, 정시는 익년 1월 전후로 진행되는 경우가 많습니다.",
      "대학별 정확한 일정은 반드시 각 대학 입학처 공지로 재확인해야 합니다.",
    ],
    sample: true,
  },
];
