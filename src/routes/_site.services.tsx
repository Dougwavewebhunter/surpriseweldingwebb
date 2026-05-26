import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import sp17 from "@/assets/sp17.jpeg";
import sp2 from "@/assets/sp2.jpeg";
import sp11 from "@/assets/sp11.jpeg";
import sp6 from "@/assets/sp6.jpeg";
import sp33 from "@/assets/sp33.jpeg";
import sp14 from "@/assets/sp14.jpeg";
import sp44 from "@/assets/sp44.jpeg";

const imgs: Record<string, string> = {
  "welding-construction": sp6,
  "men-gates": sp17,
  "burglar-bars": sp2,
  "steel-carports": sp6,
  "palisade-fencing": sp44,
  "roof-painting": sp14,
  "house-builds": sp33,
};

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services — Welding, Gates, Carports & Builds | Surprise Welding" },
      { name: "description", content: "Custom gates, burglar bars, steel carports, palisade fencing, roof painting, and full house builds across South Africa." },
      { property: "og:title", content: "Our Services — Surprise Welding" },
      { property: "og:description", content: "Welding, metal works, and construction services in SA." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="py-20 text-center container mx-auto px-4">
        <div className="text-primary text-sm font-semibold tracking-widest uppercase">Services</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">What We <span className="text-gradient-gold">Build</span></h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Premium welding, metal works and construction — tailored to your space and your budget.</p>
      </section>

      <section className="container mx-auto px-4 pb-20 space-y-12">
        {SERVICES.map((s, i) => (
          <div key={s.slug} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>img]:order-2" : ""}`}>
            <img src={imgs[s.slug] || sp11} alt={s.title} loading="lazy" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
            <div>
              <div className="text-primary text-xs font-semibold tracking-widest uppercase">Service {String(i + 1).padStart(2, "0")}</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">{s.title}</h2>
              <p className="text-muted-foreground mt-3">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {["Custom design", "Premium materials", "Professional installation", "Workmanship guarantee"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {f}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full font-semibold shadow-gold">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={SITE.whatsappLink(`Hi, I'm interested in: ${s.title}`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
