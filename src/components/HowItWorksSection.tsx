import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "Link your existing tools, databases, and workflows. Our AI ingests and understands your ecosystem within minutes.",
  },
  {
    number: "02",
    title: "Train & Customize",
    description: "Fine-tune models to your domain. Set guardrails, define outputs, and shape the AI to match your team's voice.",
  },
  {
    number: "03",
    title: "Deploy & Scale",
    description: "Launch intelligent agents across your organization. Monitor, iterate, and scale — all from a single dashboard.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative z-10 px-6 py-[120px] md:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="text-[13px] font-medium text-foreground/60">Simple Process</span>
          </div>
          <h2
            className="text-[28px] md:text-[44px] font-medium leading-tight tracking-[-0.02em] mb-4"
            style={{
              background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Three Steps to Smarter
          </h2>
          <p className="text-[15px] text-foreground/60 max-w-[480px] mx-auto">
            Get from zero to production-ready AI in under an hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-foreground/0 via-foreground/20 to-foreground/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", bounce: 0 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-8 relative">
                <div className="w-[120px] h-[120px] rounded-full border border-foreground/10 bg-foreground/[0.03] backdrop-blur-xl flex items-center justify-center">
                  <span
                    className="text-[36px] font-bold"
                    style={{
                      background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 115%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full bg-foreground/5 blur-2xl" />
              </div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/50 max-w-[300px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
