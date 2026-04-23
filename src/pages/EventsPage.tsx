import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Star,
  CalendarHeart,
} from "lucide-react";
import { content, type Lang } from "../content";
import { driveManifest } from "../data/manifest";
import PageLayout from "../components/PageLayout";
import Lightbox from "../components/Lightbox";
import { RevealGroup, RevealItem } from "../components/Reveal";

export default function EventsPage({ lang }: { lang: Lang }) {
  const c = content[lang];
  const images = driveManifest.eventos;
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <PageLayout title={c.events.heading}>
        <RevealGroup>
          <div className="space-y-16">
            {/* Intro Text */}
            <section className="max-w-3xl">
              {c.events.text.split("\n\n").map((paragraph, i) => (
                <RevealItem key={i}>
                  <p
                    className={`text-lg leading-relaxed ${i === 0 ? "text-xl text-ink font-medium mb-6" : "text-ink mb-4"}`}
                  >
                    {paragraph}
                  </p>
                </RevealItem>
              ))}
            </section>

            {/* Bento Highlights */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevealItem className="md:col-span-2">
                <div className="h-full p-8 rounded-3xl bg-white border-2 border-logo-blue-text flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:shadow-lg hover:shadow-steel/10 transition-all duration-300">
                  <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-white border-2 border-logo-blue-text flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                    <GraduationCap className="w-10 h-10 text-ink" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-[#3a5570] text-xs font-bold uppercase tracking-wider mb-3">
                      <Star className="w-3 h-3" />
                      {lang === "es" ? "Evento Principal" : "Main Event"}
                    </div>
                    <h3 className="font-heading font-800 text-3xl text-ink mb-2">
                      {lang === "es"
                        ? "Graduación Anual"
                        : "Annual Graduation"}
                    </h3>
                    <p className="text-[#3a5570]/80 font-medium">
                      {lang === "es"
                        ? "Celebrando el esfuerzo y la dedicación de nuestros participantes."
                        : "Celebrating the effort and dedication of our participants."}
                    </p>
                  </div>
                </div>
              </RevealItem>

              <RevealItem className="md:col-span-1">
                <div className="h-full p-8 rounded-3xl bg-white border-2 border-logo-blue-text flex flex-col items-center text-center gap-4 group hover:shadow-lg hover:shadow-sage/10 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-logo-blue-text flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-8 h-8 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-heading font-700 text-xl text-ink mb-1">
                      {lang === "es"
                        ? "Manual Educativo"
                        : "Educational Manual"}
                    </h3>
                    <p className="text-sm text-[#4a5a3d]/80 font-medium">
                      {lang === "es"
                        ? "Lanzamiento oficial"
                        : "Official release"}
                    </p>
                  </div>
                </div>
              </RevealItem>

              <RevealItem className="md:col-span-3">
                <div className="p-8 rounded-3xl bg-white border-2 border-logo-blue-text flex flex-col sm:flex-row items-center justify-between gap-6 group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 text-stone/20 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                    <Users size={160} />
                  </div>
                  <div className="relative z-10 flex items-center gap-6 text-center sm:text-left flex-col sm:flex-row">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-logo-blue-text flex items-center justify-center">
                      <CalendarHeart className="w-8 h-8 text-ink" />
                    </div>
                    <div>
                      <h3 className="font-heading font-800 text-2xl text-ink">
                        {lang === "es"
                          ? "Impacto Comunitario"
                          : "Community Impact"}
                      </h3>
                      <p className="text-[#5a5855] font-medium mt-1">
                        {lang === "es"
                          ? "Jornadas de salud y bienestar para todos."
                          : "Health and wellness days for everyone."}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            </section>

            {/* Event Photos */}
            {images.length > 0 && (
              <section className="space-y-8 border-t-2 border-dashed border-stone/30 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((img, i) => (
                    <RevealItem key={i}>
                      <div
                        onClick={() => setSelected(img.path)}
                        className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-logo-blue-text group relative shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <img
                          src={img.path}
                          alt={img.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-steel/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </RevealItem>
                  ))}
                </div>
              </section>
            )}
          </div>
        </RevealGroup>
      </PageLayout>
      <Lightbox src={selected} onClose={() => setSelected(null)} />
    </>
  );
}
