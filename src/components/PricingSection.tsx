import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PillButton from "@/components/PillButton";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For individuals exploring AI capabilities.",
    features: ["1,000 API calls/month", "2 AI models", "Community support", "Basic analytics"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For teams shipping AI-powered products.",
    features: ["50,000 API calls/month", "All AI models", "Priority support", "Advanced analytics", "Custom fine-tuning", "Team collaboration"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations at scale.",
    features: ["Unlimited API calls", "Dedicated infrastructure", "24/7 support & SLA", "Custom models", "SOC 2 & HIPAA", "On-premise option"],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative z-10 px-4 py-20 sm:px-6 md:px-[120px] md:py-[120px] overflow-hidden">
      {/* Background video with fades */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="https://cdn.pixabay.com/video/2022/06/19/120765-724673340_medium.mp4?download" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="text-[13px] font-medium text-foreground/60">Pricing</span>
          </div>
          <h2
            className="text-[28px] md:text-[44px] font-medium leading-tight tracking-[-0.02em] mb-4"
            style={{
              background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Simple, <span className="font-['Playfair_Display'] italic">Transparent</span> Pricing
          </h2>
          <p className="text-[15px] text-foreground/60 max-w-[480px] mx-auto">
            Start free. Scale when you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0 }}
              className={`relative rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                plan.highlighted
                  ? "border-foreground/30 bg-foreground/[0.08]"
                  : "border-foreground/10 bg-foreground/[0.03] hover:border-foreground/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-foreground text-background px-4 py-1 text-[12px] font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[16px] font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-[13px] text-foreground/50">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-[36px] sm:text-[40px] font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-[15px] text-foreground/50">{plan.period}</span>}
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-[14px] text-foreground/70">
                    <Check size={15} className="text-foreground/40 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <PillButton
                variant={plan.highlighted ? "light" : "dark"}
                label={plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
