import type { Academy } from "@/data/academies";

/** 예시 데이터이거나 051-000-0000 같은 자리표시 번호면 전화 연결을 막는다 */
export function hasCallablePhone(a: Academy) {
  if (a.sample) return false;
  return !/-0{3,4}-0{4}$/.test(a.phone);
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}
