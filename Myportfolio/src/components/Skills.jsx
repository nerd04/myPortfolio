import { motion } from "framer-motion";
import { Code, Layout, Server, Settings } from "lucide-react";
import GlowingCard from "./GlowingCard";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} className="text-indigo-400" />,
    skills: [
      { name: "Java (Core & Advanced)", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "SQL", level: 88 },
      { name: "Python (basics)", level: 70 },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server size={20} className="text-purple-400" />,
    skills: [
      { name: "Spring Boot / Spring MVC", level: 88 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "MySQL / Relational DBs", level: 85 },
      { name: "MongoDB & Redis (basics)", level: 80 },
    ],
  },
  {
    title: "Web & Frontend",
    icon: <Layout size={20} className="text-sky-400" />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "RESTful API Integration", level: 90 },
    ],
  },
  {
    title: "Tools, Platforms & Concepts",
    icon: <Settings size={20} className="text-teal-400" />,
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Git & GitHub Versioning", level: 88 },
      { name: "Postman & Docker (basics)", level: 85 },
      { name: "OOP / DBMS / OS Concepts", level: 90 },
    ],
  },
];

// Animation variant for staggered reveals
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
              <GlowingCard className="h-full p-6 md:p-8 flex flex-col justify-between">
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-semibold">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-indigo-400 font-mono">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-white/[0.04] rounded-full overflow-hidden border border-white/5">
                          {/* Inner animated bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-600 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                          />
                        </div>
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
