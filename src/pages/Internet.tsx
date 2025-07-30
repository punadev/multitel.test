import React, { useState } from 'react';
import { Check, Wifi, Download, Upload, X } from 'lucide-react';

const plans = [
  {
    name: '500 MEGA',
    price: '99,99',
    features: [
      { icon: Wifi, text: 'Wi-Fi 6' },
      { icon: Download, text: 'Download 500 Mbps' },
      { icon: Upload, text: 'Upload 250 Mbps' },
      { icon: Check, text: 'Instalação Grátis' },
      { icon: Check, text: 'Suporte 24/7' }
    ]
  },
  {
    name: '800 MEGA',
    price: '129,99',
    popular: true,
    features: [
      { icon: Wifi, text: 'Wi-Fi 6' },
      { icon: Download, text: 'Download 800 Mbps' },
      { icon: Upload, text: 'Upload 400 Mbps' },
      { icon: Check, text: 'Instalação Grátis' },
      { icon: Check, text: 'Suporte 24/7' },
      { icon: Check, text: 'IP Fixo' }
    ]
  },
  {
    name: '1 GIGA',
    price: '149,99',
    features: [
      { icon: Wifi, text: 'Wi-Fi 6' },
      { icon: Download, text: 'Download 1000 Mbps' },
      { icon: Upload, text: 'Upload 500 Mbps' },
      { icon: Check, text: 'Instalação Grátis' },
      { icon: Check, text: 'Suporte 24/7' },
      { icon: Check, text: 'IP Fixo' },
      { icon: Check, text: 'Atendimento VIP' }
    ]
  }
];

export function Internet() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Planos de Internet</h1>
      <p className="text-gray-600 text-center mb-12">Escolha o plano ideal para você</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 transform hover:scale-105 ${
              plan.popular ? 'border-[#FF4D0D]' : 'border-transparent'
            }`}
          >
            {plan.popular && (
              <div className="bg-[#FF4D0D] text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Mais Popular
              </div>
            )}
            <div className="text-2xl font-bold mb-4">{plan.name}</div>
            <div className="text-4xl font-bold text-[#FF4D0D] mb-6">
              R$ {plan.price}
              <span className="text-lg">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <feature.icon className="h-5 w-5 mr-2 text-[#FF4D0D]" />
                  {feature.text}
                </li>
              ))}
            </ul>
            <button 
              className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedPlan === plan.name
                ? 'bg-green-500 text-white'
                : 'bg-[#FF4D0D] text-white hover:bg-[#FF3D0D]'
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {selectedPlan === plan.name ? 'Plano Selecionado' : 'Assinar'}
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Ótima escolha!</h2>
            <p className="text-gray-600 mb-6">
              Você selecionou o plano {selectedPlan}. Nossa equipe entrará em contato em breve para finalizar sua contratação.
            </p>
            <button 
              className="w-full bg-[#FF4D0D] text-white py-3 rounded-lg font-medium hover:bg-[#FF3D0D]"
              onClick={() => setSelectedPlan(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}