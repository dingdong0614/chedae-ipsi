import Link from "next/link";
import { infoCategories, infoArticles } from "@/data/info";
import { academies } from "@/data/academies";
import { regions } from "@/data/regions";
import { medicineBallBoard } from "@/data/records";
import { communityLines } from "@/data/practical";
import AcademyCard from "@/components/AcademyCard";
import ScheduleBoard from "@/components/ScheduleBoard";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import RecordBoard from "@/components/RecordBoard";
import RuleSheet from "@/components/RuleSheet";
import Photo from "@/components/Photo";

export default function Home() {
  const countOf = (slug: string) => infoArticles.filter((a) => a.categorySlug === slug).length;
  const updated = [...infoArticles].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]?.updatedAt.replaceAll("-", ".");

  return (
    <>
      {/* 첫 화면: 트랙 사진 풀블리드, 글은 사진 아래쪽 왼편 */}
      <section className="relative isolate h-[min(78vh,640px)] min-h-[440px] overflow-hidden bg-[#2a1210]">
        <Photo name="lanes" priority position="50% 60%" className="absolute inset-0 -z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/55 to-[#0b0c0e]/10" />
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-8 sm:px-8 sm:pb-12">
          <p className="text-sm font-semibold text-hi/90">2027학년도 체대입시 · {updated} 정리</p>
          <h1 className="mt-3 max-w-[15ch] text-[34px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[52px]">
            실기 기준표부터 펴놓고 시작하자
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#e4e7eb] sm:text-base">
            100m는 스탠딩스타트 1회, 메디신볼은 남 3kg 여 2kg. 요강마다 흩어진 규정을 한 장으로 옮겨 놨어요.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="#sheet" className="press inline-flex min-h-12 items-center rounded-full bg-signal px-6 text-[15px] font-bold text-on-signal">
              종목별 기준표
            </Link>
            <Link
              href="/academies"
              className="press inline-flex min-h-12 items-center rounded-full bg-black/45 px-6 text-[15px] font-semibold text-white ring-1 ring-white/30 hover:bg-black/60"
            >
              우리 동네 학원
            </Link>
          </div>
        </div>
      </section>

      <ScheduleBoard />

      {/* 종목별 시행 규정 기록지: 이 사이트의 주인공 */}
      <section id="sheet" className="scroll-mt-20 mx-auto max-w-6xl px-4 pt-12 sm:px-8 md:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] sm:text-4xl">종목별 시행 규정</h2>
          <p className="max-w-md text-[15px] text-body">
            한국체육대학교가 공개한 시행 규정을 기준으로 옮겼어요. 레인 수, 시도 횟수, 파울 판정은 학교마다 조금씩 달라요.
          </p>
        </div>
        <div className="mt-6">
          <RuleSheet />
        </div>
      </section>

      <div className="mt-14 h-40 overflow-hidden sm:h-56 md:mt-20">
        <Photo name="sprint" sizes="100vw" position="50% 45%" />
      </div>

      {/* 메디신볼 만점 기준: 사진 크게 + 숫자 표 */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-8 md:mt-24">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-surface md:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[220px] md:min-h-full">
            <Photo name="coach" sizes="(min-width: 768px) 50vw, 100vw" position="50% 40%" className="absolute inset-0" />
          </div>
          <div className="p-5 sm:p-8">
            <h2 className="text-2xl font-bold tracking-[-0.03em] sm:text-[28px]">메디신볼, 학교마다 만점 거리가 달라요</h2>
            <p className="mt-2 text-sm text-lo">단위 m · 입시 컨설팅 자료 기준 참고값 · 매년 바뀔 수 있음</p>
            <div className="mt-5">
              <RecordBoard board={medicineBallBoard} />
            </div>
            <p className="mt-4 text-sm text-body">숭실대는 앉아서 던지기, 인천대는 더 가벼운 공을 써요.</p>
            <Link href={`/info/${medicineBallBoard.sourceSlug}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-signal hover:underline">
              던지는 자세와 파울 기준 읽기
            </Link>
          </div>
        </div>
      </section>

      {/* 일정: 스톱워치 사진 띠 + 달별 칸 */}
      <section id="schedule" className="scroll-mt-20 mt-16 md:mt-24">
        <div className="relative isolate overflow-hidden bg-black">
          <Photo name="stopwatch" sizes="100vw" position="50% 50%" className="absolute inset-0 -z-10 opacity-60" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
            <h2 className="max-w-md text-[26px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              수도권 실기고사는 10월에 몰려요
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-[#d8dce1]">
              가천대·용인대부터 서울여대까지. 11월엔 한체대와 수능이 겹쳐서 실기랑 공부를 같이 끌고 가야 해요.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-8">
          <ScheduleTimeline columns />
          <p className="mt-6 text-[13px] text-lo">입시 컨설팅 자료로 정리한 날짜라 확정본과 다를 수 있어요. 지원 전에 학교 입학처 공지로 한 번 더.</p>
        </div>
      </section>

      {/* 커뮤니티에서 실제로 오가는 말 */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-8 md:mt-24">
        <h2 className="text-xl font-bold text-hi sm:text-2xl">갤러리랑 학부모 카페에서 자주 보는 말</h2>
        <ul className="mt-6 grid grid-cols-1 gap-x-10 md:grid-cols-[1.4fr_1fr]">
          {communityLines.map((c, i) => (
            <li key={c.slug} className={i === 0 ? "md:row-span-2" : ""}>
              <Link href={`/info/${c.slug}`} className="group block border-t border-line py-5">
                <q className={`block font-bold leading-snug text-hi group-hover:text-signal ${i === 0 ? "text-2xl sm:text-[32px]" : "text-lg"}`}>
                  {c.quote}
                </q>
                <span className="mt-2 block text-sm text-lo">{c.from}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 학원: 지역별 전화번호부 */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-8 md:mt-24">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] sm:text-4xl">지역별 체대입시 학원 {academies.length}곳</h2>
            <p className="mt-3 max-w-xl text-[15px] text-body">
              학원 채널이랑 지역 정보 사이트에 공개된 내용을 모았어요. 학원이 직접 올린 정보가 아니라서 가기 전에 전화로 한 번 확인해 주세요.
            </p>
          </div>
          <div className="hidden h-40 overflow-hidden rounded-lg md:block">
            <Photo name="schoolRun" sizes="360px" position="50% 55%" />
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {regions.map((r) => {
            const list = academies.filter((a) => a.regionSlug === r.slug);
            if (list.length === 0) return null;
            return (
              <div key={r.slug}>
                <p className="flex items-baseline justify-between border-b-2 border-hi/80 pb-1.5">
                  <Link href={`/academies?region=${r.slug}`} className="text-lg font-bold text-hi hover:text-signal">
                    {r.name}
                  </Link>
                  <span className="num text-[13px] text-lo">{list.length}곳</span>
                </p>
                <ul className="divide-y divide-line">
                  {list.map((a) => (
                    <li key={a.slug}>
                      <AcademyCard academy={a} showRegion={false} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 border-t border-line pt-5 text-[15px] text-body">
          목록에 없는 학원이거나 번호가 바뀌었으면{" "}
          <Link href="/contact?type=register" className="font-semibold text-signal underline underline-offset-4">
            알려주세요
          </Link>
          . 확인하고 고쳐 둘게요.
        </p>
      </section>

      {/* 정보실 목차: 짧은 텍스트 목록 */}
      <section className="mx-auto mb-16 mt-16 max-w-6xl px-4 sm:px-8 md:mb-24 md:mt-20">
        <h2 className="text-xl font-bold text-hi">정보실에 더 있어요</h2>
        <ul className="mt-4 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {infoCategories.map((c) => (
            <li key={c.slug} className="border-b border-line">
              <Link href={`/info#${c.slug}`} className="flex min-h-14 items-center justify-between gap-3 py-3 pr-4 text-[15px] text-hi hover:text-signal">
                {c.title}
                <span className="num text-sm text-lo">{countOf(c.slug)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
