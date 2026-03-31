import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketStory from "./components/MarketStory";
import SolutionIntro from "./components/SolutionIntro";
import TargetAudience from "./components/TargetAudience";
import BusinessModels from "./components/BusinessModels";
import Features from "./components/Features";
import Commitment from "./components/Commitment";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const { t } = useTranslation();
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-visible selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <main>
        <MarketStory />
        <SolutionIntro />
        <TargetAudience />
        <BusinessModels />
        <Features />
        <Commitment />
        <CTA />
      </main>
      <Footer />

      {/* Floating CTA Button */}
      <AnimatePresence>
        {showFloating && (
          <motion.a
            href="https://ctise.vn/lien-he/"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 backdrop-blur-md border border-emerald-400/30"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            {t('app.floating_cta')}
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}