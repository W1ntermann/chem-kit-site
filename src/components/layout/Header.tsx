import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Search, X } from "lucide-react";
import { useLanguage, type Language } from "@/context/LanguageContext";
import logoImage from "@/assets/Logo-ChemTech.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "pl", flag: "🇵🇱", label: "Polski" },
  { code: "uk", flag: "🇺🇦", label: "Українська" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const isNavActive = (href: string) =>
    location === href || (href === "/products" && location.startsWith("/products"));

  const openSearchFromMenu = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  return (
    <header>
      <div className="border-b border-[#ddd] bg-[#f0f0f0]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-1.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLang(language.code)}
                title={language.label}
                className={cn(
                  "flex min-h-11 min-w-11 items-center justify-center gap-1 rounded border-2 bg-transparent px-1 py-1 text-base transition sm:min-h-0 sm:min-w-0",
                  lang === language.code ? "border-[#003f78] opacity-100" : "border-transparent opacity-55 hover:opacity-85"
                )}
              >
                <span aria-hidden>{language.flag}</span>
                <span
                  className={cn(
                    "hidden text-[10px] text-[#333] sm:inline",
                    lang === language.code && "font-bold"
                  )}
                >
                  {language.code.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-y-1 sm:justify-end">
            {topItems.map((item, idx) => (
              <span key={item.labelKey} className="flex items-center">
                <a
                  href={item.href}
                  className="px-2 py-1 text-xs text-[#444] no-underline transition-colors hover:text-[#1a6fb5]"
                >
                  {t(item.labelKey)}
                </a>
                {idx < topItems.length - 1 && (
                  <span className="hidden text-[#bbb] text-xs sm:inline">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b-2 border-[#003f78] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex min-h-[72px] max-w-[1200px] items-center justify-between gap-2 px-4 py-2 md:py-0">
          <Link href="/" className="flex min-w-0 shrink items-center no-underline">
            <div>
              <div className="text-base font-bold leading-tight tracking-wide text-[#003f78] md:text-[21px]">
                WILHELM NIEMANN
              </div>
              <div className="text-[8px] font-semibold tracking-[2px] text-[#003f78] md:text-[9.5px] md:tracking-[3.5px]">
                MASCHINENFABRIK
              </div>
            </div>
          </Link>

          <nav className="hidden h-[72px] items-stretch md:flex">
            {navItems.map((item) => {
              const isActive = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "box-border flex items-center border-b-[3px] px-4 pb-0 pt-0.5 text-[13px] font-bold tracking-wide no-underline transition-colors",
                    isActive
                      ? "border-[#003f78] text-[#003f78]"
                      : "border-transparent text-[#444] hover:border-[#1a6fb5] hover:text-[#1a6fb5]"
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => setSearchOpen((o) => !o)}
              className="flex min-h-11 min-w-11 items-center justify-center border-0 bg-transparent px-3 text-[#444] hover:text-[#1a6fb5]"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? t("search.close") : t("search.open")}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 md:gap-1">
            <img
              src={logoImage}
              alt=""
              className="hidden h-12 w-auto object-contain md:block lg:h-[68px]"
            />
            <button
              type="button"
              onClick={() => setSearchOpen((o) => !o)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded border-0 bg-transparent text-[#444] hover:text-[#1a6fb5] md:hidden"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? t("search.close") : t("search.open")}
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded border-0 bg-transparent text-[#003f78] hover:bg-[#f0f5fa] md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={t("nav.menu")}
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent side="right" className="w-[min(100%,380px)]" id="mobile-navigation">
            <SheetHeader className="text-left">
              <SheetTitle className="text-[#003f78]">{t("nav.menu")}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => {
                const isActive = isNavActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 text-base font-bold no-underline transition-colors",
                      isActive ? "bg-[#003f78]/10 text-[#003f78]" : "text-[#444] hover:bg-[#f5f8fc]"
                    )}
                  >
                    {t(item.labelKey)}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={openSearchFromMenu}
                className="flex items-center gap-2 rounded-md px-4 py-3 text-left text-base font-bold text-[#444] hover:bg-[#f5f8fc]"
              >
                <Search size={20} />
                {t("search.open")}
              </button>
            </nav>
          </SheetContent>
        </Sheet>

        {searchOpen && (
          <div className="border-t border-[#e8e8e8] bg-[#f8f8f8] px-4 py-3">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex items-center border border-[#003f78] bg-white">
                <input
                  type="search"
                  placeholder={t("search.placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="min-h-11 min-w-0 flex-1 border-0 px-4 py-2.5 text-sm text-[#333] outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="flex min-h-11 min-w-11 shrink-0 items-center justify-center bg-[#003f78] px-4 text-white"
                  aria-label={t("search.submit")}
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
