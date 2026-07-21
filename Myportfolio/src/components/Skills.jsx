import { motion } from "framer-motion";
import { Code, Layout, Server, Settings, Globe, GitFork, Cpu, Terminal } from "lucide-react";
import GlowingCard from "./GlowingCard";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} className="text-indigo-400" />,
    skills: [
      { name: "Java (Core & Advanced)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript (ES6+)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server size={20} className="text-purple-400" />,
    skills: [
      { name: "Spring Boot / MVC", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.js / Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL / Relational DBs", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB & Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "Web & Frontend",
    icon: <Layout size={20} className="text-sky-400" />,
    skills: [
      { name: "React.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5 / CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "RESTful API Integration", iconUrl: "api" },
    ],
  },
  {
    title: "Tools, Platforms & Concepts",
    icon: <Settings size={20} className="text-teal-400" />,
    skills: [
      { name: "Data Structures & Algos", iconUrl: "algo" },
      { name: "Git & GitHub Versioning", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman & Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "OOP / DBMS / OS Concepts", iconUrl: "concepts" },
    ],
  },
];

// Helper to render official brand logo image or conceptual Lucide SVG icon
const renderSkillIcon = (icon) => {
  if (icon.startsWith("http")) {
    return <img src={icon} alt="" className="w-5 h-5 object-contain select-none" />;
  }
  switch (icon) {
    case "api":
      return <Globe size={18} className="text-sky-400" />;
    case "algo":
      return <GitFork size={18} className="text-indigo-400 rotate-90" />;
    case "concepts":
      return <Cpu size={18} className="text-teal-400" />;
    default:
      return <Terminal size={18} className="text-gray-400" />;
  }
};

// Animation variants for staggered reveals
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-black/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-4xl h-96 bg-indigo-500/5 blur-[150px] pointer-events-none" />

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
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            A comprehensive breakdown of the core backend frameworks, databases, frontend systems, and development tools I use.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={catIdx} variants={itemVariants}>
              <GlowingCard className="h-full p-6 md:p-8 flex flex-col justify-between !border-white/15 hover:!border-indigo-500/40">
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Grid with Brand Logos */}
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                          {renderSkillIcon(skill.iconUrl)}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
