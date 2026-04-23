// pages/ArticlesPage.tsx
import { content, type Lang } from "../content";
import PageLayout from "../components/PageLayout";
import { RevealGroup, RevealItem } from "../components/Reveal";
import { ArrowRight, BookOpen } from "lucide-react";

export default function ArticlesPage({ lang }: { lang: Lang }) {
  const c = content[lang];

  // Placeholder data until content.ts is updated
  const placeholders = [1, 2, 3, 4];

  return (
    <PageLayout title={c.articles.heading}>
      <RevealGroup>
        <div className="mb-12">
          <RevealItem>
            <p className="text-xl text-ink leading-relaxed">
              {c.articles.text}
            </p>
          </RevealItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholders.map((idx) => (
            <RevealItem key={idx}>
              <article className="group flex flex-col h-full bg-white rounded-3xl border-2 border-logo-blue-text overflow-hidden hover:shadow-xl hover:shadow-steel/10 transition-all duration-500">
                <div className="aspect-video bg-white border-b-2 border-logo-blue-text relative overflow-hidden flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-ink group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-black/5 text-ink text-xs font-bold uppercase tracking-wider">
                      {lang === "es" ? "Educación" : "Education"}
                    </span>
                    <span className="text-sm text-ink/60 font-medium">
                      24 Mar 2026
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-ink mb-3 transition-colors duration-300">
                    {lang === "es" ? "Título del Artículo " : "Article Title "}
                    {idx}
                  </h3>
                  <p className="text-ink leading-relaxed flex-grow mb-6 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <button className="flex items-center gap-2 text-ink font-bold text-sm w-fit group/btn">
                    {lang === "es" ? "Leer más" : "Read more"}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </PageLayout>
  );
}
