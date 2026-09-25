import type { ReactNode } from "react";
import Photo from "./Photo";
import type { PhotoKey } from "@/lib/photos";

/** 하위 페이지 상단. 사진이 있으면 낮은 사진 띠 위에 제목. */
export default function PageHead({
  title,
  photo,
  position,
  children,
}: {
  title: string;
  photo?: PhotoKey;
  position?: string;
  children?: ReactNode;
}) {
  if (!photo) {
    return (
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14">
          <h1 className="font-display text-[30px] font-black tracking-tight sm:text-5xl">{title}</h1>
          {children && <div className="mt-3 max-w-2xl text-[15px] text-body sm:text-base">{children}</div>}
        </div>
      </div>
    );
  }
  return (
    <div className="relative isolate overflow-hidden bg-[#15171a]">
      <Photo name={photo} priority position={position} className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/70 to-[#0b0c0e]/25" />
      <div className="mx-auto flex min-h-[220px] max-w-6xl flex-col justify-end px-4 pb-7 pt-16 sm:min-h-[300px] sm:px-8 sm:pb-10">
        <h1 className="font-display text-[32px] font-black tracking-tight text-white sm:text-5xl">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-[15px] text-[#e4e7eb] sm:text-base">{children}</div>}
      </div>
    </div>
  );
}
