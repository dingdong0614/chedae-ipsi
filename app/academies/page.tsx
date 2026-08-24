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

      <div className="mt-10">
        <AcademyDirectory academies={academies} regions={regions} />
      </div>
    </div>
  );
}
