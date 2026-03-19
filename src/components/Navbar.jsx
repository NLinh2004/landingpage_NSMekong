import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
            { name: "Giá trị", href: "#audience" },
            { name: "Mô hình", href: "#models" },
            { name: "Tính năng", href: "#features" },
            { name: "Liên hệ", href: "#cta" },
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
        </div>
      </div>
    </nav>
  );
}
