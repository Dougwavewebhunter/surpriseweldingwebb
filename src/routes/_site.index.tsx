import { useEffect, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, Star, ShieldCheck, Wrench, Award, Sparkles, ChevronDown } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import sp6 from "@/assets/sp6.jpeg";
import sp17 from "@/assets/sp17.jpeg";
import sp44 from "@/assets/sp44.jpeg";
import sp2 from "@/assets/sp2.jpeg";
import sp11 from "@/assets/sp11.jpeg";
import sp14 from "@/assets/sp14.jpeg";
import sp33 from "@/assets/sp33.jpeg";
import sp66 from "@/assets/sp66.jpeg";
import sp70 from "@/assets/sp70.jpeg";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Surprise Welding — Welding, Construction & Metal Works | South Africa" },
      { name: "description", content: "Premium welding, gates, burglar bars, carports, palisade fencing, roof painting and house builds across South Africa. Free quotes — call +27 82 289 8267." },
      { property: "og:title", content: "Surprise Welding — Metal Works & Construction" },
      { property: "og:description", content: "Custom gates, burglar bars, carports, fencing and full house builds in SA." },
    ],
  }),
  component: Home,
});

const slides = [
  { img: sp17, title: "Premium Custom Gates", sub: "Strong. Secure. Stunning." },
  { img: sp6, title: "Steel Carports & Structures", sub: "Built to last in any weather." },
  { img: sp44, title: "Construction & House Builds", sub: "From foundation to finish." },
];

const typedWords = ["Welding.", "Gates.", "Carports.", "Burglar Bars.", "House Builds."];

function Home() {
  const [slide, setSlide] = useState(0);
  const [typed, setTyped] = useState("");
  const [wi, setWi] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const word = typedWords[wi];
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTyped(word.slice(0, i));
      if (i >= word.length) {
        clearInterval(typer);
        setTimeout(() => setWi((w) => (w + 1) % typedWords.length), 1800);
      }
    }, 90);
    return () => clearInterval(typer);
  }, [wi]);

  return (
    <>
      {/* Hero slider */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover scale-105" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>
        ))}

        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 backdrop-blur px-4 py-1.5 rounded-full text-xs text-primary w-fit mb-6 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" /> Trusted South African Craftsmen
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.05] animate-fade-up">
            We Build <span className="text-gradient-gold">{typed}</span>
            <span className="animate-blink text-primary">|</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-foreground/80 max-w-2xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            {slides[slide].sub} Custom metal works, construction and maintenance — delivered with precision and pride across South Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-gold hover:scale-105 transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary border border-border px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* slide dots */}
          <div className="absolute bottom-10 left-4 right-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-primary" : "w-4 bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-float pointer-events-none">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["10+", "Years Experience"],
            ["500+", "Projects Delivered"],
            ["100%", "Quality Guaranteed"],
            ["24/7", "Support Line"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-primary text-sm font-semibold tracking-widest uppercase">What We Do</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Our <span className="text-gradient-gold">Services</span></h2>
          <p className="text-muted-foreground mt-4">From custom steel gates to full house builds — premium metal works and construction for homes and businesses.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services"
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1 hover:shadow-gold animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-4 group-hover:scale-110 transition">
                <Wrench className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 text-sm text-primary font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-card border-y border-border py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary text-sm font-semibold tracking-widest uppercase">Why Choose Us</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Craftsmanship You Can <span className="text-gradient-gold">Trust</span></h2>
            <p className="text-muted-foreground mt-4">We've spent years perfecting steel and construction work — every weld, every cut, every install is done right the first time.</p>
            <div className="mt-6 space-y-4">
              {[
                [ShieldCheck, "Quality Guaranteed", "Premium materials and finishes on every job."],
                [Award, "Skilled Team", "Experienced welders and builders you can count on."],
                [Star, "5-Star Service", "Trusted by homeowners and businesses alike."],
              ].map(([Icon, t, d]: any) => (
                <div key={t} className="flex gap-4">
                  <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={sp2} alt="Burglar bars" className="rounded-2xl aspect-[3/4] object-cover w-full animate-float" loading="lazy" />
            <img src={sp11} alt="Custom green gate" className="rounded-2xl aspect-[3/4] object-cover w-full mt-8" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-primary text-sm font-semibold tracking-widest uppercase">Our Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Recent <span className="text-gradient-gold">Projects</span></h2>
          </div>
          <Link to="/gallery" className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold text-sm">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[sp17, sp66, sp14, sp33, sp70, sp6].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-square animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <img src={img} alt="Project" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card border-y border-border py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">What Clients <span className="text-gradient-gold">Say</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "Thabo M.", t: "Amazing gate work. Strong, neat finish — well worth every cent." },
              { n: "Lerato S.", t: "They built our carport in record time. Professional and tidy." },
              { n: "Pieter v.W.", t: "Burglar bars look stunning and feel rock solid. Highly recommend." },
            ].map((r) => (
              <div key={r.n} className="bg-background rounded-2xl p-6 border border-border">
                <div className="flex gap-0.5 text-primary mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground italic">"{r.t}"</p>
                <div className="mt-4 font-semibold text-sm">{r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-gold p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">Ready to start your project?</h2>
          <p className="text-primary-foreground/80 mt-3 max-w-xl mx-auto">Get a free, no-obligation quote today. Fast replies, honest pricing.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
