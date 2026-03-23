import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BusinessModels() {
  const { t } = useTranslation();
  const models = [
    {
      number: "01",
      title: t('models.model_1_title'),
      subtitle: t('models.model_1_subtitle'),
      points: [
        t('models.model_1_p1'),
        t('models.model_1_p2'),
        t('models.model_1_p3'),
        t('models.model_1_p4'),
      ],
      gradient: "from-emerald-500 to-green-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "02",
      title: t('models.model_2_title'),
      subtitle: t('models.model_2_subtitle'),
      points: [
        t('models.model_2_p1'),
        t('models.model_2_p2'),
        t('models.model_2_p3'),
        t('models.model_2_p4'),
      ],
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "03",
      title: t('models.model_3_title'),
      subtitle: t('models.model_3_subtitle'),
      points: [
        t('models.model_3_p1'),
        t('models.model_3_p2'),
        t('models.model_3_p3'),
        t('models.model_3_p4'),
      ],
      gradient: "from-amber-500 to-orange-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="models" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          {/* pill badge */}
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t('models.badge')}
          </span>

          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t('models.title_1')}{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('models.title_2')}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 100 8"
                fill="none"
              >
                <path
                  d="M2 6 Q50 1 98 6"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h3>

          <p className="text-gray-500 text-base leading-relaxed">
            {t('models.desc_1')}{" "}
            <strong className="text-gray-700 font-semibold">
              {t('models.desc_2')}
            </strong>{" "}
            {t('models.desc_3')}{" "}
            <strong className="text-gray-700 font-semibold">
              {t('models.desc_4')}
            </strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.25, duration: 0.9 }}
              whileHover={{ y: -6 }}
              className={`group ${model.bg} rounded-2xl ${model.border} border overflow-hidden hover:shadow-2xl transition-all duration-700`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={model.img}
                  alt={model.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div
                  className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${model.gradient} text-white font-extrabold text-sm flex items-center justify-center shadow-lg`}
                >
                  {model.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-0.5">
                  {model.title}
                </h4>
                <p
                  className={`text-xs font-semibold bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {model.subtitle}
                </p>

                <div className="space-y-2">
                  {model.points.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${model.gradient}`}
                      ></span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
