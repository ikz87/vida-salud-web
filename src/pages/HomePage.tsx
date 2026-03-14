import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    Target,
} from "lucide-react";
import { content, type Lang } from "../content";
import {
    pastelColors,
    sessionIcons,
    structureIcons,
    langSwap,
} from "../constants";
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
        >
            {/* ───── HERO ───── */}
            <section id="hero" className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-pastel-green/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-lavender/20 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
                    <RevealGroup>
                        <RevealItem>
                            <h1 className="font-heading font-900 text-6xl sm:text-8xl lg:text-9xl text-ink tracking-tighter leading-none">
                                {c.hero.title}
                            </h1>
                            <p className="font-heading font-500 text-2xl sm:text-3xl lg:text-4xl text-pastel-lavender mt-2 tracking-tight">
                                {c.hero.subtitle}
                            </p>
                        </RevealItem>

                        <RevealItem>
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.p
                                    key={lang + "-tagline"}
                                    variants={langSwap}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="mt-8 text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed"
                                >
                                    {c.hero.tagline}
                                </motion.p>
                            </AnimatePresence>
                        </RevealItem>

                        <RevealItem>
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={lang + "-why"}
                                    variants={langSwap}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="mt-12 max-w-2xl mx-auto text-left bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 p-8"
                                >
                                    <h3 className="font-heading font-700 text-xl text-ink mb-4">
                                        {c.hero.whyName.heading}
                                    </h3>
                                    <ul className="space-y-3">
                                        {c.hero.whyName.points.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-ink-light leading-relaxed"
                                            >
                                                <ChevronRight className="mt-1 w-4 h-4 text-pastel-green flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {c.hero.whyName.bilingual && (
                                        <p className="mt-6 text-ink-muted text-sm leading-relaxed border-t border-gray-100 pt-4">
                                            {c.hero.whyName.bilingual}
                                        </p>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </RevealItem>
                    </RevealGroup>
                </div>
            </section>

            {/* ───── MISSION ───── */}
            <section id="mission" className="bg-dark-section text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <RevealGroup>
                        <RevealItem className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium tracking-wide uppercase mb-6">
                                {lang === "en" ? "Our Purpose" : "Nuestro Propósito"}
                            </span>
                            <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                                {c.mission.heading}
                            </h2>
                        </RevealItem>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={lang + "-mission"}
                                variants={langSwap}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-6"
                            >
                                {c.mission.text.split("\n\n").map((paragraph, i) => (
                                    <RevealItem key={i}>
                                        <p className="text-lg text-white/80 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    </RevealItem>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </RevealGroup>
                </div>
            </section>

            {/* ───── STRUCTURE ───── */}
            <section id="structure" className="bg-cream-warm">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <RevealGroup>
                        <RevealItem className="text-center mb-14">
                            <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
                                {c.structure.heading}
                            </h2>
                        </RevealItem>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={lang + "-struct"}
                                variants={langSwap}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                {c.structure.items.map((item, i) => {
                                    const color = pastelColors[i % pastelColors.length];
                                    const Icon = structureIcons[i % structureIcons.length];
                                    return (
                                        <RevealItem key={i}>
                                            <motion.div
                                                whileHover={{ y: -3 }}
                                                className={`rounded-2xl p-6 border ${color.bg} ${color.border} border-opacity-40 h-full`}
                                            >
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className={`w-9 h-9 rounded-xl ${color.bg} border ${color.border} border-opacity-60 flex items-center justify-center`}
                                                    >
                                                        <Icon
                                                            className={`w-[18px] h-[18px] ${color.text}`}
                                                        />
                                                    </div>
                                                    <p
                                                        className={`text-xs font-bold uppercase tracking-wider ${color.text}`}
                                                    >
                                                        {item.label}
                                                    </p>
                                                </div>
                                                <p className="text-ink font-heading font-600 leading-relaxed">
                                                    {item.value}
                                                </p>
                                            </motion.div>
                                        </RevealItem>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </RevealGroup>
                </div>
            </section>

            {/* ───── SESSIONS ───── */}
            <section id="sessions" className="bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <RevealGroup>
                        <RevealItem className="text-center mb-14">
                            <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
                                {c.sessions.heading}
                            </h2>
                        </RevealItem>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={lang + "-sessions"}
                                variants={langSwap}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-6"
                            >
                                {c.sessions.list.map((session, i) => {
                                    const color = pastelColors[i % pastelColors.length];
                                    const Icon = sessionIcons[session.number] || Target;
                                    return (
                                        <RevealItem key={session.number}>
                                            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                                                <div
                                                    className={`${color.bg} px-6 sm:px-8 py-5 flex items-center gap-4 border-b ${color.border} border-opacity-40`}
                                                >
                                                    <Icon className={`w-8 h-8 ${color.text}`} />
                                                    <div>
                                                        <p
                                                            className={`text-sm font-bold ${color.text} uppercase tracking-wider`}
                                                        >
                                                            {lang === "en"
                                                                ? `Session ${session.number}`
                                                                : `Charla ${session.number}`}
                                                        </p>
                                                        <h3 className="font-heading font-700 text-xl sm:text-2xl text-ink">
                                                            {session.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="px-6 sm:px-8 py-6">
                                                    <div className="mb-4">
                                                        <p className="text-xs font-bold text-ink-muted uppercase mb-1">
                                                            {lang === "en" ? "Goal" : "Objetivo"}
                                                        </p>
                                                        <p className="text-ink-light">
                                                            {session.goal}
                                                        </p>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {session.content.map((item, j) => (
                                                            <li
                                                                key={j}
                                                                className="flex gap-3 text-sm text-ink-light"
                                                            >
                                                                <span
                                                                    className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${color.border} bg-current opacity-60`}
                                                                />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </RevealItem>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </RevealGroup>
                </div>
            </section>
        </motion.main>
    );
}
