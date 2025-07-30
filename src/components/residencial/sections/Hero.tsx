import React, { useState } from 'react';
import Button from '../ui/Button';
import { ArrowRight, Wifi, Home, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-1xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Internet feita 
              &nbsp;<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> 
               para sua família
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Conexão estável e suporte que realmente funciona. Desfrute da internet que entende as necessidades da sua família.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                Por que as famílias confiam em nós?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Home className="h-5 w-5 text-indigo-600 mr-2" />
                  <span> Instalação rápida e sem complicações</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Wifi className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Wi-Fi potente em todos os cantos da casa</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Heart className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>Suporte técnico que resolve de verdade</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500"
              style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src="/residente/nethome.jpg" 
                alt="Família feliz conectada" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium animate-bounce">
              Instalação em 24h!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;