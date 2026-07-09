import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Terminal, Database } from "lucide-react";
import GlowingCard from "./GlowingCard";

const projects = [
  {
    title: "Book My Ticket – Online Booking System",
    desc: "A full-stack movie booking system with role-based Admin/User control. Integrates Razorpay payment gateway, OTP-based verification, and Cloudinary media management. Developed using a Controller-Service-Repository architecture.",
    tech: ["Java", "Spring Boot", "JPA / Hibernate", "Thymeleaf", "MySQL"],
    liveUrl: "https://github.com/mdkaifshaik",
    githubUrl: "https://github.com/mdkaifshaik",
    type: "Enterprise Application",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    features: [
      "Designed and implemented 15+ RESTful APIs with response times <300ms.",
      "Engineered real-time seat allocation to avoid double booking.",
      "Integrated Razorpay gateway and OTP email validation via JavaMailSender.",
      "Optimized query performance for relational models handling 1000+ records."
    ]
  },
  {
    title: "Real-Time Chat Application",
    desc: "A responsive real-time messaging application supporting sub-second delivery. Built with JWT token-based authentication to manage secure concurrent users, and optimized query pipelines for message histories.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    liveUrl: "https://github.com/mdkaifshaik",
    githubUrl: "https://github.com/mdkaifshaik",
    type: "Full Stack Web App",
    icon: <Monitor className="w-5 h-5 text-purple-400" />,
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    features: [
      "Supported sub-second messaging speeds via Socket.io.",
      "Structured secure JWT authentication for 100+ concurrent users.",
      "Improved query performance on message storage and histories by ~30%.",
      "Architected with modular hooks to easily integrate future AI chatbots."
    ]
  },
  {
    title: "Hybrid Steganography Encryption & File Transfer",
    desc: "A secure, covert file transfer tool utilizing dual steganography and cryptographic layers. Combines frequency/spatial domain transformations with hybrid encryption algorithms to safeguard data payloads.",
    tech: ["Python", "Flask", "Cryptography", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://github.com/mdkaifshaik",
    githubUrl: "https://github.com/mdkaifshaik",
    type: "Security & Stego Utility",
    icon: <Terminal className="w-5 h-5 text-sky-400" />,
    gradient: "from-sky-500/10 via-indigo-500/5 to-transparent",
    features: [
      "Implemented hybrid DWT + DCT + LSB steganography (<2% visual shift).",
      "Applied AES-256-GCM and RSA-OAEP algorithms for dual-layer encryption.",
      "Integrated Reed-Solomon error correction for ~99% data recovery accuracy.",
      "Ensured data security by embedding payloads directly inside cover media files."
    ]
  },
];

const Projects = () => {
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
            Practical demonstrations of full-stack development, database query optimizations, and secure data transfers.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <div className={`relative w-full h-40 rounded-xl overflow-hidden mb-6 bg-linear-to-br ${project.gradient} border border-white/5 flex items-center justify-center group-hover:border-indigo-500/20 transition-colors`}>
                    <div className="absolute w-24 h-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/50 border border-white/10 text-gray-300">
                      {project.type}
                    </span>
                    <div className="p-4 rounded-full bg-black/40 border border-white/10 text-white shadow-xl">
                      {project.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4 mb-6 leading-relaxed">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
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
      </div>
    </section>
  );
};

export default Projects;
