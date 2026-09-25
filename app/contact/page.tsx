import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "문의 | 체대입시",
  description: "체대입시 학원 상담 문의 및 학원 등록 문의.",
};

function FormSkeleton() {
  return (
    <div aria-hidden className="space-y-6">
      <div className="grid grid-cols-2 gap-2">
        <div className="skel h-12" />
        <div className="skel h-12" />
      </div>
      {[0, 1].map((i) => (
        <div key={i}>
          <div className="skel h-4 w-20" />
          <div className="skel mt-2 h-12" />
        </div>
      ))}
      <div className="skel h-36" />
      <div className="skel h-13 w-48 rounded-full" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHead title="문의" photo="timer" position="50% 50%">
        학원 상담 연결, 학원 등록, 틀린 정보 제보 모두 여기로 받아요.
      </PageHead>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-8 sm:px-8 md:grid-cols-[1fr_300px] md:py-12">
        <div className="max-w-2xl">
          <Suspense fallback={<FormSkeleton />}>
            <ContactForm />
          </Suspense>
        </div>

        <aside className="text-sm md:pt-8">
          <dl className="divide-y divide-line border-y border-line">
            <div className="py-4">
              <dt className="font-bold text-hi">학원 상담 연결</dt>
              <dd className="mt-1 text-lo">희망 지역이랑 준비 종목을 적어 주면 맞는 학원과 이어 드려요.</dd>
            </div>
            <div className="py-4">
              <dt className="font-bold text-hi">학원 등록 · 정보 수정</dt>
              <dd className="mt-1 text-lo">목록에 없거나 번호, 주소가 바뀐 학원은 학원 이름과 함께 알려 주세요.</dd>
            </div>
          </dl>
          <p className="pt-4 text-xs leading-relaxed text-lo">
            보내주신 정보는 문의 응대에만 쓰고, 자세한 내용은{" "}
            <Link href="/privacy" className="font-semibold text-body underline underline-offset-2 hover:text-hi">
              개인정보처리방침
            </Link>
            에 있어요.
          </p>
        </aside>
      </div>
    </>
  );
}
