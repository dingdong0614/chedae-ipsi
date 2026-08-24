import Link from "next/link";

const NAV = [
  { href: "/info", label: "정보실" },
  { href: "/academies", label: "학원찾기" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-signal">CHE-DAE</span>
          <span className="text-lg font-black tracking-tight">체대입시</span>
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-paper/80 transition hover:text-signal">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-px w-full bg-paper/10" />
    </header>
  );
}
