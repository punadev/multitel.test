import React, { useState } from 'react';
import { Building2, Link, Cloud, Phone, Mail, MapPin } from 'lucide-react';
import EmailCorporativoInput from '../components/EmailCorporativoInput';

const services = [
  {
    icon: Building2,
    title: 'Internet Empresarial',
    description: 'Conexão de alta velocidade para sua empresa crescer',
    features: ['Até 10 Gbps', 'Suporte 24/7', 'SLA Garantido']
  },
  {
    icon: Link,
    title: 'Link Dedicado',
    description: 'Conexão exclusiva e garantida para sua empresa',
    features: ['IP Fixo', 'Baixa Latência', 'Banda Garantida']
  },
  {
    icon: Cloud,
    title: 'Serviços em Nuvem',
    description: 'Soluções em nuvem para otimizar seus negócios',
    features: ['Backup', 'Servidores VPS', 'Hospedagem']
  }
];

export function Empresas() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Soluções para Empresas</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Oferecemos soluções completas de conectividade e tecnologia para empresas de todos os portes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div 
            key={service.title}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <service.icon className="h-12 w-12 text-[#FF4D0D] mb-6" />
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-[#FF4D0D] rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está pronta para encontrar a melhor solução para sua empresa
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                0800 123 4567
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                empresas@brisanet.com.br
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                Rua Principal, 1000 - Centro
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <EmailCorporativoInput
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="E-mail Corporativo"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Empresa"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <select
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Selecione um serviço</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF4D0D]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-[#FF4D0D] text-white py-3 rounded-lg font-medium hover:bg-[#FF3D0D] transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}