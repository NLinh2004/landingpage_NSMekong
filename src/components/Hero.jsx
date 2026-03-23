import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const backgrounds = [
  "/b4.jpg",
  "/b1.jpg"
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentBg, setCurrentBg] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 365, hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Đổi ảnh mỗi 5 giây

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 365);

    const countdownTimer = setInterval(() => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => {
      clearInterval(bgTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <>
      <section id="home" className="relative w-full min-h-[100vh] lg:min-h-[850px] flex items-start justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-48 lg:pb-64">
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

        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-start w-full">
          <div className="max-w-2xl">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                {t('hero.coming_soon')}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1.0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 drop-shadow-lg text-white"
            >
              {t('hero.headline_1')} <br />
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">{t('hero.headline_2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="mb-8 text-lg text-gray-200 max-w-lg leading-relaxed drop-shadow-md"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.0 }}
              className="flex gap-4 mb-8"
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold text-emerald-300 shadow-inner">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-300 mt-2 uppercase tracking-wider font-semibold">
                    {unit === 'days' ? t('hero.days') : unit === 'hours' ? t('hero.hours') : unit === 'minutes' ? t('hero.minutes') : t('hero.seconds')}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 1.0 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="#models" className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105">
                {t('hero.btn_primary')} →
              </a>
              <a href="#cta" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-medium text-base transition-all backdrop-blur-sm">
                {t('hero.btn_secondary')}
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS SECTION - Floating Box */}
      <div className="relative z-30 w-full flex justify-center h-0">
        <div className="absolute top-[-3rem] md:top-[-4.5rem] lg:top-[-5.5rem] -translate-y-1/2 px-6 w-full max-w-5xl">
          <div className="bg-[#FEFCF4] rounded-[1.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/60 px-4 py-6 sm:p-6 md:p-8 backdrop-blur-md">
            <div className="text-center mb-4 md:mb-6">
              <span className="text-[#0A804A] text-xs font-semibold uppercase tracking-widest opacity-80">
                — {t('hero.expected_goals')} —
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">

              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-xl sm:text-2xl md:text-[2.75rem] font-extrabold text-[#FC8251] mb-1 leading-none">{t('hero.stat_1_num')}</span>
                <div className="border-b-[2px] md:border-b-[2.5px] border-[#0A804A] pb-1 md:pb-1.5 w-full max-w-[220px] text-center md:text-left">
                  <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-[#0A804A] leading-tight block">{t('hero.stat_1_text')}</span>
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
                <span className="text-xl sm:text-2xl md:text-[2.75rem] font-extrabold text-[#FC8251] mb-1 leading-none">{t('hero.stat_2_num')}</span>
                <div className="border-b-[2px] md:border-b-[2.5px] border-[#0A804A] pb-1 md:pb-1.5 w-full max-w-[220px] text-center md:text-left">
                  <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-[#0A804A] leading-tight block">{t('hero.stat_2_text')}</span>
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
                <span className="text-xl sm:text-2xl md:text-[2.75rem] font-extrabold text-[#FC8251] mb-1 leading-none">{t('hero.stat_3_num')}</span>
                <div className="border-b-[2px] md:border-b-[2.5px] border-[#0A804A] pb-1 md:pb-1.5 w-full max-w-[220px] text-center md:text-left">
                  <span className="text-[10px] sm:text-xs md:text-lg font-semibold text-[#0A804A] leading-tight block">{t('hero.stat_3_text')}</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}