import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Sparkles, Camera, MapPin } from "lucide-react";
import profileImg from "../assets/profile.png";

const roles = [
  "Java & Spring Boot Developer",
  "MERN Stack Specialist",
  "Full Stack Engineer",
  "Backend Architecture Designer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Mesh Grid Backdrop */}
      <div className="grid-bg" />
      <div className="ambient-glow" />

      {/* Decorative Floating Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-sage/5 blur-[80px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-copper/5 blur-[100px] pointer-events-none animate-pulse duration-[12s]" />

      {/* Abstract Blueprint Geometry Art */}
      <div className="absolute right-[-12%] top-[8%] w-[650px] h-[650px] opacity-20 pointer-events-none hidden lg:block z-0 select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_90s_linear_infinite]">
          <circle cx="100" cy="100" r="90" stroke="url(#sage-copper-grad)" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" stroke="url(#sage-copper-grad)" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" stroke="url(#sage-copper-grad)" strokeWidth="0.5" strokeDasharray="6 2" />
          <path d="M10 100 H190" stroke="url(#sage-copper-grad)" strokeWidth="0.25" />
          <path d="M100 10 V190" stroke="url(#sage-copper-grad)" strokeWidth="0.25" />
          <ellipse cx="100" cy="100" rx="95" ry="32" stroke="url(#sage-copper-grad)" strokeWidth="0.75" transform="rotate(35 100 100)" />
          <ellipse cx="100" cy="100" rx="95" ry="32" stroke="url(#sage-copper-grad)" strokeWidth="0.75" transform="rotate(-35 100 100)" />
          <ellipse cx="100" cy="100" rx="95" ry="15" stroke="url(#sage-copper-grad)" strokeWidth="0.5" transform="rotate(75 100 100)" />
          <ellipse cx="100" cy="100" rx="95" ry="15" stroke="url(#sage-copper-grad)" strokeWidth="0.5" transform="rotate(-75 100 100)" />
          <defs>
            <linearGradient id="sage-copper-grad" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#3f5f55" />
              <stop offset="50%" stopColor="#a6b89a" />
              <stop offset="100%" stopColor="#c07a4b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Introduction */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sage/30 bg-sage/10 text-sage text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Available for Hire</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-deep mb-6"
          >
            Hi, I am <br className="sm:hidden" />
            <span className="gradient-text font-black">Md Kaif</span>
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-deep/60 mt-3 block leading-normal">
              I specialize in crafting{" "}
              <span className="inline-block relative min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[1.3em] align-top text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-copper font-bold absolute left-0 right-0 lg:left-0 lg:right-auto mx-auto lg:mx-0 w-full"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-deep/80 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed font-medium"
          >
            Software developer experienced in building robust backend systems and full-stack applications.
            Skilled in combining Java/Spring Boot architectures with high-fidelity React & Node.js (MERN) web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Md_Kaif_Resume.pdf"
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-copper hover:bg-copper/90 text-oatmeal font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-copper/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* View Work Button */}
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 px-8 py-4 border border-deep/15 hover:border-deep/30 bg-deep/5 hover:bg-deep/10 text-deep font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Photo Exhibit Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-5 w-full flex justify-center lg:block mt-8 lg:mt-0 relative"
        >
          {/* Framed profile layout styling */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-3xl p-3 bg-white/40 border border-sage-light/20 backdrop-blur-md shadow-2xl flex items-center justify-center"
          >
            {/* Fine copper border highlight overlay inside */}
            <div className="absolute inset-2 rounded-2xl border border-copper/30 pointer-events-none z-10" />

            {/* Profile image with custom clip-path / border-radius */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative select-none">
              <img 
                src={profileImg} 
                alt="Md Kaif - Professional Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Modern glassmorphic tag overlay at the bottom */}
              <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-deep/80 border border-white/10 backdrop-blur-md flex items-center justify-between text-[11px] text-oatmeal font-mono z-20">
                <div className="flex items-center gap-1.5">
                  <Camera size={12} className="text-copper" />
                  <span>Md Kaif</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={11} className="text-copper" />
                  <span>Bengaluru, IN</span>
                </div>
              </div>
            </div>

            {/* Small decorative copper seal block */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-copper border-2 border-oatmeal flex items-center justify-center text-oatmeal text-[10px] font-bold shadow-md z-30 select-none">
              ★
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
