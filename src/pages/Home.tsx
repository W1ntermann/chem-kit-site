import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { QuickLinksSection } from "./QuickLinks";

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
    <svg viewBox="0 0 200 200" width="100%" height="150" style={{ maxWidth: "150px" }}>
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
    { date: "15.04.2024", title: "Wilhelm Niemann на виставці Hannover Messe 2024", text: "Відвідайте наш стенд на найбільшій промисловій виставці світу. Ми представимо новітні розробки в галузі диспергування." },
    { date: "01.03.2024", title: "Нова версія KREI DISSOLVER-Butterfly", text: "Представляємо оновлену серію диссольверів з поліпшеними характеристиками продуктивності та енергоефективності." },
    { date: "10.02.2024", title: "Розширення сервісного відділу", text: "Наша команда фахівців готова надати швидкий та якісний сервіс вашого обладнання по всьому світу." },
  ],
  en: [
    { date: "15.04.2024", title: "Wilhelm Niemann at Hannover Messe 2024", text: "Visit our booth at the world's largest industrial trade fair. We will present the latest developments in dispersing technology." },
    { date: "01.03.2024", title: "New KREI DISSOLVER-Butterfly Version", text: "Introducing the updated dissolver series with improved performance characteristics and energy efficiency." },
    { date: "10.02.2024", title: "Expansion of Service Department", text: "Our team of specialists is ready to provide fast and quality service for your equipment worldwide." },
  ],
  pl: [
    { date: "15.04.2024", title: "Wilhelm Niemann na targach Hannover Messe 2024", text: "Odwiedź nasze stoisko na największych światowych targach przemysłowych. Zaprezentujemy najnowsze rozwiązania w dziedzinie dyspergowania." },
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
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <div style={{
        position: "relative",
        height: "420px",
        background: slide.bg,
        overflow: "hidden",
        transition: "background 0.8s ease",
      }}>
        {/* Machinery silhouettes */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          gap: "16px", padding: "0 40px 100px",
        }}>
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

        {/* Arrows */}
        <button onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
          style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "2px", padding: "8px", cursor: "pointer", color: "#fff", zIndex: 10, display: "flex" }}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)}
          style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "2px", padding: "8px", cursor: "pointer", color: "#fff", zIndex: 10, display: "flex" }}>
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: "108px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 10 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} style={{ width: "10px", height: "10px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.8)", background: i === currentSlide ? "#fff" : "rgba(255,255,255,0.3)", cursor: "pointer", padding: 0, transition: "background 0.3s" }} />
          ))}
        </div>

        {/* Product categories bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", zIndex: 10 }}>
          {products.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              style={{
                background: "rgba(0, 30, 70, 0.82)",
                borderRight: idx < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                padding: "14px 10px",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onMouseEnter={(e: any) => (e.currentTarget.style.background = "rgba(0, 50, 110, 0.92)")}
              onMouseLeave={(e: any) => (e.currentTarget.style.background = "rgba(0, 30, 70, 0.82)")}
            >
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2px solid #c8a832", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: "#003f78" }}>
                <span style={{ color: "#c8a832", fontSize: "7px", fontWeight: "bold" }}>KREI</span>
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: "#c8a832", fontSize: "7px", letterSpacing: "2px", fontWeight: "bold" }}>KREI</div>
                <div style={{ color: "#fff", fontSize: "10px", fontWeight: "bold", lineHeight: "1.2" }}>
                  {product.name.replace("KREI ", "")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div style={{ backgroundColor: "#f0f5fa", padding: "28px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: "#c8283c", fontSize: "24px", fontWeight: "bold", letterSpacing: "2px", margin: "0 0 8px" }}>
            {t("hero.tagline1")}
          </h2>
          <p style={{ color: "#003f78", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", margin: 0 }}>
            {t("hero.tagline2")}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "50px", alignItems: "start" }}>
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

          {/* Aerial illustration */}
          <div style={{ background: "linear-gradient(135deg, #c8d8e8 0%, #a8c0d8 100%)", height: "280px", position: "relative", overflow: "hidden" }}>
            <svg viewBox="0 0 640 280" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
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
              Wilhelm Niemann GmbH & Co. — Hüllhorst
            </div>
          </div>
        </div>
      </div>

       {/* QuickLinks Section */}
      <QuickLinksSection />

      {/* Products Section */}
      <div style={{ backgroundColor: "#f5f8fc", padding: "50px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#003f78", fontSize: "22px", fontWeight: "bold", marginBottom: "28px", textAlign: "center", letterSpacing: "1px" }}>
            {t("products.title")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
            {products.map((product, idx) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e0e8f0",
                  padding: "20px 16px",
                  textAlign: "center",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderTop: "3px solid #003f78",
                  display: "block",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,63,120,0.14)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
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

     

      {/* Why Niemann */}
      <div style={{ backgroundColor: "#003f78", padding: "50px 16px", color: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "30px", textAlign: "center", letterSpacing: "1px" }}>
            {t("why.title")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "30px" }}>
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

      {/* News */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
          <h2 style={{ color: "#003f78", fontSize: "22px", fontWeight: "bold", margin: 0, letterSpacing: "1px" }}>
            {t("news.title")}
          </h2>
          <a href="#" style={{ color: "#1a6fb5", fontSize: "13px", textDecoration: "none", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
            {t("news.all")} <ArrowRight size={14} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
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

      {/* Exhibitions */}
      <div style={{ backgroundColor: "#f5f8fc", padding: "40px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#003f78", fontSize: "22px", fontWeight: "bold", marginBottom: "22px", letterSpacing: "1px" }}>
            {t("exhibitions.title")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
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
