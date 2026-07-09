import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";
import GlowingCard from "./GlowingCard";

const educationDetails = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "PDA College of Engineering, Kalaburagi",
    duration: "2022 – 2026 (Expected)",
    scoreType: "CGPA",
    scoreValue: "7.6",
    description: "Focusing on core computer science fundamentals, database management, software development lifecycles, and backend integrations.",
    icon: <GraduationCap className="text-indigo-400" size={22} />,
  },
  {
    degree: "Class 12 (Pre-University College)",
    institution: "Shaheen Independent PU College, Bidar",
    duration: "2019 – 2021",
    scoreType: "Percentage",
    scoreValue: "96%",
    description: "Completed higher secondary education specializing in Physics, Chemistry, Mathematics, and Computer Science.",
    icon: <BookOpen className="text-purple-400" size={20} />,
  },
  {
    degree: "Class 10 (Secondary School)",
    institution: "Shadaan High School, Humnabad, Bidar",
    duration: "2018 – 2019",
    scoreType: "Percentage",
    scoreValue: "90.72%",
    description: "Completed general secondary education with distinction, building strong foundational logical and analytical reasoning capabilities.",
    icon: <BookOpen className="text-sky-400" size={20} />,
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-black/30">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black gradient-text mb-4">
            Education Journey
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Academic qualifications and scholastic milestones that shaped my engineering foundations.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <GlowingCard className="h-full flex flex-col justify-between p-6">
                
                <div>
                  {/* Icon & Date Header */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 shadow-md">
                      {edu.icon}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <Calendar size={12} />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-semibold text-indigo-400">
                      {edu.institution}
                    </span>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                {/* Score badge at bottom */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-semibold">{edu.scoreType}</span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black text-indigo-300 bg-indigo-500/10 border border-indigo-500/15">
                    <Award size={13} className="text-indigo-400" />
                    <span>{edu.scoreValue}</span>
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

export default Education;
