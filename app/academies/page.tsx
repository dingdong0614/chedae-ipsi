import type { Metadata } from "next";
import { academies } from "@/data/academies";
import { regions } from "@/data/regions";
import AcademyDirectory from "@/components/AcademyDirectory";

export const metadata: Metadata = {
  title: "학원찾기 | 체대입시",
  description: "지역별 체대입시 학원을 찾아 바로 연결합니다.",
};

export default function AcademiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">Academies</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">학원찾기</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        지역을 선택해 체대입시 학원을 찾아보세요. 준비 중인 종목이 맞는지 확인 후 바로 연락할 수 있습니다.
      </p>
      <p className="mt-2 max-w-xl font-mono text-[11px] text-ink/40">
        온라인에 공개된 정보를 조사해 정리한 목록입니다. 학원이 직접 등록한 정보가 아니므로 상담 전 전화로 최신 정보를 확인해주세요.
      </p>

      <div className="mt-10">
        <AcademyDirectory academies={academies} regions={regions} />
      </div>
    </div>
  );
}
