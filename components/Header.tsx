"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, isActive } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-band/95 backdrop-blur-none md:backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8 md:h-16">
        <Link href="/" className="press flex min-h-11 items-center gap-2.5" aria-label="체대입시 실기 기록판 홈">
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-signal text-on-signal">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M4 18h16M7 14V9M12 14V6M17 14v-3" />
            </svg>
          </span>
          <span className="text-[17px] font-extrabold tracking-tight text-hi">체대입시</span>
        </Link>

        <nav aria-label="주 메뉴" className="hidden items-center gap-1 md:flex">
          {NAV.filter((n) => n.href !== "/").map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                  active ? "bg-signal-dim text-signal" : "text-body hover:bg-raised hover:text-hi"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="press inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold text-hi md:hidden"
        >
          학원 등록
        </Link>
      </div>
    </header>
  );
}
