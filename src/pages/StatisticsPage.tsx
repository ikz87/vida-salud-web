// pages/StatisticsPage.tsx
import { motion } from "framer-motion";
import { content, type Lang } from "../content";
import { statisticsYears } from "../constants";
import PageLayout from "../components/PageLayout";
import { RevealGroup, RevealItem } from "../components/Reveal";

interface BarChartProps {
  title: string;
  data: { year: number; value: number }[];
  barClass: string;
  borderClass: string;
}

function BarChart({ title, data, barClass, borderClass }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="rounded-3xl bg-white border-2 border-logo-blue-text shadow-sm p-6 sm:p-8 h-full flex flex-col">
      <div className="mb-8">
        <h3 className="font-heading font-700 text-xl text-ink">{title}</h3>
      </div>

      <div className="flex items-end justify-between gap-3 sm:gap-6 h-52 sm:h-64">
        {data.map((d, i) => (
          <div key={d.year} className="flex-1 h-full flex flex-col items-center gap-2">
            <span className="font-heading font-800 text-ink text-base sm:text-lg">
              {d.value}
            </span>
            <div className="flex-1 w-full flex items-end justify-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(d.value / max) * 100}%` }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`w-full max-w-[3.5rem] rounded-t-2xl border-2 border-b-0 ${barClass} ${borderClass}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t-2 border-logo-blue-text/15 flex justify-between gap-3 sm:gap-6">
        {data.map((d) => (
          <div key={d.year} className="flex-1 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-ink-muted">
              {d.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StatisticsPage({ lang }: { lang: Lang }) {
  const c = content[lang];

  const childrenData = statisticsYears.map((d) => ({
    year: d.year,
    value: d.children,
  }));
  const volunteersData = statisticsYears.map((d) => ({
    year: d.year,
    value: d.volunteers,
  }));

  return (
    <PageLayout title={c.statistics.heading}>
      <RevealGroup>
        <div className="mb-12">
          <RevealItem>
            <p className="text-lg sm:text-xl text-ink leading-relaxed text-center max-w-2xl mx-auto">
              {c.statistics.intro}
            </p>
          </RevealItem>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <RevealItem>
            <BarChart
              title={c.statistics.chartChildrenTitle}
              data={childrenData}
              barClass="bg-sage"
              borderClass="border-sage"
            />
          </RevealItem>
          <RevealItem>
            <BarChart
              title={c.statistics.chartVolunteersTitle}
              data={volunteersData}
              barClass="bg-steel"
              borderClass="border-steel"
            />
          </RevealItem>
        </div>
      </RevealGroup>
    </PageLayout>
  );
}
