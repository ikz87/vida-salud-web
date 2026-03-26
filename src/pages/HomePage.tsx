// pages/HomePage.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
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
      className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sage/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-steel/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <RevealGroup>
          <RevealItem>
            <h1 className="font-heading font-900 text-7xl sm:text-9xl lg:text-[10rem] text-ink tracking-tighter leading-none mb-4">
              {c.hero.title}
            </h1>
            {c.hero.subtitle && (
              <p className="font-heading font-500 text-3xl sm:text-4xl lg:text-5xl text-steel tracking-tight">
                {c.hero.subtitle}
              </p>
            )}
          </RevealItem>


          <RevealItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <div className="inline-block p-4 rounded-3xl bg-sage/10 border border-sage/20 backdrop-blur-sm">
                <Leaf className="w-12 h-12 text-sage animate-pulse" />
              </div>
            </motion.div>
          </RevealItem>
        </RevealGroup>
      </div>
    </motion.main>
  );
}
