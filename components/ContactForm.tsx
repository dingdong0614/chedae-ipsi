"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

// Web3Forms 액세스 키는 브라우저에 노출되도록 설계된 공개 키다(비밀값 아님).
// 값은 .env.local / Vercel 환경변수 NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY 로 넣는다.
const PLACEHOLDER_KEY = "YOUR-WEB3FORMS-ACCESS-KEY";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || PLACEHOLDER_KEY;
const FORM_READY = WEB3FORMS_ACCESS_KEY !== PLACEHOLDER_KEY;
const FALLBACK_EMAIL = "ceo@doion.co.kr";

type Status = "idle" | "sending" | "sent" | "error" | "not-ready";
type InquiryType = "consult" | "register";
type Errors = Partial<Record<"name" | "contact" | "message" | "consent", string>>;

const TYPE_LABEL: Record<InquiryType, string> = {
  consult: "학원 상담 연결",
  register: "우리 학원 등록",
};

const PHONE = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(fd: FormData): Errors {
  const errors: Errors = {};
  const name = String(fd.get("name") ?? "").trim();
  const contact = String(fd.get("contact") ?? "").trim().replace(/\s/g, "");
  const message = String(fd.get("message") ?? "").trim();
  if (!name) errors.name = "이름을 적어주세요.";
  else if (name.length > 30) errors.name = "이름은 30자 이내로 적어주세요.";
  if (!contact) errors.contact = "답변받을 전화번호나 이메일을 적어주세요.";
  else if (!PHONE.test(contact) && !EMAIL.test(contact))
    errors.contact = "010-1234-5678 또는 name@example.com 형식으로 적어주세요.";
  if (message.length < 10) errors.message = "문의 내용을 10자 이상 적어주세요.";
  else if (message.length > 2000) errors.message = "2000자 이내로 줄여주세요.";
  if (!fd.get("consent")) errors.consent = "개인정보 수집·이용에 동의해야 보낼 수 있어요.";
  return errors;
}

const inputCls =
  "mt-2 block w-full rounded-xl border bg-surface px-4 text-base text-hi placeholder:text-lo focus:border-signal focus:outline-none aria-[invalid=true]:border-alert";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const academyPrefill = searchParams.get("academy") ?? "";
  const [type, setType] = useState<InquiryType>(searchParams.get("type") === "register" ? "register" : "consult");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState("");
  const lastSent = useRef(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // honeypot: 사람에게는 안 보이는 칸이 채워졌으면 조용히 성공 처리
    if (formData.get("botcheck")) {
      setStatus("sent");
      return;
    }

    setDraft(String(formData.get("message") ?? ""));
    if (!FORM_READY) {
      setStatus("not-ready");
      return;
    }

    // 연속 전송 방지(30초)
    if (Date.now() - lastSent.current < 30_000) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    formData.delete("consent");
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `[체대입시] ${TYPE_LABEL[type]} 문의`);
    formData.set("type", TYPE_LABEL[type]);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        lastSent.current = Date.now();
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
      <div role="status" className="rounded-[var(--radius)] border border-line bg-surface p-8 sm:p-10">
        <p className="text-xl font-bold text-hi">문의가 접수됐어요</p>
        <p className="mt-2 text-sm text-body">남겨주신 연락처로 확인 후 연락드릴게요.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/academies" className="press inline-flex min-h-11 items-center rounded-full bg-signal px-5 text-sm font-bold text-on-signal">
            학원 더 둘러보기
          </Link>
          <Link href="/info" className="press inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold text-hi">
            정보실로
          </Link>
        </div>
      </div>
    );
  }

  const mailHref = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(`[체대입시] ${TYPE_LABEL[type]} 문의`)}&body=${encodeURIComponent(draft)}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <fieldset>
        <legend className="text-sm font-semibold text-hi">어떤 문의인가요?</legend>
        <div role="radiogroup" className="mt-2 grid grid-cols-2 gap-2">
          {(Object.keys(TYPE_LABEL) as InquiryType[]).map((t) => (
            <button
              key={t}
              type="button"
              role="radio"
              aria-checked={type === t}
              onClick={() => setType(t)}
              className={`press min-h-12 rounded-xl border px-3 text-[15px] font-semibold transition-colors ${
                type === t ? "border-signal bg-signal-dim text-signal" : "border-line-strong text-body hover:text-hi"
              }`}
            >
              {TYPE_LABEL[t]}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-hi">
          이름
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          maxLength={30}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
          className={`${inputCls} h-12 border-line-strong`}
        />
        {errors.name && (
          <p id="name-err" className="mt-1.5 text-sm text-alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="text-sm font-semibold text-hi">
          연락처 <span className="font-normal text-lo">(전화 또는 이메일)</span>
        </label>
        <input
          id="contact"
          name="contact"
          autoComplete="tel"
          inputMode="email"
          placeholder="010-1234-5678"
          maxLength={80}
          aria-invalid={!!errors.contact}
          aria-describedby={errors.contact ? "contact-err" : undefined}
          className={`${inputCls} h-12 border-line-strong`}
        />
        {errors.contact && (
          <p id="contact-err" className="mt-1.5 text-sm text-alert">
            {errors.contact}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-hi">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : "message-hint"}
          placeholder={
            type === "register"
              ? "학원 이름, 지역, 준비 종목, 연락 가능한 시간을 적어주세요."
              : "희망 지역, 준비 중인 종목, 궁금한 점을 적어주세요."
          }
          defaultValue={academyPrefill ? `[${academyPrefill}] 관련 상담 문의드립니다.\n\n` : undefined}
          className={`${inputCls} border-line-strong py-3 leading-relaxed`}
        />
        {errors.message ? (
          <p id="message-err" className="mt-1.5 text-sm text-alert">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-[13px] text-lo">
            10자 이상 적어주세요.
          </p>
        )}
      </div>

      {/* honeypot: 화면·스크린리더에서 숨김 */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          이 칸은 비워두세요
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-body">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-err" : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--signal)]"
          />
          <span>
            문의 응대를 위한 개인정보(이름, 연락처, 문의 내용) 수집·이용에 동의합니다. 문의 처리 완료 후 1년간
            보관하며, 문의 접수·호스팅을 위해 Web3Forms(인도)·Vercel(미국)로 국외 이전됩니다.{" "}
            <Link href="/privacy" className="font-semibold text-hi underline underline-offset-2">
              자세히
            </Link>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-err" className="mt-1 text-sm text-alert">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="press flex min-h-13 w-full items-center justify-center rounded-full bg-signal px-8 py-3.5 text-base font-bold text-on-signal disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "보내는 중..." : type === "register" ? "학원 등록 문의 보내기" : "상담 문의 보내기"}
      </button>

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-alert/40 bg-alert/10 p-4 text-sm">
          <p className="font-semibold text-hi">전송하지 못했어요</p>
          <p className="mt-1 text-body">
            잠시 후 다시 시도하거나,{" "}
            <a href={mailHref} className="font-semibold text-hi underline underline-offset-2">
              이메일로 보내주세요
            </a>
            .
          </p>
        </div>
      )}
      {status === "not-ready" && (
        <div role="alert" className="rounded-xl border border-line-strong bg-surface p-4 text-sm">
          <p className="font-semibold text-hi">온라인 접수를 준비 중이에요</p>
          <p className="mt-1 text-body">
            작성하신 내용을 그대로{" "}
            <a href={mailHref} className="font-semibold text-signal underline underline-offset-2">
              이메일로 보내기
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
