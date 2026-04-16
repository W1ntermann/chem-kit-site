import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { ChevronRight, ArrowRight } from "lucide-react";

function MachineryIllustration({ type }: { type: string }) {
  const blue = "#1565c0";
  const darkBlue = "#003f78";
  const lightBlue = "#42a5f5";
  const gray = "#9e9e9e";

  return (
    <svg viewBox="0 0 200 200" width="100%" height="160" style={{ maxWidth: "160px" }}>
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
          <circle cx="100" cy="100" r="10" fill={blue}/>
          <text x="100" y="104" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">DBF</text>
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

export default function Products() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      <div style={{ backgroundColor: "#003f78", padding: "30px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ color: "#fff", fontSize: "26px", fontWeight: "bold", margin: 0 }}>
            {t("products.page.title")}
          </h1>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginTop: "8px" }}>
            {t("breadcrumb.home")} / {t("breadcrumb.products")}
          </div>
        </div>
      </div>

      {/* Product tab bar */}
      <div style={{ backgroundColor: "#f0f5fa", borderBottom: "1px solid #e0e8f0", overflowX: "auto" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", display: "flex" }}>
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              style={{
                padding: "12px 18px",
                fontSize: "12px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "#555",
                borderBottom: "3px solid transparent",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#003f78";
                e.currentTarget.style.borderBottomColor = "#003f78";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#555";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 16px" }}>
        {products.map((product, idx) => (
          <div
            key={product.id}
            style={{
              marginBottom: "40px",
              border: "1px solid #e0e8f0",
              borderTop: "4px solid #003f78",
              backgroundColor: "#fff",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,63,120,0.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
          >
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "0" }}>
              {/* Image */}
              <div style={{
                backgroundColor: "#e8eef8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "30px 20px",
                borderRight: "1px solid #e0e8f0",
              }}>
                <MachineryIllustration type={product.svgType} />
              </div>

              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "38px", height: "38px",
                      borderRadius: "50%",
                      border: "2px solid #c8a832",
                      backgroundColor: "#003f78",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ color: "#c8a832", fontSize: "8px", fontWeight: "bold" }}>KREI</span>
                    </div>
                    <div>
                      <div style={{ color: "#c8a832", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px" }}>KREI</div>
                      <h2 style={{ color: "#003f78", fontSize: "20px", fontWeight: "bold", margin: 0 }}>
                        {product.name.replace("KREI ", "")}
                      </h2>
                    </div>
                  </div>
                  <span style={{
                    backgroundColor: "#f0f5fa",
                    border: "1px solid #d0dce8",
                    color: "#003f78",
                    fontSize: "11px",
                    fontWeight: "bold",
                    padding: "4px 10px",
                    flexShrink: 0,
                  }}>
                    {product.category}
                  </span>
                </div>

                <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "18px" }}>
                  {product.description}
                </p>

                {/* Key features preview */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "20px" }}>
                  {product.features.slice(0, 4).map((feature) => (
                    <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "13px", color: "#555" }}>
                      <ChevronRight size={13} style={{ color: "#003f78", flexShrink: 0, marginTop: "2px" }} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <Link
                    href={`/products/${product.slug}`}
                    style={{
                      backgroundColor: "#003f78",
                      color: "#fff",
                      padding: "10px 22px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a6fb5")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#003f78")}
                  >
                    {t("products.more")} <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    style={{
                      color: "#003f78",
                      fontSize: "13px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      borderBottom: "1px solid #003f78",
                      paddingBottom: "2px",
                    }}
                  >
                    {t("products.request")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
