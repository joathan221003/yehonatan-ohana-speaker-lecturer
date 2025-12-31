import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Mail, Phone } from 'lucide-react';

const navItems = [
  { label: 'ראשי', href: '#hero' },
  { label: 'אודות', href: '#about' },
  { label: 'הרצאות', href: '#lectures' },
  { label: 'מדיה', href: '#media' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'שאלות נפוצות', href: '#faq' },
  { label: 'צור קשר', href: '#contact' },
];

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --gold: #C9A227;
          --gold-light: #E8D48A;
          --dark: #0a0a0a;
          --dark-lighter: #141414;
          --gray: #1a1a1a;
          --gray-light: #2a2a2a;
          --text-primary: #ffffff;
          --text-secondary: #a0a0a0;
        }
        
        * {
          font-family: 'Heebo', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--dark);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--gray-light);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--gold);
        }
      `}</style>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="text-xl font-bold tracking-wide"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-[#C9A227]">יהונתן</span>{' '}
              <span className="text-white">אוחנה</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#C9A227] text-black font-medium rounded-full hover:bg-[#E8D48A] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              הזמן הרצאה
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="block py-3 text-gray-300 hover:text-white border-b border-white/5 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="block mt-4 text-center py-3 bg-[#C9A227] text-black font-medium rounded-full"
                >
                  הזמן הרצאה
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-[#C9A227]">יהונתן</span> אוחנה
              </h3>
              <p className="text-gray-500 text-sm">מפקד כיתה בגבעתי • מרצה • השראה</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/yehonatan_ohana/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-[#C9A227]/20 hover:text-[#C9A227] transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:yehonatan2210@gmail.com"
                className="p-3 bg-white/5 rounded-full hover:bg-[#C9A227]/20 hover:text-[#C9A227] transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:0543226447"
                className="p-3 bg-white/5 rounded-full hover:bg-[#C9A227]/20 hover:text-[#C9A227] transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-600 text-sm">
              "חייכו כי חיוך זה שמחה ושמחה זה הכח להמשיך"
            </p>
            <p className="text-gray-700 text-xs mt-4">
              © {new Date().getFullYear()} יהונתן אוחנה. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => scrollToSection('#hero')}
            className="fixed bottom-8 left-8 p-3 bg-[#C9A227] text-black rounded-full shadow-lg hover:bg-[#E8D48A] transition-all z-40"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}