import Link from "next/link";
import type { Metadata } from "next";
import { infoCategories, infoArticles } from "@/data/info";
import SampleBadge from "@/components/SampleBadge";

export const metadata: Metadata = {
  title: "정보실 | 체대입시",
  description: "체대입시 실기 종목별 기준, 대학별 입시요강, 일정, 용어를 정리한 정보실입니다.",
};

export default function InfoPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">Information</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">정보실</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        온라인에 흩어진 체대입시 정보를 종목·대학·일정·용어 단위로 정리했습니다. 문서마다 마지막 업데이트 날짜를 표시합니다.
      </p>

      <div className="mt-14 space-y-16">
        {infoCategories.map((cat) => {
          const articles = infoArticles.filter((a) => a.categorySlug === cat.slug);
          return (
            <section key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <div className="flex items-baseline gap-3 border-b border-line pb-4">
                <span className="font-mono text-sm text-signal-ink">{cat.index}</span>
                <h2 className="text-xl font-black">{cat.title}</h2>
              </div>
              <p className="mt-3 text-sm text-ink/60">{cat.description}</p>

              {articles.length === 0 ? (
                <p className="mt-6 font-mono text-xs text-ink/40">등록된 문서가 아직 없습니다.</p>
              ) : (
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/info/${a.slug}`}
                        className="flex flex-col gap-2 py-5 transition hover:bg-paper-dim sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold">{a.title}</h3>
                            {a.sample && <SampleBadge />}
                          </div>
                          <p className="mt-1 text-sm text-ink/60">{a.summary}</p>
                        </div>
                        <span className="whitespace-nowrap font-mono text-xs text-ink/40">
                          UPDATED {a.updatedAt}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
