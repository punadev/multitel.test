// Dados dos planos de internet
export const internetPlans = [
  {
    id: "basic",
    name: "Família Conectada",
    speed: "200 Mbps",
    price: "289,99 AOA",
    features: [
      "Ideal para até 5 dispositivos simultâneos",
      "Perfeito para streaming e redes sociais",
      "Wi-Fi de última geração incluso",
      "Suporte técnico em até 30 minutos",
      "Instalação expressa em 24h",
    ],
    recommended: false,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    id: "standard",
    name: "Família Digital",
    speed: "500 Mbps",
    price: "200,99 AOA",
    features: [
      "Ideal para até 10 dispositivos simultâneos",
      "Perfeito para home office e aulas online",
      "Wi-Fi Mesh para cobertura total",
      "Suporte técnico em até 15 minutos",
      "Instalação no mesmo dia",
      "Proteção contra vírus inclusa",
    ],
    recommended: true,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    id: "premium",
    name: "Família Premium",
    speed: "1 Gbps",
    price: "179,99 AOA",
    features: [
      "Dispositivos ilimitados conectados",
      "Games, streaming 4K e downloads ultra-rápidos",
      "Wi-Fi Mesh Premium com área estendida",
      "Suporte técnico instantâneo e exclusivo",
      "Instalação prioritária",
      "Proteção familiar completa",
      "TV por assinatura inclusa",
    ],
    recommended: false,
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
];

// Dados dos depoimentos
export const testimonials = [
  {
    id: 1,
    name: "Família Oliveira",
    role: "Assinantes há 2 anos",
    quote: "Com 3 filhos estudando online e nós dois em home office, precisávamos de uma internet que não falhasse. A NexusNet transformou nossa rotina digital!",
    image: "/residente/Família-Costa.jpg",
  },
  {
    id: 2,
    name: "Fernando Fragoso",
    role: "Aposentado",
    quote: "Nunca pensei que seria tão fácil fazer videochamadas com meus netos! O suporte técnico é muito paciente e me ajuda com qualquer dúvida.",
    image: "/residente/Fernando-Fragoso.jpg",
  },
  {
    id: 3,
    name: "Família Costa",
    role: "Assinantes há 1 ano",
    quote: "As crianças podem jogar online, assistimos filmes em 4K e ainda trabalho de casa sem nenhuma queda de conexão!",
    image: "/residente/Família-Costa.jpg",
  },
];

// Dados das perguntas frequentes
export const faqs = [
  {
    question: "Como é feita a instalação na minha casa?",
    answer: "Nossa instalação é rápida e limpa! Um técnico especializado fará todo o serviço, desde a passagem do cabo de fibra até a configuração do Wi-Fi em todos os seus dispositivos. O melhor: sem bagunça e sem furos desnecessários.",
  },
  {
    question: "O que fazer se precisar de ajuda técnica?",
    answer: "Nosso suporte técnico está disponível 24/7 através de WhatsApp, telefone ou chat. Para problemas simples, temos resolução em minutos. Se necessário, enviamos um técnico à sua casa no mesmo dia, sem custo adicional.",
  },
  {
    question: "Como funciona a cobertura Wi-Fi para casa grande?",
    answer: "Nosso sistema Wi-Fi Mesh cobre até 300m² com sinal forte e estável. Para casas maiores, instalamos pontos adicionais de conexão gratuitamente, garantindo internet em todos os cômodos.",
  },
  {
    question: "Posso alterar meu plano quando quiser?",
    answer: "Sim! Você pode aumentar ou diminuir seu plano a qualquer momento através do nosso app, sem multas ou burocracia. A alteração é feita em até 24 horas.",
  },
  {
    question: "Como é feito o controle parental?",
    answer: "Nosso app permite criar perfis para cada membro da família, definir horários de uso, filtrar conteúdo inadequado e acompanhar o tempo de navegação. Tudo de forma simples e intuitiva.",
  },
];

// Dados dos recursos
export const features = [
  {
    title: "Wi-Fi Inteligente",
    description: "Cobertura garantida em todos os cômodos. Seu Wi-Fi se adapta automaticamente para melhor desempenho em cada ambiente da casa.",
    icon: "Wifi",
  },
  {
    title: "Suporte Família",
    description: "Atendimento especializado que realmente resolve. Nossos técnicos são treinados para explicar tudo de forma simples e clara.",
    icon: "Heart",
  },
  {
    title: "Proteção Total",
    description: "Navegação segura para toda família com antivírus, controle parental e proteção contra sites maliciosos, tudo incluso.",
    icon: "Shield",
  },
  {
    title: "Instalação Express",
    description: "Instalação no mesmo dia em horário agendado. Processo rápido, limpo e com configuração completa dos seus dispositivos.",
    icon: "Zap",
  },
];