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
    <footer className="relative z-10 border-t border-foreground/10 px-4 py-12 sm:px-6 md:px-[120px] md:py-16 overflow-hidden">
      {/* Background video with fade */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="https://cdn.pixabay.com/video/2022/06/22/121800-724719797_medium.mp4?download" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
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

        <div className="mt-12 md:mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
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
