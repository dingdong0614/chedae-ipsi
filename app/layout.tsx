import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource/noto-serif-kr/900.css";
import "@fontsource-variable/jetbrains-mono";
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "체대입시 | 실기 기록판",
  description: "체대입시 실기 기준·입시요강·일정을 한 곳에 정리하고, 지역별 체대입시 학원을 찾아 바로 연결합니다.",
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:font-bold focus:text-on-signal"
        >
          본문 바로가기
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
