import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import LecturesSection from '@/components/home/LecturesSection';
import MediaSection from '@/components/home/MediaSection';
import GallerySection from '@/components/home/GallerySection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <HeroSection />
      <AboutSection />
      <LecturesSection />
      <MediaSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}