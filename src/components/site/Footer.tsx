import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Surprise Welding" className="h-14 w-14 object-contain" />
            <div>
              <div className="font-display text-gradient-gold font-bold text-lg">SURPRISE WELDING</div>
              <div className="text-xs text-steel tracking-wider">METAL WORKS</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Premium welding, construction and metal works across South Africa.
          </p>
        </div>

        <div>
          <h4 className="font-display text-primary mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["/", "/about", "/services", "/gallery", "/contact"].map((p, i) => (
              <li key={p}>
                <Link to={p} className="text-muted-foreground hover:text-primary transition">
                  {["Home", "About", "Services", "Gallery", "Contact"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-primary mb-4 text-base">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-primary mb-4 text-base">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <a href={`tel:${SITE.phone}`} className="hover:text-primary">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="h-4 w-4 mt-0.5 text-primary" />
              <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-primary">
                WhatsApp Chat
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-9 w-9 grid place-items-center rounded-full bg-[#25D366] text-white transition">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Surprise Welding. All rights reserved.</div>
          <div>
            Website designed by{" "}
            <a href="https://www.webdevpro.co.za" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              www.webdevpro.co.za
            </a>{" "}
            · +27 81 215 9792
          </div>
        </div>
      </div>
    </footer>
  );
}
