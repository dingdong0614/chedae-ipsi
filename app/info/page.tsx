import Link from "next/link";
import type { Metadata } from "next";
import { infoCategories, infoArticles } from "@/data/info";
import SampleBadge from "@/components/SampleBadge";
import PageHead from "@/components/PageHead";
import { IconChevron } from "@/components/Icons";

export const metadata: Metadata = {
  title: "정보실 | 체대입시",
  description: "체대입시 실기 종목별 기준, 대학별 입시요강, 일정, 용어를 정리한 정보실입니다.",
};

export default function InfoPage() {
  return (
    <>
      <PageHead title="정보실" photo="race" position="50% 50%">
        종목 규정, 전형 이름, 일정, 커뮤니티에서 도는 이야기까지. 문서마다 마지막으로 고친 날짜를 적어 뒀어요.
      </PageHead>

      {/* 카테고리 가로 탭 (스크롤 시 상단 고정) */}
      <nav aria-label="정보실 분류" className="sticky top-14 z-30 border-b border-line bg-page/95 md:top-16">
        <div className="chip-row mx-auto flex max-w-6xl gap-5 overflow-x-auto px-4 sm:px-8">
          {infoCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 border-b-2 border-transparent px-1 text-sm font-semibold text-body hover:border-signal hover:text-hi"
            >
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-10 sm:px-8 md:py-14">
        {infoCategories.map((cat) => {
          const articles = infoArticles.filter((a) => a.categorySlug === cat.slug);
          return (
            <section key={cat.slug} id={cat.slug} aria-labelledby={`h-${cat.slug}`} className="scroll-mt-36 md:grid md:grid-cols-[280px_1fr] md:gap-10">
              <div className="md:pt-2">
                <h2 id={`h-${cat.slug}`} className="text-xl font-bold">
                  {cat.title}
                </h2>
                <p className="mt-1.5 text-sm text-lo">{cat.description}</p>
              </div>

              {articles.length === 0 ? (
                <div className="mt-5 rounded-[var(--radius)] border border-dashed border-line-strong p-6 md:mt-0">
                  <p className="font-semibold text-hi">이 분류는 아직 정리 중이에요</p>
                  <p className="mt-1 text-sm text-lo">먼저 다른 분류를 둘러보거나, 궁금한 주제를 알려주세요.</p>
                  <Link href="/contact" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-signal">
                    주제 요청하기
                  </Link>
                </div>
              ) : (
                <ul className="mt-5 divide-y divide-line border-y border-line md:mt-0">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/info/${a.slug}`} className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-raised sm:px-5">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-[16px] font-bold leading-snug">{a.title}</h3>
                            {a.sample && <SampleBadge />}
                          </div>
                          <p className="mt-1 line-clamp-2 text-sm text-lo">{a.summary}</p>
                          <p className="num mt-2 text-xs text-lo">{a.updatedAt.replaceAll("-", ".")} 고침</p>
                        </div>
                        <IconChevron className="h-5 w-5 shrink-0 text-lo transition-colors group-hover:text-signal" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
