import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subjectOptions = [
    { value: "", labelKey: "contact.subject.select" },
    { value: "product", labelKey: "contact.subject.product" },
    { value: "service", labelKey: "contact.subject.service" },
    { value: "parts", labelKey: "contact.subject.parts" },
    { value: "general", labelKey: "contact.subject.general" },
    { value: "other", labelKey: "contact.subject.other" },
  ];

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div style={{ backgroundColor: "#003f78", padding: "30px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ color: "#fff", fontSize: "26px", fontWeight: "bold", margin: 0 }}>{t("contact.title")}</h1>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginTop: "8px" }}>
            {t("breadcrumb.home")} / {t("contact.title")}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "50px auto", padding: "0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "40px" }}>
          {/* Contact info */}
          <div>
            <h2 style={{ color: "#003f78", fontSize: "20px", fontWeight: "bold", marginBottom: "24px", borderBottom: "2px solid #003f78", paddingBottom: "10px" }}>
              {t("contact.info")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#003f78", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <div style={{ fontWeight: "bold", color: "#003f78", marginBottom: "4px", fontSize: "14px" }}>Wilhelm Niemann GmbH & Co. KG</div>
                  <div style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>
                    Lange Straße 5<br />32609 Hüllhorst<br />Deutschland
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#003f78", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <div style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>
                    +49 (0) 5744 / 508-0<br />Fax: +49 (0) 5744 / 508-190
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#003f78", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <a href="mailto:info@niemann.de" style={{ color: "#1a6fb5", fontSize: "13px", textDecoration: "none" }}>
                    info@niemann.de
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#003f78", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={18} style={{ color: "#fff" }} />
                </div>
                <div style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>
                  Mo – Fr: 07:00 – 17:00 Uhr
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{ marginTop: "30px", backgroundColor: "#d8e8f0", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <svg viewBox="0 0 300 200" width="300" height="200" style={{ opacity: 0.7 }}>
                <rect width="300" height="200" fill="#c8dce8"/>
                <rect x="0" y="95" width="300" height="3" fill="#b0c8dc" opacity="0.6"/>
                <rect x="148" y="0" width="3" height="200" fill="#b0c8dc" opacity="0.6"/>
                <circle cx="150" cy="98" r="12" fill="#003f78"/>
                <circle cx="150" cy="98" r="6" fill="#fff"/>
                <rect x="60" y="30" width="60" height="40" rx="2" fill="#b8ccd8" opacity="0.7"/>
                <rect x="180" y="50" width="80" height="30" rx="2" fill="#b8ccd8" opacity="0.7"/>
                <rect x="20" y="100" width="100" height="25" rx="2" fill="#aac0cc" opacity="0.6"/>
                <rect x="180" y="110" width="70" height="20" rx="2" fill="#aac0cc" opacity="0.6"/>
              </svg>
              <div style={{ position: "absolute", bottom: "8px", left: "8px", backgroundColor: "rgba(0,63,120,0.85)", color: "#fff", padding: "4px 8px", fontSize: "11px", borderRadius: "2px" }}>
                Hüllhorst, Deutschland
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 style={{ color: "#003f78", fontSize: "20px", fontWeight: "bold", marginBottom: "24px", borderBottom: "2px solid #003f78", paddingBottom: "10px" }}>
              {t("contact.write")}
            </h2>

            {submitted ? (
              <div style={{ backgroundColor: "#e8f5e9", border: "1px solid #a5d6a7", padding: "30px", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
                <h3 style={{ color: "#2e7d32", fontSize: "18px", marginBottom: "10px" }}>{t("contact.success")}</h3>
                <p style={{ color: "#555", fontSize: "14px" }}>{t("contact.success.text")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>{t("contact.name")}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", border: "1px solid #ccc", padding: "9px 12px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#003f78")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>{t("contact.company")}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{ width: "100%", border: "1px solid #ccc", padding: "9px 12px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#003f78")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>{t("contact.email")}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", border: "1px solid #ccc", padding: "9px 12px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#003f78")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>{t("contact.phone")}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: "100%", border: "1px solid #ccc", padding: "9px 12px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#003f78")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>{t("contact.subject")}</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", border: "1px solid #ccc", padding: "9px 12px", fontSize: "13px", outline: "none", boxSizing: "border-box", backgroundColor: "#fff", appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#003f78")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>{t("contact.message")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ width: "100%", border: "1px solid #ccc", padding: "9px 12px", fontSize: "13px", outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "Arial, sans-serif" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#003f78")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "11px", color: "#888" }}>{t("contact.required")}</div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#003f78",
                      color: "#fff",
                      border: "none",
                      padding: "12px 28px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a6fb5")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#003f78")}
                  >
                    {t("contact.send")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
