import React, { useEffect } from 'react';
import Hero from './../components/residencial/sections/Hero';
import Plans from './../components/residencial/sections/Plans';
import Testimonials from './../components/residencial/sections/Testimonials';
import Coverage from './../components/residencial/sections/Coverage';
import FAQ from './../components/residencial/sections/FAQ';
import { Helmet } from 'react-helmet-async';

export function Residencial() {
  useEffect(() => {
    // Comportamento de rolagem suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Considera a altura do cabeçalho
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Internet Residencial | Multitel</title>
      </Helmet>
      <main>
        <Hero />
        <Plans />
        <Coverage />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}