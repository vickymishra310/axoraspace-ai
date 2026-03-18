import axoraLogo from "@/assets/axora-logo.svg";

const footerLinks = {
  Product: ["Features", "Pricing", "API", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Community", "Support", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLink = (section: string, link: string) => {
    if (link === "Features") { scrollTo("#features"); return; }
    if (link === "Pricing") { scrollTo("#pricing"); return; }
    if (link === "Documentation" || link === "Community" || link === "Support") { scrollTo("#resources"); return; }
  };

  return (
    <footer className="relative z-10 border-t border-foreground/10 px-6 py-16 md:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={axoraLogo} alt="Axoraspace" className="h-[22px] w-auto" />
              <span className="text-[16px] font-bold tracking-tight text-foreground">axoraspace</span>
            </div>
            <p className="text-[13px] text-foreground/40 leading-relaxed max-w-[200px]">
              Intelligence that builds the future.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[13px] font-semibold text-foreground/60 mb-4 uppercase tracking-wider">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLink(heading, link)}
                      className="text-[13px] text-foreground/40 hover:text-foreground/70 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-foreground/30">© 2026 Axoraspace. All rights reserved.</p>
          <div className="flex gap-6">
            {["Twitter", "Discord", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-[12px] text-foreground/30 hover:text-foreground/60 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
