import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Timer, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function FibraOtica() {
  const [email, setEmail] = useState("");
  const [showEmailMsg, setShowEmailMsg] = useState(false);

  // Lista de domínios genéricos
  const genericDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "aol.com",
    "live.com",
    "bol.com.br",
    "uol.com.br",
    "msn.com",
    "protonmail.com",
    "zoho.com",
    "mail.com",
    "gmx.com"
  ];

  function isGenericEmail(email: string) {
    const match = email.match(/@([\w.-]+)$/);
    if (!match) return false;
    const domain = match[1].toLowerCase();
    return genericDomains.includes(domain);
  }

  const handleEmailBlur = () => {
    setShowEmailMsg(isGenericEmail(email));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Fibra Óptica Empresarial | Multitel</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Fibra Óptica Empresarial</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Maior estabilidade, alta velocidade, baixa latência e suporte técnico prioritário para empresas.
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
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Velocidade</h3>
              <p className="text-gray-600">Até 1 Gbps de velocidade simétrica</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Baixa Latência</h3>
              <p className="text-gray-600">Conexão ultra-estável e responsiva</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IP Fixo</h3>
              <p className="text-gray-600">Endereço IP dedicado incluso</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99.9% Uptime</h3>
              <p className="text-gray-600">Garantia de disponibilidade</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Pronto para ter a melhor internet?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe está pronta para ajudar sua empresa a escolher o melhor plano
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome da Empresa ou seu nome"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="E-mail Corporativo"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
              />
              {showEmailMsg && (
                <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3 mb-2">
                  Precisas criar um email corporativo para sua empresa, com isso atrais mais clientes e garantes confiança quem negocia contigo,{' '}
                  <a href="/servico-email" className="text-blue-600 underline font-semibold">clica aqui para ter um email corporativo</a>
                </div>
              )}
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

export default FibraOtica;