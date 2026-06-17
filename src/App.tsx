import { Index } from "./routes/index";
import { PricingPage } from "./routes/cennik";
import { ReviewsPage } from "./routes/opinie";
import { StaffPage } from "./routes/pracownicy";
import { RulesPage } from "./routes/regulamin";
import { ServicesPage } from "./routes/uslugi";
import { ServicesKosmetologiaPage } from "./routes/uslugi_.kosmetologia";

function normalizePath(pathname: string) {
  const cleaned = pathname.replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
}

export default function App() {
  const path = normalizePath(window.location.pathname);

  if (path === "/") return <Index />;
  if (path === "/cennik") return <PricingPage />;
  if (path === "/opinie") return <ReviewsPage />;
  if (path === "/pracownicy") return <StaffPage />;
  if (path === "/regulamin") return <RulesPage />;
  if (path === "/uslugi" || path === "/uslugi/kosmetologia") return <ServicesPage />;

  return <Index />;
}
