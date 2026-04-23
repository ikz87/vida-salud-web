// components/Dropdown.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
    title: string;
    items: { label: string; to: string }[];
    isGallery?: boolean;
}

export default function Dropdown({ title, items, isGallery }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const portalRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

    const updateCoords = useCallback(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom,
                left: rect.left,
                width: Math.max(rect.width, 220),
            });
        }
    }, []);

    // Close when clicking outside both the button and the portal menu
    useEffect(() => {
        if (!isOpen) return;

        updateCoords();

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                buttonRef.current &&
                !buttonRef.current.contains(target) &&
                portalRef.current &&
                !portalRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => updateCoords();
        const handleResize = () => updateCoords();

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll, true);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll, true);
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen, updateCoords]);

    return (
        <>
            <button
                ref={buttonRef}
                onClick={() => {
                    if (!isOpen) updateCoords();
                    setIsOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-2 ${isGallery
                        ? "text-white/70 hover:text-white"
                        : "text-logo-blue-text/80 hover:text-logo-blue-text"
                    } font-medium text-sm`}
            >
                {title}
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen &&
                createPortal(
                    <div
                        ref={portalRef}
                        className="fixed z-[9999]"
                        style={{
                            top: coords.top + 8,
                            left: coords.left,
                            minWidth: coords.width,
                        }}
                    >
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`overflow-hidden rounded-2xl border shadow-2xl ${isGallery
                                        ? "bg-dark-section border-white/10"
                                        : "bg-white border-warm-stone/30"
                                    }`}
                            >
                                <div className="p-2">
                                    {items.map((item, i) => (
                                        <Link
                                            key={i}
                                            to={item.to}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${isGallery
                                                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                                                    : "text-ink-muted hover:bg-sage-bg/50 hover:text-ink"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>,
                    document.body
                )}
        </>
    );
}
