import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C9A227]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase">הכר אותי</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">אודות</h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                שמי <span className="text-[#C9A227] font-semibold">יהונתן אוחנה</span>, סמ"ר ומפקד כיתה בגדוד צבר של חטיבת גבעתי. לאחר שירות משמעותי בצה"ל, שבו חוויתי את אחד הרגעים הקשים בחיי - <span className="text-white font-medium">אסון הנמ"ר בו איבדתי את כל חייליי</span> - בחרתי להקדיש את חיי להנצחת חבריי שנפלו.
              </p>
              
              <p>
                היום, במקום לטייל בעולם כמו רבים אחרים, אני מרצה בבתי ספר, מתנ״סים וארגונים, משתף את הסיפור הלא יאומן של השירות שלי - <span className="text-white font-medium">סיפור על חברות, פיקוד, אחריות, ואובדן</span>. אני מדבר על הלילה האחרון, על הרגע שבו הבנתי שאיבדתי את כולם, ועל השליחות שמלווה אותי מאז.
              </p>
              
              <p className="text-gray-400">
                כיום אני סטודנט במגמת תוכנה.
              </p>
            </div>

            {/* Article Link */}
            <motion.a
              href="https://www.mako.co.il/news-military/6361323ddea5a810/Article-bfea3ed547c9b81026.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#C9A227]/10 hover:border-[#C9A227]/30 transition-all group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">לכתבה המלאה על יהונתן אוחנה באתר mako</span>
              <ExternalLink size={16} className="text-[#C9A227]" />
            </motion.a>
          </motion.div>

          {/* Images */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://yehonatan.online/images/team.jpg"
                  alt="תמונה עם החיילים"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
              </motion.div>
              
              {/* Secondary Image */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-48 md:w-64 rounded-xl overflow-hidden shadow-xl border-4 border-[#0a0a0a] z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://yehonatan.online/images/newspaper.jpg"
                  alt="כתבה בעיתון"
                  className="w-full h-auto"
                />
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C9A227]/30 rounded-2xl" />
              <div className="absolute -bottom-4 right-1/4 w-16 h-16 bg-[#C9A227]/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}