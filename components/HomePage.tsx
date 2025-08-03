import { motion } from "motion/react";
import { GameCard } from "./GameCard";
import { ImageCarousel } from "./ImageCarousel";
import { ReliabilitySection } from "./ReliabilitySection";

const games = [
  { name: "Pragmatic Play", logo: "PP", color: "#ff6b35" },
  { name: "JILI", logo: "JL", color: "#4f46e5" },
  { name: "Spade Gaming", logo: "SG", color: "#059669" },
  { name: "PG Soft", logo: "PG", color: "#dc2626" },
  { name: "Joker", logo: "JK", color: "#7c3aed" },
  { name: "CQ9", logo: "CQ", color: "#ea580c" },
  { name: "FC", logo: "FC", color: "#0891b2" },
  { name: "Red Tiger", logo: "RT", color: "#be123c" },
  { name: "KA Gaming", logo: "KA", color: "#16a34a" },
  { name: "PlayStar", logo: "PS", color: "#9333ea" },
];

export function HomePage() {
  return (
    <div className="pb-20">
      {/* Image Carousel Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-6 mb-8"
      >
        <ImageCarousel />
      </motion.div>

      {/* Games Section */}
      <div className="px-4 mb-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2">ဂိမ်းများ</h3>
          <p className="text-slate-600">သင့်အကြိုက်ဆုံး ဂိမ်းကို ရွေးချယ်ပါ</p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game, index) => (
            <GameCard
              key={game.name}
              name={game.name}
              logo={game.logo}
              color={game.color}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Reliability Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <ReliabilitySection />
      </motion.div>
    </div>
  );
}