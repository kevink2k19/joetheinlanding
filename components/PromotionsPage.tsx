import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Gift, Zap, Crown, Sparkles } from "lucide-react";

const promotions = [
  {
    id: 1,
    title: "ကြိုဆိုသော ဘောနပ်စ်",
    description: "ပထမဆုံးအကြိမ် အပ်ငွေအတွက် 100% ဘောနပ်စ်",
    color: "from-yellow-400 to-orange-500",
    icon: Crown,
    badge: "အစမ်းရူး",
  },
  {
    id: 2,
    title: "နေ့စဉ် လက်ဆောင်",
    description: "နေ့တိုင်း ဝင်ရောက်ပြီး အခမဲ့ လက်ဆောင်များ ရယူပါ",
    color: "from-emerald-400 to-teal-500",
    icon: Gift,
    badge: "နေ့စဉ်",
  },
  {
    id: 3,
    title: "စုပါဆော့ ဆုပေး",
    description: "ဂိမ်းကစားပြီး အမှတ်ရမှတ်များ ရယူကာ ဆုများနှင့် လဲလှယ်ပါ",
    color: "from-purple-400 to-pink-500",
    icon: Sparkles,
    badge: "ထူးခြား",
  },
  {
    id: 4,
    title: "အမြန်ဆုံး ပေါ်လစ်",
    description: "တစ်ခါတည်း ငွေသွင်းပြီး 5 မိနစ်အတွင်း အကန့်အသတ်မရှိ သုံးပါ",
    color: "from-blue-400 to-indigo-500",
    icon: Zap,
    badge: "အမြန်",
  },
];

export function PromotionsPage() {
  return (
    <div className="px-4 py-6 pb-20">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          ပရိုမိုးရှင်းများ
        </h2>
        <p className="text-slate-600">
          အထူးလက်ဆောင်များနှင့် ဘောနပ်စ်များ
        </p>
      </motion.div>

      <div className="space-y-6">
        {promotions.map((promo, index) => {
          const Icon = promo.icon;
          
          return (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${promo.color} p-1`}>
                  <div className="bg-white rounded-lg">
                    <div className="relative p-6">
                      {/* Badge */}
                      <div className={`absolute top-4 right-4 bg-gradient-to-r ${promo.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {promo.badge}
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-br ${promo.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-2">
                            {promo.title}
                          </h3>
                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {promo.description}
                          </p>
                          
                          <Button 
                            className={`bg-gradient-to-r ${promo.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                          >
                            ယခုချက်ချင်းပါဝင်မည်
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          နောက်ထပ် ပရိုမိုးရှင်းများ ရရှိရန်
        </h3>
        <p className="text-slate-600 mb-4">
          VIP အဖွဲ့ဝင် ဖြစ်ပြီး အထူးအကျိုးခံစားခွင့်များ ရယူပါ
        </p>
        <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
          VIP အဖွဲ့ဝင် ဖြစ်မည်
        </Button>
      </motion.div>
    </div>
  );
}