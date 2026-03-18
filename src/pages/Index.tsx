import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PillButton from "@/components/PillButton";

const Index = () => {
  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-background font-['General_Sans'] text-foreground">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-[120px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center" style={{ width: 187, height: 25 }}>
            <span className="text-[20px] font-bold tracking-tighter text-foreground">
              LOGOIPSUM
            </span>
          </div>

          <div className="hidden md:flex items-center gap-[30px]">
            {["Get Started", "Developers", "Features", "Resources"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-[14px] text-[14px] font-medium text-foreground opacity-90 hover:opacity-100 transition-opacity"
              >
                {item}
                <ChevronDown size={14} strokeWidth={2.5} />
              </button>
            ))}
          </div>
        </div>

        <PillButton variant="dark" label="Join Waitlist" />
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-[200px] pb-[102px] md:pt-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-1.5 backdrop-blur-md">
            <div className="h-1 w-1 rounded-full bg-foreground" />
            <span className="text-[13px] font-medium tracking-wide">
              <span className="opacity-60">Early access available from</span>
              <span className="ml-1 text-foreground">May 1, 2026</span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="max-w-[613px] text-[36px] md:text-[56px] font-medium leading-[1.28] tracking-[-0.02em]"
            style={{
              background:
                "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Web3 at the Speed of Experience
          </h1>

          {/* Subtitle */}
          <p className="max-w-[680px] text-[15px] leading-relaxed text-foreground/70">
            Powering seamless experiences and real-time connections, EOS is the
            base for creators who move with purpose, leveraging resilience,
            speed, and scale to shape the future.
          </p>

          {/* CTA */}
          <PillButton variant="light" label="Join Waitlist" />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
