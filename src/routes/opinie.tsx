import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Header, Footer, CreatorCredit, reviews } from "./index";

const WIERZBICA_REVIEWS_URL = "https://www.google.com/maps/place/Hair+House/@51.2489027,21.0797468,17z/data=!4m8!3m7!1s0x4718438d989a73eb:0xb77507016f05d5f7!8m2!3d51.2488994!4d21.0823271!9m1!1b1!16s%2Fg%2F11k4v1582m?hl=pl&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";
const ILZA_REVIEWS_URL = "https://www.google.com/maps/place/Hair+House/@51.1623853,21.2356587,17z/data=!4m8!3m7!1s0x47186dd1532b9e8d:0x7b51c4885adf785d!8m2!3d51.162382!4d21.238239!9m1!1b1!16s%2Fg%2F11zjj1kby8?hl=pl&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";

export const Route = createFileRoute("/opinie")({ component: ReviewsPage });

function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ArrowRight className="size-4 rotate-180" /> Wróć na główną</a>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Opinie</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-display font-medium">Co mówią nasi <span className="italic gold-text">klienci</span></h1>
          <div className="gold-divider w-24 mx-auto my-6" />
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <a href={WIERZBICA_REVIEWS_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-card border border-border p-5 hover:border-gold transition">
              <div className="flex items-center gap-2"><Star className="size-5 fill-gold text-gold" /><span className="text-2xl font-display font-semibold">4,7 / 5</span></div>
              <p className="mt-2 text-sm text-muted-foreground">średnia z 80 opinii w Wierzbicy Google</p>
            </a>
            <a href={ILZA_REVIEWS_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-card border border-border p-5 hover:border-gold transition">
              <div className="flex items-center gap-2"><Star className="size-5 fill-gold text-gold" /><span className="text-2xl font-display font-semibold">4,8 / 5</span></div>
              <p className="mt-2 text-sm text-muted-foreground">średnia z 13 opinii w Iłży Google</p>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(r => <figure key={r.name} className="p-7 rounded-2xl bg-card border border-border shadow-soft flex flex-col"><div className="flex gap-0.5 mb-4">{[...Array(r.rating)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}</div><blockquote className="text-foreground/90 font-display text-lg leading-snug italic flex-1">„{r.text}"</blockquote><figcaption className="mt-5 pt-4 border-t border-border/60"><div className="font-medium text-sm">{r.name}</div><div className="text-xs text-muted-foreground mt-0.5">{r.source}</div></figcaption></figure>)}
        </div>
      </div>
      </main>
      <Footer />
      <CreatorCredit />
    </>
  );
}
