import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import Button from '../ui/Button';
import { internetPlans } from './../../../constants/data';

const Plans: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Planos que <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">mudam tudo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Escolhe o plano ideal para ti e fica sempre ligado. Todos os nossos pacotes têm dados ilimitados, sem surpresas nem taxas escondidas.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <span className={`text-sm ${!annualBilling ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
            Mensal
            </span>
            <button 
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative rounded-full w-14 h-7 bg-indigo-100 flex items-center transition duration-300 focus:outline-none"
            >
              <span 
                className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300 ${
                  annualBilling ? 'translate-x-7' : ''
                }`}
              />
              <span 
                className={`absolute right-1 top-1 bg-indigo-600 w-5 h-5 rounded-full shadow transform transition-transform duration-300 ${
                  !annualBilling ? 'translate-x-7 opacity-0' : 'opacity-100'
                }`}
              />
            </button>
            <span className={`text-sm flex items-center ${annualBilling ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
            Anual
              <span className="ml-1 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
              Poupa 15%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {internetPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'border-2 border-indigo-500 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 inset-x-0 bg-indigo-500 text-white text-center py-1.5 text-sm font-medium flex items-center justify-center">
                  <Star className="h-4 w-4 mr-1 fill-white" />
                  Most Popular
                </div>
              )}

              <div 
                className={`${plan.color} text-white p-6 ${plan.recommended ? 'pt-12' : ''}`}
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-1 text-white/90">{plan.speed}</div>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{
                    annualBilling 
                      ? `${(parseFloat(plan.price.substring(1)) * 0.85).toFixed(2)} AOA`
                      : plan.price
                  }</span>
                  <span className="text-white/90">/mês</span>
                </div>
                {annualBilling && (
                  <div className="text-sm mt-1 text-white/80">
                    Anualmente
                  </div>
                )}
              </div>

              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.recommended ? "primary" : "outline"} 
                  className="w-full"
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600 max-w-2xl mx-auto">
          <p className="text-sm">
          Todos os planos incluem instalação gratuita. Precisa de uma solução personalizada para sua casa? <a href="#" className="text-indigo-600 hover:underline">Contacte a nossa equipa comercial.</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;