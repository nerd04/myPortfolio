import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-kaif-a417203a9/",
    icon: <Linkedin size={20} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/nerd04",
    icon: <Github size={20} />,
  },
  {
    name: "X",
    href: "https://x.com/Md27906661",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mohammadkaif1751/",
    icon: <Instagram size={20} />,
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/15 bg-deep py-16 text-white">
      {/* Background ambient light */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-sage/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="font-extrabold text-2xl tracking-wider text-white mb-2">
            KAIF<span className="text-copper">.DEV</span>
          </a>
          <p className="text-white text-sm max-w-xs font-semibold">
            Designing and coding beautiful modern web experiences with exceptional attention to detail.
          </p>
        </div>

        {/* Social Icons Container */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:text-deep hover:bg-copper hover:border-copper hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white font-semibold">
        <p>© {new Date().getFullYear()} Md Kaif Shaik. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
