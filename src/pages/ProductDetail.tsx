import { useParams, Link } from "wouter";
import { ChevronRight, Download, Mail, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getProductBySlug } from "@/translations/productData";

function MachineryDetailSVG({ type }: { type: string }) {
  const blue = "#1565c0";
  const darkBlue = "#003f78";
  const lightBlue = "#42a5f5";
  const gray = "#9e9e9e";
  const silver = "#bdbdbd";

  if (type === "dissolver") return (
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px" }}>
      <rect x="40" y="80" width="220" height="170" rx="6" fill={blue}/>
      <rect x="70" y="50" width="160" height="40" rx="5" fill={darkBlue}/>
      <rect x="130" y="15" width="40" height="45" fill={gray}/>
      <rect x="118" y="10" width="64" height="12" rx="3" fill={silver}/>
      <ellipse cx="150" cy="255" rx="70" ry="18" fill={darkBlue} opacity="0.5"/>
      <rect x="110" y="230" width="80" height="40" rx="2" fill={silver}/>
      <rect x="55" y="95" width="190" height="10" rx="2" fill={lightBlue} opacity="0.4"/>
      <circle cx="150" cy="165" r="45" fill={lightBlue} opacity="0.85"/>
      <circle cx="150" cy="165" r="30" fill={blue}/>
      <text x="150" y="172" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">KD</text>
      <rect x="90" y="260" width="20" height="50" rx="2" fill={darkBlue}/>
      <rect x="190" y="260" width="20" height="50" rx="2" fill={darkBlue}/>
      <rect x="60" y="305" width="180" height="10" rx="2" fill={darkBlue}/>
    </svg>
  );

  if (type === "basket") return (
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px" }}>
      <rect x="50" y="70" width="200" height="150" rx="6" fill={blue}/>
      <rect x="80" y="40" width="140" height="38" rx="5" fill={darkBlue}/>
      <rect x="130" y="12" width="40" height="35" fill={gray}/>
      <rect x="80" y="220" width="140" height="70" rx="2" fill={darkBlue}/>
      <ellipse cx="150" cy="220" rx="60" ry="12" fill={darkBlue} opacity="0.6"/>
      <circle cx="150" cy="145" r="40" fill={lightBlue} opacity="0.85"/>
      <path d="M 120 130 L 120 165 Q 150 180 180 165 L 180 130 Z" fill={blue} opacity="0.7"/>
      <text x="150" y="152" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">KB</text>
      <rect x="85" y="260" width="130" height="8" rx="2" fill={silver} opacity="0.5"/>
      <rect x="85" y="275" width="130" height="8" rx="2" fill={silver} opacity="0.5"/>
    </svg>
  );

  if (type === "butterfly") return (
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px" }}>
      <rect x="45" y="75" width="210" height="155" rx="6" fill={blue}/>
      <rect x="75" y="48" width="150" height="35" rx="5" fill={darkBlue}/>
      <rect x="130" y="15" width="40" height="40" fill={gray}/>
      <rect x="45" y="230" width="210" height="65" rx="2" fill={darkBlue}/>
      <ellipse cx="150" cy="230" rx="75" ry="14" fill={darkBlue} opacity="0.7"/>
      <path d="M 100 150 Q 120 120 150 130 Q 180 120 200 150 Q 180 180 150 170 Q 120 180 100 150 Z" fill={lightBlue} opacity="0.9"/>
      <circle cx="150" cy="150" r="12" fill={darkBlue}/>
      <text x="150" y="155" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">DBF</text>
    </svg>
  );

  return (
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px" }}>
      <rect x="30" y="85" width="240" height="130" rx="6" fill={blue}/>
      <rect x="60" y="58" width="180" height="35" rx="5" fill={darkBlue}/>
      <rect x="130" y="20" width="40" height="45" fill={gray}/>
      <rect x="30" y="215" width="240" height="55" rx="2" fill={darkBlue}/>
      <rect x="40" y="100" width="220" height="100" rx="3" fill={lightBlue} opacity="0.6"/>
      <rect x="55" y="115" width="40" height="70" rx="2" fill={blue}/>
      <rect x="130" y="115" width="40" height="70" rx="2" fill={blue}/>
      <rect x="205" y="115" width="40" height="70" rx="2" fill={blue}/>
      <text x="150" y="158" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">KC</text>
      <rect x="30" y="268" width="240" height="12" rx="2" fill={silver} opacity="0.4"/>
    </svg>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const product = getProductBySlug(slug || "", lang);

  if (!product) {
    return (
      <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
        <Header />
        <div style={{ textAlign: "center", padding: "80px 16px" }}>
          <h1 style={{ color: "#003f78", fontSize: "24px" }}>Product not found</h1>
          <Link href="/products" style={{ color: "#1a6fb5", display: "inline-block", marginTop: "16px" }}>
            ← {t("product.back")}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allProducts = ["krei-dissolver", "krei-basket-mill", "krei-dissolver-butterfly", "krei-continuous-mill"];
  const currentIndex = allProducts.indexOf(slug || "");

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />

      <div className="bg-[#003f78] px-4 py-6 sm:py-7 md:py-7 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/70">
            <Link href="/" className="shrink-0 text-white/70 no-underline hover:text-white">
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <Link href="/products" className="shrink-0 text-white/70 no-underline hover:text-white">
              {t("breadcrumb.products")}
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="min-w-0 break-words text-white">{product.name}</span>
          </div>
          <h1 className="m-0 text-xl font-bold tracking-wide text-white sm:text-2xl md:text-[26px]">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-[#c8a832]">{product.tagline}</p>
        </div>
      </div>

      <div className="overflow-x-auto border-b border-[#e0e8f0] bg-[#f0f5fa] px-4 [-webkit-overflow-scrolling:touch]">
        <div className="mx-auto flex max-w-[1200px] gap-0">
          {allProducts.map((s, i) => {
            const names = [
              "KREI DISSOLVER",
              "KREI BASKET-MILL",
              "KREI DISSOLVER-BUTTERFLY",
              "KREI CONTINUOUS-MILL",
            ];
            return (
              <Link
                key={s}
                href={`/products/${s}`}
                style={{
                  padding: "12px 18px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: i === currentIndex ? "#003f78" : "#666",
                  borderBottom: i === currentIndex ? "3px solid #003f78" : "3px solid transparent",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  display: "block",
                }}
              >
                {names[i]}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-10">
        <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12 xl:gap-[50px]">
          <div>
            <div className="relative flex h-auto min-h-[220px] items-center justify-center border border-[#d0d8e8] bg-[#e8eef8] p-6 sm:h-[280px] sm:min-h-0 lg:p-[30px]">
              <MachineryDetailSVG type={product.svgType} />
              {/* KREI badge */}
              <div style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                backgroundColor: "#003f78",
                border: "2px solid #c8a832",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ color: "#c8a832", fontSize: "8px", fontWeight: "bold", letterSpacing: "0.5px" }}>KREI</span>
              </div>
            </div>
            {/* Action buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              <Link
                href="/contact"
                style={{
                  backgroundColor: "#003f78",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "background 0.2s",
                }}
              >
                <Mail size={16} /> {t("product.request")}
              </Link>
              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#003f78",
                  border: "2px solid #003f78",
                  padding: "10px 20px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#003f78"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#003f78"; }}
              >
                <Download size={16} /> {t("product.download")}
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "48px", height: "48px",
                borderRadius: "50%",
                border: "2px solid #c8a832",
                backgroundColor: "#003f78",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ color: "#c8a832", fontSize: "9px", fontWeight: "bold" }}>KREI</span>
              </div>
              <div>
                <div style={{ color: "#c8a832", fontSize: "12px", fontWeight: "bold", letterSpacing: "3px" }}>KREI</div>
                <h2 style={{ color: "#003f78", fontSize: "22px", fontWeight: "bold", margin: 0 }}>
                  {product.name.replace("KREI ", "")}
                </h2>
              </div>
            </div>

            <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", marginBottom: "24px" }}>
              {product.fullDescription}
            </p>

            {/* Features grid */}
            <h3 style={{ color: "#003f78", fontSize: "16px", fontWeight: "bold", marginBottom: "14px", borderBottom: "2px solid #e0e8f0", paddingBottom: "8px" }}>
              {t("product.features")}
            </h3>
            <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2">
              {product.features.map((feature) => (
                <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#444" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#003f78", flexShrink: 0, marginTop: "5px" }} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-2 lg:gap-8 xl:gap-[30px]">
          {/* Applications */}
          <div style={{ backgroundColor: "#f5f8fc", border: "1px solid #e0e8f0", padding: "24px", borderTop: "3px solid #c8a832" }}>
            <h3 style={{ color: "#003f78", fontSize: "16px", fontWeight: "bold", marginBottom: "16px" }}>
              {t("product.applications")}
            </h3>
            <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
              {product.applications.map((app) => (
                <li key={app} style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #e0e8f0",
                  fontSize: "14px",
                  color: "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <ChevronRight size={14} style={{ color: "#c8a832", flexShrink: 0 }} />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-x-auto bg-[#003f78] p-5 sm:p-6">
            <h3 className="mb-4 text-base font-bold text-white">{t("product.technical")}</h3>
            <table className="w-full min-w-[260px] border-collapse">
              <tbody>
                {product.technicalSpecs.map((spec, i) => (
                  <tr key={spec.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                    <td style={{ padding: "8px 0", fontSize: "13px", color: "rgba(255,255,255,0.8)", paddingRight: "12px" }}>
                      {spec.label}
                    </td>
                    <td style={{ padding: "8px 0", fontSize: "13px", color: "#fff", fontWeight: "bold", textAlign: "right" }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10 lg:mb-12">
          <h3 className="mb-4 border-b-2 border-[#003f78] pb-2 text-lg font-bold text-[#003f78]">
            {t("product.models")}
          </h3>
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[520px] border-collapse text-sm sm:min-w-0">
            <thead>
              <tr style={{ backgroundColor: "#003f78", color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>{t("products.models")}</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Motor</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Volume</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}></th>
              </tr>
            </thead>
            <tbody>
              {product.models.map((model, i) => (
                <tr key={model.name} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f5f8fc", borderBottom: "1px solid #e0e8f0" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#003f78" }}>{model.name}</td>
                  <td style={{ padding: "12px 16px", color: "#555" }}>{model.power}</td>
                  <td style={{ padding: "12px 16px", color: "#555" }}>{model.volume}</td>
                  <td style={{ padding: "12px 16px", textAlign: "center" }}>
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "#003f78",
                        color: "#fff",
                        padding: "6px 14px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        display: "inline-block",
                        transition: "background 0.2s",
                      }}
                    >
                      {t("product.request")}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 border border-[#e0e8f0] border-l-[5px] border-l-[#c8a832] bg-[#f5f8fc] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6 md:mb-10 md:px-[30px] md:py-6">
          <div className="min-w-0">
            <h3 className="m-0 mb-1.5 text-base font-bold text-[#003f78] md:text-[17px]">
              {t("product.contact_expert")}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#555] sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 md:text-[14px]">
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="shrink-0 text-[#003f78]" />
                +49 (0) 5744 / 508-0
              </span>
              <span className="flex items-center gap-1.5 break-all">
                <Mail size={14} className="shrink-0 text-[#003f78]" />
                info@niemann.de
              </span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#003f78] px-6 py-3 text-center text-sm font-bold text-white no-underline transition-colors hover:bg-[#1a6fb5] sm:shrink-0 md:px-7"
          >
            {t("product.request")} →
          </Link>
        </div>

        {/* Back link */}
        <div>
          <Link href="/products" style={{ color: "#1a6fb5", textDecoration: "none", fontSize: "14px", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            {t("product.back")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
