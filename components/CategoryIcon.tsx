import { IconBook, IconCalendar, IconClipboard, IconLetters, IconStopwatch, IconUsers } from "./Icons";

const MAP: Record<string, typeof IconBook> = {
  "practical-test": IconStopwatch,
  "admission-guide": IconClipboard,
  schedule: IconCalendar,
  terms: IconLetters,
  community: IconUsers,
};

export default function CategoryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = MAP[slug] ?? IconBook;
  return <Icon className={className} />;
}
