import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { infoArticles, infoCategories } from "@/data/info";
import { medicineBallBoard } from "@/data/records";
import SampleBadge from "@/components/SampleBadge";
import RecordBoard from "@/components/RecordBoard";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import Photo from "@/components/Photo";
import type { PhotoKey } from "@/lib/photos";
import { IconArrowLeft, IconChevron, IconPin } from "@/components/Icons";

const HEADER_PHOTO: Record<string, PhotoKey> = {
  "practical-test": "sprintPack",
  "admission-guide": "stadium",
  schedule: "stopwatch",
  terms: "stadium",
  community: "schoolRun",
};

export function generateStaticParams() {
  return infoArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/info/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = infoArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: `${article.title} | 체대입시`, description: article.summary };
}

export default async function InfoArticlePage(props: PageProps<"/info/[slug]">) {
  const { slug } = await props.params;
  const article = infoArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const category = infoCategories.find((c) => c.slug === article.categorySlug);
  const siblings = infoArticles.filter((a) => a.categorySlug === article.categorySlug);
  const idx = siblings.findIndex((a) => a.slug === article.slug);
  const next = siblings[idx + 1] ?? null;
  const related = siblings.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      <header className="relative isolate overflow-hidden bg-[#15171a]">
        <Photo name={HEADER_PHOTO[article.categorySlug] ?? "race"} priority className="absolute inset-0 -z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/85 to-[#0b0c0e]/40" />
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-6 sm:px-8 sm:pb-12 sm:pt-10">
          <Link
            href={category ? `/info#${category.slug}` : "/info"}
            className="press -ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-[#e4e7eb] hover:text-white"
          >
            <IconArrowLeft className="h-4 w-4" /> {category?.title ?? "정보실"}
          </Link>
          {article.sample && (
            <div className="mt-3">
              <SampleBadge />
            </div>
          )}
          <h1 className="mt-16 font-display text-[28px] font-black leading-[1.25] tracking-tight text-white sm:mt-24 sm:text-[40px]">{article.title}</h1>
          <p className="mt-3 text-[15px] text-[#e4e7eb]">{article.summary}</p>
          <p className="num mt-4 text-xs text-[#c3c8cf]">{article.updatedAt.replaceAll("-", ".")} 고침</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-8 sm:py-14">
        {article.slug === medicineBallBoard.sourceSlug && (
          <div className="mb-10">
            <h2 className="text-lg font-bold">대학별 만점 기준 (m)</h2>
            <div className="mt-3">
              <RecordBoard board={medicineBallBoard} />
            </div>
          </div>
        )}
        {article.slug === "2027-susi-schedule" && (
          <div className="mb-10">
            <h2 className="mb-4 text-lg font-bold">달별로 보면</h2>
            <ScheduleTimeline />
          </div>
        )}

        <div className="space-y-5 text-[17px] leading-[1.8] text-body">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-line bg-surface p-4 text-sm text-lo">
          정확한 요강·일정은 반드시 지원 대학 입학처의 당해 연도 공식 발표로 확인하세요.
        </p>

        {next && (
          <Link
            href={`/info/${next.slug}`}
            className="lift press mt-8 flex items-center gap-4 rounded-[var(--radius)] border border-line-strong bg-surface p-5"
          >
            <span className="min-w-0 flex-1">
              <span className="text-xs text-lo">같은 분류 다음 문서</span>
              <span className="mt-1 block font-bold text-hi">{next.title}</span>
            </span>
            <IconChevron className="h-5 w-5 shrink-0 text-signal" />
          </Link>
        )}

        {!next && related.length > 0 && (
          <div className="mt-8">
            <p className="text-sm font-semibold text-hi">같은 분류 문서</p>
            <ul className="mt-2 divide-y divide-line border-y border-line">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/info/${r.slug}`} className="flex min-h-12 items-center justify-between gap-3 py-3 text-[15px] text-body hover:text-hi">
                    {r.title}
                    <IconChevron className="h-4 w-4 shrink-0 text-lo" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <span className="text-[15px] text-body">같이 준비할 학원을 찾는다면</span>
          <Link
            href="/academies"
            className="press inline-flex min-h-12 items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-bold text-on-signal"
          >
            <IconPin className="h-5 w-5" /> 지역별 학원
          </Link>
        </p>
      </div>
    </article>
  );
}
