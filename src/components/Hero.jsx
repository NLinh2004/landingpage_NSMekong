import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'url("/b2.jpg")', backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/20 to-black/0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Nền tảng TMĐT Nông sản B2B
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">Nông sản Mekong</span>
            <br />
            <span className="text-white">vươn tầm thế giới.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg text-gray-200 max-w-lg leading-relaxed drop-shadow-md"
          >
            Kết nối doanh nghiệp nước ngoài với vùng nguyên liệu chuẩn ngạch Việt Nam. Mua trước – Sản xuất sau.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
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
  );
}