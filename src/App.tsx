import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { content, type Lang } from "./content";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Leaf,
  Menu,
  X,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ScrollToTop from "./components/ScrollToTop";
import { flagUrls } from "./constants";

function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const c = content[lang];

  const isGallery = location.pathname === "/gallery";
  const targetLang = lang === "en" ? "es" : "en";

  const navLinks = isGallery
    ? [{ label: "Home", to: "/", icon: ArrowLeft }]
    : [
      { href: "#mission", label: c.nav.mission },
      { href: "#structure", label: c.nav.structure },
      { href: "#sessions", label: c.nav.sessions },
      { to: "/gallery", label: "Gallery", icon: ImageIcon },
    ];

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
          : "bg-cream/80 border-gray-200/60"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-bold text-lg cursor-pointer"
          >
            <Leaf
              className={`w-6 h-6 ${isGallery ? "text-white" : "text-pastel-green"}`}
            />
            <span className={isGallery ? "text-white" : "text-ink"}>LiveWell</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link, i) => {
              const baseClass = `flex items-center gap-2 transition-colors cursor-pointer ${isGallery
                ? "text-white/70 hover:text-white"
                : "text-ink-muted hover:text-ink"
                }`;

              if ('to' in link) {
                return (
                  <Link key={i} to={link.to as string} className={baseClass}>
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                );
              }
              return (
                <a key={i} href={link.href} className={baseClass}>
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(targetLang)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${isGallery
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-pastel-lavender bg-pastel-lavender-bg text-ink hover:bg-pastel-lavender/30"
                }`}
            >
              <img
                src={flagUrls[targetLang]}
                className="w-4 h-4 rounded-full object-cover"
                alt="flag"
              />
              {c.nav.toggle}
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
                : "bg-cream border-l border-gray-200/60"
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
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link, i) => {
                  const baseClass = `p-4 rounded-xl font-medium flex items-center gap-3 ${isGallery
                    ? "text-white/80 hover:bg-white/10"
                    : "text-ink-muted hover:bg-black/5"
                    }`;

                  if ('to' in link) {
                    return (
                      <Link
                        key={i}
                        to={link.to as string}
                        onClick={() => setMenuOpen(false)}
                        className={baseClass}
                      >
                        {link.icon && <link.icon className="w-5 h-5" />}
                        {link.label}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={i}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={baseClass}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/gallery" element={<GalleryPage lang={lang} />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
