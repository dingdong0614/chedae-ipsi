import type { Metadata } from "next";
import { academies } from "@/data/academies";
import { regions } from "@/data/regions";
import AcademyDirectory from "@/components/AcademyDirectory";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "학원찾기 | 체대입시",
  description: "지역별 체대입시 학원을 찾아 바로 연결합니다.",
};

export default function AcademiesPage() {
  return (
    <>
      <PageHead title="학원찾기" photo="stadium" position="50% 60%">
        서울부터 광주까지 {academies.length}곳. 지역을 누르면 그 동네만 남아요.
      </PageHead>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 md:py-12">
        <AcademyDirectory academies={academies} regions={regions} />
        <p className="mt-10 text-[13px] leading-relaxed text-lo">
          온라인에 공개된 정보를 조사해 정리한 목록입니다. 학원이 직접 등록한 정보가 아니므로 상담 전 전화로 최신 정보를 확인해주세요.
        </p>
      </div>
    </>
  );
}
