import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 체대입시",
};

const SECTIONS = [
  {
    title: "1. 수집하는 개인정보 항목 및 방법",
    body: "문의 폼 이용 시 이름, 연락처(전화 또는 이메일), 문의 내용을 수집합니다. 정보주체가 직접 입력하는 방식으로만 수집합니다.",
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: "체대입시 학원 상담 연결 및 학원 등록 문의 응대 목적으로만 이용합니다.",
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: "문의 내용은 문의 처리 완료 후 1년간 보관한 뒤 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.",
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: "이용자가 상담을 요청한 학원에 한해, 상담 연결을 위해 필요한 최소한의 정보(이름, 연락처, 문의 내용)를 제공할 수 있습니다. 그 외에는 원칙적으로 제3자에게 제공하지 않습니다.",
  },
  {
    title: "5. 개인정보 처리 위탁 및 국외 이전",
    body: [
      "원활한 문의 접수와 홈페이지 운영을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있으며, 이 과정에서 개인정보가 국외로 이전됩니다.",
      "",
      "[1] Web3Creative(Web3Forms 운영사, 인도) / 서버: Amazon Web Services, Cloudflare, Hetzner",
      "· 위탁 업무: 문의 폼 데이터 전달 및 알림 메일 발송",
      "· 이전 항목: 이름, 연락처(전화 또는 이메일), 문의 유형, 문의 내용",
      "· 이전 시기·방법: 문의 제출 시 네트워크를 통해 전송",
      "· 보유 기간: Web3Forms 방침상 제출일부터 최대 3년 보관 후 자동 삭제되며, 운영자는 문의 처리 완료 후 1년이 지나면 삭제를 요청하거나 직접 삭제합니다.",
      "",
      "[2] Vercel Inc.(미국)",
      "· 위탁 업무: 웹사이트 호스팅",
      "· 이전 항목: 접속 IP 등 접속 기록",
      "· 이전 시기·방법: 홈페이지 접속 시 네트워크를 통해 전송",
      "· 보유 기간: 위탁 계약 종료 시까지",
      "",
      "개인정보의 국외 이전을 원하지 않으시면 온라인 문의 대신 아래 개인정보 보호책임자 연락처로 전화해 문의하실 수 있습니다.",
    ].join("\n"),
  },
  {
    title: "6. 개인정보의 파기 절차 및 방법",
    body: "보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 전자적 파일 형태의 경우 복구할 수 없는 방법으로 영구 삭제합니다.",
  },
  {
    title: "7. 정보주체의 권리와 행사 방법",
    body: "이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 아래 개인정보 보호책임자에게 연락하시면 지체 없이 조치합니다.",
  },
  {
    title: "8. 개인정보 보호책임자",
    body: "이름: 이현우\n연락처: ceo@doion.co.kr / 010-9786-2433",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHead title="개인정보처리방침">
        <span className="text-sm text-lo">공고일 2026년 9월 26일 · 시행일 2026년 10월 3일</span>
      </PageHead>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="divide-y divide-line border-y border-line">
          {SECTIONS.map((s) => (
            <section key={s.title} className="py-6">
              <h2 className="text-base font-bold">{s.title}</h2>
              <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-body">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 border-t border-line pt-6 text-[13px] text-lo">
          이전 방침: 2026년 8월 24일 시행
          <br />
          ※ 본 문서는 법률 자문이 아니며, 실제 게시 전 관련 법률 전문가의 검토를 권장합니다.
        </p>
      </div>
    </>
  );
}
