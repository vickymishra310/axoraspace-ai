import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import PillButton from "@/components/PillButton";
import axoraLogo from "@/assets/axora-logo.svg";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-[120px] md:justify-center md:gap-12">
      <div className="flex items-center gap-[30px]">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="flex items-center gap-2.5"
        >
          <img src={axoraLogo} alt="Axoraspace logo" className="h-[28px] w-auto" />
          <span className="text-[18px] font-bold tracking-tight text-foreground">
            axoraspace
          </span>
        </a>

        <div className="hidden md:flex items-center gap-[30px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-[14px] font-medium text-foreground opacity-90 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <PillButton variant="dark" label="Get Started" onClick={() => scrollTo("#pricing")} />
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-foreground/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-[14px] font-medium text-foreground/80 hover:text-foreground text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <PillButton variant="light" label="Get Started" onClick={() => scrollTo("#pricing")} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
