// components/PageLayout.tsx
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
    children: ReactNode;
    title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
        >
            <header className="mb-12 text-center">
                <h1 className="font-heading font-900 text-5xl sm:text-6xl text-ink tracking-tighter">
                    {title}
                </h1>
            </header>
            <div className="bg-logo-green-bg backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-logo-blue-text shadow-xl shadow-forest/5">
                {children}
            </div>
        </motion.main>
    );
}
