import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FileText,
  Search,
  CreditCard,
  Ship,
  CheckCircle2
} from "lucide-react";

export default function BusinessModels() {
  const { t } = useTranslation();

  const steps = [
    { id: "01", title: t('process.step_1_title'), desc: t('process.step_1_desc'), icon: <FileText className="w-10 h-10" />, color: "from-emerald-400 to-emerald-600" },
    { id: "02", title: t('process.step_2_title'), desc: t('process.step_2_desc'), icon: <Search className="w-10 h-10" />, color: "from-teal-400 to-teal-600" },
    { id: "03", title: t('process.step_3_title'), desc: t('process.step_3_desc'), icon: <CreditCard className="w-10 h-10" />, color: "from-sky-400 to-sky-600" },
    { id: "04", title: t('process.step_4_title'), desc: t('process.step_4_desc'), icon: <Ship className="w-10 h-10" />, color: "from-indigo-400 to-indigo-600" },
    { id: "05", title: t('process.step_5_title'), desc: t('process.step_5_desc'), icon: <CheckCircle2 className="w-10 h-10" />, color: "from-amber-400 to-amber-600" },
  ];

  return (
    <section id="process" className="relative py-16 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-emerald-500"></div>
              <span className="text-emerald-500 font-black text-sm tracking-[0.2em]">{t('process.title')}</span>
              <div className="h-[2px] w-12 bg-emerald-500"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              {t('process.title')}
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-slate-100 rounded-full z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="flex flex-col items-center group text-center"
              >
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-2xl flex items-center justify-center text-emerald-600 group-hover:border-emerald-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                    {step.icon}
                  </div>
                  {/* Decorative background shape */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-[40px] transition-opacity duration-500`} />

                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-xl border-4 border-white z-20`}>
                    {step.id}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
