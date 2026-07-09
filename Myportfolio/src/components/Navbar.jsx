import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Intro", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[99] pointer-events-none transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? "top-2" : "top-0"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl rounded-full pointer-events-auto transition-all duration-500 flex items-center justify-between px-6 py-3 md:px-8 ${
          scrolled
            ? "bg-black/50 border border-white/10 backdrop-blur-xl shadow-xl shadow-indigo-950/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="font-extrabold text-xl md:text-2xl tracking-wider text-white">
            KAIF<span className="text-indigo-500 group-hover:text-purple-400 transition-colors">.DEV</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-300 relative hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume CTA inside Navbar */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600/80 border border-indigo-400/30 rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-md shadow-indigo-500/10"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none p-1.5 rounded-full hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Glass Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[76px] z-40 lg:hidden px-4 pointer-events-auto">
          <div className="w-full rounded-3xl bg-black/90 border border-white/10 backdrop-blur-2xl p-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white px-4 py-3 rounded-2xl hover:bg-white/5 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <hr className="border-white/10" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/25"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
