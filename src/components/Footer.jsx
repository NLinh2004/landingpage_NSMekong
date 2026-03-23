import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-950 text-gray-500 py-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #81ff8a, #64965e)",
              }}
            >
              <span className="font-bold text-sm" style={{ color: "#1a3a10" }}>
                M
              </span>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight">
              Mekong
              <span
                style={{
                  background: "linear-gradient(135deg, #81ff8a, #64965e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Agri
              </span>
            </span>
          </div>

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="hover:text-white duration-200 transition-colors"
            >
              {t('footer.terms')}
            </a>
            <a
              href="#"
              className="hover:text-white duration-200 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="hover:text-white duration-200 transition-colors"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
