import Navbar from "../components/landing/navbar";
import HeroSection from "../components/landing/heroSection";
import Features from "../components/landing/features";
import Hightlists from "../components/landing/highlights";
import CallToAction from "../components/landing/callToAction";
import Footer from "../components/landing/footer";

const LandingPage = () => {

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070B08] text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-green-500/20 blur-[170px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[170px]" />

      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* ================= HERO ================= */}
      <HeroSection/>

      {/* ================= FEATURES ================= */}
      <Features/>

      {/* ================= HIGHLIGHTS ================= */}
      <Hightlists/>

      {/* ================= CALL TO ACTION ================= */}
      <CallToAction/>

      {/* ================= FOOTER ================= */}
      <Footer/>

    </div>
  );
};

export default LandingPage;