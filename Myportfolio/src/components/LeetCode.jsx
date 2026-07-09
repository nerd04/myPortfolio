import { motion } from "framer-motion";
import { Award, Zap, ChevronRight, TrendingUp, Trophy } from "lucide-react";
import GlowingCard from "./GlowingCard";

const LeetCode = () => {
  // Mock Stats
  const username = "mdkaifshaik";
  const ranking = "1,714,825";
  const totalSolved = 90;
  const totalQuestions = 3985;
  
  const categories = [
    { name: "Easy", solved: 61, total: 953, color: "bg-emerald-500", text: "text-emerald-400" },
    { name: "Medium", solved: 27, total: 2081, color: "bg-amber-500", text: "text-amber-400" },
    { name: "Hard", solved: 2, total: 951, color: "bg-rose-500", text: "text-rose-400" },
  ];

  // Generate simulated heatmap items (7 columns, 24 rows)
  const activityLevels = [0, 0, 1, 2, 0, 3, 1, 0, 2, 1, 0, 0, 3, 2, 1, 0, 2, 0, 1, 3, 0, 1, 2, 0];
  const heatmapData = Array.from({ length: 112 }, (_, i) => ({
    day: i,
    level: activityLevels[i % activityLevels.length],
  }));

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1:
        return "bg-indigo-500/25";
      case 2:
        return "bg-indigo-500/50";
      case 3:
        return "bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]";
      default:
        return "bg-white/[0.03]";
    }
  };

  return (
    <section id="leetcode" className="relative py-24 bg-black/50">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

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
            LeetCode Profile
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
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
            <GlowingCard className="w-full p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                {/* Username Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      MD KAIF
                    </h3>
                    <span className="text-xs text-indigo-400 font-mono flex items-center gap-1">
                      Rank #{ranking}
                      <TrendingUp size={12} />
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/10">
                    <Trophy size={20} />
                  </div>
                </div>

                {/* Platform Milestones */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                      <Zap size={16} className="text-amber-400" />
                      <span className="text-sm font-semibold text-gray-300">Max Streak</span>
                    </div>
                    <span className="text-sm font-bold text-white font-mono">13 Days</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                      <Award size={16} className="text-indigo-400" />
                      <span className="text-sm font-semibold text-gray-300">Active Badges</span>
                    </div>
                    <span className="text-sm font-bold text-white font-mono">0 Earned</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://leetcode.com/u/mdkaif11`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group flex items-center justify-center gap-1.5 py-3 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-xs font-semibold text-indigo-300 hover:text-white transition-all duration-300"
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
            <GlowingCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              
              {/* Circular SVG Chart */}
              <div className="relative flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-white/[0.03]"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-indigo-500"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - totalSolved / totalQuestions)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white font-mono">{totalSolved}</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Solved</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="flex-grow w-full space-y-4">
                {categories.map((cat) => (
                  <div key={cat.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-gray-400">{cat.name} Tier</span>
                      <span className="font-mono text-gray-300">
                        {cat.solved} <span className="text-gray-600">/ {cat.total}</span>
                      </span>
                    </div>
                    {/* Linear bar */}
                    <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(cat.solved / cat.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlowingCard>

            {/* Heatmap Card */}
            <GlowingCard className="p-6 md:p-8 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-bold text-white">Coding Activity Heatmap</h4>
                <div className="flex gap-1 text-[9px] text-gray-500 font-mono uppercase">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded bg-white/[0.03]" />
                  <span className="w-2.5 h-2.5 rounded bg-indigo-500/25" />
                  <span className="w-2.5 h-2.5 rounded bg-indigo-500/50" />
                  <span className="w-2.5 h-2.5 rounded bg-indigo-500" />
                  <span>More</span>
                </div>
              </div>
              
              {/* Heatmap Grid */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2">
                {heatmapData.map((item) => (
                  <div
                    key={item.day}
                    className={`w-2.5 h-2.5 rounded-[2px] transition-colors duration-500 ${getHeatmapColor(
                      item.level
                    )}`}
                  />
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
