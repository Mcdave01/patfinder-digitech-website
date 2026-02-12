'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/hero-slide-1.jpg',
    title: 'Digital Transformation for African Institutions',
    description: 'Empowering businesses and institutions across Nigeria with cutting-edge technology solutions',
    highlight: 'Digital Excellence in Africa',
  },
  {
    image: '/hero-slide-2.jpg',
    title: 'Technology Solutions Beyond Borders',
    description: 'Delivering world-class digital infrastructure and IT solutions to transform traditional operations',
    highlight: 'Global Digital Infrastructure',
  },
  {
    image: '/hero-slide-3.jpg',
    title: 'Building Digital Capacity Through Training',
    description: 'Empowering teams with comprehensive technology training and digital literacy programs',
    highlight: 'Skills Development & Training',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in PathFinder DigiTech digital solutions. Please tell me more about your services.'
  );
  const whatsappNumber = '+2349048515646';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block px-4 py-1.5 bg-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {slides[currentSlide].highlight}
                </motion.div>
                
                <motion.h1
                  className="heading-lg text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  className="text-xl text-white/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Link
                    href="#contact"
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    Get Started Today
                    <ChevronRight size={18} />
                  </Link>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[hsl(var(--primary))] transition-all font-semibold"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[hsl(var(--primary))] w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay Resume Button */}
      {!autoplay && (
        <button
          onClick={() => setAutoplay(true)}
          className="absolute bottom-8 right-8 z-20 bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
        >
          Resume Autoplay
        </button>
      )}
    </section>
  );
}
