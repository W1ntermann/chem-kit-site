import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Service() {
  const { lang, t } = useLanguage();

  const serviceItems: Record<string, { icon: string; title: string; text: string }[]> = {
    uk: [
      { icon: "🔧", title: "Монтаж та пуско-налагодження", text: "Кваліфіковані техніки Теон здійснять монтаж та налагодження обладнання на вашому підприємстві." },
      { icon: "📋", title: "Технічне обслуговування", text: "Регулярне технічне обслуговування для забезпечення надійної роботи обладнання та максимального терміну служби." },
      { icon: "⚙️", title: "Ремонт та відновлення", text: "Оперативний ремонт будь-якої складності з використанням оригінальних запчастин Теон." },
      { icon: "📦", title: "Запасні частини", text: "Широкий асортимент оригінальних запасних частин на складі, швидка доставка по всьому світу." },
      { icon: "🎓", title: "Навчання персоналу", text: "Навчання операторів та технічного персоналу на підприємстві або на нашому навчальному центрі у Хюллгорсті." },
      { icon: "📞", title: "Технічна підтримка", text: "Цілодобова технічна підтримка для вирішення будь-яких питань по телефону або онлайн." },
    ],
    en: [
      { icon: "🔧", title: "Installation & Commissioning", text: "Qualified Teon technicians will install and commission the equipment at your facility." },
      { icon: "📋", title: "Maintenance", text: "Regular maintenance to ensure reliable equipment operation and maximum service life." },
      { icon: "⚙️", title: "Repair & Restoration", text: "Prompt repair of any complexity using original Teon spare parts." },
      { icon: "📦", title: "Spare Parts", text: "Wide range of original spare parts in stock, fast delivery worldwide." },
      { icon: "🎓", title: "Staff Training", text: "Training of operators and technical staff at your site or at our training center in Hüllhorst." },
      { icon: "📞", title: "Technical Support", text: "Round-the-clock technical support for any questions by phone or online." },
    ],
    pl: [
      { icon: "🔧", title: "Montaż i uruchomienie", text: "Wykwalifikowani technicy Teon przeprowadzą montaż i uruchomienie urządzeń w Twoim zakładzie." },
      { icon: "📋", title: "Konserwacja", text: "Regularna konserwacja zapewniająca niezawodne działanie urządzeń i maksymalną żywotność." },
      { icon: "⚙️", title: "Naprawa i regeneracja", text: "Sprawna naprawa o dowolnym stopniu złożoności z użyciem oryginalnych części zamiennych Teon." },
      { icon: "📦", title: "Części zamienne", text: "Szeroki asortyment oryginalnych części zamiennych na stanie, szybka dostawa na cały świat." },
      { icon: "🎓", title: "Szkolenie personelu", text: "Szkolenie operatorów i personelu technicznego u klienta lub w naszym centrum szkoleniowym w Hüllhorst." },
      { icon: "📞", title: "Wsparcie techniczne", text: "Całodobowe wsparcie techniczne w rozwiązywaniu wszelkich problemów przez telefon lub online." },
    ],
  };

  const items = serviceItems[lang];

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div className="bg-[#003f78] px-4 py-6 sm:py-8 md:py-[30px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="m-0 text-xl font-bold text-white sm:text-2xl md:text-[26px]">{t("service.title")}</h1>
          <div className="mt-2 text-[13px] text-white/70">
            {t("breadcrumb.home")} / {t("service.title")}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
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

        <div className="flex flex-col gap-5 bg-[#003f78] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:p-8">
          <div className="min-w-0">
            <h3 className="m-0 mb-2 text-lg">{t("service.cta")}</h3>
            <p className="m-0 text-sm text-white/85 sm:text-[14px]">{t("service.cta.text")}</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#c8a832] px-7 py-3 text-center text-sm font-bold text-[#003f78] no-underline hover:brightness-105 sm:shrink-0"
          >
            {t("service.contact_us")} →
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
