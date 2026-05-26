import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Get a Free Quote | Surprise Welding" },
      { name: "description", content: "Contact Surprise Welding for welding, gates, carports, and construction quotes. Call +27 82 289 8267 or WhatsApp us." },
      { property: "og:title", content: "Contact Surprise Welding" },
      { property: "og:description", content: "Request a free quote for welding, metal works, or construction in SA." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: SERVICES[0].title, message: "" });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      const msg = `Hi Surprise Welding!%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
      window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
      setState("done");
      setTimeout(() => {
        setState("idle");
        setForm({ name: "", phone: "", email: "", service: SERVICES[0].title, message: "" });
      }, 2500);
    }, 900);
  };

  return (
    <>
      <section className="py-16 text-center container mx-auto px-4">
        <div className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">Let's Build <span className="text-gradient-gold">Together</span></h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Request a free quote — we'll get back to you fast.</p>
      </section>

      <section className="container mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {[
            { Icon: Phone, label: "Call us", val: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
            { Icon: MessageCircle, label: "WhatsApp", val: SITE.phoneDisplay, href: SITE.whatsappLink() },
            { Icon: Mail, label: "Email", val: SITE.email, href: `mailto:${SITE.email}` },
            { Icon: MapPin, label: "Location", val: SITE.address },
          ].map(({ Icon, label, val, href }) => (
            <a key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shrink-0">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-semibold">{val}</div>
              </div>
            </a>
          ))}
          <div className="rounded-2xl overflow-hidden border border-border h-64">
            <iframe
              title="South Africa"
              src="https://www.google.com/maps?q=South+Africa&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-display font-bold">Request a Quote</h2>
          {[
            ["name", "Full Name", "text"],
            ["phone", "Phone Number", "tel"],
            ["email", "Email Address", "email"],
          ].map(([k, l, t]) => (
            <div key={k}>
              <label className="text-xs text-muted-foreground">{l}</label>
              <input
                required
                type={t}
                value={(form as any)[k]}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                className="w-full mt-1 bg-input border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          ))}
          <div>
            <label className="text-xs text-muted-foreground">Service</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full mt-1 bg-input border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            >
              {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 bg-input border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={state !== "idle"}
            className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-full font-semibold shadow-gold flex items-center justify-center gap-2 disabled:opacity-80"
          >
            {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {state === "done" && <CheckCircle2 className="h-4 w-4" />}
            {state === "idle" && "Send Request"}
            {state === "loading" && "Sending..."}
            {state === "done" && "Sent! Opening WhatsApp"}
          </button>
        </form>
      </section>

      <section className="container mx-auto px-4 pb-20 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center mb-8">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            ["Do you provide free quotes?", "Yes — all quotes are free and no-obligation. Contact us via WhatsApp, phone, or the form above."],
            ["What areas do you service?", "We service clients across South Africa. Get in touch with your location and we'll confirm."],
            ["How long does a typical project take?", "It depends on scope — gates and burglar bars usually take 3–7 days; carports and house builds vary."],
            ["Do you guarantee your workmanship?", "Absolutely. We stand behind every weld and every build with a workmanship guarantee."],
          ].map(([q, a], i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
