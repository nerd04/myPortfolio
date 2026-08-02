import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Zap, ChevronRight, TrendingUp, Trophy, Calendar } from "lucide-react";
import GlowingCard from "./GlowingCard";

const LeetCode = () => {
  // Real Stats
  const username = "mdkaif11";
  const ranking = "1,714,825";
  const totalSolved = 90;
  const totalQuestions = 3100;
  
  const categories = [
    { name: "Easy", solved: 61, total: 950, color: "bg-emerald-500", text: "text-emerald-400" },
    { name: "Medium", solved: 27, total: 1500, color: "bg-amber-500", text: "text-amber-400" },
    { name: "Hard", solved: 2, total: 650, color: "bg-rose-500", text: "text-rose-400" },
  ];

  // Map out the 364 days (52 weeks * 7 days) to reflect the exact pattern of the user's screenshot
  const generateRealHeatmapData = () => {
    const data = Array.from({ length: 364 }, () => 0); // Default to 0 (no activity)
    
    // Helper to set activity level on a specific day of a week
    const setDay = (week, day, level) => {
      const index = (week * 7) + day;
      if (index < 364) data[index] = level;
    };

    // Aug (Weeks 0 - 4): 1 light green block at the bottom
    setDay(3, 6, 1); 

    // Sep (Weeks 5 - 8): 1 green block near the top
    setDay(6, 1, 2); 

    // Oct (Weeks 9 - 13): No activity

    // Nov (Weeks 14 - 17): 1 light green near top, 1 green near middle-bottom
    setDay(15, 1, 1);
    setDay(16, 5, 2);

    // Dec (Weeks 18 - 22): No activity

    // Jan (Weeks 23 - 26): 2 green blocks near the bottom
    setDay(24, 5, 2);
    setDay(24, 6, 2);

    // Feb (Weeks 27 - 30): 1 green block near the middle
    setDay(28, 3, 3);

    // Mar (Weeks 31 - 34): 1 green block near the bottom
    setDay(32, 5, 2);

    // Apr (Weeks 35 - 38): 1 light green near bottom-left, 1 green near top-right
    setDay(36, 5, 1);
    setDay(37, 2, 2);

    // May (Weeks 39 - 42): No activity

    // Jun (Weeks 43 - 47): Highly Active (June peaks with deep green blocks)
    // Week 44
    setDay(43, 2, 2); setDay(43, 3, 3); setDay(43, 4, 1); setDay(43, 5, 3);
    // Week 45
    setDay(44, 0, 4); setDay(44, 1, 3); setDay(44, 2, 4); setDay(44, 3, 2); setDay(44, 4, 3); setDay(44, 5, 1);
    // Week 46
    setDay(45, 0, 3); setDay(45, 1, 2); setDay(45, 2, 4); setDay(45, 3, 4); setDay(45, 4, 2); setDay(45, 5, 3); setDay(45, 6, 3);
    // Week 47
    setDay(46, 0, 2); setDay(46, 1, 3); setDay(46, 2, 1); setDay(46, 3, 4); setDay(46, 4, 2); setDay(46, 5, 3);

    // Jul (Weeks 48 - 52): Medium Active (July shows sparse but consistent green blocks)
    setDay(48, 1, 2); setDay(48, 2, 3);
    setDay(49, 4, 2);
    setDay(50, 5, 2); setDay(50, 6, 1);
    
    return data;
  };

  const heatmapData = generateRealHeatmapData();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1:
        return "bg-[#3f5f55]"; // Level 1 (solid medium sage)
      case 2:
        return "bg-[#678b7f]"; // Level 2 (medium-light sage)
      case 3:
        return "bg-sage-light"; // Level 3 (bright sage-light)
      case 4:
        return "bg-copper";     // Level 4 (bright copper highlight)
      default:
        return "bg-white/[0.08]";   // No activity (visible empty block)
    }
  };

  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const heatmapScrollRef = useRef(null);

  // Scroll to the right side of the heatmap dynamically on load
  useEffect(() => {
    if (heatmapScrollRef.current) {
      heatmapScrollRef.current.scrollLeft = heatmapScrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <section id="leetcode" className="relative py-24 bg-deep">
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
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            LeetCode Profile
          </h2>
          <p className="text-white font-medium max-w-md mx-auto">
            Problem-solving metrics, algorithmic milestones, and platform performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: User Profile Summary & Badges (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex"
          >
            <GlowingCard className="w-full p-6 md:p-8 flex flex-col justify-between h-full bg-black/35 !border-white/15">
              <div>
                {/* Username Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      MD KAIF
                    </h3>
                    <span className="text-xs text-white font-bold font-mono flex items-center gap-1">
                      Rank #{ranking}
                      <TrendingUp size={12} className="text-copper animate-pulse" />
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-copper to-copper/80 flex items-center justify-center text-white shadow-lg shadow-copper/20">
                    <Trophy size={20} />
                  </div>
                </div>

                {/* Platform Milestones */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.05] border border-white/15">
                    <div className="flex items-center gap-3">
                      <Zap size={16} className="text-sage-light" />
                      <span className="text-sm font-semibold text-white">Max Streak</span>
                    </div>
                    <span className="text-sm font-bold text-white font-mono">13 Days</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.05] border border-white/15">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-copper" />
                      <span className="text-sm font-semibold text-white">Active Days</span>
                    </div>
                    <span className="text-sm font-bold text-white font-mono">39 Days</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://leetcode.com/u/mdkaif11`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group flex items-center justify-center gap-1.5 py-3 rounded-xl border border-white/30 hover:border-copper bg-white/5 hover:bg-copper/20 text-xs font-semibold text-white transition-all duration-300"
              >
                <span>Visit LeetCode Profile</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </GlowingCard>
          </motion.div>

          {/* Right Block: Statistics Breakdown & Heatmap (col-span-8) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col gap-8 justify-between"
          >
            {/* Stats Breakdown Card */}
            <GlowingCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-black/35 !border-white/15">
              
              {/* Circular SVG Chart */}
              <div className="relative flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-white/[0.05]"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-copper"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - totalSolved / totalQuestions)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white font-mono">{totalSolved}</span>
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Solved</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="flex-grow w-full space-y-4">
                {categories.map((cat) => (
                  <div key={cat.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-white">{cat.name} Tier</span>
                      <span className="font-mono text-white">
                        {cat.solved} <span className="text-white/60">/ {cat.total}</span>
                      </span>
                    </div>
                    {/* Linear bar */}
                    <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden border border-white/15">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(cat.solved / cat.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full ${cat.name === "Easy" ? "bg-sage-light" : cat.name === "Medium" ? "bg-copper" : "bg-white"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlowingCard>

            {/* Heatmap Card */}
            <GlowingCard className="p-6 md:p-8 flex flex-col justify-between bg-black/35 !border-white/15">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Coding Activity</h4>
                    <p className="text-xs text-white/90 font-semibold">97 submissions in the past one year</p>
                  </div>
                  
                  {/* Legend indicator */}
                  <div className="flex gap-1 text-[9px] text-white/90 font-mono uppercase items-center">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded bg-white/[0.08]" />
                    <span className="w-2.5 h-2.5 rounded bg-[#3f5f55]" />
                    <span className="w-2.5 h-2.5 rounded bg-[#678b7f]" />
                    <span className="w-2.5 h-2.5 rounded bg-sage-light" />
                    <span className="w-2.5 h-2.5 rounded bg-copper" />
                    <span>More</span>
                  </div>
                </div>
                
                {/* Heatmap Grid (Scrolls to the right by default on load) */}
                <div 
                  ref={heatmapScrollRef}
                  className="grid grid-flow-col grid-rows-7 gap-[5px] overflow-x-auto pb-2 w-full max-w-full"
                >
                  {heatmapData.map((level, idx) => (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-[1.5px] transition-colors duration-500 ${getHeatmapColor(
                        level
                      )}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Monthly text markers aligned at bottom */}
              <div className="flex justify-between items-center text-[10px] text-white/90 font-semibold px-1 mt-2">
                {months.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </GlowingCard>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeetCode;
