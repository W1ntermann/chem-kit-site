import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: "#003f78", color: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "14px", color: "#fff", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "8px" }}>
              {t("nav.company")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[t("company.about"), t("company.history"), t("company.certificates")].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "14px", color: "#fff", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "8px" }}>
              {t("nav.products")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["KREI DISSOLVER", "KREI BASKET-MILL", "KREI DISSOLVER-BUTTERFLY", "KREI CONTINUOUS-MILL"].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  <Link href={`/products/krei-${item.toLowerCase().replace("krei ", "").replace(/ /g, "-")}`}
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }}
                    onMouseEnter={(e: any) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e: any) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "14px", color: "#fff", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "8px" }}>
              {t("nav.service")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Монтаж", "Технічне обслуговування", "Ремонт", "Запчастини"].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "14px", color: "#fff", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "8px" }}>
              {t("nav.contact")}
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
              <div style={{ fontWeight: "bold" }}>Wilhelm Niemann GmbH & Co. KG</div>
              <div>Lange Straße 5</div>
              <div>32609 Hüllhorst</div>
              <div>Deutschland</div>
              <div style={{ marginTop: "10px" }}>+49 (0) 5744 / 508-0</div>
              <div>
                <a href="mailto:info@niemann.de" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
                  info@niemann.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#002a52", padding: "12px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>
            {t("footer.rights")}
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Impressum", "Datenschutz", "Sitemap"].map((item) => (
              <a key={item} href="#" style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
