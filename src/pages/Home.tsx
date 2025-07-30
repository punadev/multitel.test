import React, { useState, useEffect } from 'react';
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
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      <Helmet>
        <title>Multitel Telecomunicações</title>
        <meta name="description" content="Internet de alta velocidade, segurança e confiabilidade para sua residência ou empresa. Conecte-se com a melhor tecnologia do mercado." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative ">
        <div className="relative min-h-[600px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              {/* Conteúdo do slide */}
              <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-4 md:pl-16 z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl text-white drop-shadow mb-6 max-w-xl">{slide.description}</p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-[#2b489e] hover:bg-[#1d326b] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
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