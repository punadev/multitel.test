import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/residencial/ui/Button';
import { FaLightbulb, FaLeaf, FaUsers, FaBus, FaShieldAlt, FaRecycle, FaWifi, FaHandsHelping } from 'react-icons/fa';

const SmartCity: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 mb-20 via-white to-white min-h-screen">
      <Helmet>
        <title>O Futuro das Cidades | Multitel</title>
        <meta name="description" content="Descubra a visão da Multitel para o futuro das Smart Cities: cidades inteligentes, humanas e conectadas." />
      </Helmet>
      {/* Banner visual */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-start pl-10 mb-10 overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src="/home/cloud.jpg"
          alt="Smart City Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-4">SmartCity Angola</h1>
          <p className="text-lg md:text-2xl text-white drop-shadow mb-6 max-w-xl text">O futuro de Angola passa por cidades mais organizadas e tecnológicas. SmartCity traz soluções práticas para modernizar e automatizar o espaço urbano e melhorar a sua vida dos cidadãos.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        {/* INTRODUÇÃO INSPIRADORA */}
        <section className="mb-12 text-center animate-fade-in">
          <p className="text-lg text-gray-700 mb-3 text-justify">
            Imagine viver numa cidade onde a tecnologia une pessoas, ideias e oportunidades. Onde cada rua, praça e serviço público é pensado para facilitar a sua vida, garantir segurança e promover sustentabilidade. Esta é a essência de uma <span className="font-semibold text-blue-700">Cidade Inteligente</span>.
          </p>
        </section>
        {/* VISÃO DE FUTURO */}
        <section className="mb-12 animate-fade-in delay-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">O que nos move</h2>
          <p className="text-gray-700 text-center mb-4 text-justify">
            Na Multitel, acreditamos que o futuro das cidades assenta em três pilares: <span className="font-semibold">inovação</span>, <span className="font-semibold">sustentabilidade</span> e <span className="font-semibold">inclusão</span>. O nosso compromisso é liderar a transformação digital dos centros urbanos, tornando-os mais tecnológicos, conectados e sustentáveis.
          </p>
        </section>
        {/* PILARES MULTITEL */}
        <section className="mb-12 animate-fade-in delay-200">
          <h2 className="text-xl font-semibold text-blue-700 mb-6 text-center">Os Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-5">
              <FaLightbulb className="text-yellow-400 text-3xl mb-2" />
              <span className="font-semibold">Inovação</span>
              <p className="text-gray-600 text-sm mt-1 text-center">Soluções tecnológicas que antecipam as necessidades das cidades e dos cidadãos.</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-5">
              <FaLeaf className="text-green-500 text-3xl mb-2" />
              <span className="font-semibold">Sustentabilidade</span>
              <p className="text-gray-600 text-sm mt-1 text-center">Compromisso com o ambiente e uso eficiente dos recursos.</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-5">
              <FaUsers className="text-blue-500 text-3xl mb-2" />
              <span className="font-semibold">Inclusão</span>
              <p className="text-gray-600 text-sm mt-1 text-center">Cidades acessíveis, seguras e conectadas para todos os cidadãos.</p>
            </div>
          </div>
        </section>
        {/* EXEMPLOS DE FUTURO */}
        <section className="mb-12 animate-fade-in delay-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-6 text-center">Como será viver numa Cidade Inteligente?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <FaBus className="text-blue-600 text-2xl mt-1" />
              <span className="text-gray-700">Transporte público eficiente, inteligente e sustentável.</span>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-yellow-600 text-2xl mt-1" />
              <span className="text-gray-700">Ruas mais seguras com vigilância inteligente e iluminação adaptável.</span>
            </div>
            <div className="flex items-start gap-3">
              <FaRecycle className="text-green-600 text-2xl mt-1" />
              <span className="text-gray-700">Ambientes limpos, com gestão automatizada de resíduos e energia.</span>
            </div>
            <div className="flex items-start gap-3">
              <FaWifi className="text-blue-400 text-2xl mt-1" />
              <span className="text-gray-700">Serviços públicos digitais, acessíveis em qualquer momento e lugar.</span>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <FaHandsHelping className="text-purple-600 text-2xl mt-1" />
              <span className="text-gray-700">Comunidades mais ligadas, colaborativas e inovadoras.</span>
            </div>
          </div>
        </section>
        {/* COMPROMISSO MULTITEL */}
        <section className="mb-12 text-center animate-fade-in delay-400">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">O Nosso Compromisso</h2>
          <p className="text-gray-700 mb-4 text-justify">
            A Multitel está empenhada em liderar a construção deste novo futuro. Investimos em tecnologia, pessoas e parcerias para transformar cidades em ecossistemas inteligentes, preparados para os desafios do amanhã.
          </p>
        </section>
        {/* CHAMADA PARA AÇÃO */}
        <section className="text-center mt-16 animate-fade-in delay-500">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Vamos juntos construir a cidade do futuro?</h2>
          <p className="text-gray-700 mb-6 ">Junta-te à Multitel nesta caminhada. Fale connosco e nos ajude a transformar a sua cidade num exemplo de inovação, sustentabilidade e qualidade de vida.</p>
          <a href="/contacto" className="inline-block">
            <Button size="lg" variant="primary" className="px-10 py-4 text-xl shadow-lg hover:scale-105 transition-transform">
              Fale com um especialista
            </Button>
          </a>
        </section>
      </div>
      {/* Animação fade-in simples */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in.delay-500 { animation-delay: 0.5s; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SmartCity;