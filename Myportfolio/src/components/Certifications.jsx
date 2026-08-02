import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import GlowingCard from "./GlowingCard";

const certifications = [
  {
    title: "NPTEL Certification - Privacy and Security in Online Social Media",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    date: "Certified",
    credentialId: "NPTEL-PSOSM-2025",
    verifyUrl: "https://nptel.ac.in",
    driveUrl: "https://drive.google.com/file/d/1wKY5KU7u6vN2dOL-SCv3DXenQOYhOTMN/view?usp=drive_link",
  },
  {
    title: "MOOC Course - Cybersecurity (CySecK)",
    issuer: "CySecK (Cyber Security Karnataka)",
    date: "Certified",
    credentialId: "CYSECK-SEC-3392",
    verifyUrl: "https://cyseck.karnataka.gov.in",
    driveUrl: "https://drive.google.com/file/d/16U9g7K1SsN38M_rRDOccq7j-R-R0X9ru/view?usp=drive_link",
  },
  {
    title: "Powering Web & Mobile Applications with Node.js",
    issuer: "Student Training Program",
    date: "Certified",
    credentialId: "STP-NODEJS-8921",
    verifyUrl: "https://example.com",
    driveUrl: "https://drive.google.com/file/d/1sTkRPydIdmA3cA7sIIVIW6stZP0qzo3V/view?usp=drive_link",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 bg-oatmeal">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-sage/5 blur-[120px] pointer-events-none" />

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
            Licenses & Certifications
          </h2>
          <p className="text-deep/75 max-w-md mx-auto font-medium">
            Professional qualifications and certifications validating my skills in cybersecurity, online privacy, and backend node development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlowingCard className="h-full flex flex-col justify-between p-6 bg-white/40 border border-sage-light/20">
                
                {/* Certificate Icon & Header */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sage/10 border border-sage/20 text-sage">
                    <Award size={24} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-copper font-bold font-mono">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-base font-bold text-deep mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-sm font-semibold text-sage">
                    {cert.issuer}
                  </span>
                </div>

                {/* ID and Action Links */}
                <div className="mt-auto pt-4 border-t border-deep/10 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-deep/60 font-semibold font-mono">
                      <ShieldCheck size={14} className="text-sage" />
                      <span className="truncate max-w-[140px]">{cert.credentialId}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* View Certificate Button (Google Drive Link) */}
                    <a
                      href={cert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-copper hover:bg-copper/90 text-xs font-semibold text-oatmeal transition-all duration-300 shadow-md shadow-copper/15 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={12} />
                    </a>
                    
                    {/* Verify Link */}
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-xl border border-deep/15 hover:border-deep/30 bg-deep/5 hover:bg-deep/10 text-xs font-semibold text-deep transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Verify</span>
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

export default Certifications;
