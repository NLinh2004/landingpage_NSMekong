import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { id: 1, value: "10.000+", label: "Tấn Nông Sản" },
    { id: 2, value: "1.000+", label: "Nông Dân & Hợp Tác Xã" },
    { id: 3, value: "100+", label: "Doanh Nghiệp Tiêu Thụ" },
  ];

  return (
    <section id="stats" className="bg-white py-16 border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-6 md:py-0 px-4"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-500 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
