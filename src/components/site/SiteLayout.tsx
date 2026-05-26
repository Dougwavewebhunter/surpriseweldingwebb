import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWidgets } from "./FloatingWidgets";
import { PWAInstall } from "./PWAInstall";

export function SiteLayout() {
  const { location } = useRouterState();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 md:pt-20"><Outlet /></main>
      <Footer />
      <FloatingWidgets />
      <PWAInstall />
    </div>
  );
}
