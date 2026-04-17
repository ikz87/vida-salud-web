// pages/HomePage.tsx
import { motion, AnimatePresence } from "framer-motion";

import { content, type Lang } from "../content";
import { langSwap } from "../constants";
import { RevealGroup, RevealItem } from "../components/Reveal";

interface HomePageProps {
  lang: Lang;
}

export default function HomePage({ lang }: HomePageProps) {
  const c = content[lang];

  return (
    <motion.main
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sage/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-steel/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <RevealGroup>
          <RevealItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <div className="inline-block p-4 backdrop-blur-sm">
                <img
                  src="/images/live-well-original.png"
                  alt="LiveWell Logo"
                  className="w-full mx-auto "
                />
              </div>
            </motion.div>
          </RevealItem>
        </RevealGroup>
      </div>
    </motion.main>
  );
}
