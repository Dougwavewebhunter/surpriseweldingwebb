import { useEffect, useState } from "react";
import { MessageCircle, X, Send, ArrowUp } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [popped, setPopped] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0].title });

  useEffect(() => {
    const t = setTimeout(() => setPopped(true), 4000);
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const send = () => {
    const msg = `Hi Surprise Welding!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-5 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-gold grid place-items-center hover:scale-110 transition animate-fade-in"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* WhatsApp float */}
      <button
        onClick={() => setChatOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </button>

      {/* Welcome popup */}
      {popped && !chatOpen && (
        <div className="fixed bottom-24 right-5 z-40 max-w-xs bg-card border border-border rounded-2xl shadow-2xl p-4 animate-fade-up">
          <button
            onClick={() => setPopped(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="text-sm font-semibold mb-1">👋 Need a quote?</div>
          <div className="text-xs text-muted-foreground mb-3">Chat with us on WhatsApp — fast replies.</div>
          <button
            onClick={() => { setChatOpen(true); setPopped(false); }}
            className="w-full bg-[#25D366] text-white text-sm py-2 rounded-full font-medium"
          >
            Start Chat
          </button>
        </div>
      )}

      {/* Chat panel */}
      {chatOpen && (
        <div className="fixed inset-0 z-[70] bg-background/60 backdrop-blur-sm grid place-items-end sm:place-items-center p-4 animate-fade-in">
          <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-gold p-4 flex items-center justify-between">
              <div>
                <div className="font-display text-primary-foreground font-bold">Surprise Welding</div>
                <div className="text-xs text-primary-foreground/80">Typically replies instantly</div>
              </div>
              <button onClick={() => setChatOpen(false)} aria-label="Close chat" className="text-primary-foreground p-1">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-secondary text-sm p-3 rounded-lg rounded-tl-none">
                Hi! 👋 Tell us a bit about your project and we'll get back to you on WhatsApp.
              </div>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-input rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone number"
                className="w-full bg-input rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-input rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
              <div className="flex flex-wrap gap-2">
                {["Get a quote", "Visit my site", "Call me back"].map((q) => (
                  <button
                    key={q}
                    onClick={() => window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(q)}`, "_blank")}
                    className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <button
                onClick={send}
                disabled={!form.name || !form.phone}
                className="w-full bg-[#25D366] text-white py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="h-4 w-4" /> Send on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
