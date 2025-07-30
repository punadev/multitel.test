import React, { useState } from 'react';
import { Send, Star, StarHalf } from 'lucide-react';
import FormField from './FormField';

interface FormData {
  name: string;
  email: string;
  phone: string;
  feedbackType: 'suggestion' | 'praise' | 'general';
  message: string;
  rating: number;
  customerType: 'b2b' | 'b2c' | 'non-customer' | '';
  companyName: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    feedbackType: 'general',
    message: '',
    rating: 0,
    customerType: '',
    companyName: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (formData.feedbackType === 'suggestion' && formData.message.length < 10) {
      newErrors.message = 'Please provide more details about your suggestion';
    }
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^\+?[\d\s-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.customerType === 'b2b' && !formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company name';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCustomerTypeChange = (type: FormData['customerType']) => {
    setFormData(prev => ({
      ...prev,
      customerType: type,
      // Clear company name if not B2B
      companyName: type !== 'b2b' ? '' : prev.companyName
    }));
  };
  
  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        feedbackType: 'general',
        message: '',
        rating: 0,
        customerType: '',
        companyName: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md transform transition-all animate-fadeIn">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Obrigado!</h2>
          <p className="text-gray-600 mb-6">
          Agradecemos o seu feedback. Ele ajuda-nos a melhorar os nossos serviços.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Submeter Outra Resposta
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6 animate-fadeIn">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">As Suas Informações (Opcional)</h3>
          <p className="text-sm text-gray-500 mb-4">Sinta-se à vontade para deixar em branco caso queira enviar feedback de forma anónima.</p>
          
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Cliente
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={formData.customerType === 'b2b'}
                    onChange={() => handleCustomerTypeChange('b2b')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">Cliente Empresarial (B2B)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={formData.customerType === 'b2c'}
                    onChange={() => handleCustomerTypeChange('b2c')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">Cliente Individual (B2C)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={formData.customerType === 'non-customer'}
                    onChange={() => handleCustomerTypeChange('non-customer')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">Não Sou Cliente</span>
                </label>
              </div>
            </div>

            {formData.customerType === 'b2b' && (
              <FormField
                label="Nome da empresa"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                error={errors.companyName}
                placeholder="Enter your company name"
              />
            )}
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Seu nome"
              />
              
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="seu.email@example.com"
              />
              
              <FormField
                label="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="Número de telefone"
                className="md:col-span-2"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Feedback
              </label>
              <select
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Seleciona o tipo de feedback --</option>
                <option value="sugestao">Feedback Geral</option>
                <option value="sugestao">Sugestão</option>
                <option value="elogio">Elogio</option>
                <option value="reclamacao">Reclamação</option>
                <option value="dificuldade_tecnica">Dificuldade Técnica</option>
                <option value="atendimento">Avaliação do Atendimento</option>
                <option value="qualidade_servico">Qualidade do Serviço</option>
                <option value="preco_tarifas">Preço e Tarifas</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
                <span className="text-xs text-gray-500 ml-1">
                  ({formData.message.length}/500 caracteres)
                </span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={500}
                placeholder="Partilhe connosco a sua opinião..."
                className={`w-full px-3 py-2 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-800'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando o feedback
            </>
          ) : (
            <>
              Enviar
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;