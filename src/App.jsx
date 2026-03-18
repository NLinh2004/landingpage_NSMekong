import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TargetAudience from "./components/TargetAudience";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <TargetAudience />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}