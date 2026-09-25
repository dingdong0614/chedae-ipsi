"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, isActive } from "@/lib/nav";
import { IconBook, IconChat, IconHome, IconPin } from "./Icons";

const ICONS = { "/": IconHome, "/info": IconBook, "/academies": IconPin, "/contact": IconChat } as const;

// 모바일 하단 탭: 핵심 동선 4개를 엄지 영역에 고정
export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="하단 탭"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-band md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid h-16 max-w-md grid-cols-4">
        {NAV.map((item) => {
          const Icon = ICONS[item.href];
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`press relative flex h-full flex-col items-center justify-center gap-1 text-[11px] font-semibold ${
                  active ? "text-signal" : "text-lo"
                }`}
              >
                {active && <span aria-hidden className="absolute top-0 h-0.5 w-8 rounded-full bg-signal" />}
                <Icon className="h-[22px] w-[22px]" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
