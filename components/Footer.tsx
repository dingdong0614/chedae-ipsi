import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-signal">CHE-DAE</p>
            <p className="mt-2 text-sm">체대입시 실기 기준·입시요강·일정을 한 곳에, 학원까지 바로 연결.</p>
          </div>
          <div className="flex gap-5 font-mono text-xs uppercase tracking-widest">
            <Link href="/info" className="hover:text-signal">정보실</Link>
            <Link href="/academies" className="hover:text-signal">학원찾기</Link>
            <Link href="/contact" className="hover:text-signal">문의</Link>
            <Link href="/privacy" className="hover:text-signal">개인정보처리방침</Link>
          </div>
        </div>
        <p className="mt-8 font-mono text-[11px] text-paper/30">
          본 사이트의 정보는 참고용이며, 정확한 입시요강·일정은 반드시 각 대학 입학처 공식 발표를 확인해야 합니다.
        </p>
      </div>
    </footer>
  );
}
