// pages/StatisticsPage.tsx
import { content, type Lang } from "../content";
import PageLayout from "../components/PageLayout";
import { RevealGroup, RevealItem } from "../components/Reveal";
import { BarChart3, TrendingUp, Users, Heart } from "lucide-react";

export default function StatisticsPage({ lang }: { lang: Lang }) {
  const c = content[lang];

  // Assuming c.statistics.text is a placeholder, we'll create a nice grid
  const stats = [
    { icon: Users, value: "+5,000", label: lang === "es" ? "Ejemplo" : "Example" },
    { icon: Heart, value: "100%", label: lang === "es" ? "Ejemplo" : "Example" },
    { icon: TrendingUp, value: "45", label: lang === "es" ? "Ejemplo" : "Example" },
    { icon: BarChart3, value: "12", label: lang === "es" ? "Ejemplo" : "Example" },
  ];

  return (
    <PageLayout title={c.statistics.heading}>
      <RevealGroup>
        <div className="mb-12">
          <RevealItem>
            <p className="text-xl text-ink-muted leading-relaxed text-center max-w-2xl mx-auto">
              {c.statistics.text}
            </p>
          </RevealItem>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <RevealItem key={i}>
                <div className="group p-8 rounded-3xl bg-white border border-steel/20 shadow-lg shadow-steel/5 hover:bg-steel hover:border-steel transition-colors duration-500 flex flex-col items-center justify-center text-center gap-4 h-full">
                  <div className="p-4 bg-steel-bg rounded-full text-steel group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="font-heading font-900 text-5xl text-ink group-hover:text-white transition-colors duration-500 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-steel font-bold uppercase tracking-widest text-sm group-hover:text-steel-bg transition-colors duration-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </RevealGroup>
    </PageLayout>
  );
}
