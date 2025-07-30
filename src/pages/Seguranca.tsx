import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Cloud, 
  Smartphone, 
  Users, 
  Shield, 
  Monitor, 
  History, 
  Database, 
  Search, 
  Terminal, 
  GraduationCap,
  Code,
  CheckSquare,
  BarChart,
  FileText,
  CloudCog,
  Lock,
  Bug,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Seguranca() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Cloud,
      title: t('seguranca.services.cloud.title'),
      description: t('seguranca.services.cloud.description')
    },
    {
      icon: Smartphone,
      title: t('seguranca.services.mobile.title'),
      description: t('seguranca.services.mobile.description')
    },
    {
      icon: Users,
      title: t('seguranca.services.outsourcing.title'),
      description: t('seguranca.services.outsourcing.description')
    },
    {
      icon: Shield,
      title: t('seguranca.services.network.title'),
      description: t('seguranca.services.network.description')
    },
    {
      icon: Monitor,
      title: t('seguranca.services.endpoint.title'),
      description: t('seguranca.services.endpoint.description')
    },
    {
      icon: History,
      title: t('seguranca.services.recovery.title'),
      description: t('seguranca.services.recovery.description')
    },
    {
      icon: Database,
      title: t('seguranca.services.data.title'),
      description: t('seguranca.services.data.description')
    },
    {
      icon: Search,
      title: t('seguranca.services.forensics.title'),
      description: t('seguranca.services.forensics.description')
    },
    {
      icon: Terminal,
      title: t('seguranca.services.pentesting.title'),
      description: t('seguranca.services.pentesting.description')
    },
    {
      icon: GraduationCap,
      title: t('seguranca.services.training.title'),
      description: t('seguranca.services.training.description')
    },
    {
      icon: Code,
      title: t('seguranca.services.app.title'),
      description: t('seguranca.services.app.description')
    },
    {
      icon: CheckSquare,
      title: t('seguranca.services.controls.title'),
      description: t('seguranca.services.controls.description')
    },
    {
      icon: BarChart,
      title: t('seguranca.services.dashboards.title'),
      description: t('seguranca.services.dashboards.description')
    },
    {
      icon: FileText,
      title: t('seguranca.services.policies.title'),
      description: t('seguranca.services.policies.description')
    },
    {
      icon: CloudCog,
      title: t('seguranca.services.cloud_assessment.title'),
      description: t('seguranca.services.cloud_assessment.description')
    },
    {
      icon: Lock,
      title: t('seguranca.services.info_security.title'),
      description: t('seguranca.services.info_security.description')
    },
    {
      icon: Bug,
      title: t('seguranca.services.pen_tests.title'),
      description: t('seguranca.services.pen_tests.description')
    },
    {
      icon: AlertTriangle,
      title: t('seguranca.services.risk_management.title'),
      description: t('seguranca.services.risk_management.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Segurança | Multitel</title>
      </Helmet>
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/cyber/cyber-security-concept-digital-art.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-white text-center w-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('seguranca.hero.title')}</h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                {t('seguranca.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">{t('seguranca.cta.title')}</h2>
            <p className="text-blue-100 mb-8 text-lg">{t('seguranca.cta.subtitle')}</p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center mx-auto hover:bg-blue-50 transition-colors">
              {t('seguranca.cta.button')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Seguranca;