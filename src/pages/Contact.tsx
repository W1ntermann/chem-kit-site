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
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div className="bg-[#003f78] px-4 py-6 sm:py-8 md:py-[30px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="m-0 text-xl font-bold text-white sm:text-2xl md:text-[26px]">{t("contact.title")}</h1>
          <div className="mt-2 text-[13px] text-white/70">
            {t("breadcrumb.home")} / {t("contact.title")}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,1.65fr)] lg:gap-10 xl:gap-[40px]">
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
                  <div style={{ fontWeight: "bold", color: "#003f78", marginBottom: "4px", fontSize: "14px" }}>Теон</div>
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

            <div className="relative mt-8 flex min-h-[180px] items-center justify-center overflow-hidden bg-[#d8e8f0] sm:h-[200px] sm:min-h-0">
              <svg viewBox="0 0 300 200" className="h-auto max-h-full w-full max-w-[300px] opacity-70">
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
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

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
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

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-[11px] text-[#888]">{t("contact.required")}</div>
                  <button
                    type="submit"
                    className="w-full border-0 bg-[#003f78] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1a6fb5] sm:w-auto"
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
