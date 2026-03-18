import { motion } from "framer-motion";

interface PillButtonProps {
  variant: "light" | "dark";
  label: string;
  onClick?: () => void;
}

const PillButton = ({ variant, label, onClick }: PillButtonProps) => {
  const isLight = variant === "light";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
      onClick={onClick}
    >
      <div
        className="rounded-full overflow-hidden"
        style={{
          padding: "0.6px",
          backgroundColor: isLight ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)",
        }}
      >
        <div
          className="relative rounded-full overflow-hidden"
          style={{
            padding: "11px 29px",
            backgroundColor: isLight ? "#ffffff" : "#000000",
            color: isLight ? "#000000" : "#ffffff",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent blur-[1px]" />
          <span className="relative z-10 text-[14px] font-medium tracking-tight">
            {label}
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default PillButton;
