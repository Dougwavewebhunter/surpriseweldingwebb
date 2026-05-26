import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import sp70 from "@/assets/sp70.jpeg";
import sp6 from "@/assets/sp6.jpeg";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About Us — Surprise Welding" },
      { name: "description", content: "Learn about Surprise Welding — South Africa's trusted partner for welding, metal works, and construction." },
      { property: "og:title", content: "About Surprise Welding" },
      { property: "og:description", content: "Years of craftsmanship in welding and construction across SA." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={sp70} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <div className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-2 animate-fade-up">Building South Africa, <span className="text-gradient-gold">One Weld at a Time</span></h1>
          <p className="mt-5 text-muted-foreground animate-fade-up">Surprise Welding is a proudly South African team of welders, metal workers, and builders delivering premium results for homes and businesses.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img src={sp6} alt="Steel structure under construction" className="rounded-2xl shadow-xl" loading="lazy" />
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Our <span className="text-gradient-gold">Story</span></h2>
          <p className="text-muted-foreground mt-4">From humble beginnings in a small workshop, Surprise Welding has grown into a trusted name across South Africa. We've built our reputation on honest pricing, premium materials, and craftsmanship that lasts.</p>
          <p className="text-muted-foreground mt-3">Whether it's a custom driveway gate, a steel carport, burglar bars, or a full house build — we bring the same passion to every project.</p>
          <ul className="mt-6 space-y-2">
            {["Skilled, experienced team", "Premium materials only", "On-time delivery", "Honest, upfront pricing"].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-card border-y border-border py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            [Target, "Our Mission", "Deliver premium welding and construction services with integrity, quality, and pride in every project."],
            [Eye, "Our Vision", "To be South Africa's most trusted name in metal works and construction."],
            [Heart, "Our Values", "Honesty, craftsmanship, reliability — and treating every client like family."],
          ].map(([Icon, t, d]: any) => (
            <div key={t} className="bg-background rounded-2xl p-7 border border-border">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-4">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
