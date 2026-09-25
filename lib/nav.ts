export const NAV = [
  { href: "/", label: "홈" },
  { href: "/info", label: "정보실" },
  { href: "/academies", label: "학원찾기" },
  { href: "/contact", label: "문의" },
] as const;

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
