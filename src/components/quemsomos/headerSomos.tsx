import React from 'react';
import { Users, Target, Eye, Heart, Award, BookOpen, Gem } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function HeaderSomos() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/aboutme/about_capa_website.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          
        </div>
      </div>

      {/* História Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">{t('about.historyTitle')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
              {t('about.historyParagraph1')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
              {t('about.historyParagraph2')}
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t('about.missionTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {t('about.missionText')}
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t('about.visionTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {t('about.visionText')}
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t('about.valuesTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Gem className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{t('about.valueInnovation')}</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{t('about.valueExcellence')}</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{t('about.valueCustomerCloseness')}</span>
                </li>
                <li className="flex items-center text-justify">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{t('about.valueSocialResponsibility')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.cultureTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/aboutme/2150690154.jpg" 
                  alt={t('about.cultureImg1Alt')} 
                  className="rounded-lg shadow-lg mb-8"
                />
                <p className="text-gray-600 leading-relaxed text-justify">
                  {t('about.cultureParagraph1')}
                </p>
              </div>
              <div>
                <img 
                  src="/aboutme/2149370170.jpg" 
                  alt={t('about.cultureImg2Alt')} 
                  className="rounded-lg shadow-lg mb-8"
                />
                <p className="text-gray-600 leading-relaxed text-justify">
                  {t('about.cultureParagraph2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeaderSomos;