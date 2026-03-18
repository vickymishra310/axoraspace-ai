import { motion } from "framer-motion";
import PillButton from "@/components/PillButton";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative z-10 flex flex-col items-center text-center px-6 pt-[200px] pb-[102px] md:pt-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0 }}
        className="flex flex-col items-center gap-10"
      >
        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-1.5 backdrop-blur-md">
          <div className="h-1 w-1 rounded-full bg-foreground animate-pulse" />
          <span className="text-[13px] font-medium tracking-wide">
            <span className="opacity-60">AI-Powered Platform</span>
            <span className="ml-1 text-foreground">Now in Beta</span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className="max-w-[700px] text-[36px] md:text-[56px] font-medium leading-[1.28] tracking-[-0.02em]"
          style={{
            background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Intelligence That Builds the Future
        </h1>

        {/* Subtitle */}
        <p className="max-w-[680px] text-[15px] leading-relaxed text-foreground/70">
          Axoraspace harnesses advanced AI to automate workflows, generate insights, and
          accelerate innovation — empowering teams to focus on what matters most while
          intelligent systems handle the rest.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <PillButton variant="light" label="Get Started Free" onClick={() => scrollTo("#pricing")} />
          <PillButton variant="dark" label="See How It Works" onClick={() => scrollTo("#how-it-works")} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
