"use client";

import { useSyncExternalStore } from "react";
import { todayKST } from "./date";

const noop = () => () => {};

/** 서버 렌더에서는 null(스켈레톤), 브라우저에서는 오늘 날짜(KST). 빌드 시점 날짜가 굳지 않게 한다. */
export function useToday(): string | null {
  return useSyncExternalStore(noop, todayKST, () => null);
}
