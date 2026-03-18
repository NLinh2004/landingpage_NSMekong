import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1595841696650-a4f61f7743d5?auto=format&fit=crop&w=2000&q=80"
          alt="Agriculture Field"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left pt-10 md:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-400 text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            🚀 Nền tảng TMĐT Nông sản B2B Đồng bằng sông Cửu Long
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Kết nối trực tiếp nhu cầu <span className="text-primary">mua số lượng lớn</span> từ nước ngoài.
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium">
            Giao thương minh bạch – Chuẩn hóa xuất khẩu – Lấy nhu cầu thị trường làm trung tâm. <br className="hidden md:block"/>Kết nối doanh nghiệp tiêu thụ toàn cầu với vùng nguyên liệu chuẩn ngạch tại Việt Nam.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
            >
              Bắt đầu trải nghiệm
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
            >
              Tải ứng dụng
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative / Image block */}
        <motion.div
          className="flex-1 hidden lg:flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
             <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop"
              alt="Mekong App Interface"
              className="relative z-10 w-[450px] rounded-3xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}