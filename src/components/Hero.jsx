import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  "/b4.jpg",
  "/b1.jpg"
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Đổi ảnh mỗi 5 giây
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="home" className="relative h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background image slider */}
        <AnimatePresence>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("${backgrounds[currentBg]}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/20 to-black/0"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Nền tảng TMĐT Nông sản
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1.0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 drop-shadow-lg"
            >
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">Nông sản Mekong</span>
              <br />
              <span className="text-white">vươn tầm thế giới</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="mb-8 text-lg text-gray-200 max-w-lg leading-relaxed drop-shadow-md"
            >
              Kết nối doanh nghiệp nước ngoài với vùng nguyên liệu chuẩn ngạch Việt Nam. Mua trước – Sản xuất sau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 1.0 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="#cta" className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105">
                Trải nghiệm ngay →
              </a>
              <a href="#models" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-medium text-base transition-all backdrop-blur-sm">
                Xem mô hình
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS SECTION - Floating Box */}
      <div className="relative z-30 w-full flex justify-center h-0">
        <div className="absolute top-0 -translate-y-1/2 px-6 w-full max-w-5xl">
          <div className="bg-[#FEFCF4] rounded-[1.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/60 p-3 sm:p-5 md:p-8 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">

              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-xl sm:text-2xl md:text-[2.75rem] font-extrabold text-[#FC8251] mb-1 leading-none">100+</span>
                <div className="border-b-[2px] md:border-b-[2.5px] border-[#0A804A] pb-1 md:pb-1.5 w-full max-w-[220px] text-center md:text-left">
                  <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-[#0A804A] leading-tight block">nhà cung cấp uy tín</span>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-xl sm:text-2xl md:text-[2.75rem] font-extrabold text-[#FC8251] mb-1 leading-none">10.000+</span>
                <div className="border-b-[2px] md:border-b-[2.5px] border-[#0A804A] pb-1 md:pb-1.5 w-full max-w-[220px] text-center md:text-left">
                  <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-[#0A804A] leading-tight block">nguồn hàng chất lượng</span>
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-xl sm:text-2xl md:text-[2.75rem] font-extrabold text-[#FC8251] mb-1 leading-none">1.000+</span>
                <div className="border-b-[2px] md:border-b-[2.5px] border-[#0A804A] pb-1 md:pb-1.5 w-full max-w-[220px] text-center md:text-left">
                  <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-[#0A804A] leading-tight block">người mua thường xuyên</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}