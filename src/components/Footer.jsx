export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-10 border-t border-gray-800/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight">
              Mekong<span className="text-emerald-400">Agri</span>
            </span>
          </div>

          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mekong Agri. Toàn quyền bảo lưu.</p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}