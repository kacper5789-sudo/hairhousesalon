import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header, Footer, CreatorCredit, cosmetologyTreatments } from "./index";

export const Route = createFileRoute("/uslugi/kosmetologia")({ component: ServicesPage });

function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ArrowRight className="size-4 rotate-180" /> Wróć na główną</a>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Kosmetologia</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-display font-medium">Kosmetologia <span className="italic gold-text">Hair House</span></h1>
            <div className="gold-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground">Oczyszczanie, nawilżanie, mezoterapia mikroigłowa oraz indywidualnie dobrane terapie kwasowe.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {cosmetologyTreatments.map((t, i) => (
              <div key={t.title} className="relative p-6 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-gold-light to-gold/40 flex items-center justify-center shrink-0"><Sparkles className="size-4 text-ink" /></div>
                  <div><h2 className="font-display text-xl font-semibold mb-2">{t.title}</h2><p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p></div>
                </div>
                <div className="absolute top-5 right-5 text-xs text-muted-foreground/40 font-display">{String(i + 1).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CreatorCredit />
    </>
  );
}
