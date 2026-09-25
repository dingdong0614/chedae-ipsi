import { PHOTOS, unsplash, type PhotoKey } from "@/lib/photos";

const WIDTHS = [640, 1080, 1600, 2200];

/** Unsplash 사진. next/image 대신 일반 img(외부 최적화 서버 경유 없음), 크기는 CSS로 고정해 CLS 방지 */
export default function Photo({
  name,
  className = "",
  sizes = "100vw",
  priority = false,
  alt,
  position = "center",
}: {
  name: PhotoKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
  position?: string;
}) {
  const p = PHOTOS[name];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={unsplash(p.id, 1600)}
      srcSet={WIDTHS.map((w) => `${unsplash(p.id, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt ?? p.alt}
      width={1600}
      height={1067}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
