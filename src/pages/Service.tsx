import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Service() {
  const { lang, t } = useLanguage();

  const serviceItems: Record<string, { icon: string; title: string; text: string }[]> = {
    uk: [
      { icon: "🔧", title: "Монтаж та пуско-налагодження", text: "Кваліфіковані техніки NIEMANN здійснять монтаж та налагодження обладнання на вашому підприємстві." },
      { icon: "📋", title: "Технічне обслуговування", text: "Регулярне технічне обслуговування для забезпечення надійної роботи обладнання та максимального терміну служби." },
      { icon: "⚙️", title: "Ремонт та відновлення", text: "Оперативний ремонт будь-якої складності з використанням оригінальних запчастин NIEMANN." },
      { icon: "📦", title: "Запасні частини", text: "Широкий асортимент оригінальних запасних частин на складі, швидка доставка по всьому світу." },
      { icon: "🎓", title: "Навчання персоналу", text: "Навчання операторів та технічного персоналу на підприємстві або на нашому навчальному центрі у Хюллгорсті." },
      { icon: "📞", title: "Технічна підтримка", text: "Цілодобова технічна підтримка для вирішення будь-яких питань по телефону або онлайн." },
    ],
    en: [
      { icon: "🔧", title: "Installation & Commissioning", text: "Qualified NIEMANN technicians will install and commission the equipment at your facility." },
      { icon: "📋", title: "Maintenance", text: "Regular maintenance to ensure reliable equipment operation and maximum service life." },
      { icon: "⚙️", title: "Repair & Restoration", text: "Prompt repair of any complexity using original NIEMANN spare parts." },
      { icon: "📦", title: "Spare Parts", text: "Wide range of original spare parts in stock, fast delivery worldwide." },
      { icon: "🎓", title: "Staff Training", text: "Training of operators and technical staff at your site or at our training center in Hüllhorst." },
      { icon: "📞", title: "Technical Support", text: "Round-the-clock technical support for any questions by phone or online." },
    ],
    pl: [
      { icon: "🔧", title: "Montaż i uruchomienie", text: "Wykwalifikowani technicy NIEMANN przeprowadzą montaż i uruchomienie urządzeń w Twoim zakładzie." },
      { icon: "📋", title: "Konserwacja", text: "Regularna konserwacja zapewniająca niezawodne działanie urządzeń i maksymalną żywotność." },
      { icon: "⚙️", title: "Naprawa i regeneracja", text: "Sprawna naprawa o dowolnym stopniu złożoności z użyciem oryginalnych części zamiennych NIEMANN." },
      { icon: "📦", title: "Części zamienne", text: "Szeroki asortyment oryginalnych części zamiennych na stanie, szybka dostawa na cały świat." },
      { icon: "🎓", title: "Szkolenie personelu", text: "Szkolenie operatorów i personelu technicznego u klienta lub w naszym centrum szkoleniowym w Hüllhorst." },
      { icon: "📞", title: "Wsparcie techniczne", text: "Całodobowe wsparcie techniczne w rozwiązywaniu wszelkich problemów przez telefon lub online." },
    ],
  };

  const items = serviceItems[lang];

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div style={{ backgroundColor: "#003f78", padding: "30px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ color: "#fff", fontSize: "26px", fontWeight: "bold", margin: 0 }}>{t("service.title")}</h1>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginTop: "8px" }}>
            {t("breadcrumb.home")} / {t("service.title")}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "50px auto", padding: "0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "50px" }}>
          {items.map((item) => (
            <div
              key={item.title}
              style={{ backgroundColor: "#fff", border: "1px solid #e0e8f0", padding: "24px", borderTop: "3px solid #003f78", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,63,120,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{ color: "#003f78", fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: "#003f78", color: "#fff", padding: "30px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{t("service.cta")}</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", fontSize: "14px" }}>{t("service.cta.text")}</p>
          </div>
          <Link
            href="/contact"
            style={{ backgroundColor: "#c8a832", color: "#003f78", padding: "12px 28px", fontWeight: "bold", textDecoration: "none", fontSize: "14px", display: "inline-block" }}
          >
            {t("service.contact_us")} →
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
