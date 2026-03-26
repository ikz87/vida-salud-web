// pages/FounderPage.tsx
import { content, type Lang } from "../content";
import PageLayout from "../components/PageLayout";
import { RevealGroup, RevealItem } from "../components/Reveal";
import { Quote, User } from "lucide-react";

export default function FounderPage({ lang }: { lang: Lang }) {
  const c = content[lang];
  return (
    <PageLayout title={c.founder.heading}>
      <RevealGroup>
        <div className="space-y-16">
          <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <RevealItem className="w-full md:w-1/3 flex justify-center shrink-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-steel/20 rounded-full blur-2xl group-hover:bg-steel/30 transition-colors duration-700" />
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-steel-bg flex items-center justify-center">
                  <User className="w-24 h-24 text-steel" strokeWidth={1.5} />
                  {/* Future img tag:
                  <img src="/founder.jpg" alt="Founder" className="w-full h-full object-cover" />
                  */}
                </div>
              </div>
            </RevealItem>

            <div className="w-full md:w-2/3 space-y-6">
              {c.founder.description.split("\n\n").map((paragraph, i) => (
                <RevealItem key={i}>
                  <p className="text-xl text-ink leading-relaxed font-medium">
                    {paragraph}
                  </p>
                </RevealItem>
              ))}
            </div>
          </section>

          <RevealItem>
            <hr className="border-steel/10" />
          </RevealItem>

          <section className="space-y-8 relative">
            <RevealItem>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-steel-bg rounded-2xl text-steel">
                  <Quote size={24} fill="currentColor" className="opacity-40" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-800 text-ink tracking-tight">
                  {c.founder.messageHeading}
                </h2>
              </div>
            </RevealItem>

            <div className="grid gap-6 bg-steel-bg/30 p-8 sm:p-10 rounded-3xl border border-steel/10">
              {c.founder.message.split("\n\n").map((paragraph, i) => (
                <RevealItem key={i}>
                  <p className="text-lg text-ink-muted leading-relaxed">
                    {paragraph}
                  </p>
                </RevealItem>
              ))}
            </div>
          </section>
        </div>
      </RevealGroup>
    </PageLayout>
  );
}
