import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlowingCard from "./GlowingCard";

const projects = [
  {
    title: "Book My Ticket – Online Booking System",
    desc: "Enterprise movie booking portal featuring concurrent seat locks, Razorpay gateway integration, and role-based panels.",
    tech: ["Java", "Spring Boot", "JPA / Hibernate", "Thymeleaf", "MySQL"],
    liveUrl: "https://github.com/mdkaifshaik",
    githubUrl: "https://github.com/mdkaifshaik",
    type: "Enterprise Application",
    icon: (
      <svg className="w-20 h-20 text-indigo-400/80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <ellipse cx="50" cy="35" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 35 V65 C30 70 70 70 70 65 V35" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 50 C30 55 70 55 70 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M30 65 C30 70 70 70 70 65" stroke="currentColor" strokeWidth="1.5" />
        <rect x="42" y="10" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="18" x2="50" y2="27" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
  {
    title: "Real-Time Chat Application",
    desc: "Sub-second instant messaging web application featuring JWT secure authentication and optimized message history queries.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    liveUrl: "https://github.com/mdkaifshaik",
    githubUrl: "https://github.com/mdkaifshaik",
    type: "Full Stack Web App",
    icon: (
      <svg className="w-20 h-20 text-purple-400/80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50 Q50 20 90 50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
        <path d="M10 60 Q50 30 90 60" stroke="currentColor" strokeWidth="0.5" />
        <rect x="20" y="30" width="35" height="24" rx="8" fill="black" stroke="currentColor" strokeWidth="1.5" />
        <rect x="45" y="45" width="35" height="24" rx="8" fill="black" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="42" r="2" fill="currentColor" />
        <circle cx="37.5" cy="42" r="2" fill="currentColor" />
        <circle cx="45" cy="42" r="2" fill="currentColor" />
        <line x1="55" y1="57" x2="65" y2="57" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="57" r="1.5" fill="currentColor" />
      </svg>
    ),
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
  },
  {
    title: "Hybrid Steganography & File Transfer",
    desc: "Secure file transfer tool utilizing hybrid steganography (DWT+DCT+LSB) and AES-256-GCM / RSA-OAEP cryptography.",
    tech: ["Python", "Flask", "Cryptography", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://github.com/mdkaifshaik",
    githubUrl: "https://github.com/mdkaifshaik",
    type: "Security Utility",
    icon: (
      <svg className="w-20 h-20 text-sky-400/80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="20" width="40" height="60" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="45" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M45 53 H55 V68 H45 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="50" cy="60" r="2" fill="black" stroke="currentColor" strokeWidth="1" />
        <path d="M15 30 L30 40 M15 70 L30 60 M85 30 L70 40 M85 70 L70 60" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <path d="M5 50 H20 M80 50 H95" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    gradient: "from-sky-500/10 via-indigo-500/5 to-transparent",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic for mobile carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="relative py-24 bg-black/40">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Practical demonstrations of full-stack backend APIs, database search enhancements, and secure file transfers.
          </p>
        </motion.div>

        {/* 1. Desktop View (Grid Layout) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex"
            >
              <GlowingCard className="h-full flex flex-col justify-between p-6">
                <div>
                  {/* Project Image Placeholder */}
                  <div className={`relative w-full h-44 rounded-xl overflow-hidden mb-6 bg-linear-to-br ${project.gradient} border border-white/5 flex items-center justify-center group-hover:border-indigo-500/20 transition-colors`}>
                    <div className="absolute w-24 h-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/50 border border-white/10 text-gray-300">
                      {project.type}
                    </span>
                    <div className="relative z-10 p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      {project.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 min-h-[48px]">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium text-gray-400 bg-white/[0.03] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-indigo-500/10"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        {/* 2. Mobile & Tablet View (Horizontal Slide Carousel) */}
        <div 
          className="lg:hidden w-full max-w-md mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex"
            >
              <GlowingCard className="w-full flex flex-col justify-between p-6 h-full min-h-[380px]">
                <div>
                  {/* Decorative Banner */}
                  <div className={`relative w-full h-36 rounded-xl overflow-hidden mb-6 bg-linear-to-br ${activeProject.gradient} border border-white/5 flex items-center justify-center`}>
                    <div className="absolute w-24 h-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/50 border border-white/10 text-gray-300">
                      {activeProject.type}
                    </span>
                    <div className="relative z-10 p-2 flex items-center justify-center">
                      {activeProject.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 min-h-[44px]">
                    {activeProject.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {activeProject.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium text-gray-400 bg-white/[0.03] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-semibold text-white transition-all duration-300"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-indigo-600 text-xs font-semibold text-white transition-all duration-300 shadow-md shadow-indigo-500/10"
                    >
                      <span>Live</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-indigo-500 w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
