// constants.ts
import {
  HeartPulse,
  Salad,
  Moon,
  Smartphone,
  Sparkles,
  ShowerHead,
  Brain,
  ClipboardList,
  Users,
  Hash,
  Clock,
  Presentation,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type Lang } from "./content";

export const pastelColors = [
  {
    bg: "bg-pastel-green-bg",
    border: "border-pastel-green",
    text: "text-[#4a5a3d]",
  },
  {
    bg: "bg-pastel-blue-bg",
    border: "border-pastel-blue",
    text: "text-[#3a5570]",
  },
  {
    bg: "bg-pastel-lavender-bg",
    border: "border-pastel-lavender",
    text: "text-[#5a6b7a]",
  },
  {
    bg: "bg-pastel-mint-bg",
    border: "border-pastel-mint",
    text: "text-[#3d5a4a]",
  },
  {
    bg: "bg-pastel-peach-bg",
    border: "border-pastel-peach",
    text: "text-[#6a5545]",
  },
  {
    bg: "bg-pastel-sky-bg",
    border: "border-pastel-sky",
    text: "text-[#455a6d]",
  },
  {
    bg: "bg-stone-bg",
    border: "border-stone",
    text: "text-[#5a5855]",
  },
  {
    bg: "bg-pastel-amber-bg",
    border: "border-pastel-amber",
    text: "text-[#5a5340]",
  },
];

export const sessionIcons: Record<number, LucideIcon> = {
  1: HeartPulse,
  2: Salad,
  3: Moon,
  4: Smartphone,
  5: Sparkles,
  6: ShowerHead,
  7: Brain,
  8: ClipboardList,
};

export const structureIcons = [Users, Hash, Clock, Presentation, BarChart3];

export const flagUrls: Record<Lang, string> = {
  es: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
  en: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
};

export const langSwap = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};
