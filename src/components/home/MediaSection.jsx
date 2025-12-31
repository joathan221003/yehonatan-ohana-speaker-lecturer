import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    id: 'Zmn8wns1sq0',
    title: 'יהונתן אוחנה מפקד בגבעתי ש-11 חייליו נהרגו בעזה',
    channel: 'פודקאסט הגשר - מדברים פוסט טראומה',
    thumbnail: `https://img.youtube.com/vi/Zmn8wns1sq0/maxresdefault.jpg`,
  },
  {
    id: 'H8E5PSKF5b0',
    title: 'סמל יהונתן אוחנה מגדוד צבר, אשר איבד 11 מחייליו באסון הנמ"ר',
    channel: 'ערוץ כנסת',
    thumbnail: `https://img.youtube.com/vi/H8E5PSKF5b0/maxresdefault.jpg`,
  },
];

export default function MediaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section id="media" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase">צפו בי</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">מדיה</h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/5"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {playingVideo === video.id ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  className="relative aspect-video cursor-pointer"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 bg-[#C9A227] rounded-full flex items-center justify-center shadow-2xl shadow-[#C9A227]/30 group-hover:bg-[#E8D48A] transition-colors">
                      <Play className="w-8 h-8 text-black mr-[-4px]" fill="black" />
                    </div>
                  </motion.div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#C9A227] text-xs tracking-wider uppercase mb-2 block">
                      {video.channel}
                    </span>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* YouTube Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://www.youtube.com/results?search_query=יהונתן+אוחנה+גבעתי"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition-colors"
          >
            <span>לעוד סרטונים ביוטיוב</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}