import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SolutionIntro() {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 bg-slate-900 overflow-hidden text-center">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%"
            ]
          }}
          className="relative overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md p-12 md:p-24 shadow-solution"
          style={{ transition: 'border-radius 12s ease-in-out infinite' }}
        >
          {/* Internal Glows - Adapted for Blob */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-amber-500/50"></div>
              <span className="text-amber-500 font-black text-xs tracking-[0.3em] uppercase">{t('solution_intro.badge')}</span>
              <div className="h-px w-8 bg-amber-500/50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
            {t('audience.title_1')}<br />
            <span className="text-gradient-premium">{t('audience.title_2')}</span>
          </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full mb-10 shadow-line-glow"></div>
            
            <p className="text-base md:text-xl text-emerald-50 leading-relaxed font-normal italic opacity-90 max-w-2xl mx-auto px-4">
              "{t('solution_intro.desc')}"
            </p>

            <div className="mt-12 flex justify-center gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
