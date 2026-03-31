import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Zap } from "lucide-react";

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section
      id="cta"
      className="relative py-20 overflow-hidden bg-slate-950"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      </div>

      {/* ── Dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="glass-card-premium rounded-3xl p-10 md:p-16 border-white/5 bg-white/[0.02] overflow-hidden relative group">
          {/* Internal Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* ── Pill badge ── */}
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-10 border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.2em]">
                  {t('cta.badge')}
                </span>
              </div>

              {/* ── Heading ── */}
              <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-[1.1] tracking-tight">
                {t('cta.title_1')} <br />
                <span className="text-gradient-gold">
                  {t('cta.title_2')}
                </span>
                <br /> {t('cta.title_3')}
              </h2>

              <p className="text-slate-400 text-lg mb-14 font-medium max-w-2xl mx-auto leading-relaxed">
                {t('cta.trust_3')}
              </p>

              {/* ── CTA buttons ── */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Primary */}
                <motion.a
                  href="https://ctise.vn/lien-he/"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-button w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_20px_40px_rgba(16,185,129,0.25)] flex items-center justify-center gap-3 overflow-hidden"
                >
                  {/* shimmer sweep */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s linear infinite",
                    }}
                  />
                  {t('cta.btn_primary')}
                </motion.a>

                {/* Secondary – glass */}
                <motion.a
                  href="https://ctise.vn/lien-he/"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg text-white border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 flex items-center justify-center"
                >
                  {t('cta.btn_secondary')}
                </motion.a>
              </div>

              {/* ── Trust strip ── */}
              <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {[
                  { icon: <ShieldCheck size={20} />, label: t('cta.trust_1') },
                  { icon: <Zap size={20} />, label: t('cta.trust_2') },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <span className="text-white/80">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Shimmer keyframe ── */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  );
}
