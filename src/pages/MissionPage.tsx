// pages/MissionPage.tsx
import { content, type Lang } from "../content";
import PageLayout from "../components/PageLayout";
import { RevealGroup, RevealItem } from "../components/Reveal";
import { motion } from "framer-motion";
import { Heart, Compass, Sparkles, Target } from "lucide-react";

const sectionIcons = [Heart, Compass, Sparkles, Target];

export default function MissionPage({ lang }: { lang: Lang }) {
  const c = content[lang];
  const paragraphs = c.mission.text.split("\n\n");

  return (
    <PageLayout title={c.mission.heading}>
      <RevealGroup>
        <div className="space-y-14">
          {/* Lead section — full width, centered */}
          {paragraphs.length > 0 && (
            <RevealItem>
              <div className="text-center space-y-6">
                <div className="inline-flex p-4 rounded-2xl bg-sage-bg/60 border border-sage/10">
                  <Heart className="w-8 h-8 text-sage" />
                </div>
                <p className=" text-left text-xl sm:text-2xl text-ink leading-relaxed font-medium max-w-2xl mx-auto">
                  {paragraphs[0]}
                </p>
              </div>
            </RevealItem>
          )}

          {/* Middle paragraphs — numbered timeline style */}
          {paragraphs.length > 1 && (
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-stone/20 hidden sm:block" />

              <div className="space-y-10">
                {paragraphs.slice(1).map((paragraph, i) => {
                  const Icon =
                    sectionIcons[(i + 1) % sectionIcons.length];
                  const colors = [
                    {
                      ring: "ring-sage/20",
                      bg: "bg-sage-bg",
                      text: "text-sage",
                    },
                    {
                      ring: "ring-steel/20",
                      bg: "bg-steel-bg",
                      text: "text-steel",
                    },
                    {
                      ring: "ring-pastel-mint/20",
                      bg: "bg-pastel-mint-bg",
                      text: "text-pastel-mint",
                    },
                    {
                      ring: "ring-pastel-amber/20",
                      bg: "bg-pastel-amber-bg",
                      text: "text-pastel-amber",
                    },
                  ];
                  const color = colors[i % colors.length];

                  return (
                    <RevealItem key={i}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex gap-5 sm:gap-8 items-start"
                      >
                        {/* Number badge */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${color.bg} ring-2 ${color.ring} flex items-center justify-center relative z-10`}
                        >
                          <Icon
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${color.text}`}
                          />
                        </div>
                        <div className="pt-1 sm:pt-3">
                          <p className="text-lg text-ink-muted leading-relaxed">
                            {paragraph}
                          </p>
                        </div>
                      </motion.div>
                    </RevealItem>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </RevealGroup>
    </PageLayout>
  );
}
