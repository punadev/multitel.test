import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench } from 'lucide-react';

const EmConstrucao: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden font-sans">
      <Helmet>
        <title>Página em construção | Multitel</title>
        <meta name="description" content="Esta página está em construção. Em breve novidades!" />
      </Helmet>
      {/* Overlay de gradiente com opacidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent opacity-80 z-0"></div>
      {/* Bolhas decorativas */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-light rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2 z-10"></div>
      {/* Conteúdo principal */}
      <div className="z-20 flex flex-col items-center">
        <Wrench className="w-20 h-20 text-white mb-6 animate-spin-slow drop-shadow-xl" />
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow">Página em construção</h1>
        <p className="text-lg text-white/90 mb-8 max-w-md">Esta página ainda não está disponível. Por favor, volte mais tarde.</p>
        <a href="/" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transition btn-primary">Voltar para página inicial</a>
      </div>
    </div>
  );
};

export default EmConstrucao; 