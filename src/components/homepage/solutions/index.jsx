import React, { useRef, useState, useEffect } from 'react';
import { Wifi, ShieldCheck, Rocket, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceModal } from './ServiceModal';
import { useTranslation } from 'react-i18next';

export function Solutions() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  const scrollToCard = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -400 : 400;
      
      // Verificar se o scroll é possível
      if (direction === 'left' && container.scrollLeft <= 0) {
        return; // Não pode recuar mais
      }
      
      if (direction === 'right' && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        return; // Não pode avançar mais
      }
      
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Verificar a posição após o scroll
      setTimeout(checkScrollPosition, 500);
    }
  };

  // Verificar posição inicial e adicionar event listener
  useEffect(() => {
    checkScrollPosition();
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const services = [
    {
      icon: <Wifi className="w-10 h-10 mx-auto mb-4 text-blue-600" />,
      title: t('solutions.connectivity.title'),
      description: t('solutions.connectivity.description'),
      benefits: [
        t('solutions.connectivity.benefit1'),
        t('solutions.connectivity.benefit2'),
        t('solutions.connectivity.benefit3'),
        t('solutions.connectivity.benefit4'),
        t('solutions.connectivity.benefit5'),
      ]
    },
    {
      icon: <Rocket className="w-10 h-10 mx-auto mb-4 text-blue-600" />,
      title: t('solutions.innovation.title'),
      description: t('solutions.innovation.description'),
      benefits: [
        t('solutions.innovation.benefit1'),
        t('solutions.innovation.benefit2'),
        t('solutions.innovation.benefit3'),
        t('solutions.innovation.benefit4'),
        t('solutions.innovation.benefit5'),
      ]
    },
    {
      icon: <Cpu className="w-10 h-10 mx-auto mb-4 text-blue-600" />,
      title: t('solutions.digitotal.title'),
      description: t('solutions.digitotal.description'),
      benefits: [
        t('solutions.digitotal.benefit1'),
        t('solutions.digitotal.benefit2'),
        t('solutions.digitotal.benefit3'),
        t('solutions.digitotal.benefit4'),
        t('solutions.digitotal.benefit5'),
      ]
    },
    {
      icon: <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-blue-600" />,
      title: t('solutions.cybersecurity.title'),
      description: t('solutions.cybersecurity.description'),
      benefits: [
        t('solutions.cybersecurity.benefit1'),
        t('solutions.cybersecurity.benefit2'),
        t('solutions.cybersecurity.benefit3'),
        t('solutions.cybersecurity.benefit4'),
        t('solutions.cybersecurity.benefit5'),
      ]
    }
  ];

  const streamingServices = [
    {
      title: t('solutions.fiberEnterprise.title'),
      description: t('solutions.fiberEnterprise.description'),
      image: "Fiber.jpg",
      promotion: t('solutions.fiberEnterprise.promotion'),
      benefits: [
        t('solutions.fiberEnterprise.benefit1'),
        t('solutions.fiberEnterprise.benefit2'),
        t('solutions.fiberEnterprise.benefit3'),
      ],
      advantages: [
        t('solutions.fiberEnterprise.advantage1'),
        t('solutions.fiberEnterprise.advantage2'),
        t('solutions.fiberEnterprise.advantage3'),
      ]
    },
    {
      title: t('solutions.proOffice.title'),
      description: t('solutions.proOffice.description'),
      image: "./teste_img.jpg",
      benefits: [
        t('solutions.proOffice.benefit1'),
        t('solutions.proOffice.benefit2'),
        t('solutions.proOffice.benefit3'),
      ],
      advantages: [
        t('solutions.proOffice.advantage1'),
        t('solutions.proOffice.advantage2'),
        t('solutions.proOffice.advantage3'),
      ]
    },
    {
      title: t('solutions.smartBiz.title'),
      description: t('solutions.smartBiz.description'),
      image: "./webb.jpg",
      benefits: [
        t('solutions.smartBiz.benefit1'),
        t('solutions.smartBiz.benefit2'),
        t('solutions.smartBiz.benefit3'),
      ],
      advantages: [
        t('solutions.smartBiz.advantage1'),
        t('solutions.smartBiz.advantage2'),
        t('solutions.smartBiz.advantage3'),
      ]
    },
    {
      title: t('solutions.powerNet.title'),
      description: t('solutions.powerNet.description'),
      image: "./speed.jpg",
      benefits: [
        t('solutions.powerNet.benefit1'),
        t('solutions.powerNet.benefit2'),
        t('solutions.powerNet.benefit3'),
      ],
      advantages: [
        t('solutions.powerNet.advantage1'),
        t('solutions.powerNet.advantage2'),
        t('solutions.powerNet.advantage3'),
      ]
    },
    {
      title: t('solutions.startUP.title'),
      description: t('solutions.startUP.description'),
      image: "./ServicessFiber.jpg",
      benefits: [
        t('solutions.startUP.benefit1'),
        t('solutions.startUP.benefit2'),
        t('solutions.startUP.benefit3'),
      ],
      advantages: [
        t('solutions.startUP.advantage1'),
        t('solutions.startUP.advantage2'),
        t('solutions.startUP.advantage3'),
      ]
    }
  ];

  // Subcomponente para os cards de serviços principais
  function ServiceCard({ icon, title, description }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-200 h-full flex flex-col justify-between"
        tabIndex={0}
        aria-label={title}
      >
        <div className="flex flex-col items-center">
          {icon}
          <p className="font-semibold text-lg mb-3">{title}</p>
          <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  }

  // Subcomponente para os cards de planos de fibra
  function StreamingCard({ service, onClick }) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex-none w-[350px] h-[450px] rounded-2xl p-8 text-white shadow-xl cursor-pointer relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700"
        onClick={onClick}
        tabIndex={0}
        aria-label={service.title}
      >
        {service.image ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800" />
        )}
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-center text-2xl font-medium mb-2 text-white">{service.title}</h3>
          {service.promotion && (
            <p className="text-center text-blue-200 font-medium mb-4">{service.promotion}</p>
          )}
          <p className="text-center text-gray-200 mb-6 flex-grow">{service.description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-700 text-white py-4 rounded-full hover:bg-blue-500 transition-colors font-semibold shadow-lg"
          >
            {t('solutions.consultNow')}
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl lg:text-5xl font-extrabold leading-tight text-center text-blue-900 drop-shadow-sm"
        >
          {t('solutions.title')} <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">{t('solutions.titleHighlight')}</span>
        </motion.h1>
        <p className="mt-6 text-lg lg:text-2xl text-blue-800 text-center max-w-2xl">
          {t('solutions.heroDescription')}
        </p>
      </div>
      <section className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-stretch">
            {services.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Streaming Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mt-2 leading-tight">
              <span className="text-blue-800 font-semibold">{t('solutions.muchMoreThanSolutions')}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-900 font-light to-blue-700 bg-clip-text text-transparent">
                {t('solutions.weDeliverStrategy')}
              </span>
            </h2>
          </motion.div>

          {/* Navigation Buttons and Cards Container */}
          <div className="relative mt-16">
            {canScrollLeft && (
              <button
                onClick={() => scrollToCard('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-blue-50 p-4 rounded-full shadow-lg transition-colors border border-gray-100"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-blue-800" />
              </button>
            )}

            <div
              ref={containerRef}
              className="flex overflow-x-auto gap-8 pb-8 scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {streamingServices.map((service, index) => (
                <StreamingCard key={index} service={service} onClick={() => setSelectedService(service)} />
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scrollToCard('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-blue-50 p-4 rounded-full shadow-lg transition-colors border border-gray-100"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-blue-800" />
              </button>
            )}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
