@AGENTS.md

## doion 사이트 안내
- 사이트: 체대입시 실기 기록판 (체대입시 학원·기록 디렉토리)
- GitHub: dingdong0614/chedae-ipsi (origin). 기본 브랜치: master (main 아님)
- 라이브: https://chedae-ipsi.vercel.app. Vercel 프로젝트: chedae-ipsi
- 스택: Next 16.3.6 (App Router) + React 19 + TypeScript + Tailwind. 데이터는 data/*.ts(academies, records, regions, schedule 등)
- 빌드·로컬 확인: npm run dev (localhost:3000), npm run build, npm run lint. 테스트 스크립트 없음.
- 배포: 기본 브랜치(master)에 push하면 Vercel 자동 배포(수동 vercel deploy는 저장소와 어긋나므로 쓰지 않음). 미리보기 브랜치 배포는 Vercel 로그인 보호. push는 대표 요청·승인 후에만.
- 폰트·문구 재생성 스크립트: 없음. 사진 출처는 docs/image-credits.md에 기록
- 검사 스크립트: 없음
- 건드리면 안 되는 것: 알려진 항목 없음. 확인되지 않은 기록·수치는 지어내지 않음
- 공통 규칙: doion 공통 규칙은 doion 프로젝트 메모리(제작 방식·실무표준)를 따름.
