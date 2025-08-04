import { Wifi, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import SocialIcons from './SocialIcons';
import { useTranslation } from 'react-i18next';

function Seguranca() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-r from-primary-dark via-primary to-accent py-12 text-white border-t-4 border-primary shadow-2xl">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center text-center md:justify-items-start md:text-left">

           {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">{t('footer.contactTitle')}</h3>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span>(+244) 222 704 200</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span>geral@multitel.co.ao</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-14 w-14 text-accent mr-2 mt-0.5" />
                <span>
                  Rua Cristiano dos Santos, nº 5 Bairro Miramar, Distrito Urbano do Sambizanga
                </span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">{t('footer.usefulLinksTitle')}</h3>
            <ul className="space-y-3">
              <li><a href="/feedback" className="hover:text-accent text-white font-light transition-colors">{t('footer.suggestions')}</a></li>
              <li><a href="/em-construcao" className="hover:text-accent text-white font-light transition-colors">{t('footer.socialAction')}</a></li>
              <li><a href="/em-construcao" className="hover:text-accent text-white font-light transition-colors">{t('footer.careers')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">{t('footer.supportTitle')}</h3>
            <ul className="space-y-3">
              <li><a href="/em-construcao" className="hover:text-accent font-light text-white transition-colors">{t('footer.helpCenter')}</a></li>
              <li><a href="/em-construcao" className="hover:text-accent font-light text-white transition-colors">{t('footer.customerPortal')}</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white/90 tracking-wide">{t('footer.followUs')}</h3>
            <div className="flex space-x-4 mt-4">
              <SocialIcons iconSize={40} className="justify-start" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
            {new Date().getFullYear()} | {t('footer.rightsReserved')} <a href='/' className="hover:text-accent">Multitel</a>.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex justify-center items-center mb-6">
              <img src="/logo.svg" className="w-60 md:w-60 lg:w-[200px] h-auto mx-auto" alt="Logo Multitel" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Seguranca;