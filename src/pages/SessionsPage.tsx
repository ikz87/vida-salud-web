// pages/SessionsPage.tsx
import { Target } from "lucide-react";
import { content, type Lang } from "../content";
import { sessionIcons } from "../constants";
import { RevealGroup, RevealItem } from "../components/Reveal";
import PageLayout from "../components/PageLayout";

export default function SessionsPage({ lang }: { lang: Lang }) {
    const c = content[lang];
    return (
        <PageLayout title={c.sessions.heading}>
            <RevealGroup>
                <div className="space-y-8">
                    {c.sessions.list.map((session) => {
                        const Icon = sessionIcons[session.number] || Target;
                        return (
                            <RevealItem key={session.number}>
                                <div className="rounded-2xl bg-white border-2 border-logo-blue-text shadow-sm overflow-hidden transition-all hover:shadow-md">
                                    <div className={`bg-white px-6 sm:px-8 py-5 flex items-center gap-4 border-b-2 border-logo-blue-text`}>
                                        <Icon className={`w-8 h-8 text-ink`} />
                                        <div>
                                            <p className={`text-sm font-bold text-ink uppercase tracking-wider`}>
                                                {lang === "en" ? `Session ${session.number}` : `Charla ${session.number}`}
                                            </p>
                                            <h3 className="font-heading font-700 text-xl sm:text-2xl text-ink">
                                                {session.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="px-6 sm:px-8 py-6">
                                        <div className="mb-4">
                                            <p className="text-xs font-bold text-ink uppercase mb-1">
                                                {lang === "en" ? "Goal" : "Objetivo"}
                                            </p>
                                            <p className="text-ink text-lg">
                                                {session.goal}
                                            </p>
                                        </div>
                                        <ul className="space-y-3">
                                            {session.content.map((item, j) => (
                                                <li key={j} className="flex gap-3 text-ink leading-relaxed">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-black/40" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </RevealItem>
                        );
                    })}
                </div>
            </RevealGroup>
        </PageLayout>
    );
}
