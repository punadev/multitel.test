import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from './../../../constants/data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          O Que Dizem os <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Nossos Clientes</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 text-indigo-200 opacity-20">
            <Quote className="w-full h-full" />
          </div>
          <div className="absolute -bottom-12 -right-12 w-24 h-24 text-purple-200 opacity-20 transform rotate-180">
            <Quote className="w-full h-full" />
          </div>

          {/* Testimonial carousel */}
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover border-4 border-indigo-100"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <p className="text-gray-600 text-lg italic mb-6">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-indigo-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation controls */}
            <div className="flex justify-between p-4 border-t border-gray-100">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-indigo-600' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrev}
                  className="p-1 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-1 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;