import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
export const staff: { name: string; instagram?: string; facebook?: string }[] = [
  { name: "Pracownik 1" },
  { name: "Pracownik 2" },
  { name: "Pracownik 3" },
  { name: "Pracownik 4" },
  { name: "Pracownik 5" },
  { name: "Pracownik 6" },
  { name: "Pracownik 7" },
  { name: "Pracownik 8" },
  { name: "Pracownik 9" },
];

import {
  Scissors, Palette, Sparkles, Crown, Baby, Waves, Eye, Hand,
  Phone, MapPin, Clock, Instagram, Facebook, Star, ArrowRight, CalendarCheck, X, Menu, ChevronLeft, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hair House Wierzbica – Salon fryzjerski i kosmetyczny" },
      { name: "description", content: "Hair House w Wierzbicy – profesjonalne strzyżenie damskie i męskie, koloryzacja, keratyna, stylizacja brwi i rzęs, paznokcie. Doświadczeni styliści i tysiące zadowolonych klientów." },
      { property: "og:title", content: "Hair House Wierzbica – Salon fryzjerski i kosmetyczny" },
      { property: "og:description", content: "Strzyżenie damskie i męskie, koloryzacja, keratyna, brwi, rzęsy i paznokcie. Premium salon w Wierzbicy." },
      { property: "og:image", content: OWNER_HERO_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&family=Parisienne&display=swap",
      },
    ],
  }),
  component: Index,
});

export const OWNER_HERO_URL = "/main/andzia.jpg";
export const ABOUT_SALON_URL = "/main/hair-house.jpg";

export const PHONE_TEL = "tel:+48518230216";
export const PHONE_ILZA_TEL = "tel:+48780542616";
export const FACEBOOK_URL = "https://www.facebook.com/HairHouseWierzbica";
export const INSTAGRAM_URL = "https://www.instagram.com/hairhouse____/";

// Lista usług — grid dopasowuje się automatycznie, można dodać do 10 pozycji (i więcej).
export const services = [
  { icon: Scissors, title: "Strzyżenie damskie i męskie", desc: "Nowoczesne i klasyczne fryzury dla kobiet i mężczyzn — dopasowane do kształtu twarzy i stylu życia." },
  { icon: Palette, title: "Koloryzacja włosów", desc: "Jednolity kolor, refleksy, balayage i pełne metamorfozy z dbałością o kondycję włosów." },
  { icon: Sparkles, title: "Zabiegi keratynowe", desc: "Wygładzenie, regeneracja i odbudowa włosów — efekt utrzymujący się miesiącami." },
  { icon: Waves, title: "Przedłużanie włosów", desc: "Profesjonalne metody dające naturalny i trwały efekt długich, gęstych włosów." },
  { icon: Baby, title: "Strzyżenie dziecięce", desc: "Przyjazna atmosfera i cierpliwość dla najmłodszych klientów." },
  { icon: Eye, title: "Stylizacja brwi i rzęs", desc: "Laminacja brwi, henna pudrowa, przedłużanie i lifting rzęs." },
  { icon: Hand, title: "Manicure i paznokcie", desc: "Manicure hybrydowy, żelowy oraz zdobienia — od minimalizmu po pełną stylizację." },
  { icon: Crown, title: "Kosmetologia", desc: "Zabiegi oczyszczające, mezoterapia mikroigłowa oraz profesjonalne terapie kwasowe dobrane do potrzeb skóry." },
];

export const cosmetologyTreatments = [
  {
    title: "Zabieg 5w1 oczyszczająco-nawilżający",
    desc: "Nowoczesny zabieg łączący peeling kawitacyjny, jonoforezę, sonoforezę, elektrostymulację EMS oraz fototerapię LED. Skutecznie oczyszcza skórę, wspomaga wnikanie składników aktywnych, poprawia napięcie i elastyczność oraz przywraca cerze zdrowy blask.",
  },
  {
    title: "Mezoterapia mikroigłowa",
    desc: "Zabieg stymulujący naturalne procesy regeneracyjne skóry poprzez kontrolowane mikronakłucia. Poprawia jędrność, redukuje zmarszczki, blizny i przebarwienia oraz pobudza produkcję kolagenu i elastyny.",
  },
  {
    title: "Kwasy Peel Mission",
    desc: "Profesjonalne peelingi chemiczne dobrane indywidualnie do potrzeb skóry. Wspomagają odnowę komórkową, poprawiają strukturę i koloryt cery, redukują niedoskonałości oraz przywracają skórze świeży wygląd.",
  },
  {
    title: "Asiatic Peel",
    desc: "Peeling regenerujący i nawilżający przeznaczony dla skór wrażliwych, naczyniowych oraz wymagających odbudowy. Wspiera procesy naprawcze, wzmacnia barierę ochronną skóry i poprawia jej komfort.",
  },
  {
    title: "Supreme Peel C",
    desc: "Intensywnie rozświetlający peeling z witaminą C. Wyrównuje koloryt skóry, redukuje oznaki zmęczenia, działa antyoksydacyjnie i przywraca cerze zdrowy blask.",
  },
  {
    title: "Lift Peel",
    desc: "Zabieg o działaniu liftingującym i przeciwstarzeniowym. Poprawia napięcie skóry, wygładza drobne zmarszczki oraz przywraca twarzy młodszy i bardziej promienny wygląd. Zabieg bankietowy.",
  },
  {
    title: "Acne Therapy Set",
    desc: "Specjalistyczna terapia dla skóry tłustej i trądzikowej. Oczyszcza pory, redukuje zmiany zapalne, reguluje wydzielanie sebum i wspomaga walkę z niedoskonałościami.",
  },
  {
    title: "Monoacids Therapy Set",
    desc: "Zaawansowana terapia kwasowa zapewniająca efekt gładkiej, rozświetlonej i wyraźnie odmłodzonej skóry. Poprawia napięcie, wyrównuje koloryt, intensywnie nawilża oraz wspomaga naturalne procesy regeneracyjne.",
  },
];

export const gallery = Array.from({ length: 84 }, (_, i) => i + 1)
  .filter((n) => n !== 13)
  .map((n) => ({
    src: `/hh-gallery/galeria-${String(n).padStart(2, "0")}.jpg`,
    alt: `Realizacja Hair House ${n}`,
  }));

export const homeGallery = [8, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 37, 43, 45, 53, 57].map((n) => ({
  src: `/hh-gallery/galeria-${String(n).padStart(2, "0")}.jpg`,
  alt: `Realizacja Hair House ${n}`,
}));

export const reviews = [
  {
    name: "Kasia Żmuda",
    source: "Facebook · kwi 2024",
    text: "Przemiła obsługa, pełen komfort i relaks, aż chce się tam przebywać! Wszystko bardzo fajnie wyjaśnione, profesjonalizm i zaangażowanie na 100%, kolor jest przepiękny, jestem bardzo zadowolona! Polecam!!!",
    rating: 5,
  },
  {
    name: "Weronika Zielonka",
    source: "Facebook · mar 2023",
    text: "Polecam każdemu usługi w Hair House! W szczególności koloryzację u Pani Natalii. Poszłam z niemałym wyzwaniem na głowie, a wyszłam z dosłownym złotem! Dla Pań nie ma praktycznie słowa NIE. Potrafią doradzić i realnie wszystko wytłumaczyć. Rzadko kiedy człowiek czuje się tak bezpiecznie u fryzjera jak w Hair House.",
    rating: 5,
  },
  {
    name: "Joanna Lech",
    source: "Google · rok temu",
    text: "Super! Kolejny raz jestem MEGA zadowolona ze strzyżenia. Tam pracują profesjonalistki, słuchają i doradzają. Gorąco polecam!",
    rating: 5,
  },
  {
    name: "Marta Iwaniec",
    source: "Facebook · lis 2022",
    text: "Polecam z całego serca za przemiłą atmosferę, indywidualne, pełne profesjonalizmu podejście do klienta oraz pięknie wykonaną koloryzację. Dziękuję!",
    rating: 5,
  },
  {
    name: "Ewelina Seweryn",
    source: "Facebook",
    text: "Polecam serdecznie salon, bardzo miła obsługa. Przepiękne upięcie okolicznościowe.",
    rating: 5,
  },
  {
    name: "Anna",
    source: "Google · 5 miesięcy temu",
    text: "Super miła atmosfera. Panie profesjonalistki. Jestem zadowolona z koloryzacji i zabiegu na zniszczonych włosach. Polecam salon serdecznie. Pani właścicielka przemiła osobka. Inne Panie fryzjereczki również.",
    rating: 5,
  },
  {
    name: "Aneta R",
    source: "Google · 2 miesiące temu",
    text: "Z pełnym przekonaniem polecam salon HairHouse! Miałam okazję skorzystać z mezoterapii mikroigłowej i jestem bardzo zadowolona zarówno z samego przebiegu zabiegu, jak i jego efektów. Kosmetyczka wykazała się ogromnym profesjonalizmem – wszystko zostało dokładnie wyjaśnione przed rozpoczęciem, a podczas zabiegu czułam się komfortowo i bezpiecznie. Efekty przeszły moje oczekiwania – skóra jest wyraźnie odświeżona, napięta i wygląda zdrowiej.",
    rating: 5,
  },
  {
    name: "Milena Wróbel",
    source: "Google · 3 miesiące temu",
    text: "Jestem bardzo zadowolona z wizyty u pani Pauliny. Włosy zostały wykonane naprawdę pięknie – kolor wygląda naturalnie i świeżo, a całość jest bardzo starannie dopracowana. Szczególnie podoba mi się grzywka, która jest idealnie dopasowana i świetnie układa się przy twarzy. Pani Paulina była bardzo profesjonalna, a jednocześnie niezwykle miła. Przez całą wizytę czułam się zaopiekowana i komfortowo. Wszystko było wykonane z dużą dokładnością i w przyjemnej atmosferze. Zdecydowanie polecam!",
    rating: 5,
  },
  {
    name: "Grzegorz Górski",
    source: "Google · 2 miesiące temu",
    text: "Witam chciałem serdecznie polecić salon Hair House, pracują tam ludzie z pasją. Dzisiaj ostrzygła mnie pani Patrycja i robi ta pani mega robotę. Pozdrawiam i jeszcze raz polecam!!!! Na pewno wrócę nie raz.",
    rating: 5,
  },
  {
    name: "Igor Rafalski",
    source: "Google · 6 miesięcy temu",
    text: "Najlepszy salon w okolicy Radomia — profesjonalna obsługa i profesjonalne strzyżenie.",
    rating: 5,
  },
  {
    name: "Martyna Borkowska",
    source: "Google · 3 lata temu",
    text: "Z czystym sumieniem polecam salon.. dziewczyny znają się na tym co robią.. atmosfera luźna... podejście do dzieci też super 🙂 napewno jeszcze skorzystam z usług tego salonu 🙂",
    rating: 5,
  },
  {
    name: "Anna Maj",
    source: "Google · 3 lata temu",
    text: "Salon piękny, dziewczyny przesympatyczne aż się nie chce wychodzić z tego miejsca ❤️ Widać że wkładają całe serce w swoją pracę 😍 polecam z czystym sumieniem 😇",
    rating: 5,
  },
  {
    name: "Kasia Gje",
    source: "Google · 2 lata temu",
    text: "Super salon, profesjonalnie wykonywane usługi fryzjerskie. Jestem bardzo zadowolona z efektów, polecam z całego serca ;)",
    rating: 5,
  },
  {
    name: "Paulina Stępień-Wątła",
    source: "Google · 3 lata temu",
    text: "Super miejsce — profesjonalna usługa na najwyższym poziomie w świetnej atmosferze. Czego chcieć więcej ☺️ Szczerze polecam!!!",
    rating: 5,
  },
  {
    name: "Kazimierz Golonka",
    source: "Google · 2 lata temu",
    text: "Profesjonalna miła obsługa, możliwość dostosowania się do potrzeb klienta. Polecam ten salon fryzjerski.",
    rating: 5,
  },
  {
    name: "Paweł",
    source: "Google · 2 lata temu",
    text: "Piękny salon, świetne stylistki, miła atmosfera, profesjonalnie i szybko 😁 Polecam 💚💚💚",
    rating: 5,
  },
  {
    name: "Monika Maj",
    source: "Google · 2 lata temu",
    text: "Polecam 😃 Super podejście do dziecka. Napewno jeszcze nie raz odwiedzę salon.",
    rating: 5,
  },
  {
    name: "Daria Witczak",
    source: "Google · tydzień temu",
    text: "Jestem mega zadowolona z dzisiejszej wizyty w salonie, gorąco polecam.",
    rating: 5,
  },
  {
    name: "Daersky X",
    source: "Google · 3 lata temu",
    text: "Gorąco polecam 😍 atmosfera na 5+, wykonanie 10/10 🥰 produkty wysokiej jakości — nic dodać nic ująć, polecam każdemu ❤",
    rating: 5,
  },
  {
    name: "Anna Kuc",
    source: "Google · 3 lata temu",
    text: "Polecam ten salon — profesjonalnie i miła obsługa, super!!",
    rating: 5,
  },
  {
    name: "Grzegorz W",
    source: "Google · 2 lata temu",
    text: "Szybka i profesjonalna obsługa. Panie miłe i pomocne. Polecam.",
    rating: 5,
  },
  {
    name: "Agata Życińska",
    source: "Google · 2 lata temu",
    text: "Polecam serdecznie 🙂 miła atmosfera i pełen profesjonalizm 🙂",
    rating: 5,
  },
  {
    name: "Paulina Konwa",
    source: "Google · 3 lata temu",
    text: "Cudowne miejsce, pełen profesjonalizm! Polecam bardzo 💗",
    rating: 5,
  },
  {
    name: "Iza Gogo",
    source: "Google · 2 lata temu",
    text: "Panie fryzjerki bardzo miłe, wnętrze też przyjazne, usługa porządnie wykonana.",
    rating: 4,
  },
];

const hours = [
  ["Poniedziałek", "08:00 – 20:00"],
  ["Wtorek", "08:00 – 20:00"],
  ["Środa", "08:00 – 20:00"],
  ["Czwartek", "08:00 – 20:00"],
  ["Piątek", "08:00 – 20:00"],
  ["Sobota", "08:00 – 15:00"],
  ["Niedziela", "Zamknięte"],
];

const hoursIlza = [
  ["Poniedziałek", "10:00 – 20:00"],
  ["Wtorek", "10:00 – 20:00"],
  ["Środa", "10:00 – 20:00"],
  ["Czwartek", "10:00 – 20:00"],
  ["Piątek", "10:00 – 20:00"],
  ["Sobota", "08:00 – 15:00"],
  ["Niedziela", "Zamknięte"],
];

type PriceItem = { name: string; price: string };
type PriceGroup = { title: string; items: PriceItem[] };

export const pricingHair: PriceGroup[] = [
  {
    title: "Fryzjerstwo",
    items: [
      { name: "Strzyżenie męskie", price: "50 zł" },
      { name: "Combo", price: "80 zł" },
      { name: "Strzyżenie brody", price: "50 zł" },
      { name: "Odsiwianie / retusz włosów", price: "40 zł" },
      { name: "Odsiwianie / retusz włosów + broda", price: "60 zł" },
      { name: "Strzyżenie damskie krótkie / średnie / długie", price: "60 / 80 / 100 zł" },
      { name: "Modelowanie krótkie / średnie / długie", price: "60 / 70 / 80 zł" },
      { name: "Fale / Loki krótkie / średnie / długie", price: "120 / 150 / 200 zł" },
      { name: "Fale Hollywood krótkie / średnie / długie", price: "150 / 200 / 250 zł" },
      { name: "Upięcie okolicznościowe krótkie / średnie / długie", price: "120 / 180 / 200 zł" },
      { name: "Trwała ondulacja krótkie / średnie / długie", price: "130 / 250 / 350 zł" },
      { name: "Koloryzacja 1 kolor krótkie / średnie / długie", price: "180 / 220 / 280 zł" },
      { name: "Tonowanie krótkie / średnie / długie", price: "180 / 250 / 300 zł" },
    ],
  },

  {
    title: "Koloryzacja (długość: krótkie / średnie / długie)",
    items: [
      { name: "Air Touch", price: "od 300 / 450 / 600 zł" },
      { name: "Sombre / Ombre", price: "250 / 400 / 500 zł" },
      { name: "Rozjaśnianie / refleksy + tonowanie", price: "250 / 350 / 450 zł" },
      { name: "Koloryzacja trójwymiarowa 3D", price: "300 / 400 / 550 zł" },
      { name: "Dekoloryzacja (rozjaśnianie) + kolor", price: "200–300 / 500 / 700 zł" },
    ],
  },
  {
    title: "Zabiegi i pielęgnacja",
    items: [
      { name: "Prostowanie keratynowe", price: "300 / 450 / 600 zł" },
      { name: "Regeneracja pielęgnacyjna", price: "200–300 / 300–400 / 500–600 zł" },
      { name: "Przedłużanie włosów (założenie + włosy)", price: "2 400 zł" },
      { name: "Podciąganie włosów przedłużonych", price: "1 350 zł" },
    ],
  },
];

export const pricingBeauty: PriceGroup[] = [
  {
    title: "Stylizacja paznokci",
    items: [
      { name: "Manicure / Manicure męski", price: "80 zł" },
      { name: "Manicure hybrydowy", price: "120 zł" },
      { name: "Uzupełnienie paznokci", price: "od 150 zł" },
      { name: "Przedłużanie paznokci", price: "od 210 zł" },
      { name: "Zdjęcie hybrydy lub żelu", price: "50 zł" },
      { name: "Pedicure hybrydowy", price: "120 zł" },
      { name: "Pedicure hyb. + frezowanie", price: "170 zł" },
      { name: "Frezowanie stóp", price: "120 zł" },
      { name: "Zdobienie Nailart", price: "20 / 30 zł" },
      { name: "Dodatkowe zdobienie (french, boomer, cyrkonie, pyłek)", price: "od 10 zł" },
    ],
  },
  {
    title: "Stylizacja rzęs",
    items: [
      { name: "Laminacja rzęs", price: "130 zł" },
      { name: "Założenie rzęs 1:1", price: "120 zł" },
      { name: "Założenie rzęs 2–3D", price: "150 zł" },
      { name: "Założenie rzęs 4–6D", price: "180 zł" },
      { name: "Założenie rzęs Wet Look 2–3D", price: "150 zł" },
      { name: "Założenie rzęs Wet Look 4–6D", price: "180 zł" },
      { name: "Uzupełnienie do 3 tyg.", price: "90 – 150 zł" },
      { name: "Przedłużanie dolnych rzęs", price: "40 / 50 zł" },
      { name: "Rzęsy kolorowe", price: "20 zł" },
      { name: "Zdjęcie rzęs", price: "40 zł" },
    ],
  },
  {
    title: "Stylizacja brwi",
    items: [
      { name: "Laminacja brwi", price: "110 zł" },
      { name: "Laminacja brwi z farbką", price: "130 zł" },
      { name: "Farbka z regulacją", price: "80 zł" },
      { name: "Henna pudrowa", price: "90 zł" },
      { name: "Brows SPA (peeling, masaż, depilacja woskiem, wąsik)", price: "50 zł" },
      { name: "Regulacja woskiem (brwi, wąsik)", price: "30 zł" },
    ],
  },
  {
    title: "Makijaż",
    items: [
      { name: "Makijaż okolicznościowy", price: "170 zł" },
      { name: "Makijaż ślubny", price: "190 zł" },
      { name: "Makijaż ślubny próbny", price: "190 zł" },
      { name: "Pakiet fryzura + makijaż", price: "-15%" },
    ],
  },
  {
    title: "Kosmetologia",
    items: [
      { name: "Zabieg 5w1 oczyszczająco-nawilżający — twarz", price: "150 zł" },
      { name: "Zabieg 5w1 oczyszczająco-nawilżający — twarz, szyja, dekolt", price: "190 zł" },
      { name: "Mezoterapia mikroigłowa — twarz", price: "300 zł" },
      { name: "Mezoterapia mikroigłowa — twarz, szyja, dekolt", price: "500 zł" },
      { name: "Kwasy Peel Mission", price: "250–400 zł" },
      { name: "Kwasy MONOACIDS", price: "250 zł" },
      { name: "Kwasy ASIATIC", price: "300 zł" },
      { name: "Kwasy SUPREME PEEL C", price: "400 zł" },
      { name: "Kwasy LIFT PEEL", price: "350 zł" },
      { name: "Kwasy ACNE THERAPY SET", price: "330 zł" },
      { name: "MONOKWASY (5 kwasów)", price: "250 zł" },
    ],
  },
  {
    title: "Zabiegi kosmetyczne",
    items: [
      { name: "Wybielanie zębów – 1 seria", price: "300 zł" },
      { name: "Wybielanie zębów – 3 serie", price: "750 zł" },
    ],
  },
];

export const regulamin: { title: string; items: string[] }[] = [
  {
    title: "Postanowienia ogólne",
    items: [
      "Salon Hair House świadczy usługi w zakresie fryzjerstwa, stylizacji rzęs, brwi, paznokci, makijażu oraz zabiegów kosmetycznych zgodnie z aktualnym cennikiem.",
      "Celem regulaminu jest zapewnienie bezpieczeństwa, komfortu i najwyższej jakości usług wszystkim Klientom.",
      "Skorzystanie z usług Hair House jest równoznaczne z akceptacją niniejszego regulaminu.",
    ],
  },
  {
    title: "Rezerwacja wizyt",
    items: [
      "Wizyty można rezerwować osobiście, telefonicznie, przez Fresha lub wiadomości prywatne.",
      "Rezerwacja zostaje potwierdzona po akceptacji terminu przez salon.",
      "Przy usługach wymagających dłuższego czasu (np. makijaż ślubny, przedłużanie paznokci, stylizacja rzęs) salon może pobrać zaliczkę.",
      "Prosimy o odwołanie wizyty min. 24 godziny wcześniej. Brak odwołania może skutkować pobraniem opłaty rezerwacyjnej przy kolejnej usłudze.",
    ],
  },
  {
    title: "Punktualność",
    items: [
      "Prosimy o punktualne przybycie na umówioną wizytę.",
      "Spóźnienie powyżej 15 minut może skutkować skróceniem usługi lub jej odwołaniem.",
    ],
  },
  {
    title: "Higiena i bezpieczeństwo",
    items: [
      "Wszystkie usługi wykonujemy w higienicznych warunkach przy użyciu sterylnych lub jednorazowych narzędzi.",
      "Klient zobowiązany jest poinformować personel o alergiach, chorobach skóry, infekcjach lub przeciwwskazaniach zdrowotnych.",
      "Salon nie ponosi odpowiedzialności za reakcje alergiczne, jeśli Klient nie zgłosił przeciwwskazań przed zabiegiem.",
    ],
  },
  {
    title: "Reklamacje",
    items: [
      "Reklamacje dotyczące stylizacji paznokci można zgłaszać w ciągu 5 dni od wykonania usługi — naprawa jest wtedy bezpłatna.",
      "Reklamacje innych usług (rzęsy, brwi, makijaż) rozpatrywane są indywidualnie, jeśli problem wynika z winy salonu.",
      "Reklamacje po upływie wyznaczonego terminu mogą zostać uznane, jednak mogą wiązać się z dodatkową opłatą.",
    ],
  },
  {
    title: "Płatności",
    items: [
      "Ceny usług podane są w złotych polskich i zawierają podatek VAT.",
      "Płatności można dokonywać gotówką lub innymi formami płatności udostępnianymi przez salon.",
      "Promocje i rabaty nie łączą się, chyba że salon ustali inaczej.",
    ],
  },
  {
    title: "Zachowanie w salonie",
    items: [
      "Prosimy o wyciszenie telefonów oraz zachowanie spokoju, aby stworzyć komfortową atmosferę dla wszystkich Klientów.",
      "Dzieci mogą przebywać w salonie tylko pod opieką dorosłych i jeśli nie zakłócają pracy personelu.",
    ],
  },
  {
    title: "Odpowiedzialność salonu",
    items: [
      "Salon nie odpowiada za zniszczenie efektów zabiegów z winy Klienta (np. brak pielęgnacji rzęs, paznokci, użycie nieodpowiednich kosmetyków).",
      "W przypadku opóźnień niezależnych od salonu (przerwy w dostawie prądu, zdarzenia losowe) wizyta może zostać przełożona.",
    ],
  },
  {
    title: "Ochrona danych osobowych",
    items: [
      "Dane osobowe Klientów przetwarzane są wyłącznie w celu realizacji usług oraz kontaktu z Klientem.",
      "Salon Hair House nie udostępnia danych osobowych osobom trzecim, z wyjątkiem przypadków przewidzianych prawem.",
    ],
  },
];


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 shrink-0">
          <a href="/" className="technical-logo-inline text-xl" onClick={closeMobileMenu}>
            Hair House
          </a>
          <div className="hidden md:flex items-center gap-2 text-foreground" aria-label="Social media">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook Hair House" className="hover:text-gold-dark transition">
              <Facebook className="size-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram Hair House" className="hover:text-gold-dark transition">
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
          <a href="/#o-salonie" className="hover:text-foreground transition">O salonie</a>
          <a href="/uslugi" className="hover:text-foreground transition">Kosmetologia</a>
          <a href="/cennik" className="hover:text-foreground transition">Cennik</a>
          
          <a href="/opinie" className="hover:text-foreground transition">Opinie</a>
          <a href="/regulamin" className="hover:text-foreground transition">Regulamin</a>
          <a href="/pracownicy" className="hover:text-foreground transition">Zespół</a>
          <a href="/#kontakt" className="hover:text-foreground transition">Kontakt</a>
        </nav>
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-foreground/90 transition" aria-label="Zadzwoń Wierzbica 518 230 216">
            <Phone className="size-4" /> <span className="hidden xl:inline">Zadzwoń </span>Wierzbica
          </a>
          <a href={PHONE_ILZA_TEL} className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-4 py-2 text-xs font-medium hover:border-foreground transition" aria-label="Zadzwoń Iłża 780 542 616">
            <Phone className="size-4" /> <span className="hidden xl:inline">Zadzwoń </span>Iłża
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground shadow-sm"
          aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl shadow-xl">
          <nav className="mx-auto max-w-7xl px-5 sm:px-8 py-5 grid gap-3 text-sm font-medium text-foreground">
            <a href="/#o-salonie" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">O salonie</a>
            <a href="/uslugi" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">Kosmetologia</a>
            <a href="/cennik" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">Cennik</a>
            
            <a href="/opinie" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">Opinie</a>
            <a href="/regulamin" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">Regulamin</a>
            <a href="/pracownicy" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">Zespół</a>
            <a href="/#kontakt" onClick={closeMobileMenu} className="rounded-xl px-3 py-2 hover:bg-muted transition">Kontakt</a>
            <div className="mt-2 grid gap-2 border-t border-border/60 pt-4">
              <a href={PHONE_TEL} onClick={closeMobileMenu} className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-4 py-3 text-xs font-medium" aria-label="Zadzwoń Wierzbica 518 230 216">
                <Phone className="size-4" /> Zadzwoń Wierzbica
              </a>
              <a href={PHONE_ILZA_TEL} onClick={closeMobileMenu} className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-card px-4 py-3 text-xs font-medium" aria-label="Zadzwoń Iłża 780 542 616">
                <Phone className="size-4" /> Zadzwoń Iłża
              </a>
            </div>
            <div className="flex items-center justify-center gap-5 pt-2 text-foreground" aria-label="Social media">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook Hair House" className="hover:text-gold-dark transition">
                <Facebook className="size-5" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram Hair House" className="hover:text-gold-dark transition">
                <Instagram className="size-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function CreatorCredit() {
  return (
    <div className="fixed bottom-3 right-3 z-40 text-right text-[11px] sm:text-xs text-muted-foreground bg-background/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
      <div>Twórca strony:</div>
      <a href="https://www.pwcstudio.pl" target="_blank" rel="noreferrer" className="hover:text-gold-dark transition">Kacper Piskorz - www.pwcstudio.pl</a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="technical-logo-inline text-xl">
            Hair House
          </div>
          <p className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 hover:border-gold hover:text-gold-dark transition" aria-label="Instagram Hair House">
            <Instagram className="size-4" /> Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 hover:border-gold hover:text-gold-dark transition" aria-label="Facebook Hair House">
            <Facebook className="size-4" /> Facebook
          </a>
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 hover:border-gold hover:text-gold-dark transition" aria-label="Zadzwoń Wierzbica">
            <Phone className="size-4" /> Wierzbica
          </a>
          <a href={PHONE_ILZA_TEL} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 hover:border-gold hover:text-gold-dark transition" aria-label="Zadzwoń Iłża">
            <Phone className="size-4" /> Iłża
          </a>
        </div>
      </div>
    </footer>
  );
}

type GalleryImage = { src: string; alt: string };

export function ImageLightbox({ images, activeIndex, onClose, onChange }: { images: GalleryImage[]; activeIndex: number | null; onClose: () => void; onChange: (index: number) => void }) {
  const prev = () => {
    if (activeIndex === null || images.length === 0) return;
    onChange((activeIndex - 1 + images.length) % images.length);
  };
  const next = () => {
    if (activeIndex === null || images.length === 0) return;
    onChange((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length, onClose, onChange]);

  if (activeIndex === null) return null;
  const image = images[activeIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button type="button" onClick={onClose} className="absolute top-4 right-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" aria-label="Zamknij podgląd zdjęcia">
        <X className="size-6" />
      </button>
      <button type="button" onClick={prev} className="absolute left-3 sm:left-6 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" aria-label="Poprzednie zdjęcie">
        <ChevronLeft className="size-7" />
      </button>
      <img src={image.src} alt={image.alt} className="max-h-[88vh] max-w-[88vw] object-contain rounded-xl shadow-luxe" />
      <button type="button" onClick={next} className="absolute right-3 sm:right-6 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" aria-label="Następne zdjęcie">
        <ChevronRight className="size-7" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {images.map((g, i) => (
          <button
            type="button"
            key={`${g.src}-${i}`}
            onClick={() => setActiveIndex(i)}
            className="group relative overflow-hidden rounded-2xl bg-muted aspect-[4/5] text-left focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={`Powiększ zdjęcie: ${g.alt}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          </button>
        ))}
      </div>
      <ImageLightbox images={images} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}


export function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section id="top" className="relative pt-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-12 lg:pt-20 pb-16 lg:pb-28">
          <div className="lg:col-span-6 relative z-10">
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text muted-foreground mb-8">
              <span className="size-1.5 rounded-full bg-foreground" /> Salony Beauty Fryzjersko Kosmetyczny
            </div>
              <div className="mb-5 flex items-center gap-5 max-w-md">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/30 to-foreground/10" />
                <div className="font-sans text-[8rem] sm:text-[10rem] lg:text-[14rem] font-light tracking-[0.08em] text-foreground/90 leading-none">
                  HH
                </div>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/30 to-foreground/10" />
              </div>
              <div className="technical-logo-text text-foreground">
                Hair House
              </div>
            </div>
            <h1 className="font-sans leading-[1.05] tracking-tight text-foreground">
              <span className="block font-bold text-foreground text-2xl sm:text-3xl lg:text-4xl tracking-tighter">Miejsce, gdzie piękno spotyka się z profesjonalizmem.</span>
            </h1>
            <p className="mt-5 font-display italic text-xl text-gold-dark">„Twoje piękno — nasza pasja.”</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium shadow-soft hover:shadow-luxe transition-all"
              >
                <Instagram className="size-4" /> Instagram
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-7 py-3.5 font-medium shadow-soft hover:border-gold hover:shadow-luxe transition-all"
              >
                <Facebook className="size-4" /> Facebook
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 sm:gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-foreground">Tysiące</div>
                <div>Zadowolonych klientów</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-2xl text-foreground">15+</div>
                <div>Lat doświadczenia</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-2xl text-foreground">od 2021</div>
                <div>Salony <span className="technical-logo-inline">Hair House</span></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-gold-light/40 via-transparent to-gold/10 rounded-full blur-3xl -z-10" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-luxe" style={{ background: "#1a1a1a" }}>
              <img src={OWNER_HERO_URL} alt="Hair House – właścicielka salonu" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>
            <div className="mt-6 mx-auto bg-card rounded-2xl p-5 shadow-soft border border-border max-w-[260px] hidden lg:block">
              <div className="flex gap-0.5 mb-2 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm text-muted-foreground italic text-center">"Mistrzostwo w każdym detalu."</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-salonie" className="py-20 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft" style={{ background: "#1a1a1a" }}>
              <img src={ABOUT_SALON_URL} alt="Wnętrze salonu Hair House" loading="lazy" className="w-full h-full object-cover object-center" width={1280} height={1600} />
            </div>
            <div className="absolute -top-6 -right-6 size-32 border border-gold/50 rounded-2xl -z-0" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">O nas — <span className="technical-logo-inline">Hair House</span></span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium leading-tight">
              Styl, <span className="italic gold-text">piękno</span> i pasja w jednym miejscu.
            </h2>
            <div className="gold-divider w-24 my-6" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Jesteśmy nowoczesnym salonem fryzjerskim i kosmetycznym, który powstał z pasji do
              kreowania wyjątkowego wyglądu i dbania o Twoje dobre samopoczucie. Naszą misją jest
              podkreślanie naturalnego piękna oraz dostarczanie usług na najwyższym poziomie
              w przyjaznej, kameralnej atmosferze.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Dla kobiet i mężczyzn, którzy cenią sobie piękny wygląd, perfekcję wykonania
              i chwilę relaksu — dla wszystkich, którzy chcą poczuć się pewniej, zadbać o swój
              wizerunek i wyróżnić się elegancją lub subtelnym urokiem.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Salon działa od 2021 roku, a właścicielka posiada ponad <span className="text-foreground font-medium">15 lat doświadczenia</span> w zawodzie.
              Zespół regularnie uczestniczy w specjalistycznych szkoleniach i kursach
              potwierdzonych certyfikatami. Mamy <span className="text-foreground font-medium">tysiące zadowolonych klientów</span>.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Indywidualne podejście",
                "Profesjonalne doradztwo",
                "Nowoczesne techniki",
                "Wysokiej jakości kosmetyki",
                "Komfortowa atmosfera",
                "Certyfikowani styliści",
              ].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm">
                  <Sparkles className="size-4 text-gold shrink-0" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Nasze Usługi</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium">
              Pełna paleta zabiegów <span className="italic gold-text">premium</span>
            </h2>
            <div className="gold-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground">
              Fryzjerstwo damskie i męskie oraz profesjonalne zabiegi kosmetyczne pod jednym dachem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-gold/60 hover:shadow-luxe transition-all duration-500"
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-gold-light to-gold/40 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <s.icon className="size-5 text-ink" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute top-6 right-6 text-xs text-muted-foreground/50 font-display">0{i + 1}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/uslugi" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition">
              Pokaż kosmetologię <ArrowRight className="size-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="py-20 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Cennik</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium">
              Przejrzysty <span className="italic gold-text">cennik usług</span>
            </h2>
            <div className="gold-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground">
              Na stronie głównej prezentujemy najważniejsze pozycje fryzjerskie. Pełny cennik znajdziesz w zakładce Cennik.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl mb-5 flex items-center gap-3">
              <span className="size-2 rounded-full bg-gold" /> Fryzjerstwo
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {pricingHair.map((g) => (
                <div key={g.title} className={`p-6 rounded-2xl bg-card border border-border ${g.title === "Zabiegi i pielęgnacja" ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""}`}>
                  <h4 className="font-display text-lg mb-4 text-foreground">{g.title}</h4>
                  <dl className="space-y-2.5">
                    {g.items.map((it) => (
                      <div key={it.name} className="flex justify-between gap-4 text-sm border-b border-dashed border-border/70 pb-2 last:border-0 last:pb-0">
                        <dt className="text-muted-foreground">{it.name}</dt>
                        <dd className="font-medium whitespace-nowrap">{it.price}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href="/cennik" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition">
              Pokaż pełny cennik <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-20 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Galeria</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium">
              Nasze <span className="italic gold-text">realizacje</span>
            </h2>
            <div className="gold-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground">Prawdziwe efekty pracy naszego zespołu.</p>
          </div>

          <GalleryGrid images={homeGallery} />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition">
              <Instagram className="size-4" /> Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-medium hover:border-gold transition">
              <Facebook className="size-4" /> Facebook
            </a>
          </div>
        </div>
      </section>



      {/* Reviews */}
      <section id="opinie" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Opinie</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium">
              Co mówią nasi <span className="italic gold-text">klienci</span>
            </h2>
            <div className="gold-divider w-24 mx-auto my-6" />
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-left">
              <a href="https://www.google.com/maps/place/Hair+House/@51.2475078,21.0814084,17z/data=!4m8!3m7!1s0x4718438d989a73eb:0xb77507016f05d5f7!8m2!3d51.2488994!4d21.0823271!9m1!1b1!16s%2Fg%2F11k4v1582m?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="rounded-2xl bg-card border border-border p-5 hover:border-gold transition">
                <div className="flex items-center gap-2"><Star className="size-5 fill-gold text-gold" /><span className="text-2xl font-display font-semibold">4,7 / 5</span></div>
                <p className="mt-2 text-sm text-muted-foreground">średnia z 80 opinii w Wierzbicy Google</p>
              </a>
              <a href="https://www.google.com/maps/place/Hair+House/@51.1623853,21.2356587,17z/data=!4m8!3m7!1s0x47186dd1532b9e8d:0x7b51c4885adf785d!8m2!3d51.162382!4d21.238239!9m1!1b1!16s%2Fg%2F11zjj1kby8?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="rounded-2xl bg-card border border-border p-5 hover:border-gold transition">
                <div className="flex items-center gap-2"><Star className="size-5 fill-gold text-gold" /><span className="text-2xl font-display font-semibold">4,8 / 5</span></div>
                <p className="mt-2 text-sm text-muted-foreground">średnia z 13 opinii w Iłży Google</p>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((r) => (
              <figure key={r.name} className="p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition shadow-soft flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="text-foreground/90 font-display text-lg leading-snug italic flex-1">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border/60">
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{r.source}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/opinie" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition">
              Pokaż więcej <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Regulamin */}
      <section id="regulamin" className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Regulamin</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium">
              Regulamin <span className="italic gold-text">salonu</span>
            </h2>
            <div className="gold-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground">
              Dla komfortu i bezpieczeństwa wszystkich Klientów prosimy o zapoznanie się z poniższymi zasadami.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border divide-y divide-border">
            {regulamin.map((sec, i) => (
              <div key={sec.title} className="flex items-center gap-3 p-6">
                <span className="font-display text-gold-dark text-sm w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg">{sec.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/regulamin" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition">
              Pokaż regulamin <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark">Kontakt</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-medium">
              Odwiedź nasze <span className="italic gold-text">salony</span>
            </h2>
            <div className="gold-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground">Dwie lokalizacje — Wierzbica i Iłża.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Wierzbica */}
            <div className="space-y-5">
              <h3 className="font-display text-2xl flex items-center gap-3">
                <span className="size-2 rounded-full bg-gold" /> <span className="technical-logo-inline">Hair House</span> — Wierzbica
              </h3>
              <div className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <div className="size-11 shrink-0 rounded-xl bg-gold-light flex items-center justify-center">
                  <MapPin className="size-5 text-ink" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adres</div>
                  <div className="font-medium mt-1">plac Jana Pawła II 15</div>
                  <div className="font-medium">26-680 Wierzbica</div>
                </div>
              </div>
              <a href={PHONE_TEL} className="p-6 rounded-2xl bg-card border border-border flex gap-4 hover:border-gold transition block">
                <div className="size-11 shrink-0 rounded-xl bg-gold-light flex items-center justify-center">
                  <Phone className="size-5 text-ink" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div className="font-medium mt-1 text-lg">518 230 216</div>
                </div>
              </a>
              <div className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <div className="size-11 shrink-0 rounded-xl bg-gold-light flex items-center justify-center">
                  <Clock className="size-5 text-ink" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">Godziny otwarcia</div>
                  <dl className="space-y-1 text-sm">
                    {hours.map(([day, time]) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{day}</dt>
                        <dd className={`font-medium ${time === "Zamknięte" ? "text-muted-foreground" : ""}`}>{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-soft min-h-[280px]">
                <iframe
                  title="Mapa Hair House Wierzbica"
                  src="https://www.google.com/maps?q=plac+Jana+Paw%C5%82a+II+15,+26-680+Wierzbica&output=embed"
                  className="w-full h-full min-h-[280px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Iłża */}
            <div className="space-y-5">
              <h3 className="font-display text-2xl flex items-center gap-3">
                <span className="size-2 rounded-full bg-gold" /> <span className="technical-logo-inline">Hair House</span> — Iłża
              </h3>
              <div className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <div className="size-11 shrink-0 rounded-xl bg-gold-light flex items-center justify-center">
                  <MapPin className="size-5 text-ink" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adres</div>
                  <div className="font-medium mt-1">Mostowa 6</div>
                  <div className="font-medium">27-100 Iłża</div>
                </div>
              </div>
              <a href={PHONE_ILZA_TEL} className="p-6 rounded-2xl bg-card border border-border flex gap-4 hover:border-gold transition block">
                <div className="size-11 shrink-0 rounded-xl bg-gold-light flex items-center justify-center">
                  <Phone className="size-5 text-ink" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div className="font-medium mt-1 text-lg">780 542 616</div>
                </div>
              </a>
              <div className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <div className="size-11 shrink-0 rounded-xl bg-gold-light flex items-center justify-center">
                  <Clock className="size-5 text-ink" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">Godziny otwarcia</div>
                  <dl className="space-y-1 text-sm">
                    {hoursIlza.map(([day, time]) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{day}</dt>
                        <dd className={`font-medium ${time === "Zamknięte" ? "text-muted-foreground" : ""}`}>{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-soft min-h-[280px]">
                <iframe
                  title="Mapa Hair House Iłża"
                  src="https://www.google.com/maps?q=Mostowa+6,+27-100+I%C5%82%C5%BCa&output=embed"
                  className="w-full h-full min-h-[280px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CreatorCredit />
    </div>
  );
}
