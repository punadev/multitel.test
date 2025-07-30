import React from 'react';
import Button from '../components/notfound/Button';
import NetworkAnimation from '../components/notfound/NetworkAnimation';
import SignalIcon from '../components/notfound/SignalIcon';
import { HomeIcon, Wifi } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {


  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50 overflow-hidden">
      <Helmet>
        <title>Página não encontrada | Multitel</title>
      </Helmet>
      {/* Network animation background */}
      <NetworkAnimation />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Error code and icon */}
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center flex-col mb-8">
            <SignalIcon className="mb-4" />
            <div className="flex items-center space-x-2 text-primary-600">
              <Wifi className="w-5 h-5 animate-bounceUpDown" />
              <div className="h-px w-16 bg-primary-600/30"></div>
              <Wifi className="w-4 h-4 opacity-60 animate-bounceUpDown delay-150" />
              <div className="h-px w-16 bg-primary-600/20"></div>
              <Wifi className="w-3 h-3 opacity-30 animate-bounceUpDown delay-300" />
            </div>

          </div>
          <h1 className="text-8xl md:text-9xl font-bold text-primary-600 mb-4 tracking-tighter">
            404
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-md mx-auto">
            Lamentamos, a página não foi encontrada!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Navigation options */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            onClick={navigateToHome}
            className="flex items-center space-x-2 shadow-lg bg-blue-800"
          >
            <HomeIcon size={18} />
            <span>Voltar para página inicial</span>
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default NotFound;