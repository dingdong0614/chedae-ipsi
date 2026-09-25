# 체대입시 실기 기록판

체대입시 실기 기준·입시요강·일정을 정리한 정보실과 지역별 체대입시 학원 디렉터리(Next.js App Router, 정적 생성).

## 구조
- `data/info.ts` 정보실 문서, `data/academies.ts` 학원 목록, `data/regions.ts` 지역
- `data/schedule.ts` 일정 문서(2027-susi-schedule)의 날짜를 표로 옮긴 것. 날짜를 고치면 info.ts 원문도 같이 고친다
- `data/records.ts` 메디신볼 문서의 대학별 만점 기준을 표로 옮긴 것
- 모바일은 하단 탭(홈·정보실·학원찾기·문의), 데스크톱은 상단 메뉴

## 환경변수
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: 문의 폼 Web3Forms 공개 키. 없으면 폼이 "온라인 접수 준비 중" 상태로 이메일 보내기 대안을 보여준다.

## 명령
```bash
npm install
npm run dev
npm run build && npm run start
```
