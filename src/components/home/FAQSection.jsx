import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'למי מתאימות ההרצאות?',
    answer: 'ההרצאות מתאימות לבני נוער, חיילים, צוותי חינוך, ארגונים, ומבוגרים – כל מי שמחפש השראה, ערכים, וכלים להתמודדות עם אתגרים.',
  },
  {
    question: 'האם יש דגש על העצמה אישית?',
    answer: 'בהחלט. בהרצאות משולבים כלים מעשיים להתמודדות עם קושי, חוסן נפשי, והפיכת משבר לצמיחה.',
  },
  {
    question: 'האם יש מקום לשאלות מהקהל?',
    answer: 'כן! חלק מרכזי בהרצאה הוא שיח פתוח עם הקהל, מענה לשאלות, ושיתוף הדדי.',
  },
  {
    question: 'כמה זמן נמשכת ההרצאה?',
    answer: 'משך ההרצאה נע בין 60 ל-90 דקות, בהתאם לצורך ולבקשת המארגנים.',
  },
  {
    question: 'האם ניתן להתאים את התוכן?',
    answer: 'בוודאי. ניתן להתאים את התוכן, הדגשים והמסרים לפי קהל היעד והאירוע.',
  },
];

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <motion.div
      className="border-b border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-right group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#C9A227]' : 'text-white group-hover:text-[#C9A227]'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 mr-4 ${isOpen ? 'text-[#C9A227]' : 'text-gray-500'}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed pr-0">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
      
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase">שאלות נפוצות</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">שאלות ותשובות</h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="bg-white/[0.02] border border-white/5 rounded-2xl px-6 md:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}