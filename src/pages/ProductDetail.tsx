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
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px", width: "100%", height: "auto" }}>
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
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px", width: "100%", height: "auto" }}>
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
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px", width: "100%", height: "auto" }}>
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
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ maxWidth: "280px", width: "100%", height: "auto" }}>
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
          <h1 className="m-0 text-xl font-bold tracking-wide text-white sm:text-2xl md:text-[26px] break-words">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-[#c8a832]">{product.tagline}</p>
        </div>
      </div>

      {/* Mobile-friendly tabs - horizontal scroll */}
      <div className="overflow-x-auto border-b border-[#e0e8f0] bg-[#f0f5fa] [-webkit-overflow-scrolling:touch]">
        <div className="mx-auto flex max-w-[1200px] gap-0 min-w-max">
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
                className="whitespace-nowrap px-3 py-3 text-xs font-bold no-underline transition-all duration-200 sm:px-4 md:px-[18px]"
                style={{
                  color: i === currentIndex ? "#003f78" : "#666",
                  borderBottom: i === currentIndex ? "3px solid #003f78" : "3px solid transparent",
                }}
              >
                {names[i]}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-10">
        {/* Main content - responsive grid */}
        <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12 xl:gap-[50px]">
          {/* Left column - Image and buttons */}
          <div className="w-full">
            <div className="relative flex h-auto min-h-[220px] w-full items-center justify-center border border-[#d0d8e8] bg-[#e8eef8] p-6 sm:h-[280px] lg:p-[30px]">
              <div className="flex w-full max-w-[280px] items-center justify-center">
                <MachineryDetailSVG type={product.svgType} />
              </div>
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
            {/* Action buttons - stack on mobile */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="flex flex-1 items-center justify-center gap-2 bg-[#003f78] px-5 py-3 text-center text-sm font-bold text-white no-underline transition-colors hover:bg-[#1a6fb5]"
              >
                <Mail size={16} /> {t("product.request")}
              </Link>
              <button
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 border-2 border-[#003f78] bg-white px-5 py-3 text-center text-sm font-bold text-[#003f78] transition-all duration-200 hover:bg-[#003f78] hover:text-white"
              >
                <Download size={16} /> {t("product.download")}
              </button>
            </div>
          </div>

          {/* Right column - Description */}
          <div className="w-full">
            <div className="mb-5 flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#c8a832] bg-[#003f78]">
                <span className="text-[9px] font-bold text-[#c8a832]">KREI</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold tracking-[3px] text-[#c8a832]">KREI</div>
                <h2 className="m-0 break-words text-xl font-bold text-[#003f78] sm:text-[22px]">
                  {product.name.replace("KREI ", "")}
                </h2>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-[#555] sm:text-[15px] sm:leading-[1.8]">
              {product.fullDescription}
            </p>

            {/* Features grid - responsive columns */}
            <h3 className="mb-4 border-b-2 border-[#e0e8f0] pb-2 text-base font-bold text-[#003f78]">
              {t("product.features")}
            </h3>
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-[#444]">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#003f78]" />
                  <span className="break-words">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications and Technical Specs - responsive side-by-side */}
        <div className="mb-10 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-2 lg:gap-8 xl:gap-[30px]">
          {/* Applications */}
          <div className="border border-[#e0e8f0] border-t-[3px] border-t-[#c8a832] bg-[#f5f8fc] p-5 sm:p-6">
            <h3 className="mb-4 text-base font-bold text-[#003f78]">
              {t("product.applications")}
            </h3>
            <ul className="m-0 list-none p-0">
              {product.applications.map((app) => (
                <li key={app} className="flex items-center gap-2 border-b border-[#e0e8f0] py-2 text-sm text-[#555]">
                  <ChevronRight size={14} className="shrink-0 text-[#c8a832]" />
                  <span className="break-words">{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs */}
          <div className="overflow-x-auto bg-[#003f78] p-5 sm:p-6">
            <h3 className="mb-4 text-base font-bold text-white">{t("product.technical")}</h3>
            <table className="w-full min-w-[240px] border-collapse">
              <tbody>
                {product.technicalSpecs.map((spec) => (
                  <tr key={spec.label} className="border-b border-white/15">
                    <td className="py-2 pr-3 text-xs text-white/80 sm:py-2 sm:pr-4 sm:text-[13px]">
                      {spec.label}
                    </td>
                    <td className="py-2 text-right text-xs font-bold text-white sm:py-2 sm:text-[13px]">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Models Table - responsive with horizontal scroll on mobile */}
        <div className="mb-10 lg:mb-12">
          <h3 className="mb-4 border-b-2 border-[#003f78] pb-2 text-lg font-bold text-[#003f78]">
            {t("product.models")}
          </h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-sm sm:min-w-0">
              <thead>
                <tr className="bg-[#003f78] text-white">
                  <th className="px-4 py-3 text-left text-sm font-bold sm:px-6">{t("products.models")}</th>
                  <th className="px-4 py-3 text-left text-sm font-bold sm:px-6">Motor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold sm:px-6">Volume</th>
                  <th className="px-4 py-3 text-center text-sm font-bold sm:px-6"></th>
                </tr>
              </thead>
              <tbody>
                {product.models.map((model, i) => (
                  <tr 
                    key={model.name} 
                    className={i % 2 === 0 ? "bg-white" : "bg-[#f5f8fc]"}
                    style={{ borderBottom: "1px solid #e0e8f0" }}
                  >
                    <td className="px-4 py-3 font-bold text-[#003f78] sm:px-6">{model.name}</td>
                    <td className="px-4 py-3 text-[#555] sm:px-6">{model.power}</td>
                    <td className="px-4 py-3 text-[#555] sm:px-6">{model.volume}</td>
                    <td className="px-4 py-3 text-center sm:px-6">
                      <Link
                        href="/contact"
                        className="inline-block bg-[#003f78] px-4 py-1.5 text-xs font-bold text-white no-underline transition-colors hover:bg-[#1a6fb5] sm:px-5 sm:py-2"
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

        {/* Contact Expert Section - responsive */}
        <div className="mb-8 flex flex-col gap-4 border border-[#e0e8f0] border-l-[5px] border-l-[#c8a832] bg-[#f5f8fc] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6 md:mb-10 md:px-[30px] md:py-6">
          <div className="min-w-0 flex-1">
            <h3 className="mb-2 text-base font-bold text-[#003f78] md:text-[17px]">
              {t("product.contact_expert")}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#555] sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="shrink-0 text-[#003f78]" />
                <span className="break-words">+49 (0) 5744 / 508-0</span>
              </span>
              <span className="flex items-center gap-1.5 break-all">
                <Mail size={14} className="shrink-0 text-[#003f78]" />
                <span className="break-all">info@niemann.de</span>
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
          <Link href="/products" className="inline-flex items-center gap-1 text-sm font-bold text-[#1a6fb5] no-underline hover:underline">
            ← {t("product.back")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}