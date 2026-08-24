"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "YOUR-WEB3FORMS-ACCESS-KEY";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const academyPrefill = searchParams.get("academy") ?? "";
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-paper p-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-signal-ink">Sent</p>
        <p className="mt-3 text-lg font-black">문의가 접수되었습니다.</p>
        <p className="mt-2 text-sm text-ink/60">빠른 시일 내에 확인 후 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-ink/50">
          이름
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 outline-none focus:border-ink"
        />
      </div>
      <div>
        <label htmlFor="contact" className="font-mono text-xs uppercase tracking-widest text-ink/50">
          연락처 (전화 또는 이메일)
        </label>
        <input
          id="contact"
          name="contact"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 outline-none focus:border-ink"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-ink/50">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={academyPrefill ? `[${academyPrefill}] 관련 상담 문의드립니다.\n\n` : undefined}
          className="mt-2 w-full border border-line bg-paper px-4 py-3 outline-none focus:border-ink"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-signal px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "전송 중..." : "문의 보내기"}
      </button>
      {status === "error" && (
        <p className="font-mono text-xs text-alert">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
      )}
    </form>
  );
}
