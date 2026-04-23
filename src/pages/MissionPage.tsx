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
                <div className="inline-flex p-4 rounded-2xl bg-white border-2 border-logo-blue-text">
                  <Heart className="w-8 h-8 text-ink" />
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
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-black/20 hidden sm:block" />

              <div className="space-y-10">
                {paragraphs.slice(1).map((paragraph, i) => {
                  const Icon =
                    sectionIcons[(i + 1) % sectionIcons.length];
                  const color = {
                    ring: "ring-black/5",
                    bg: "bg-white",
                    text: "text-ink",
                    border: "border-2 border-logo-blue-text",
                  };

                  return (
                    <RevealItem key={i}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex gap-5 sm:gap-8 items-start"
                      >
                        {/* Number badge */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${color.bg} ${color.border} flex items-center justify-center relative z-10`}
                        >
                          <Icon
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${color.text}`}
                          />
                        </div>
                        <div className="pt-1 sm:pt-3">
                          <p className="text-lg text-ink leading-relaxed">
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
