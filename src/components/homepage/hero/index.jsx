import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = reject;
        });
    };

    preloadImages();
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];


  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-accent overflow-hidden">
      {/* Overlay de linhas/ondas para efeito tech */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-20 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#wave)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0057B8" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative min-h-[600px] flex items-center z-10">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((s, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover scale-105 blur-[2px] brightness-75"
                onLoad={() => handleImageLoad(index)}
                style={{ display: loadedImages.has(index) ? 'block' : 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-accent/40" />
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full flex flex-col md:flex-row items-center justify-between animate-fadeInUp">
          <div className="w-full md:w-1/2 pl-0 md:pl-12">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg leading-tight">
              {slide.title}
            </h1>
            {slide.plan && (
              <div className="bg-white/90 rounded-2xl p-8 shadow-2xl mb-6 max-w-md animate-fadeInUp">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1 uppercase tracking-wide">{slide.plan.name}</div>
                    <div className="flex items-baseline mt-2 gap-2">
                      <span className="text-4xl font-extrabold text-primary-dark">{slide.plan.home.split(' ')[0]}</span>
                      <span className="ml-1 text-lg text-primary">{slide.plan.home.split(' ')[1]}</span>
                      <span className="mx-2 text-gray-400">+</span>
                      <span className="text-4xl font-extrabold text-accent">{slide.plan.mobile.split(' ')[0]}</span>
                      <span className="ml-1 text-lg text-accent">{slide.plan.mobile.split(' ')[1]}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 tracking-wide">
                      NA SUA CASA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SÓ NO CELULAR
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">POR</div>
                    <div className="text-4xl font-extrabold text-primary-dark">Kz {slide.plan.price}</div>
                    <div className="text-xs text-gray-500">/mês</div>
                  </div>
                </div>
                <div className="mt-4 text-xs flex items-center space-x-2">
                  <span className="text-gray-700">APPS ILIMITADOS:</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="h-4" />
                </div>
                <a href="/contacto" className="btn-primary mt-6 w-full block text-center text-lg shadow-lg hover:scale-105">Assine Agora</a>
              </div>
            )}
          </div>
          <div className="hidden md:flex flex-1 justify-end items-center">
            {/* Espaço para imagem/ilustração tech, se desejar */}
          </div>
          {/* Navegação dos slides */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
        {/* Bullets dos slides */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 border-2 border-white ${
                i === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}