// App.tsx
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { content, type Lang } from "./content";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Menu,
  X,
} from "lucide-react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import FounderPage from "./pages/FounderPage";
import MissionPage from "./pages/MissionPage";
import VolunteersPage from "./pages/VolunteersPage";
import StatisticsPage from "./pages/StatisticsPage";
import TestimoniesPage from "./pages/TestimoniesPage";
import StructurePage from "./pages/StructurePage";
import SessionsPage from "./pages/SessionsPage";
import ArticlesPage from "./pages/ArticlesPage";
import EventsPage from "./pages/EventsPage";
import ScrollToTop from "./components/ScrollToTop";
import Dropdown from "./components/Dropdown";
import { flagUrls } from "./constants";

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "es" ? "es" : "en";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const c = content[lang];

  const isGallery = location.pathname === "/gallery";
  const targetLang = lang === "en" ? "es" : "en";

  const categories = c.nav.categories;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isGallery ? "bg-dark-section" : "bg-cream"
        }`}
    >
      <ScrollToTop />

      {/* ───── NAVBAR ───── */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${isGallery
          ? "bg-dark-section/80 border-white/10"
          : "bg-cream/80 border-stone/40"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-bold text-lg cursor-pointer"
          >
            <Leaf
              className={`w-6 h-6 ${isGallery ? "text-sage-light" : "text-sage"
                }`}
            />
            <span className={isGallery ? "text-white" : "text-ink"}>
              LiveWell
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat, i) => (
              <Dropdown
                key={i}
                title={cat.title}
                items={cat.items}
                isGallery={isGallery}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(targetLang)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${isGallery
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-steel/30 bg-steel-bg text-ink hover:bg-mist-bg"
                }`}
            >
              {c.nav.toggle}
              <img
                src={flagUrls[targetLang]}
                className="w-4 h-4 rounded-full object-cover"
                alt="flag"
              />
            </motion.button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 cursor-pointer"
            >
              <Menu className={isGallery ? "text-white" : "text-ink"} />
            </button>
          </div>
        </div>
      </nav>

      {/* ───── MOBILE SIDEBAR ───── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className={`fixed top-0 right-0 z-50 h-full w-72 shadow-2xl flex flex-col transition-colors duration-300 ${isGallery
                ? "bg-dark-section border-l border-white/10"
                : "bg-cream border-l border-stone/40"
                }`}
            >
              <div className="flex items-center justify-between px-5 h-16">
                <span
                  className={`font-heading font-bold flex items-center gap-2 ${isGallery ? "text-white" : "text-ink"
                    }`}
                >
                  <Leaf className="w-5 h-5" /> LiveWell
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <X className={isGallery ? "text-white" : "text-ink"} />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-6 overflow-y-auto">
                {categories.map((cat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h3
                      className={`px-4 text-xs font-bold uppercase tracking-widest ${isGallery ? "text-white/40" : "text-ink-muted/50"
                        }`}
                    >
                      {cat.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {cat.items.map((item, j) => (
                        <Link
                          key={j}
                          to={item.to}
                          onClick={() => setMenuOpen(false)}
                          className={`px-4 py-3 rounded-xl font-medium text-sm transition-colors ${isGallery
                            ? "text-white/80 hover:bg-white/10"
                            : "text-ink hover:bg-sage-bg/50"
                            }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/gallery" element={<GalleryPage lang={lang} />} />
          <Route path="/founder" element={<FounderPage lang={lang} />} />
          <Route path="/mission" element={<MissionPage lang={lang} />} />
          <Route path="/volunteers" element={<VolunteersPage lang={lang} />} />
          <Route path="/statistics" element={<StatisticsPage lang={lang} />} />
          <Route path="/testimonies" element={<TestimoniesPage lang={lang} />} />
          <Route path="/structure" element={<StructurePage lang={lang} />} />
          <Route path="/sessions" element={<SessionsPage lang={lang} />} />
          <Route path="/articles" element={<ArticlesPage lang={lang} />} />
          <Route path="/events" element={<EventsPage lang={lang} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
