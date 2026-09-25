import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-tabbar border-t border-line bg-band">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg font-extrabold text-hi">체대입시 실기 기록판</p>
            <p className="mt-2 max-w-md text-sm text-lo">
              실기 기준·입시요강·일정을 한 곳에 정리하고, 지역별 학원까지 바로 연결합니다.
            </p>
          </div>
          <nav aria-label="바닥글 메뉴" className="grid grid-cols-2 gap-x-6 text-sm sm:grid-cols-4 md:grid-cols-2">
            <Link href="/info" className="flex min-h-11 items-center text-body hover:text-signal">정보실</Link>
            <Link href="/academies" className="flex min-h-11 items-center text-body hover:text-signal">학원찾기</Link>
            <Link href="/contact" className="flex min-h-11 items-center text-body hover:text-signal">문의·학원 등록</Link>
            <Link href="/privacy" className="flex min-h-11 items-center font-semibold text-hi hover:text-signal">개인정보처리방침</Link>
          </nav>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-lo">
          본 사이트의 정보는 참고용이며, 정확한 입시요강·일정은 반드시 각 대학 입학처 공식 발표를 확인해야 합니다.
          <br />
          사진: Unsplash
        </p>
      </div>
    </footer>
  );
}
