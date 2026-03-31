import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import heroShipImg from "../assets/hero_ship.png";

const backgrounds = [
  "/b4.jpg",
  "/b1.jpg",
  heroShipImg
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentBg, setCurrentBg] = useState(0);

  // --- Countdown Logic ---
  const [timeLeft, setTimeLeft] = useState({
    days: "00", hours: "00", minutes: "00", seconds: "00"
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-31T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 7000);

    return () => clearInterval(bgTimer);
  }, []);

  return (
    <>
      <section id="home" className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-black pt-20 pb-28 lg:pb-20">
        {/* Background image slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("${backgrounds[currentBg]}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Clean Gradient Overlay for Left Readability */}
        <div className="absolute inset-0 z-[1] bg-black/30"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-start w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-lg shadow-emerald-500/20">
              {t('hero.coming_soon')}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
              <Trans i18nKey="hero.headline_1" />
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 leading-relaxed font-medium drop-shadow-md">
              {t('hero.subheadline')}
            </p>

            {/* --- Countdown Timer UI (Resized to be smaller) --- */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { label: t('hero.days'), value: timeLeft.days },
                { label: t('hero.hours'), value: timeLeft.hours },
                { label: t('hero.minutes'), value: timeLeft.minutes },
                { label: t('hero.seconds'), value: timeLeft.seconds }
              ].map((time, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                    <span className="text-2xl md:text-3xl font-bold text-emerald-400">
                      {time.value}
                    </span>
                  </div>
                  <span className="mt-2 text-[9px] font-bold text-white/50 uppercase tracking-[0.2em]">
                    {time.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-emerald-900/30 hover:scale-105 active:scale-95">
                {t('hero.btn_primary')}
              </button>
              <a href="https://ctise.vn/lien-he/" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-12 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-md">
                {t('hero.btn_secondary')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION - Floating Box (Restored and Refined) */}
      <div className="relative z-30 w-full flex justify-center -mt-12 px-6 mb-12">
        <div className="w-full max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              <div className="flex-shrink-0">
                <span className="text-amber-700 text-xs font-black uppercase tracking-[0.3em] bg-amber-100 px-6 py-2.5 rounded-full block text-center md:text-left border border-amber-200">
                  — {t('hero.expected_goals')} —
                </span>
              </div>
              <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full">
                {[
                  { num: t('hero.stat_1_num'), label: t('hero.stat_1_text'), color: "text-amber-600" },
                  { num: t('hero.stat_2_num'), label: t('hero.stat_2_text'), color: "text-amber-600" },
                  { num: t('hero.stat_3_num'), label: t('hero.stat_3_text'), color: "text-amber-600" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center md:items-start">
                    <span className={`text-4xl lg:text-5xl font-black ${stat.color} mb-1 tracking-tighter`}>{stat.num}</span>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    <div className="w-8 h-1 bg-amber-500/10 mt-3 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}