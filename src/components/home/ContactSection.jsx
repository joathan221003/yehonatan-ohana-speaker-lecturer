import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email
    await base44.integrations.Core.SendEmail({
      to: 'yehonatan2210@gmail.com',
      subject: `פנייה חדשה מהאתר - ${formData.name}`,
      body: `
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email}

הודעה:
${formData.message}
      `,
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'אימייל', value: 'yehonatan2210@gmail.com', href: 'mailto:yehonatan2210@gmail.com' },
    { icon: Phone, label: 'טלפון', value: '054-3226447', href: 'tel:0543226447' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#C9A227]/10 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase">בואו נדבר</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">צור קשר</h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            להזמנת הרצאה או פרטים נוספים, מלאו את הטופס ואחזור אליכם בהקדם
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#C9A227]/30 hover:bg-white/[0.04] transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: -5 }}
                >
                  <div className="w-12 h-12 bg-[#C9A227]/10 rounded-full flex items-center justify-center group-hover:bg-[#C9A227]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              className="mt-8 p-6 bg-[#C9A227]/5 border border-[#C9A227]/10 rounded-xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-[#C9A227] italic text-lg leading-relaxed">
                "חייכו כי חיוך זה שמחה ושמחה זה הכח להמשיך"
              </p>
              <p className="text-gray-500 mt-2 text-sm">— יהונתן אוחנה</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/[0.02] border border-white/5 rounded-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="w-20 h-20 bg-[#C9A227]/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#C9A227]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ההודעה נשלחה בהצלחה!</h3>
                <p className="text-gray-400 mb-6">אחזור אליכם בהקדם האפשרי</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#C9A227] hover:underline"
                >
                  שלח הודעה נוספת
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">שם מלא *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#C9A227]/50 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/30 transition-all"
                      placeholder="השם שלך"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">טלפון *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#C9A227]/50 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/30 transition-all"
                      placeholder="050-0000000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">אימייל *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#C9A227]/50 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">הודעה *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#C9A227]/50 focus:outline-none focus:ring-1 focus:ring-[#C9A227]/30 transition-all resize-none"
                    placeholder="ספרו לי על הארגון ומה אתם מחפשים..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C9A227] text-black font-semibold rounded-xl hover:bg-[#E8D48A] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      שולח...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      שלח הודעה
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}