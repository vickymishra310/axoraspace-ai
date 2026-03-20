import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart3, Layers, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Processing",
    description: "Advanced neural networks that learn and adapt to your unique workflows in real time.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Generate content, code, and insights in milliseconds with our optimized inference engine.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and zero data retention policies.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Actionable intelligence dashboards that transform raw data into strategic decisions.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 200+ tools and platforms through our universal API layer.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Edge-deployed infrastructure ensuring sub-50ms latency across every continent.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative z-10 overflow-hidden px-4 py-20 sm:px-6 md:px-[120px] md:py-[120px]">
      {/* Background video with fades */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="https://cdn.pixabay.com/video/2022/06/21/121602-724710304.mp4?download" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="text-[13px] font-medium text-foreground/60">Core Capabilities</span>
          </div>
          <h2
            className="text-[28px] md:text-[44px] font-medium leading-tight tracking-[-0.02em] mb-4"
            style={{
              background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Built for the <span className="font-['Playfair_Display'] italic">AI Era</span>
          </h2>
          <p className="text-[15px] text-foreground/60 max-w-[520px] mx-auto">
            Every feature is designed to amplify human potential through intelligent automation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-xl p-6 sm:p-8 hover:bg-foreground/[0.06] hover:border-foreground/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl border border-foreground/10 bg-foreground/5">
                  <feature.icon size={20} className="text-foreground/80" />
                </div>
                <h3 className="text-[17px] font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-[14px] leading-relaxed text-foreground/50">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
