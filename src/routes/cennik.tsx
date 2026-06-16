import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header, Footer, CreatorCredit, pricingBeauty, pricingHair } from "./index";

export const Route = createFileRoute("/cennik")({ component: PricingPage });

function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ArrowRight className="size-4 rotate-180" /> Wróć na główną</a>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Cennik</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-display font-medium">Pełny <span className="italic gold-text">cennik usług</span></h1>
          <div className="gold-divider w-24 mx-auto my-6" />
        </div>
        <div className="space-y-10">
          {[{label:"Fryzjerstwo", groups: pricingHair}, {label:"Beauty & kosmetologia", groups: pricingBeauty}].map(section => (
            <section key={section.label}>
              <h2 className="font-display text-3xl mb-5">{section.label}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {section.groups.map(g => (
                  <div key={g.title} className={`p-6 rounded-2xl bg-card border border-border shadow-soft ${g.title === "Zabiegi i pielęgnacja" ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""}`}>
                    <h3 className="font-display text-lg mb-4 text-foreground">{g.title}</h3>
                    <dl className="space-y-2.5">
                      {g.items.map(it => (
                        <div key={it.name} className="flex justify-between gap-4 text-sm border-b border-dashed border-border/70 pb-2 last:border-0 last:pb-0">
                          <dt className="text-muted-foreground">{it.name}</dt><dd className="font-medium whitespace-nowrap">{it.price}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      </main>
      <Footer />
      <CreatorCredit />
    </>
  );
}
