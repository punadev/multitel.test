import React, { useState } from 'react';
import { X, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ServiceModal({ isOpen, onClose, service }) {
  if (!isOpen) return null;

  const [sent, setSent] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: ''
  });
  
  // Estados para validação
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para validar os campos
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.company.trim()) {
      newErrors.company = 'Nome da empresa é obrigatório';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para lidar com mudanças nos campos
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Limpar erro do campo quando o usuário começa a digitar
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simular envio (substitua por sua lógica real de envio)
      setTimeout(() => {
        setSent(true);
        setShowThankYou(true);
        setIsSubmitting(false);
        // Resetar formulário
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: ''
        });
        setErrors({});
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              {service.icon && (
                <div className="text-blue-600">
                  {service.icon}
                </div>
              )}
              <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Service Description */}
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>

            {/* Benefits and Advantages Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  Benefícios do Serviço
                </h3>
                <ul className="space-y-3">
                  {service.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advantages Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  Vantagens para sua Empresa
                </h3>
                <ul className="space-y-3">
                  {service.advantages?.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Solicite uma Proposta
              </h3>
              {sent ? null : (
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.company 
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                            : 'border-gray-300'
                        }`}
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                            : 'border-gray-300'
                        }`}
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                            : 'border-gray-300'
                        }`}
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.phone 
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                            : 'border-gray-300'
                        }`}
                        placeholder="Digite seu telefone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      'Enviar Solicitação'
                    )}
                  </button>
                </form>
              )}

              {/* Modal de agradecimento */}
              {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform animate-scaleIn border border-gray-100">
                    <div className="flex flex-col items-center">
                      {/* Success Icon */}
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        OBRIGADO
                      </h3>
                      
                      {/* Message */}
                      <p className="text-gray-600 text-center leading-relaxed mb-8">
                        Obrigado, a nossa equipa comercial entrará em contacto.
                      </p>
                      
                      {/* Button */}
                      <button
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                        onClick={() => setShowThankYou(false)}
                      >
                        Entendido
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 