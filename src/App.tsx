// App.tsx
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { content, type Lang } from "./content";
import { motion, AnimatePresence } from "framer-motion";
import {
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
        className={`sticky text-logo-blue-text top-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${isGallery
          ? "bg-dark-section/80 border-white/10"
          : "bg-cream/80 border-stone/40"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-bold text-lg cursor-pointer"
          >
            <img
              src={isGallery ? "/images/live-well-decolorized.png" : "/images/live-well-original.png"}
              alt="LiveWell Logo"
              className="h-8 w-auto"
            />
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
                ? "border-white/20 bg-white/10  hover:bg-white/20"
                : "border-steel/30 bg-steel-bg hover:bg-mist-bg"
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
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 z-50 h-full w-80 shadow-2xl flex flex-col transition-colors duration-300 ${isGallery
                ? "bg-dark-section/95 backdrop-blur-xl border-l border-white/10"
                : "bg-cream/95 backdrop-blur-xl border-l border-stone/40"
                }`}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <span className="flex items-center">
                  <img
                    src={isGallery ? "/images/live-well-decolorized.png" : "/images/live-well-original.png"}
                    alt="LiveWell Logo"
                    className="h-6 w-auto"
                  />
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className={`p-2 rounded-full transition-colors ${isGallery
                    ? "hover:bg-white/10 text-white"
                    : "hover:bg-black/5 text-ink"
                    }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col px-4 py-6 gap-8 overflow-y-auto flex-1">
                {categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    className="flex flex-col gap-3"
                  >
                    <h3
                      className={`px-4 text-xs font-bold uppercase tracking-widest ${isGallery ? "text-white/40" : "text-ink-muted/60"
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
                          className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all ${isGallery
                            ? "text-white/80 hover:bg-white/10 hover:text-white"
                            : "text-ink hover:bg-sage/10 hover:text-ink-light"
                            }`}
                        >
                          {item.label}
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-all ${isGallery
                              ? "bg-white/0 group-hover:bg-white/40"
                              : "bg-sage/0 group-hover:bg-sage/40"
                              }`}
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                className={`p-6 border-t ${isGallery ? "border-white/5" : "border-stone/20"
                  }`}
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setLang(targetLang);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold border-2 transition-all cursor-pointer ${isGallery
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                    : "border-steel/30 bg-steel-bg text-ink hover:bg-mist-bg"
                    }`}
                >
                  {c.nav.toggle}
                  <img
                    src={flagUrls[targetLang]}
                    className="w-5 h-5 rounded-full object-cover shadow-sm"
                    alt="flag"
                  />
                </motion.button>
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
