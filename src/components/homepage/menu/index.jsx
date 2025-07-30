// @ts-nocheck
// Arquivo em JavaScript, ignorando checagem de tipos do TypeScript.

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Search, ChevronDown, Phone, User, Menu as MenuIcon, X, ArrowRight, ChevronRight,ChevronLeft } from 'lucide-react';
import { useTranslation } from "react-i18next";

function normalizeKey(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/&/g, 'e') // substitui & por 'e'
    .replace(/[^a-zA-Z0-9 ]/g, "") // remove outros caracteres especiais
    .replace(/\s+/g, '_')
    .toLowerCase();
}

const services = [
  {
    category: "Infraestrutura e Conectividade",
    links: [
      { name: "Fibra Óptica", url: "/fibra-optica", description: "Internet de alta velocidade com tecnologia de ponta" },
      { name: "V-Sat", url: "/v-sat", description: "Conectividade via satélite para áreas remotas" },
      { name: "Micro-Onda", url: "/micro-onda", description: "Solução rápida e eficiente para sua empresa" },
      { name: "VPN", url: "/vpn", description: "Segurança e privacidade para sua rede" },
      { name: "Infraestrutura de Rede", url: "/infraestrutura-rede", description: "Soluções completas de infraestrutura" },
      { name: "Voz Fixa", url: "/voz-fixa", description: "Comunicação clara e confiável" }
    ],
  },
  {
    category: "Serviços Digitais",
    links: [
      { name: "Data Center", url: "/data-center", description: "Infraestrutura de alta disponibilidade" },
      { name: "Serviço de Hosting", url: "/servicos-hosting", description: "Hospedagem segura e escalável" },
      { name: "Automação e Segurança", url: "/automacao-seguranca", description: "Soluções inteligentes de segurança" },
      { name: "Serviços Web", url: "/servicos-web", description: "Desenvolvimento web personalizado" },
      { name: "Consultorias", url: "/consultoria", description: "Consultoria especializada em TI" },
      { name: "Serviço de Email", url: "/servico-email", description: "Solução profissional de email corporativo" },
    ],
  }
];

const leftNavItems = [
  { name: "Quem Somos", url: "/quemsomos"},
  { name: "Serviços & Produtos", url: "#", isMegaMenu: true },
  { name: "Eventos", url: "/eventos"},
  { name: "Multitel Agro", url: "/agro"},
];

// Itens extras para Serviços & Produtos
const servicosProdutosExtras = [
  { name: "Cyber Segurança", url: "/seguranca" },
  { name: "Smart City", url: "/smartcity" },
];

const rightNavItems = [
  // { name: "Residencial", url: "/residencial"}, // Removido conforme solicitado
];

function MegaMenuContent({ services, activeCategory, setActiveCategory, onClose }) {
  const { t } = useTranslation();
  return (
    <div className="absolute top-full bg-white shadow-xl rounded-lg p-8 flex gap-12 z-50 min-w-[800px] animate-fadeScale mt-2">
      <div className="flex gap-8 w-full">
        {/* Categories */}
        <div className="w-64 space-y-2">
          {/* Extras antes das categorias */}
          {servicosProdutosExtras.map((extra) => (
            <Link
              key={extra.name}
              to={extra.url}
              className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover-lift hover:bg-gray-50 font-medium text-blue-700"
              onClick={onClose}
            >
              {t(`navbar.${normalizeKey(extra.name)}`)}
            </Link>
          ))}
          {/* Categorias do mega menu */}
          {services.map((service, index) => (
            <button
              key={service.category}
              onClick={() => setActiveCategory(index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover-lift ${
                activeCategory === index
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">{t(`navbar.${normalizeKey(service.category)}`)}</span>
              </div>
            </button>
          ))}
        </div>
        {/* Links */}
        <div className="flex-1">
          {activeCategory !== null ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {t(`navbar.${normalizeKey(services[activeCategory].category)}`)}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {services[activeCategory].links.map((link, index) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="group p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover-lift border border-gray-100"
                    onClick={onClose}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {t(`navbar.${normalizeKey(link.name)}`)}
                        </h4>
                        <p className="font-light text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                          {t(`navbar.${normalizeKey(link.name)}_desc`)}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-4 py-8">
              <p className="text-gray-500 text-center text-lg">
                {t("navbar.selecione_categoria")}
              </p>
              <p className="text-sm text-gray-400 text-center max-w-md">
                {t("navbar.solucoes_completas")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ onClose }) {
  const [activeSection, setActiveSection] = useState(null);
  const menuRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="h-screen w-full overflow-y-auto flex flex-col bg-white transition-transform duration-300 animate-slideIn" ref={menuRef}>
      {/* Header */}
      <div className="sticky top-0 bg-blue-700 border-b p-4 shadow-sm flex items-center justify-between">
        <Link to="/" className="flex items-center hover-lift" onClick={onClose}>
          <img src="/logo.png" alt="Multitel" className="h-8" />
        </Link>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-blue-800 rounded-full transition-all duration-300 active:scale-95"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        {activeSection === null ? (
          <div className="space-y-6 animate-fadeIn">
            {/* Main Navigation + Serviços & Produtos MegaMenu */}
            <div className="space-y-2">
              {leftNavItems.map((item, index) => (
                item.isMegaMenu ? (
                  <button
                    key={item.name}
                    onClick={() => setActiveSection('megaMenu')}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift text-base font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span>{t(`navbar.${normalizeKey(item.name)}`)}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift text-lg font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={onClose}
                  >
                    <span>{t(`navbar.${normalizeKey(item.name)}`)}</span>
                  </Link>
                )
              ))}
            </div>
            {/* MegaMenu mobile */}
            {/* O submenu de categorias agora é renderizado em outro bloco condicional */}
            {/* Contact */}
            <div className="mt-8">
              <a
                href="tel:+244923165200"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover-lift active:scale-95 text-lg"
              >
                <Phone className="h-5 w-5" />
                923 165 200
              </a>
            </div>
          </div>
        ) : activeSection === 'megaMenu' ? (
          <div className="space-y-4 animate-fadeIn">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift mb-2"
            >
              <ChevronLeft className="h-5 w-5" />
              {t("navbar.voltar")}
            </button>
            <h2 className="text-xl mb-4 text-blue-800">{t("navbar.servicos_produtos")}</h2>
            <div className="space-y-2">
              {/* Extras no mobile */}
              {servicosProdutosExtras.map((extra) => (
                <Link
                  key={extra.name}
                  to={extra.url}
                  className="block p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 hover-lift text-base font-medium text-blue-700"
                  onClick={onClose}
                >
                  {t(`navbar.${normalizeKey(extra.name)}`)}
                </Link>
              ))}
              {/* Categorias do mega menu */}
              {services.map((service, index) => (
                <button
                  key={service.category}
                  onClick={() => setActiveSection(index)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift text-base font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{t(`navbar.${normalizeKey(service.category)}`)}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        ) : (typeof activeSection === 'number' && services[activeSection]) ? (
          <div className="space-y-4 animate-fadeIn">
            <button
              onClick={() => setActiveSection('megaMenu')}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift mb-2"
            >
              <ChevronLeft className="h-5 w-5" />
              {t("navbar.voltar")}
            </button>
            <h2 className="text-xl mb-4 text-blue-800">
              {t(`navbar.${normalizeKey(services[activeSection].category)}`)}
            </h2>
            <div className="space-y-2">
              {services[activeSection].links.map((link, index) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className="block p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover-lift border border-gray-100"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={onClose}
                >
                  <h3 className="font-medium text-gray-900">{t(`navbar.${normalizeKey(link.name)}`)}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t(`navbar.${normalizeKey(link.name)}_desc`)}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const megaMenuRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        handleMegaMenuClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMegaMenuClose = () => {
    setMegaMenuOpen(false);
    setActiveCategory(null);
  };

  const handleMegaMenuToggle = () => {
    setMegaMenuOpen(!megaMenuOpen);
    if (!megaMenuOpen) {
      setActiveCategory(null);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur border-b-2 border-primary shadow-md transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <img src="/logo.svg" alt="Multitel" className="w-[200px]" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {leftNavItems.map((item, idx) => (
            <div key={item.name} className="relative group">
              {item.isMegaMenu ? (
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-white hover:bg-primary/10 transition-all duration-200 focus:outline-none"
                  onClick={handleMegaMenuToggle}
                >
                  <span>{t(`navbar.${normalizeKey(item.name)}`)}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              ) : (
                <Link
                  to={item.url}
                  className="px-4 py-2 rounded-lg text-white hover:bg-primary/10 transition-all duration-200"
                >
                  <span className="ml-1">{t(`navbar.${normalizeKey(item.name)}`)}</span>
                </Link>
              )}
              {/* Mega Menu */}
              {item.isMegaMenu && megaMenuOpen && (
                <div>
                  <MegaMenuContent services={services} activeCategory={activeCategory} setActiveCategory={setActiveCategory} onClose={handleMegaMenuClose} />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Right Nav */}
        {/* O menu à direita foi removido pois não há mais itens para exibir */}
        {/* <div className="hidden md:flex items-center border rounded-lg
">
          {rightNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className="px-4 py-2 rounded-lg text-white hover:bg-primary/10 transition-all duration-200 flex items-center gap-1"
            >
              <span>{t(`navbar.${normalizeKey(item.name)}`)}</span>
            </Link>
          ))}
          <a href="tel:+244923165200" className="btn-primary ml-4 hover:scale-105 flex items-center gap-2">
            <Phone className="h-5 w-5" />
            923 165 200
          </a>
        </div> */}
        <a href="tel:+244923165200" className="hidden md:flex btn-primary ml-4 hover:scale-105 items-center gap-2">
          <Phone className="h-5 w-5" />
          923 165 200
        </a>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full text-primary hover:bg-primary/10 transition-all duration-200"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] flex">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex-1 flex">
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Menu;
