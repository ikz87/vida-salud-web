import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "../gallery-data";
import { content, type Lang } from "../content";
import { RevealGroup, RevealItem } from "../components/Reveal";

interface GalleryPageProps {
    lang: Lang;
}

export default function GalleryPage({ lang }: GalleryPageProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const c = content[lang].gallery;

    // Close modal on Esc key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
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
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/50 hover:text-white mb-6 transition-colors cursor-pointer w-fit"
                    >
                        <ArrowLeft className="w-4 h-4" /> {c.backHome}
                    </Link>
                    <h1 className="text-5xl font-heading font-bold text-white mb-2">
                        {c.title}
                    </h1>
                    <p className="text-white/60 text-lg">
                        {c.subtitle}
                    </p>
                </div>

                <RevealGroup className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((src, i) => (
                        <RevealItem key={i} className="break-inside-avoid">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedImage(src)}
                                className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 cursor-pointer"
                            >
                                <img
                                    src={`/gallery/${src}`}
                                    alt={`Gallery ${i}`}
                                    className="w-full h-auto object-cover group-hover:grayscale-0 transition-all duration-500"
                                    onError={(e) =>
                                    (e.currentTarget.src =
                                        "https://placehold.co/600x400/1a1a2e/white?text=Media+Coming+Soon")
                                    }
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white text-sm font-medium">
                                        LiveWell Session Snapshot
                                    </span>
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] preserve-3d bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 "
                    >
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110] hover:cursor-pointer"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={`/gallery/${selectedImage}`}
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
