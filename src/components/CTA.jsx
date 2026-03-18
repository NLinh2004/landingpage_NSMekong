import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-emerald-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Giai đoạn thí điểm – ĐBSCL
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Cùng xây dựng chuỗi cung ứng <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">minh bạch & bền vững</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Doanh nghiệp, HTX, nhà sản xuất nông sản – Hãy trở thành đối tác tiên phong trên nền tảng Mekong Agri.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow text-center"
            >
              Đăng ký hợp tác
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm text-center"
            >
              Liên hệ tư vấn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}