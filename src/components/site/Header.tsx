import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Surprise Welding" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg md:text-xl text-gradient-gold font-bold">SURPRISE</div>
            <div className="text-[10px] md:text-xs text-steel tracking-widest">WELDING & METAL WORKS</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md bg-secondary text-foreground"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-10 w-10 object-contain" />
              <span className="font-display text-gradient-gold font-bold">SURPRISE</span>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-2 flex-1">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-lg font-medium py-3 px-4 rounded-lg text-foreground hover:bg-secondary hover:text-primary transition-all animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-border space-y-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground py-3 rounded-full font-semibold shadow-gold"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
