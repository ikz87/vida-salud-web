import { useState } from "react";
import { content, type Lang } from "../content";
import { driveManifest } from "../data/manifest";
import PageLayout from "../components/PageLayout";
import Lightbox from "../components/Lightbox";
import { RevealGroup, RevealItem } from "../components/Reveal";

export default function VolunteersPage({ lang }: { lang: Lang }) {
  const c = content[lang];
  const images = driveManifest.voluntarios;
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <PageLayout title={c.volunteers.heading}>
        <RevealGroup className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <RevealItem key={i} className="break-inside-avoid">
              <div
                onClick={() => setSelected(img.path)}
                className="relative group overflow-hidden rounded-2xl bg-steel-bg/30 border border-steel/10 cursor-pointer"
              >
                <img
                  src={img.path}
                  alt={img.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </PageLayout>
      <Lightbox src={selected} onClose={() => setSelected(null)} />
    </>
  );
}
