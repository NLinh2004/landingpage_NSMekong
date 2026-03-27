import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = i18n.language?.substring(0, 2).toUpperCase() || "VI";
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className={`transition-all duration-300 border-b border-white/5 ${
        scrolled 
          ? "bg-emerald-600/5 py-1" 
          : "bg-black/10 py-1.5 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <a
            href="https://ctise.vn/"
            className={`group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold transition-all ${
              scrolled ? "text-emerald-800/60 hover:text-emerald-600" : "text-white/60 hover:text-white"
            }`}
          >
            <svg className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            QUAY LẠI CTISE.VN
          </a>
        </div>
      </div>

      <div className={`container mx-auto px-6 max-w-7xl flex justify-between items-center transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}>
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative h-11 w-11 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`text-xl md:text-2xl font-semibold tracking-tighter transition-colors ${
                scrolled ? "text-gray-900" : "text-gray-900 md:text-white"
              }`}
            >
              Mekong<span className="text-emerald-500 font-extrabold">Agri</span>
            </span>
            <span className={`text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5 ${
              scrolled ? "text-emerald-600/50" : "text-white/40"
            }`}>
              Agriculture Solution
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {[
            { name: t('navbar.values'), href: "#audience" },
            { name: t('navbar.models'), href: "#models" },
            { name: t('navbar.features'), href: "#features" },
            { name: t('navbar.contact'), href: "https://ctise.vn/lien-he/" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium px-5 py-2 rounded-full transition-all border ${scrolled
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
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all border cursor-pointer ${scrolled
                  ? "bg-white text-emerald-600 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                  : "bg-emerald-500/10 text-white border-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.4)] hover:shadow-[0_0_20px_rgba(52,211,153,0.6)] backdrop-blur-md"
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
                    style={{ cursor: 'pointer' }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.language?.startsWith(l.code) ? "bg-emerald-50 text-emerald-600 font-bold" : "text-gray-600 hover:bg-gray-50"
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
