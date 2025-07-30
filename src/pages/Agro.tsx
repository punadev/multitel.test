import React, { useState } from 'react';
import { Wifi, Leaf, Satellite, Cloud, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EmailCorporativoInput from '../components/EmailCorporativoInput';

function Agro() {
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <Helmet>
        <title>Agro | Multitel</title>
      </Helmet>
      {/* Hero Section */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/public/home/Capa_Apresentação_Angotic.jpg')" }}
      />

      {/* Destaques de Inovação */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Inovação para o Agro do Futuro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Internet Rural</h3>
              <p className="text-gray-600">Conectividade de alta velocidade para áreas remotas e fazendas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IoT no Campo</h3>
              <p className="text-gray-600">Sensores inteligentes para monitoramento de solo, clima e produção.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conexão por satélite</h3>
              <p className="text-gray-600">Cobertura total para qualquer localidade, sem limites.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão em Nuvem</h3>
              <p className="text-gray-600">Plataformas digitais para gestão agrícola eficiente e segura.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards de Soluções */}
      <div className="py-20 bg-gradient-to-r from-green-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Soluções para Agricultura 4.0</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Monitoramento Remoto</h3>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li>Gestão de irrigação inteligente</li>
                <li>Controle de máquinas e tratores</li>
                <li>Alertas em tempo real</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Saiba Mais
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Automação Agrícola</h3>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li>Plataformas de automação e controle</li>
                <li>Integração com sensores IoT</li>
                <li>Redução de custos operacionais</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Saiba Mais
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Conectividade Total</h3>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li>Internet dedicada para fazendas</li>
                <li>Redes privadas e seguras</li>
                <li>Suporte especializado 24x7</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chamada para Ação */}
      <div className="bg-gradient-to-r from-green-700 via-blue-700 to-green-400 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow">Pronto para inovar no campo?</h2>
          <p className="text-xl text-green-100 mb-8 drop-shadow">
            Fale com nossos especialistas e descubra como a Multitel pode transformar sua produção agrícola com tecnologia de ponta.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome da Fazenda ou Empresa"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <EmailCorporativoInput
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-mail de Contacto"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full bg-white text-green-700 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg">
              Solicitar Contacto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Agro; 