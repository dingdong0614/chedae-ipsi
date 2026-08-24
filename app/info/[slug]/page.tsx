import Link from "next/link";
import { notFound } from "next/navigation";
import { infoArticles, infoCategories } from "@/data/info";
import SampleBadge from "@/components/SampleBadge";

export function generateStaticParams() {
  return infoArticles.map((a) => ({ slug: a.slug }));
}

export default async function InfoArticlePage(props: PageProps<"/info/[slug]">) {
  const { slug } = await props.params;
  const article = infoArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const category = infoCategories.find((c) => c.slug === article.categorySlug);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link href="/info" className="font-mono text-xs uppercase tracking-widest text-ink/50 hover:text-signal-ink">
        ← 정보실
      </Link>

      <div className="mt-6 flex items-center gap-3">
        {category && (
          <span className="font-mono text-xs text-signal-ink">
            {category.index} · {category.title}
          </span>
        )}
        {article.sample && <SampleBadge />}
      </div>

      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{article.title}</h1>
      <p className="mt-2 font-mono text-xs text-ink/40">UPDATED {article.updatedAt}</p>

      <div className="mt-10 space-y-5 border-t border-line pt-10 text-base leading-relaxed text-ink/85">
        {article.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
