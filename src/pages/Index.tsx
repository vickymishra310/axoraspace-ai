import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-background font-['General_Sans'] text-foreground">
      {/* Hero with Video Background */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2024/10/26/238264_medium.mp4?download"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <Navbar />
        <HeroSection />
      </div>

      {/* Sections on solid black */}
      <div className="relative z-10 bg-background">
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <ResourcesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
