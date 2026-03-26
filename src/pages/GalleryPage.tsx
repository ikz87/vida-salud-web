import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { content, type Lang } from "../content";
import { driveManifest, type MediaEntry } from "../data/manifest";
import { RevealGroup, RevealItem } from "../components/Reveal";

export default function GalleryPage({ lang }: { lang: Lang }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const c = content[lang].gallery;

  const categories = useMemo(() => {
    return Object.entries(driveManifest.galeria);
  }, []);

  const [activeTab, setActiveTab] = useState(() => categories[0]?.[0] ?? "");

  const activeEntries: MediaEntry[] = useMemo(() => {
    return driveManifest.galeria[activeTab] ?? [];
  }, [activeTab]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <motion.main
      key="gallery"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-16 pb-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-heading font-bold text-white mb-2">
            {c.title}
          </h1>
          <p className="text-mist text-lg">{c.subtitle}</p>
        </div>

        {/* Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(([name]) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === name
                    ? "bg-white text-forest"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}

        {/* Media Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <RevealGroup className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {activeEntries.map((entry, i) => (
                <RevealItem key={i} className="break-inside-avoid">
                  {entry.type === "image" ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(entry.path)}
                      className="relative group overflow-hidden rounded-2xl bg-white/5 border border-sage/20 cursor-pointer"
                    >
                      <img
                        src={entry.path}
                        alt={entry.name}
                        className="w-full h-auto object-cover transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white text-sm font-medium">
                          LiveWell
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-sage/20">
                      <div className="aspect-video">
                        <iframe
                          src={entry.embedUrl}
                          title={entry.name}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </RevealItem>
              ))}
            </RevealGroup>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110] cursor-pointer"
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
