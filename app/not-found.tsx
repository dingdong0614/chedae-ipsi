import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:py-28">
      <p className="num text-6xl font-bold text-signal">404</p>
      <h1 className="mt-4 text-2xl font-bold">찾는 페이지가 없어요</h1>
      <p className="mt-2 text-body">주소가 바뀌었거나 삭제된 문서일 수 있어요. 여기서 다시 시작해 보세요.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Link href="/info" className="press inline-flex min-h-12 items-center rounded-full bg-signal px-6 font-bold text-on-signal">
          정보실
        </Link>
        <Link href="/academies" className="press inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 font-semibold text-hi">
          학원찾기
        </Link>
        <Link href="/" className="press inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 font-semibold text-hi">
          홈
        </Link>
      </div>
    </div>
  );
}
