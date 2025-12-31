import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: 'https://yehonatan.online/images/beret.jpg', alt: 'ברט' },
  { src: 'https://yehonatan.online/images/team.jpg', alt: 'החיילים' },
  { src: 'https://yehonatan.online/images/newspaper.jpg', alt: 'כתבה בעיתון' },
  { src: 'https://yehonatan.online/images/portrait1.jpg', alt: 'פורטרט 1' },
  { src: 'https://yehonatan.online/images/portrait2.jpg', alt: 'פורטרט 2' },
  { src: 'https://yehonatan.online/images/fallen.jpg', alt: 'החברים שנפלו' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0150.jpg', alt: 'תמונה 1' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0151.jpg', alt: 'תמונה 2' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0152.jpg', alt: 'תמונה 3' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0153.jpg', alt: 'תמונה 4' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0154.jpg', alt: 'תמונה 5' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0155.jpg', alt: 'תמונה 6' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0156.jpg', alt: 'תמונה 7' },
  { src: 'https://yehonatan.online/images/IMG-20250717-WA0149.jpg', alt: 'תמונה 8' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };
  
  const goPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase">רגעים</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">גלריית תמונות</h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.div
              className="max-w-5xl max-h-[90vh] px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-center text-gray-400 mt-4">
                {images[selectedIndex].alt} • {selectedIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}