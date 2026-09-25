import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { academies } from "@/data/academies";
import { regions } from "@/data/regions";
import SampleBadge from "@/components/SampleBadge";
import AcademyCard from "@/components/AcademyCard";
import { IconArrowLeft, IconChat, IconPhone } from "@/components/Icons";
import { hasCallablePhone, telHref } from "@/lib/academy";

export function generateStaticParams() {
  return academies.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/academies/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const academy = academies.find((a) => a.slug === slug);
  if (!academy) return {};
  return { title: `${academy.name} | 체대입시 학원찾기`, description: academy.intro };
}

export default async function AcademyDetailPage(props: PageProps<"/academies/[slug]">) {
  const { slug } = await props.params;
  const academy = academies.find((a) => a.slug === slug);
  if (!academy) notFound();

  const region = regions.find((r) => r.slug === academy.regionSlug);
  const callable = hasCallablePhone(academy);
  const nearby = academies.filter((a) => a.regionSlug === academy.regionSlug && a.slug !== academy.slug).slice(0, 2);

  return (
    <div>
      <header className="border-b border-line bg-band">
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-6 sm:px-8 sm:pb-12 sm:pt-10">
          <Link
            href={`/academies?region=${academy.regionSlug}`}
            className="press -ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-body hover:text-hi"
          >
            <IconArrowLeft className="h-4 w-4" /> {region?.name ?? "학원찾기"} 학원 목록
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-signal">{region?.name}</span>
            {academy.sample && <SampleBadge />}
          </div>
          <h1 className="mt-3 font-display text-[30px] font-black leading-tight tracking-tight sm:text-5xl">{academy.name}</h1>
          <p className="mt-3 max-w-xl text-[15px] text-body sm:text-base">{academy.intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12">
        {/* 주 동작: 엄지 닿는 큰 버튼 두 개 */}
        <div className="grid grid-cols-2 gap-3">
          {callable ? (
            <a
              href={telHref(academy.phone)}
              className="press flex min-h-14 flex-col items-center justify-center rounded-2xl bg-signal px-3 py-2 text-on-signal"
            >
              <span className="flex items-center gap-1.5 text-[15px] font-bold">
                <IconPhone className="h-5 w-5" /> 전화하기
              </span>
              <span className="num text-xs opacity-80">{academy.phone}</span>
            </a>
          ) : (
            <div className="flex min-h-14 flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong px-3 py-2 text-center">
              <span className="text-[15px] font-bold text-body">전화번호 확인 중</span>
              <span className="text-xs text-lo">문의로 연결해 드려요</span>
            </div>
          )}
          <Link
            href={`/contact?academy=${encodeURIComponent(academy.name)}`}
            className={`press flex min-h-14 items-center justify-center gap-1.5 rounded-2xl px-3 text-[15px] font-bold ${
              callable ? "border border-line-strong text-hi" : "bg-signal text-on-signal"
            }`}
          >
            <IconChat className="h-5 w-5" /> 상담 문의하기
          </Link>
        </div>

        <dl className="mt-8 divide-y divide-line rounded-[var(--radius)] border border-line bg-surface">
          <div className="grid gap-1 p-5 sm:grid-cols-[120px_1fr] sm:gap-4">
            <dt className="text-sm text-lo">주소</dt>
            <dd className="font-semibold text-hi">{academy.address}</dd>
          </div>
          <div className="grid gap-1 p-5 sm:grid-cols-[120px_1fr] sm:gap-4">
            <dt className="text-sm text-lo">전화</dt>
            <dd className={callable ? "num text-hi" : "text-body"}>{callable ? academy.phone : "확인 중"}</dd>
          </div>
          <div className="grid gap-2 p-5 sm:grid-cols-[120px_1fr] sm:gap-4">
            <dt className="text-sm text-lo">준비 종목</dt>
            <dd>
<span className="text-hi">{academy.subjects.join(" · ")}</span>
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-xs leading-relaxed text-lo">
          온라인에 공개된 정보를 조사해 정리했으며, 학원이 직접 제출한 정보가 아닙니다. 상담 전 전화로 최신 정보를 확인해주세요.
        </p>

        {nearby.length > 0 && (
          <section className="mt-12" aria-labelledby="nearby">
            <h2 id="nearby" className="text-lg font-bold">
              {region?.name}의 다른 학원
            </h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {nearby.map((a) => (
                <li key={a.slug}>
                  <AcademyCard academy={a} showRegion={false} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
