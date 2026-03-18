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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-visible">
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
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5 py-3 rounded-xl font-semibold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center gap-2 backdrop-blur-md"
          >
            {/* Icon */}
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>

            {/* Text */}
            Trải nghiệm ngay
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}