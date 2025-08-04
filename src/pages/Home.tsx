import React, { useState, useEffect, ReactNode } from 'react';
import { Solutions } from './../components/homepage/solutions';
import { Pub } from './../components/homepage/pub';
import { Callcenter } from './../components/homepage/callcenter';
import { Blog } from './../components/homepage/blog';
import { Cta } from './../components/homepage/cta';
import { Helmet } from 'react-helmet-async';
import { p } from 'framer-motion/client';
import { useTranslation } from "react-i18next";

interface HeroSlide {
  image: string;
  title: string;
  description: ReactNode;
  cta: string;
  ctaLink: string;
}



export function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const heroSlides: HeroSlide[] = [
    {
      image: "/home/portrait-male-engineer-working-field-engineers-day-celebration.jpg",
      title: t("home.slide1.title"),
      description: t("home.slide1.description"),
      cta: t("home.slide1.cta"),
      ctaLink: "/contacto"
    },
    {
      image: "/home/cloud.jpg",
      title: t("home.slide2.title"),
      description: t("home.slide2.description"),
      cta: t("home.slide2.cta"),
      ctaLink: "/contacto"
    },
    {
      image: "/home/home.jpg",
      title: t("home.slide3.title"),
      description: t("home.slide3.description"),
      cta: t("home.slide3.cta"),
      ctaLink: "/residencial"
    },
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [isTransitioning]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src: string) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = reject;
        });
        
      try {
        await Promise.all(heroSlides.map(slide => loadImage(slide.image)));
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };
    preloadImages();
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div>
      <Helmet>
        <title>Multitel Telecomunicações</title>
        <meta name="description" content="Internet de alta velocidade, segurança e confiabilidade para sua residência ou empresa. Conecte-se com a melhor tecnologia do mercado." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative">
        <div 
          className="relative min-h-[600px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / heroSlides.length)}%)`,
              width: `${heroSlides.length * 100}%`
            }}
          >
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 min-h-[600px]"
                style={{ width: `${100 / heroSlides.length}%` }}
              >
                {/* Image Container */}
                <div className="absolute inset-0">
                  {/* Fallback background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
                  
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover relative z-10"
                    loading="eager"
                    onError={(e) => {
                      console.error(`Failed to load image: ${slide.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 z-20" />
                </div>
                
                {/* Conteúdo do slide */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-4 md:pl-16 z-30">
                  <div className="animate-fade-in-up">
                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 animate-slide-in-left">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white drop-shadow-lg mb-6 max-w-xl animate-slide-in-left-delay">
                      {slide.description}
                    </p>
                    <a
                      href={slide.ctaLink}
                      className="inline-block bg-[#2b489e] hover:bg-[#1d326b] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-left-delay-2"
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                currentSlide === index 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30">
          <div 
            className="h-full bg-white transition-all duration-300 ease-linear"
            style={{ 
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
              transitionDuration: isTransitioning ? '0ms' : '8000ms'
            }}
          />
        </div>
      </div>
      
      <Solutions />
      <Pub />
      <Blog />
      <Callcenter />
      <Cta />
    </div>
  );
}