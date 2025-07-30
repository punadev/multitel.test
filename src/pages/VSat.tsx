import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Satellite, Globe, Wifi, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EmailCorporativoInput from '../components/EmailCorporativoInput';

function VSat() {
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Internet via Satélite V-SAT | Multitel</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Internet via Satélite V-SAT</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Conectividade de alta performance para qualquer localização.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cobertura Global</h3>
              <p className="text-gray-600">Conectividade em qualquer lugar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Banda Ka</h3>
              <p className="text-gray-600">Alta velocidade e baixa latência</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SLA Garantido</h3>
              <p className="text-gray-600">99.5% de disponibilidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Redundância</h3>
              <p className="text-gray-600">Backup automático</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Conecta-te em qualquer lugar</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe está pronta para ajudar sua empresa a escolher o melhor plano.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome da Empresa"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <EmailCorporativoInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="E-mail Corporativo"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Solicitar Contacto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VSat;