import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Shield, Cpu, Smartphone, Eye } from 'lucide-react';
import EmailCorporativoInput from '../components/EmailCorporativoInput';

export default function AutomacaoSeguranca() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Automação e Segurança | Multitel</title>
        <meta name="description" content="Soluções de automação predial, segurança integrada, IoT e consultoria especializada." />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">{t('navbar.automacao_e_seguranca')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">{t('navbar.automacao_e_seguranca_desc')}</p>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Integrada</h3>
              <p className="text-gray-600">Monitoramento e alarmes inteligentes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automação Predial</h3>
              <p className="text-gray-600">Controle de acesso e integração IoT</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão Remota</h3>
              <p className="text-gray-600">Acesso via dispositivos móveis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultoria Especializada</h3>
              <p className="text-gray-600">Projectos personalizados de segurança</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Solicite uma Proposta de Automação e Segurança</h2>
            <p className="text-xl text-gray-600 mb-8">Nossa equipa está pronta para entender sua necessidade e apresentar a melhor solução.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nome da Empresa" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <EmailCorporativoInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="E-mail Corporativo"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input type="tel" placeholder="Telefone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Descreva sua necessidade" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">Solicitar Contacto</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 