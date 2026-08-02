import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Intro", href: "#home" },
  { name: "Experience", href: "#experience" },
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
            ? "bg-oatmeal/85 border border-sage-light/25 backdrop-blur-xl shadow-lg shadow-deep/5"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="font-extrabold text-xl md:text-2xl tracking-wider text-deep">
            KAIF<span className="text-copper group-hover:text-sage transition-colors">.DEV</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-deep/80 hover:text-deep px-4 py-2 rounded-full transition-all duration-300 relative hover:bg-sage/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume CTA inside Navbar */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-oatmeal bg-copper border border-copper/10 rounded-full hover:bg-copper/90 transition-all duration-300 shadow-md shadow-copper/10"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-deep hover:text-copper focus:outline-none p-1.5 rounded-full hover:bg-sage/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Glass Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[76px] z-40 lg:hidden px-4 pointer-events-auto">
          <div className="w-full rounded-3xl bg-oatmeal/95 border border-sage-light/20 backdrop-blur-2xl p-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-deep/85 hover:text-deep px-4 py-3 rounded-2xl hover:bg-sage/10 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <hr className="border-deep/10" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-copper hover:bg-copper/90 text-oatmeal font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-copper/25"
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
