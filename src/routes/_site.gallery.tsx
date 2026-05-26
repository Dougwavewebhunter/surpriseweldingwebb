import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import sp2 from "@/assets/sp2.jpeg";
import sp6 from "@/assets/sp6.jpeg";
import sp11 from "@/assets/sp11.jpeg";
import sp14 from "@/assets/sp14.jpeg";
import sp17 from "@/assets/sp17.jpeg";
import sp33 from "@/assets/sp33.jpeg";
import sp44 from "@/assets/sp44.jpeg";
import sp66 from "@/assets/sp66.jpeg";
import sp70 from "@/assets/sp70.jpeg";

const gallery = [
  { src: sp17, label: "Wooden Slat Driveway Gate" },
  { src: sp11, label: "Custom Painted Steel Gate" },
  { src: sp66, label: "Solid Steel Panel Gate" },
  { src: sp2, label: "Decorative Burglar Bars" },
  { src: sp33, label: "Garage Door Installation" },
  { src: sp6, label: "Steel Carport Frame" },
  { src: sp44, label: "Palisade Balcony Railing" },
  { src: sp70, label: "Roof Structure Construction" },
  { src: sp14, label: "Custom Braai Chimney" },
];

export const Route = createFileRoute("/_site/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Recent Projects | Surprise Welding" },
      { name: "description", content: "Browse our gallery of completed welding, gates, carports, fencing, and construction projects." },
      { property: "og:title", content: "Project Gallery — Surprise Welding" },
      { property: "og:description", content: "Photos of our recent metal works and construction projects." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <section className="py-16 text-center container mx-auto px-4">
        <div className="text-primary text-sm font-semibold tracking-widest uppercase">Gallery</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">Our Recent <span className="text-gradient-gold">Work</span></h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A selection of recent projects we're proud of.</p>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setOpen(g.src)}
              className="group relative overflow-hidden rounded-2xl aspect-square animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-sm font-semibold text-foreground text-left">{g.label}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[80] bg-background/95 backdrop-blur grid place-items-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute top-5 right-5 p-2 rounded-full bg-secondary text-foreground" onClick={() => setOpen(null)}>
            <X className="h-6 w-6" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
}
