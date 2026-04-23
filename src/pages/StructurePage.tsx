// pages/StructurePage.tsx
import { motion } from "framer-motion";
import { content, type Lang } from "../content";
import { structureIcons } from "../constants";
import { RevealGroup, RevealItem } from "../components/Reveal";
import PageLayout from "../components/PageLayout";

export default function StructurePage({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <PageLayout title={c.structure.heading}>
      <RevealGroup>
        <div className="relative max-w-3xl mx-auto py-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[2.35rem] sm:left-[2.85rem] top-8 bottom-8 w-1 bg-white border-x border-logo-blue-text/20 rounded-full hidden sm:block z-0" />

          <div className="space-y-8 sm:space-y-12">
            {c.structure.items.map((item, i) => {
              const Icon = structureIcons[i % structureIcons.length];

              return (
                <RevealItem key={i}>
                  <div className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-8 group">
                    {/* Icon / Node */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[1.5rem] bg-white border-2 border-logo-blue-text shadow-sm flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300`}
                      >
                        <div
                          className={`absolute inset-2 sm:inset-2.5 rounded-xl bg-white flex items-center justify-center`}
                        >
                          <Icon
                            className={`w-8 h-8 sm:w-10 sm:h-10 text-ink group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className={`p-6 sm:p-8 rounded-3xl bg-white border-2 border-logo-blue-text shadow-sm relative overflow-hidden h-full group-hover:shadow-md transition-all duration-300`}
                      >
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none bg-black/5`}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-3xl font-heading font-900 text-stone/40">
                              {(i + 1).toString().padStart(2, "0")}
                            </span>
                            <h3
                              className={`text-sm font-bold uppercase tracking-widest text-ink`}
                            >
                              {item.label}
                            </h3>
                          </div>
                          <p className="text-xl sm:text-2xl font-heading font-600 text-ink leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </RevealGroup>
    </PageLayout>
  );
}
