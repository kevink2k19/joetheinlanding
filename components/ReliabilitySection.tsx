import { motion } from "motion/react";
import { Shield, Lock, Clock, Award, Users, CheckCircle } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "၁၀၀% လုံခြုံမှု",
    description: "သင့်ငွေကြေးနှင့် အချက်အလက်များ လုံခြုံစွာ ထိန်းသိမ်းထားပါသည်",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Lock,
    title: "SSL လွတ်မြောက်ရေး",
    description: "နောက်ဆုံးပေါ် စာဝှက်နည်းပညာဖြင့် ကာကွယ်ထားပါသည်",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Clock,
    title: "24/7 ဝန်ဆောင်မှု",
    description: "တစ်နေ့တာ အချိန်ပြည့် အကူအညီ ရရှိနိုင်ပါသည်",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Award,
    title: "လိုင်စင်ရ",
    description: "တရားဝင် လိုင်စင်ရရှိထားသော စိတ်ချရသည့် platform",
    color: "from-amber-500 to-orange-600"
  }
];

const stats = [
  { number: "50K+", label: "ကျေနပ်သော အသုံးပြုသူများ" },
  { number: "99.9%", label: "အချိန်ကာလ အလုပ်လုပ်မှု" },
  { number: "24/7", label: "အကူအညီ ဝန်ဆောင်မှု" },
  { number: "100%", label: "ငွေကြေး လုံခြုံမှု" }
];

export function ReliabilitySection() {
  return (
    <div className="px-4 py-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl mx-4 mb-8">
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="text-green-600" size={32} />
          <h2 className="text-2xl font-bold text-slate-800">
            ၁၀၀% ယုံကြည်စိတ်ချရသော
          </h2>
        </div>
        <p className="text-slate-600 max-w-md mx-auto">
          သင့်အတွက် အကောင်းဆုံး နှင့် အလုံခြုံဆုံး gaming experience ကို ပေးဆောင်ပါသည်
        </p>
      </motion.div>

      {/* Trust Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {trustFeatures.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-lg mb-3 w-fit`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-wrap justify-center items-center gap-4 mt-6"
      >
        {["SSL Secured", "Licensed", "Verified", "Trusted"].map((badge, index) => (
          <div
            key={badge}
            className="flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium"
          >
            <CheckCircle size={16} />
            <span>{badge}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}