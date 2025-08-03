import { motion } from "motion/react";
import { Play } from "lucide-react";

interface GameCardProps {
  name: string;
  logo: string;
  color: string;
  index: number;
}

export function GameCard({ name, logo, color, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        y: -5 
      }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
    >
      <div 
        className="relative rounded-2xl p-6 bg-gradient-to-br shadow-lg border border-white/20 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
          borderColor: `${color}30`
        }}
      >
        {/* Background glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
          style={{ backgroundColor: color }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-3">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: color }}
          >
            <span className="text-lg font-bold">{logo}</span>
          </div>
          
          <h3 className="text-sm font-semibold text-slate-700 text-center">
            {name}
          </h3>
          
          {/* Play button overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          >
            <div className="bg-white/90 rounded-full p-3 shadow-lg">
              <Play size={20} className="text-slate-700 ml-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}