import { Github, Linkedin, Instagram, Briefcase } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <Linkedin size={20} />,
    color: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github size={20} />,
    color: "hover:text-gray-200 hover:border-gray-200/30 hover:bg-gray-200/5",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.942l4.87 4.87a1.378 1.378 0 0 0 1.951-.01l9.785-9.766a1.372 1.372 0 0 0 0-1.942l-4.9-4.9A1.376 1.376 0 0 0 13.483 0zm.082 2.507 3.516 3.516-8.29 8.271-3.517-3.517zm-4.74 11.399 2.779 2.774 2.107-2.119-.467-.467a1.374 1.374 0 0 0-1.945 0l-.497.497-.467-.467a1.374 1.374 0 0 0-1.945 0l-.497.497-.07-.071zm4.195-2.09 1.156-1.16 3.516 3.516-1.156 1.16zm-5.656 4.741a2.748 2.748 0 0 1 0-3.885l.07-.07 3.885 3.885-.07.07a2.747 2.747 0 0 1-3.885 0z" />
      </svg>
    ),
    color: "hover:text-amber-500 hover:border-amber-500/30 hover:bg-amber-500/5",
  },
  {
    name: "X",
    href: "https://x.com",
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
    color: "hover:text-sky-300 hover:border-sky-300/30 hover:bg-sky-300/5",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram size={20} />,
    color: "hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/5",
  },
  {
    name: "Naukri",
    href: "https://www.naukri.com",
    icon: <Briefcase size={20} />,
    color: "hover:text-teal-400 hover:border-teal-400/30 hover:bg-teal-400/5",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-black/80 py-16">
      {/* Background ambient light */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="font-extrabold text-2xl tracking-wider text-white mb-2">
            KAIF<span className="text-indigo-500">.DEV</span>
          </a>
          <p className="text-gray-400 text-sm max-w-xs">
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
              className={`flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Md Kaif Shaik. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
