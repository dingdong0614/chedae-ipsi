import Link from "next/link";
import { notFound } from "next/navigation";
import { academies } from "@/data/academies";
import { regions } from "@/data/regions";
import SampleBadge from "@/components/SampleBadge";

export function generateStaticParams() {
  return academies.map((a) => ({ slug: a.slug }));
}

export default async function AcademyDetailPage(props: PageProps<"/academies/[slug]">) {
  const { slug } = await props.params;
  const academy = academies.find((a) => a.slug === slug);
  if (!academy) notFound();

  const region = regions.find((r) => r.slug === academy.regionSlug);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link href="/academies" className="font-mono text-xs uppercase tracking-widest text-ink/50 hover:text-signal-ink">
        ← 학원찾기
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-signal-ink">{region?.name}</span>
        {academy.sample && <SampleBadge />}
      </div>

      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{academy.name}</h1>
      <p className="mt-4 max-w-xl text-ink/80">{academy.intro}</p>

      <div className="mt-10 grid gap-px bg-line sm:grid-cols-2">
        <div className="bg-paper p-6">
          <p className="font-mono text-xs text-ink/40">주소</p>
          <p className="mt-1 font-bold">{academy.address}</p>
        </div>
        <div className="bg-paper p-6">
          <p className="font-mono text-xs text-ink/40">준비 종목</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {academy.subjects.map((s) => (
              <span key={s} className="border border-line px-3 py-1 font-mono text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 font-mono text-[11px] text-ink/40">
        온라인에 공개된 정보를 조사해 정리했으며, 학원이 직접 제출한 정보가 아닙니다. 상담 전 전화로 최신 정보를 확인해주세요.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`tel:${academy.phone.replace(/-/g, "")}`}
          className="bg-signal px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition hover:opacity-90"
        >
          {academy.phone} 전화하기
        </a>
        <Link
          href={`/contact?academy=${encodeURIComponent(academy.name)}`}
          className="border border-line px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition hover:border-ink"
        >
          상담 문의하기
        </Link>
      </div>
    </div>
  );
}
