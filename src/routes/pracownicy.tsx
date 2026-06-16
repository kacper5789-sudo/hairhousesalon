import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Header, Footer, CreatorCredit, staff } from "./index";

export const Route = createFileRoute("/pracownicy")({ component: StaffPage });

function StaffPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ArrowRight className="size-4 rotate-180" /> Wróć na główną</a>
        <div className="max-w-2xl mx-auto text-center mb-14"><span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Zespół</span><h1 className="mt-4 text-4xl sm:text-6xl font-display font-medium">Nasz <span className="italic gold-text">zespół</span></h1><p className="mt-5 text-muted-foreground">Poznaj osoby, które każdego dnia tworzą Hair House.</p></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {staff.map((person, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-secondary/40 border border-border/50 shadow-soft">
              <div className="aspect-[3/4] bg-secondary/60 border-b border-border/50 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground/60">Zdjęcie wkrótce</span>
              </div>
              <div className="p-5 text-center">
                <h2 className="font-display text-lg">{person.name}</h2>
                <div className="mt-4 flex justify-center gap-3 text-muted-foreground">
                  <span aria-label={`Instagram ${person.name}`} className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground animate-pulse">
                    <Instagram className="size-4" />
                  </span>
                  <span aria-label={`Facebook ${person.name}`} className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground animate-pulse">
                    <Facebook className="size-4" />
                  </span>
                </div>
              </div>
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
