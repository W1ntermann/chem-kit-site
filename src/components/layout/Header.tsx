import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, X } from "lucide-react";
import { useLanguage, type Language } from "@/context/LanguageContext";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "pl", flag: "🇵🇱", label: "Polski" },
  { code: "uk", flag: "🇺🇦", label: "Українська" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();

  const navItems = [
    { labelKey: "nav.company", href: "/company" },
    { labelKey: "nav.products", href: "/products" },
    { labelKey: "nav.service", href: "/service" },
    { labelKey: "nav.contact", href: "/contact" },
  ];

  const topItems = [
    { labelKey: "nav.news", href: "#" },
    { labelKey: "nav.exhibitions", href: "#" },
    { labelKey: "nav.contact_person", href: "#" },
    { labelKey: "nav.worldwide", href: "#" },
  ];

  return (
    <header>
      {/* Top bar */}
      <div style={{ backgroundColor: "#f0f0f0", borderBottom: "1px solid #ddd" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Language flags */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => setLang(language.code)}
                title={language.label}
                style={{
                  background: "none",
                  border: lang === language.code ? "2px solid #003f78" : "2px solid transparent",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "1px 3px",
                  opacity: lang === language.code ? 1 : 0.55,
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                onMouseEnter={(e) => { if (lang !== language.code) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { if (lang !== language.code) e.currentTarget.style.opacity = "0.55"; }}
              >
                <span>{language.flag}</span>
                <span style={{ fontSize: "10px", color: "#333", fontWeight: lang === language.code ? "bold" : "normal" }}>
                  {language.code.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          {/* Top nav links */}
          <nav style={{ display: "flex", alignItems: "center" }}>
            {topItems.map((item, idx) => (
              <span key={item.labelKey} style={{ display: "flex", alignItems: "center" }}>
                <a
                  href={item.href}
                  style={{
                    fontSize: "12px",
                    color: "#444",
                    textDecoration: "none",
                    padding: "3px 8px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fb5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
                >
                  {t(item.labelKey)}
                </a>
                {idx < topItems.length - 1 && <span style={{ color: "#bbb", fontSize: "12px" }}>|</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div style={{
        backgroundColor: "#fff",
        borderBottom: "2px solid #003f78",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "21px", color: "#003f78", letterSpacing: "1px", lineHeight: 1.1 }}>
                WILHELM NIEMANN
              </div>
              <div style={{ fontSize: "9.5px", color: "#003f78", letterSpacing: "3.5px", fontWeight: 600 }}>
                MASCHINENFABRIK
              </div>
            </div>
          </Link>

          {/* Main nav */}
          <nav style={{ display: "flex", alignItems: "stretch", height: "72px" }}>
            {navItems.map((item) => {
              const isActive = location === item.href || (item.href === "/products" && location.startsWith("/products"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    color: isActive ? "#003f78" : "#444",
                    fontSize: "13px",
                    fontWeight: "700",
                    padding: "0 16px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.5px",
                    borderBottom: isActive ? "3px solid #003f78" : "3px solid transparent",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    paddingTop: "3px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#1a6fb5";
                      e.currentTarget.style.borderBottomColor = "#1a6fb5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#444";
                      e.currentTarget.style.borderBottomColor = "transparent";
                    }
                  }}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 12px",
                color: "#444",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fb5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </nav>

          {/* Logo icon (N badge) */}
          <div style={{
            width: "68px",
            height: "68px",
            border: "3px solid #003f78",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <rect x="2" y="2" width="46" height="46" rx="0" fill="none" stroke="#003f78" strokeWidth="1.5"/>
              <text x="25" y="32" textAnchor="middle" fill="#003f78" fontSize="20" fontWeight="bold" fontFamily="Arial">N</text>
              <text x="25" y="13" textAnchor="middle" fill="#003f78" fontSize="5.5" fontFamily="Arial" letterSpacing="1">niemann</text>
            </svg>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div style={{ backgroundColor: "#f8f8f8", borderTop: "1px solid #e8e8e8", padding: "12px 16px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #003f78", backgroundColor: "#fff" }}>
                <input
                  type="text"
                  placeholder={t("search.placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: "#333",
                  }}
                  autoFocus
                />
                <button
                  style={{
                    background: "#003f78",
                    border: "none",
                    padding: "10px 16px",
                    cursor: "pointer",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
