import Link from "next/link";
import { infoCategories, infoArticles } from "@/data/info";
import { academies } from "@/data/academies";
import AcademyCard from "@/components/AcademyCard";

export default function Home() {
  const stats = [
    { value: String(infoArticles.length), unit: "개 문서", label: "정리된 정보 영역" },
    { value: String(academies.length), unit: "곳", label: "등록된 학원" },
    { value: "0원", unit: "", label: "학생·학부모 이용료" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">Record Board for 체대입시</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.15] tracking-tight sm:text-6xl">
            흩어진 체대입시 정보를,
            <br />
            하나의 기록판으로.
          </h1>
          <p className="mt-6 max-w-xl text-base text-paper/70 sm:text-lg">
            실기 기준, 대학별 입시요강, 일정까지 매번 다시 검색하지 않아도 되게 정리했습니다.
            그리고 지금 준비를 시작할 수 있는 학원까지 바로 연결합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/info"
              className="bg-signal px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition hover:opacity-90"
            >
              정보 보러가기
            </Link>
            <Link
              href="/academies"
              className="border border-paper/30 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-paper transition hover:border-signal hover:text-signal"
            >
              학원 찾기
            </Link>
          </div>
        </div>

        <div className="border-t border-paper/10">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-paper/10 px-5 sm:px-8">
            {stats.map((s) => (
              <div key={s.label} className="py-8">
                <p className="font-mono text-3xl font-bold text-signal sm:text-4xl">
                  {s.value}
                  <span className="ml-1 text-sm text-paper/50">{s.unit}</span>
                </p>
                <p className="mt-1 text-xs text-paper/60 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">Why 체대입시</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
          정보는 널려 있는데, 정작 한눈에 정리된 곳은 없었습니다.
        </h2>
        <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
          {[
            { n: "01", t: "정보 정리", d: "블로그·카페·학원 상담마다 다른 이야기 대신, 종목별·대학별 기준을 한 곳에 정리합니다." },
            { n: "02", t: "학원 연결", d: "지역과 준비 종목에 맞는 학원을 찾아 전화·상담으로 바로 이어줍니다." },
            { n: "03", t: "지속 업데이트", d: "입시요강과 일정이 바뀔 때마다 갱신 일자를 남겨 최신 상태를 확인할 수 있게 합니다." },
          ].map((item) => (
            <div key={item.n} className="bg-paper p-8">
              <span className="font-mono text-xs text-signal-ink">{item.n}</span>
              <h3 className="mt-3 text-lg font-black">{item.t}</h3>
              <p className="mt-2 text-sm text-ink/70">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFO PREVIEW */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">Information</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">정보실</h2>
            </div>
            <Link href="/info" className="font-mono text-xs uppercase tracking-widest text-signal-ink hover:underline">
              전체보기 →
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {infoCategories.map((c) => {
              const count = infoArticles.filter((a) => a.categorySlug === c.slug).length;
              return (
                <Link key={c.slug} href={`/info#${c.slug}`} className="group bg-paper p-6 transition hover:bg-ink">
                  <span className="font-mono text-xs text-ink/40 group-hover:text-signal">{c.index}</span>
                  <h3 className="mt-3 font-black group-hover:text-paper">{c.title}</h3>
                  <p className="mt-2 text-xs text-ink/60 group-hover:text-paper/60">{c.description}</p>
                  <p className="mt-4 font-mono text-[11px] text-ink/40 group-hover:text-signal">문서 {count}건</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMY PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">Academies</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">지역별 학원</h2>
          </div>
          <Link href="/academies" className="font-mono text-xs uppercase tracking-widest text-signal-ink hover:underline">
            전체보기 →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {academies.slice(0, 3).map((a, i) => (
            <AcademyCard key={a.slug} academy={a} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">우리 학원을 등록하고 싶다면</h2>
          <p className="mt-3 text-paper/70">체대입시생에게 직접 노출됩니다. 문의 남겨주시면 등록을 도와드립니다.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-signal px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition hover:opacity-90"
          >
            학원 등록 문의
          </Link>
        </div>
      </section>
    </>
  );
}
