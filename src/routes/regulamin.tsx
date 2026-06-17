import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header, Footer, CreatorCredit, regulamin } from "./index";

export const Route = createFileRoute("/regulamin")({ component: RulesPage });

export function RulesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ArrowRight className="size-4 rotate-180" /> Wróć na główną</a>
        <div className="max-w-2xl mx-auto text-center mb-12"><span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Regulamin</span><h1 className="mt-4 text-4xl sm:text-6xl font-display font-medium">Regulamin <span className="italic gold-text">salonu</span></h1><div className="gold-divider w-24 mx-auto my-6" /></div>
        <div className="rounded-2xl bg-card border border-border divide-y divide-border">
          {regulamin.map((sec, i) => <section key={sec.title} className="p-6"><h2 className="font-display text-xl mb-4"><span className="text-gold-dark text-sm mr-3">{String(i + 1).padStart(2, "0")}</span>{sec.title}</h2><ol className="pl-6 space-y-2 text-sm text-muted-foreground leading-relaxed list-decimal marker:text-gold-dark">{sec.items.map((it, j) => <li key={j}>{it}</li>)}</ol></section>)}
        </div>
      </div>
      </main>
      <Footer />
      <CreatorCredit />
    </>
  );
}
