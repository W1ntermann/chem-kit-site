import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { QuickLinksSection } from "./QuickLinks";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: 1,
    bg: "linear-gradient(135deg, #1a3a5c 0%, #2a5f9e 50%, #1a3a5c 100%)",
    overlay: "rgba(0,30,60,0.5)",
  },
  {
    id: 2,
    bg: "linear-gradient(135deg, #0d2b45 0%, #1a5080 50%, #0d2b45 100%)",
    overlay: "rgba(0,20,50,0.5)",
  },
  {
    id: 3,
    bg: "linear-gradient(135deg, #1e3d5f 0%, #2e6da8 50%, #1e3d5f 100%)",
    overlay: "rgba(0,25,55,0.5)",
  },
];

function MachineryIllustration({ type }: { type: string }) {
  const blue = "#1565c0";
  const darkBlue = "#003f78";
  const lightBlue = "#42a5f5";
  const gray = "#9e9e9e";

  return (
    <svg viewBox="0 0 200 200" width="100%" height="150" className="max-w-[120px] sm:max-w-[150px]">
      {type === "dissolver" && (
        <>
          <rect x="30" y="50" width="140" height="110" rx="4" fill={blue}/>
          <rect x="50" y="30" width="100" height="26" rx="4" fill={darkBlue}/>
          <rect x="90" y="10" width="20" height="26" fill={gray}/>
          <circle cx="100" cy="110" r="30" fill={lightBlue} opacity="0.85"/>
          <circle cx="100" cy="110" r="18" fill={blue}/>
          <text x="100" y="116" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">KD</text>
        </>
      )}
      {type === "basket" && (
        <>
          <rect x="40" y="45" width="120" height="105" rx="4" fill={blue}/>
          <rect x="60" y="22" width="80" height="28" rx="4" fill={darkBlue}/>
          <rect x="85" y="5" width="30" height="24" fill={gray}/>
          <rect x="55" y="150" width="90" height="35" rx="2" fill={darkBlue}/>
          <circle cx="100" cy="98" r="28" fill={lightBlue} opacity="0.85"/>
          <text x="100" y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">KB</text>
        </>
      )}
      {type === "butterfly" && (
        <>
          <rect x="35" y="55" width="130" height="100" rx="4" fill={blue}/>
          <rect x="55" y="32" width="90" height="28" rx="4" fill={darkBlue}/>
          <rect x="88" y="10" width="24" height="28" fill={gray}/>
          <rect x="50" y="155" width="100" height="30" rx="2" fill={darkBlue}/>
          <path d="M 75 100 Q 100 80 125 100 Q 100 120 75 100 Z" fill={lightBlue} opacity="0.9"/>
        </>
      )}
      {type === "continuous" && (
        <>
          <rect x="22" y="60" width="156" height="90" rx="4" fill={blue}/>
          <rect x="42" y="38" width="116" height="27" rx="4" fill={darkBlue}/>
          <rect x="90" y="15" width="20" height="28" fill={gray}/>
          <rect x="22" y="150" width="156" height="30" rx="2" fill={darkBlue}/>
          <rect x="32" y="72" width="136" height="60" rx="2" fill={lightBlue} opacity="0.55"/>
          <text x="100" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">KC</text>
        </>
      )}
    </svg>
  );
}

const newsData: Record<string, { date: string; title: string; text: string }[]> = {
  uk: [
    { date: "15.04.2024", title: "Теон на виставці Hannover Messe 2024", text: "Відвідайте наш стенд на найбільшій промисловій виставці світу. Ми представимо новітні розробки в галузі диспергування." },
    { date: "01.03.2024", title: "Нова версія KREI DISSOLVER-Butterfly", text: "Представляємо оновлену серію диссольверів з поліпшеними характеристиками продуктивності та енергоефективності." },
    { date: "10.02.2024", title: "Розширення сервісного відділу", text: "Наша команда фахівців готова надати швидкий та якісний сервіс вашого обладнання по всьому світу." },
  ],
  en: [
    { date: "15.04.2024", title: "Teon at Hannover Messe 2024", text: "Visit our booth at the world's largest industrial trade fair. We will present the latest developments in dispersing technology." },
    { date: "01.03.2024", title: "New KREI DISSOLVER-Butterfly Version", text: "Introducing the updated dissolver series with improved performance characteristics and energy efficiency." },
    { date: "10.02.2024", title: "Expansion of Service Department", text: "Our team of specialists is ready to provide fast and quality service for your equipment worldwide." },
  ],
  pl: [
    { date: "15.04.2024", title: "Teon na targach Hannover Messe 2024", text: "Odwiedź nasze stoisko na największych światowych targach przemysłowych. Zaprezentujemy najnowsze rozwiązania w dziedzinie dyspergowania." },
    { date: "01.03.2024", title: "Nowa wersja KREI DISSOLVER-Butterfly", text: "Prezentujemy zaktualizowaną serię dyspergatora z ulepszonymi parametrami wydajności i efektywności energetycznej." },
    { date: "10.02.2024", title: "Rozbudowa działu serwisowego", text: "Nasz zespół specjalistów jest gotowy do szybkiego i profesjonalnego serwisu Twoich urządzeń na całym świecie." },
  ],
};

const showsData: Record<string, { date: string; name: string; city: string; hall: string }[]> = {
  uk: [
    { date: "22-26 квіт 2024", name: "Hannover Messe", city: "Ганновер, Німеччина", hall: "Зал 6, Стенд B12" },
    { date: "05-08 чер 2024", name: "European Coatings Show", city: "Нюрнберг, Німеччина", hall: "Зал 9, Стенд C24" },
    { date: "10-14 вер 2024", name: "ACHEMA", city: "Франкфурт, Німеччина", hall: "Зал 4.2, Стенд A08" },
  ],
  en: [
    { date: "22-26 Apr 2024", name: "Hannover Messe", city: "Hannover, Germany", hall: "Hall 6, Stand B12" },
    { date: "05-08 Jun 2024", name: "European Coatings Show", city: "Nuremberg, Germany", hall: "Hall 9, Stand C24" },
    { date: "10-14 Sep 2024", name: "ACHEMA", city: "Frankfurt, Germany", hall: "Hall 4.2, Stand A08" },
  ],
  pl: [
    { date: "22-26 kwi 2024", name: "Hannover Messe", city: "Hanower, Niemcy", hall: "Hala 6, Stoisko B12" },
    { date: "05-08 cze 2024", name: "European Coatings Show", city: "Norymberga, Niemcy", hall: "Hala 9, Stoisko C24" },
    { date: "10-14 wrz 2024", name: "ACHEMA", city: "Frankfurt, Niemcy", hall: "Hala 4.2, Stoisko A08" },
  ],
};

const whyData: Record<string, { icon: string; titleKey: string; descKey: string }[]> = {
  uk: [
    { icon: "🏭", titleKey: "why.since", descKey: "why.since.desc" },
    { icon: "🔧", titleKey: "why.quality", descKey: "why.quality.desc" },
    { icon: "🌍", titleKey: "why.worldwide", descKey: "why.worldwide.desc" },
    { icon: "⚙️", titleKey: "why.innovation", descKey: "why.innovation.desc" },
  ],
  en: [
    { icon: "🏭", titleKey: "why.since", descKey: "why.since.desc" },
    { icon: "🔧", titleKey: "why.quality", descKey: "why.quality.desc" },
    { icon: "🌍", titleKey: "why.worldwide", descKey: "why.worldwide.desc" },
    { icon: "⚙️", titleKey: "why.innovation", descKey: "why.innovation.desc" },
  ],
  pl: [
    { icon: "🏭", titleKey: "why.since", descKey: "why.since.desc" },
    { icon: "🔧", titleKey: "why.quality", descKey: "why.quality.desc" },
    { icon: "🌍", titleKey: "why.worldwide", descKey: "why.worldwide.desc" },
    { icon: "⚙️", titleKey: "why.innovation", descKey: "why.innovation.desc" },
  ],
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang, t } = useLanguage();
  const products = getProducts(lang);
  const news = newsData[lang];
  const shows = showsData[lang];
  const why = whyData[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const productIcons = ["dissolver", "basket", "butterfly", "continuous"];

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <div
        className="relative min-h-[300px] overflow-hidden sm:min-h-[360px] md:min-h-[420px]"
        style={{
          background: slide.bg,
          transition: "background 0.8s ease",
        }}
      >
        {/* Machinery silhouettes — desktop only to avoid horizontal overflow */}
        <div className="absolute inset-0 hidden items-end justify-center gap-4 px-10 pb-[100px] md:flex">
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              width: `${55 + i * 12}px`,
              height: `${180 + i * 22}px`,
              backgroundColor: `rgba(26, 111, 181, ${0.5 + i * 0.07})`,
              borderRadius: "4px 4px 0 0",
              position: "relative",
              flexShrink: 0,
            }}>
              <div style={{ position: "absolute", top: "8px", left: "50%", transform: "translateX(-50%)", width: "3px", height: `${25 + i * 4}px`, backgroundColor: "rgba(200,200,220,0.5)", borderRadius: "2px" }} />
              <div style={{ position: "absolute", top: "50px", left: "8px", right: "8px", height: "50px", border: "1.5px solid rgba(200,220,255,0.35)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid rgba(200,220,255,0.5)" }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", inset: 0, backgroundColor: slide.overlay }} />

        <button
          type="button"
          onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded border border-white/50 bg-white/20 text-white md:left-4"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded border border-white/50 bg-white/20 text-white"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-[150px] left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-[108px]">
          {heroSlides.map((_, i) => (
            <button type="button" key={i} onClick={() => setCurrentSlide(i)} className="flex min-h-9 min-w-9 items-center justify-center p-0" aria-label={`Slide ${i + 1}`}>
              <span className={cn("block h-2.5 w-2.5 rounded-full border border-white/80 transition-colors md:h-[10px] md:w-[10px]", i === currentSlide ? "bg-white" : "bg-white/30")} />
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 md:grid-cols-4">
          {products.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={cn(
                "flex min-h-[60px] cursor-pointer items-center justify-center gap-2 bg-[rgba(0,30,70,0.82)] px-2 py-3 no-underline transition-colors hover:bg-[rgba(0,50,110,0.92)] sm:px-3 sm:py-3.5 md:min-h-0 md:py-3.5",
                idx % 2 === 0 && "border-r border-white/12",
                idx < 2 && "border-b border-white/12 md:border-b-0",
                idx < 3 && "md:border-r md:border-white/12"
              )}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#c8a832] bg-[#003f78] sm:h-9 sm:w-9">
                <span className="text-[6px] font-bold text-[#c8a832] sm:text-[7px]">KREI</span>
              </div>
              <div className="min-w-0 text-left">
                <div className="text-[6px] font-bold tracking-widest text-[#c8a832] sm:text-[7px]">KREI</div>
                <div className="line-clamp-2 text-[9px] font-bold leading-tight text-white sm:text-[10px]">
                  {product.name.replace("KREI ", "")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#f0f5fa] px-4 py-7 text-center">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-2 text-lg font-bold tracking-wide text-[#c8283c] sm:text-xl md:text-2xl md:tracking-[2px]">
            {t("hero.tagline1")}
          </h2>
          <p className="m-0 text-xs font-bold tracking-wide text-[#003f78] sm:text-sm md:tracking-[1px]">
            {t("hero.tagline2")}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12 xl:gap-[50px]">
          <div>
            <h3 style={{ color: "#c8a832", fontSize: "20px", marginBottom: "20px", fontWeight: "bold" }}>
              {t("about.title")}
            </h3>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "14px" }}>
              {t("about.text1")}
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "20px" }}>
              {t("about.text2")}
            </p>
            <div style={{ border: "2px solid #c8a832", padding: "12px 16px", display: "inline-block", fontSize: "12px", color: "#003f78", fontWeight: "bold" }}>
              <div style={{ fontSize: "10px", color: "#888", marginBottom: "4px" }}>Wirtschafts Woche</div>
              <div>Zum 3. Mai</div>
            </div>
          </div>

          <div
            className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-[280px]"
            style={{ background: "linear-gradient(135deg, #c8d8e8 0%, #a8c0d8 100%)" }}
          >
            <svg viewBox="0 0 640 280" width="100%" height="100%" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
              <rect width="640" height="280" fill="#87ceeb"/>
              <rect x="0" y="140" width="640" height="140" fill="#7cb87c"/>
              <rect x="60" y="90" width="180" height="80" fill="#d0d8e0"/>
              <rect x="80" y="75" width="140" height="20" fill="#b0b8c0"/>
              <rect x="250" y="100" width="100" height="70" fill="#c8d0d8"/>
              <rect x="355" y="105" width="80" height="65" fill="#d8d0c8"/>
              <rect x="60" y="170" width="300" height="40" fill="#999"/>
              {[0,30,60,90,300,330,360,420,450,480,510,540].map((x, i) => (
                <ellipse key={i} cx={x + 20} cy="158" rx="12" ry="10" fill="#5a9c5a"/>
              ))}
              <rect x="0" y="212" width="640" height="6" fill="#aaa"/>
            </svg>
            <div style={{ position: "absolute", bottom: "8px", right: "8px", background: "rgba(0,63,120,0.8)", color: "#fff", padding: "4px 8px", fontSize: "10px" }}>
              Теон — Hüllhorst
            </div>
          </div>
        </div>
      </div>

       {/* QuickLinks Section */}
      <QuickLinksSection />

      <div className="bg-[#f5f8fc] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-7 text-center text-lg font-bold tracking-wide text-[#003f78] sm:text-xl md:text-[22px]">
            {t("products.title")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-4">
            {products.map((product, idx) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="block cursor-pointer border border-[#e0e8f0] border-t-[3px] border-t-[#003f78] bg-white px-4 py-5 text-center no-underline transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,63,120,0.14)] sm:px-4 sm:py-5"
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                  <MachineryIllustration type={productIcons[idx]} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "10px" }}>
                  <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "2px solid #c8a832", backgroundColor: "#003f78", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#c8a832", fontSize: "6px", fontWeight: "bold" }}>KREI</span>
                  </div>
                  <h3 style={{ color: "#003f78", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px", margin: 0 }}>
                    {product.name}
                  </h3>
                </div>
                <p style={{ color: "#666", fontSize: "12px", lineHeight: "1.5", margin: "0 0 14px" }}>
                  {product.description}
                </p>
                <span style={{ color: "#003f78", fontSize: "12px", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "4px", borderBottom: "1px solid #003f78", paddingBottom: "2px" }}>
                  {t("products.more")} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

     

      <div className="bg-[#003f78] px-4 py-10 text-white sm:py-12 md:py-[50px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 text-center text-lg font-bold tracking-wide sm:text-xl md:mb-[30px] md:text-[22px]">
            {t("why.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
            {why.map((item) => (
              <div key={item.titleKey} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "34px", marginBottom: "12px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "8px", color: "#c8a832" }}>
                  {t(item.titleKey)}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)", lineHeight: "1.6", margin: 0 }}>
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="mb-5 flex flex-col gap-3 sm:mb-[22px] sm:flex-row sm:items-center sm:justify-between">
          <h2 className="m-0 text-lg font-bold tracking-wide text-[#003f78] sm:text-xl md:text-[22px]">
            {t("news.title")}
          </h2>
          <a href="#" className="flex w-fit shrink-0 items-center gap-1 text-sm font-bold text-[#1a6fb5] no-underline">
            {t("news.all")} <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-[22px]">
          {news.map((item) => (
            <div key={item.title} style={{ border: "1px solid #e0e8f0", padding: "20px", cursor: "pointer", borderTop: "3px solid #c8a832", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.09)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
            >
              <div style={{ color: "#999", fontSize: "12px", marginBottom: "8px" }}>{item.date}</div>
              <h3 style={{ color: "#003f78", fontSize: "14px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.4" }}>{item.title}</h3>
              <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.6", margin: "0 0 14px" }}>{item.text}</p>
              <a href="#" style={{ color: "#1a6fb5", fontSize: "12px", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                {t("news.read_more")} <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f8fc] px-4 py-8 sm:py-10 md:py-10 md:pb-11">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-5 text-lg font-bold tracking-wide text-[#003f78] sm:text-xl md:mb-[22px] md:text-[22px]">
            {t("exhibitions.title")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shows.map((show) => (
              <div key={show.name} style={{ backgroundColor: "#fff", border: "1px solid #e0e8f0", padding: "16px" }}>
                <div style={{ color: "#1a6fb5", fontSize: "12px", fontWeight: "bold", marginBottom: "6px" }}>{show.date}</div>
                <div style={{ color: "#003f78", fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>{show.name}</div>
                <div style={{ color: "#666", fontSize: "12px" }}>{show.city}</div>
                <div style={{ color: "#999", fontSize: "11px", marginTop: "4px" }}>{show.hall}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
