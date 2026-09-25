export default function Loading() {
  return (
    <div aria-busy="true" aria-label="불러오는 중" className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="skel h-4 w-24" />
      <div className="skel mt-4 h-10 w-2/3 max-w-md" />
      <div className="skel mt-3 h-4 w-full max-w-lg" />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-[var(--radius)] border border-line bg-surface p-5">
            <div className="skel h-5 w-16" />
            <div className="skel mt-3 h-6 w-3/4" />
            <div className="skel mt-2 h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
