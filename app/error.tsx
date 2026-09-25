"use client";

import Link from "next/link";
import { IconRefresh } from "@/components/Icons";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:py-28">
      <h1 className="text-2xl font-bold">화면을 불러오지 못했어요</h1>
      <p className="mt-2 text-body">인터넷 연결을 확인한 뒤 다시 시도해 주세요.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => reset()}
          className="press inline-flex min-h-12 items-center gap-2 rounded-full bg-signal px-6 font-bold text-on-signal"
        >
          <IconRefresh className="h-5 w-5" /> 다시 시도
        </button>
        <Link href="/" className="press inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 font-semibold text-hi">
          홈으로
        </Link>
      </div>
    </div>
  );
}
