import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TargetAudience from "./components/TargetAudience";
import BusinessModels from "./components/BusinessModels";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <Hero />
      <TargetAudience />
      <BusinessModels />
      <Features />
      <CTA />
      <Footer />

      {/* Floating CTA Button */}
      <AnimatePresence>
        {showFloating && (
          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3.5 rounded-full font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Trải nghiệm ngay
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}