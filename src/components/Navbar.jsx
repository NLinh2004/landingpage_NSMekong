import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = i18n.language?.substring(0, 2).toUpperCase() || "VI";
  const languages = [
    { code: "vi", label: "Tiếng Việt" },
    { code: "en", label: "English" },
    { code: "cn", label: "中文" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"
            }`}>
            Mekong<span className="text-emerald-500">Agri</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { name: t('navbar.values'), href: "#market-story" },
            { name: t('navbar.models'), href: "#process" },
            { name: t('navbar.features'), href: "#features" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-semibold text-sm transition-all hover:text-emerald-500 ${scrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://ctise.vn/lien-he/"
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${scrolled
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200"
              : "bg-white text-emerald-600 hover:bg-emerald-50"
              }`}
          >
            {t('navbar.contact')}
          </a>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 text-xs font-bold uppercase transition-all cursor-pointer ${scrolled ? "text-slate-900" : "text-white"}`}
            >
              🌐 {currentLang}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {/* Dropdown Menu */}
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-100 py-1 overflow-hidden z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onMouseDown={() => { i18n.changeLanguage(l.code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.language?.startsWith(l.code) ? "bg-emerald-50 text-emerald-500 font-bold" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
