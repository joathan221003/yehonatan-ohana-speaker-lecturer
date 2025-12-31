import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Heart, Lightbulb, Award, Clock, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'מותאם לקהל',
    description: 'הרצאות שמותאמות לקהל היעד – החל מבני נוער ועד מבוגרים'
  },
  {
    icon: Heart,
    title: 'שיח פתוח וכן',
    description: 'תוך שיח פתוח, כן ונוגע עם הקהל'
  },
  {
    icon: Lightbulb,
    title: 'תובנות וערכים',
    description: 'משאירות את הקהל עם תובנות על ערכים, אומץ, חברות, והשראה'
  },
  {
    icon: Award,
    title: 'חוויה מלאה',
    description: 'כוללות סיפור אישי עוצמתי, תמונות, וקטעי וידאו'
  },
];

const highlights = [
  { icon: Clock, label: '60-90 דקות', desc: 'משך הרצאה' },
  { icon: MessageCircle, label: 'שאלות ותשובות', desc: 'שיח פתוח' },
  { icon: Users, label: 'כל הגילאים', desc: 'מותאם אישית' },
];

export default function LecturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="lectures" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9A227]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase">מה אני מציע</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">הרצאות</h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            אני מציע הרצאות שמותאמות לקהל היעד – החל מבני נוער ועד מבוגרים, תוך שיח פתוח, כן ונוגע. ההרצאות כוללות סיפור אישי עוצמתי, תמונות, וקטעי וידאו, ומשאירות את הקהל עם תובנות על ערכים, אומץ, חברות, והשראה.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-[#C9A227]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#C9A227]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C9A227]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#C9A227]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Images and Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://yehonatan.online/images/portrait1.jpg"
                  alt="יהונתן אוחנה"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden mt-8"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://yehonatan.online/images/fallen.jpg"
                  alt="החברים שנפלו"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Highlights & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.label}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={scrollToContact}
              className="w-full py-4 bg-[#C9A227] text-black font-semibold rounded-full hover:bg-[#E8D48A] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              להזמנת הרצאה
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}