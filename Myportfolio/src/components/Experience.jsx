import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import GlowingCard from "./GlowingCard";

const experiences = [
  {
    role: "Java Developer Intern",
    company: "JSpiders Training Institute",
    duration: "Jan 2026 – Present",
    location: "Rajajinagar, Bengaluru, India",
    desc: [
      "Completed 200+ hours of intensive hands-on training in Core Java, OOP principles, Data Structures & Algorithms (DSA), SDLC, and Agile methodologies.",
      "Solved 150+ DSA problems, improving algorithmic optimization, coding efficiency, and problem-solving proficiency.",
      "Developed 3+ real-world full-stack applications leveraging Java, Spring Framework, Spring Boot, and RESTful APIs.",
      "Designed, developed, and tested 15+ RESTful endpoints, achieving consistent response times under 300ms during local validation.",
      "Gained hands-on experience with relational databases (Oracle SQL, MySQL), writing 50+ optimal database queries for quick data retrieval and manipulation.",
      "Participated in Agile-based development cycles, actively contributing to sprint planning sessions, code reviews, and iterative feature deliveries.",
      "Sharpened debugging and runtime optimization skills, reducing runtime errors in full-stack projects by approximately 30%.",
    ],
    tags: ["Java", "OOPs", "Data Structures", "Spring Boot", "REST APIs", "MySQL", "Oracle SQL", "Agile"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-black/40">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Practical development training, architectural design milestones, and hands-on full-stack contributions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
          
          {/* Animated vertical gradient path tracker overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] timeline-line origin-top pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Glow Node on Timeline */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center w-4 h-4 md:w-6 md:h-6 rounded-full bg-black border-2 border-indigo-500 shadow-md shadow-indigo-500/40 z-10">
                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-indigo-500 animate-ping duration-1000" />
              </div>

              {/* Experience Card */}
              <GlowingCard className="relative p-6 md:p-8">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="text-indigo-400" size={20} />
                      {exp.role}
                    </h3>
                    <span className="text-indigo-400 font-semibold mt-1 block">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 text-sm text-gray-300 mb-6">
                  {exp.desc.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={16} className="text-indigo-500 mt-1 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
