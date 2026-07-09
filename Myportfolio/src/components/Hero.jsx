import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Mesh Grid Backdrop */}
      <div className="grid-bg" />
      <div className="ambient-glow" />

      {/* Decorative Floating Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none animate-pulse duration-[12s]" />

      <div className="mx-auto max-w-6xl px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Introduction */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles size={12} className="animate-spin duration-3000" />
            <span>Available for Hire</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6"
          >
            Hi, I am <span className="gradient-text font-black">Md Kaif</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mt-2 block">
              I specialize in crafting{" "}
              <span className="inline-block relative min-w-[200px] sm:min-w-[300px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="gradient-text-indigo font-bold absolute left-0"
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
            className="text-gray-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
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
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* View Work Button */}
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 px-8 py-4 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Code Window Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden glass-panel">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-gray-500 font-mono">
                <Terminal size={12} />
                <span>Developer.jsx</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed text-left overflow-x-auto">
              <div>
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-purple-400">developer</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-gray-400">name:</span>{" "}
                <span className="text-green-300">"Md Kaif"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">coreStack:</span>{" "}
                <span className="text-green-300">"Java + MERN Stack"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">technologies:</span> [
              </div>
              <div className="pl-8 text-indigo-300">
                "Java", "Spring Boot", "React.js",
              </div>
              <div className="pl-8 text-indigo-300">
                "Node.js", "Express.js", "MySQL",
              </div>
              <div className="pl-8 text-indigo-300">
                "MongoDB", "Python (basics)"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-gray-400">leetcodeDSASolved:</span>{" "}
                <span className="text-orange-400">"150+"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">passionateAbout:</span>{" "}
                <span className="text-green-300">"Backend Systems & REST APIs"</span>
              </div>
              <div>{"};"}</div>
              <div className="mt-4">
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-purple-400">sayHello</span> = () =&gt; {"{"}
              </div>
              <div className="pl-4 text-gray-400">
                console.<span className="text-blue-400">log</span>(
                <span className="text-green-300">`Let's construct scalable backend systems!`</span>
                );
              </div>
              <div>{"};"}</div>
            </div>
            
            {/* Visual bottom tab */}
            <div className="px-5 py-2.5 border-t border-white/5 bg-white/[0.01] flex items-center space-x-3 text-xs text-indigo-400/70 font-mono">
              <Code2 size={14} />
              <span>Modular & clean developer architectures</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
