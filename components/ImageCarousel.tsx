import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import promoImage1 from 'figma:asset/65b673efe95c5dbda3bbe3a0345b3e023c6c01ee.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

const carouselImages = [
  {
    id: 1,
    image: promoImage1,
    alt: "JoeThein99 Special Promotion"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551834401-b8da22f41782?w=800&h=400&fit=crop&crop=center",
    alt: "Premium Gaming Experience",
    isExternal: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606114859840-b61e3b4c77ba?w=800&h=400&fit=crop&crop=center", 
    alt: "24/7 Customer Support",
    isExternal: true
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-emerald-50 to-blue-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {carouselImages[currentIndex].isExternal ? (
            <ImageWithFallback
              src={carouselImages[currentIndex].image}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={carouselImages[currentIndex].image}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft size={20} className="text-slate-700" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronRight size={20} className="text-slate-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white shadow-lg scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
      </div>
    </div>
  );
}