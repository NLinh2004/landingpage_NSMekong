import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex flex-wrap justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            Mekong<span className="text-primary">Agri</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { name: 'Thống kê', href: '#stats' },
            { name: 'Phân hệ', href: '#audience' },
            { name: 'Tính năng', href: '#features' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium hover:text-primary transition-colors ${
                scrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className={`hidden md:block font-medium hover:text-primary transition-colors ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            Đăng nhập
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            Trải nghiệm ngay
          </motion.button>
        </div>
      </div>
    </nav>
  );
}