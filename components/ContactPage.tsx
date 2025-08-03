import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MessageCircle, Send, Phone, Clock, MapPin } from "lucide-react";

const contactMethods = [
  {
    name: "Viber",
    icon: MessageCircle,
    color: "from-purple-500 to-purple-600",
    description: "အမြန်ဆုံး ဆက်သွယ်နိုင်သည်",
    action: "Viber တွင် ဆက်သွယ်မည်",
    link: "viber://chat?number=+959123456789"
  },
  {
    name: "Messenger",
    icon: Send,
    color: "from-blue-500 to-blue-600",
    description: "Facebook Messenger မှတဆင့်",
    action: "Messenger တွင် စကားပြောမည်",
    link: "https://m.me/joethein99"
  },
  {
    name: "Telegram",
    icon: Phone,
    color: "from-sky-500 to-sky-600",
    description: "24/7 အချိန်ပြည့် ဝန်ဆောင်မှု",
    action: "Telegram တွင် ဆက်သွယ်မည်",
    link: "https://t.me/joethein99"
  }
];

const supportHours = [
  { day: "တနင်္လာ - သောကြာ", hours: "9:00 AM - 11:00 PM" },
  { day: "စနေ - တနင်္ဂနွေ", hours: "10:00 AM - 12:00 AM" }
];

export function ContactPage() {
  return (
    <div className="px-4 py-6 pb-20">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          ဆက်သွယ်ရန်
        </h2>
        <p className="text-slate-600">
          ကျွန်ုပ်တို့နှင့် ဆက်သွယ်ပြီး အကူအညီ ရယူပါ
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="space-y-4 mb-8">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          
          return (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-br ${method.color} p-4 rounded-2xl shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {method.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      {method.description}
                    </p>
                    
                    <Button
                      onClick={() => window.open(method.link, '_blank')}
                      className={`bg-gradient-to-r ${method.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto`}
                    >
                      {method.action}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* QR Code Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card className="p-6 text-center bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            QR ကုဒ်ဖြင့် လွယ်ကူစွာ ဆက်သွယ်ပါ
          </h3>
          
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {contactMethods.map((method) => (
              <div key={method.name} className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-md mb-2 aspect-square flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">QR</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-700">{method.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Support Hours */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl">
              <Clock size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              ဝန်ဆောင်မှု အချိန်များ
            </h3>
          </div>
          
          <div className="space-y-3">
            {supportHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200 last:border-b-0">
                <span className="font-medium text-slate-700">{schedule.day}</span>
                <span className="text-blue-600 font-bold">{schedule.hours}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-blue-600" />
              <p className="text-sm text-blue-800">
                <strong>24/7 အွန်လိုင်း ဝန်ဆောင်မှု</strong> - အရေးပေါ် အကူအညီအတွက်
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}