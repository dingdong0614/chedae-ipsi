import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "문의 | 체대입시",
  description: "체대입시 학원 상담 문의 및 학원 등록 문의.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">Contact</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">문의</h1>
      <p className="mt-3 text-ink/70">
        학원 상담이 필요하거나, 우리 학원을 등록하고 싶다면 아래 양식으로 문의해주세요.
      </p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>

      <p className="mt-8 font-mono text-[11px] text-ink/40">
        보내주신 정보는 문의 응대 목적으로만 사용되며, 자세한 내용은{" "}
        <Link href="/privacy" className="underline hover:text-signal-ink">
          개인정보처리방침
        </Link>
        을 확인해주세요.
      </p>
    </div>
  );
}
