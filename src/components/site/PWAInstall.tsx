import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import logo from "@/assets/logo.png";

export function PWAInstall() {
  const [prompt, setPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPrompt(e);
      setTimeout(() => setShow(true), 6000);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!show || !prompt) return null;

  const install = async () => {
    prompt.prompt();
    await prompt.userChoice;
    setShow(false);
  };

  return (
    <div className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:bottom-5 z-[60] max-w-sm bg-card border border-border rounded-2xl shadow-2xl p-4 animate-fade-up">
      <button
        onClick={() => setShow(false)}
        aria-label="Close"
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex gap-3">
        <img src={logo} alt="Surprise Welding" className="h-14 w-14 object-contain shrink-0" />
        <div className="flex-1">
          <div className="font-semibold text-sm">Install Surprise Welding</div>
          <div className="text-xs text-muted-foreground mt-1">Add to your home screen for fast access.</div>
          <button
            onClick={install}
            className="mt-3 inline-flex items-center gap-1.5 bg-gradient-gold text-primary-foreground text-sm px-4 py-1.5 rounded-full font-semibold"
          >
            <Download className="h-3.5 w-3.5" /> Install
          </button>
        </div>
      </div>
    </div>
  );
}
