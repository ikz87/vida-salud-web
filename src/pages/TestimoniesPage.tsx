// pages/TestimoniesPage.tsx
import { content, type Lang } from "../content";
import PageLayout from "../components/PageLayout";
import { RevealGroup, RevealItem } from "../components/Reveal";
import { Quote } from "lucide-react";

export default function TestimoniesPage({ lang }: { lang: Lang }) {
    const c = content[lang];
    return (
        <PageLayout title={c.testimonies.heading}>
            <RevealGroup>
                <div className="grid gap-8 md:grid-cols-1 max-w-2xl mx-auto">
                    {c.testimonies.list.map((testimony, i) => (
                        <RevealItem key={i}>
                            <div className="relative bg-white p-8 sm:p-10 rounded-3xl border border-warm-stone/20 shadow-xl shadow-forest/5 hover:shadow-2xl hover:shadow-forest/10 transition-all duration-500 group">
                                <div className="absolute -top-4 -left-4 p-4 bg-sage rounded-2xl text-white shadow-lg shadow-sage/20 group-hover:scale-110 transition-transform duration-500">
                                    <Quote size={24} fill="currentColor" />
                                </div>
                                <div className="space-y-6">
                                    <p className="text-xl sm:text-2xl text-ink leading-relaxed font-medium italic">
                                        "{testimony.text}"
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-stone/10">
                                        <div className="w-12 h-12 rounded-full bg-sage-bg flex items-center justify-center text-sage font-bold text-lg">
                                            {testimony.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-heading font-bold text-ink text-lg">
                                                {testimony.author}
                                            </p>
                                            <p className="text-sm text-ink-muted uppercase tracking-wider font-semibold">
                                                {lang === "es" ? "Estudiante" : "Student"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealItem>
                    ))}
                </div>
            </RevealGroup>
        </PageLayout>
    );
}
