export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded bg-opacity-80 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Mekong<span className="text-primary">Agri</span>
            </span>
          </div>
          
          <div className="text-sm">
            <p>© {new Date().getFullYear()} Mekong Agri. Toàn quyền bảo lưu.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-primary transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-primary transition-colors">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}