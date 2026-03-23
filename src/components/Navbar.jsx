import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  
  const currentLang = i18n.language?.substring(0,2).toUpperCase() || "VI";
  const languages = [
    { code: "vi", label: "Tiếng Việt", display: "VN" },
    { code: "en", label: "English", display: "EN" },
    { code: "cn", label: "中文", display: "CN" }
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex flex-wrap justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span
            className={`text-2xl font-extrabold tracking-tight ${
              scrolled ? "text-gray-900" : "text-gray-900 md:text-white"
            }`}
          >
            Mekong<span className="text-primary">Agri</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {[
            { name: t('navbar.values'), href: "#audience" },
            { name: t('navbar.models'), href: "#models" },
            { name: t('navbar.features'), href: "#features" },
            { name: t('navbar.contact'), href: "#cta" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium px-5 py-2 rounded-full transition-all border ${
                scrolled
                  ? "text-gray-700 border-gray-200 hover:border-emerald-500 hover:bg-emerald-500/5 hover:text-emerald-600"
                  : "text-white border-white/20 hover:border-white/50 hover:bg-white/10 backdrop-blur-lg"
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Language Switcher Dropdown */}
          <div className="relative ml-4 pl-4 border-l border-white/20" style={{ borderColor: scrolled ? '#e5e7eb' : 'rgba(255,255,255,0.2)' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
              }`}
            >
              🌐 {currentLang}
              <svg className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {/* Dropdown Menu */}
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onMouseDown={() => { i18n.changeLanguage(l.code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      i18n.language?.startsWith(l.code) ? "bg-emerald-50 text-emerald-600 font-bold" : "text-gray-600 hover:bg-gray-50"
                    }`}
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
