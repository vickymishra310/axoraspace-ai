import { motion } from "framer-motion";
import { MessageSquare, FileText, HelpCircle, BookOpen } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive guides and API references to get started quickly.",
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Join thousands of developers building with Axoraspace on Discord.",
  },
  {
    icon: BookOpen,
    title: "Blog",
    description: "Insights, tutorials, and updates from the Axoraspace engineering team.",
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Dedicated help center with live chat and priority ticket resolution.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative z-10 px-4 py-20 sm:px-6 md:px-[120px] md:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="text-[13px] font-medium text-foreground/60">Resources</span>
          </div>
          <h2
            className="text-[28px] md:text-[44px] font-medium leading-tight tracking-[-0.02em] mb-4"
            style={{
              background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span className="font-['Playfair_Display'] italic">Everything</span> You Need
          </h2>
          <p className="text-[15px] text-foreground/60 max-w-[480px] mx-auto">
            Tools, knowledge, and community to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {resources.map((res, i) => (
            <motion.a
              href="#"
              key={res.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", bounce: 0 }}
              className="group relative flex gap-4 sm:gap-5 rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-xl p-5 sm:p-7 hover:bg-foreground/[0.06] hover:border-foreground/20 transition-all duration-300 cursor-pointer"
            >
              <div className="shrink-0 mt-1 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-foreground/10 bg-foreground/5">
                <res.icon size={18} className="text-foreground/80" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-foreground mb-1 group-hover:text-foreground/90">{res.title}</h3>
                <p className="text-[14px] leading-relaxed text-foreground/50">{res.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
