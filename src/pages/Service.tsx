import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Service() {
  const { lang, t } = useLanguage();

  const items = [
    { icon: "🔧", titleKey: "service.item.install.title", textKey: "service.item.install.text" },
    { icon: "📋", titleKey: "service.item.maintenance.title", textKey: "service.item.maintenance.text" },
    { icon: "⚙️", titleKey: "service.item.repair.title", textKey: "service.item.repair.text" },
    { icon: "📦", titleKey: "service.item.spares.title", textKey: "service.item.spares.text" },
    { icon: "🎓", titleKey: "service.item.training.title", textKey: "service.item.training.text" },
    { icon: "📞", titleKey: "service.item.support.title", textKey: "service.item.support.text" },
  ];

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
              key={item.titleKey}
              style={{ backgroundColor: "#fff", border: "1px solid #e0e8f0", padding: "24px", borderTop: "3px solid #003f78", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,63,120,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{ color: "#003f78", fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>{t(item.titleKey)}</h3>
              <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>{t(item.textKey)}</p>
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
