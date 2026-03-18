import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Nhận thêm hàng loạt ưu đãi từ <span className="text-primary">Mekong Agri</span>?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-10 leading-relaxed"
        >
          Trải nghiệm ngay nền tảng kết nối chuỗi cung ứng nông sản hàng đầu, tối ưu vận hành và gia tăng lợi nhuận cho doanh nghiệp của bạn.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/30">
            Bắt đầu tải ứng dụng
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
            Liên hệ tư vấn
          </button>
        </motion.div>
      </div>
    </section>
  );
}