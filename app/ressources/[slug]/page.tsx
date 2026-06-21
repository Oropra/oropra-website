import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import CtaFinal from "@/components/ui/CtaFinal";
import { articles, getArticle } from "@/content/articles";

type EyebrowColor = "bleu" | "vert" | "orange" | "purple";
const categoryColor: Record<string, EyebrowColor> = {
  Adoption: "vert",
  Management: "bleu",
  "Donnée": "bleu",
  "Relation client": "orange",
  "Delco IA": "purple",
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/ressources/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Oropra" },
    publisher: { "@type": "Organization", name: "Oropra" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article>
        <header className="article-head">
          <div className="container-tight">
            <Link href="/ressources" className="article-back">
              <ArrowLeft size={16} /> Toutes les ressources
            </Link>
            <Eyebrow color={categoryColor[article.category] ?? "bleu"}>
              {article.category}
            </Eyebrow>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <span>{article.dateLabel}</span>
              <span className="article-meta-dot">·</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                <Clock size={14} /> {article.readingTime} de lecture
              </span>
            </div>
          </div>
        </header>

        <div className="container-tight">
          <div className="article-body">
            {article.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items?.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>

      <CtaFinal
        title="Vous voulez voir One Data sur vos données ?"
        subtitle="On installe une démo en 48h avec vos marques, vos sites et un échantillon de vos données. Pas de démo générique."
      />
    </>
  );
}
