interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
    role: string;
    description: string;
    highlights: string[];
    images: string[];
    videos?: string[];
  }
  
  interface EventsData {
    conferences: Event[];
    exhibitions: Event[];
    workshops: Event[];
    awards: Event[];
  }
  
  export const events: EventsData = {
    conferences: [
      {
        id: "3435fdsf4t4etrfw4e",
        name: "Oil and Gas",
        date: "25/12/2025",
        location: "Talatona, Luanda",
        role: "Keynote Speaker",
        description: "Um dos maiores eventos de Oil & Gas em Angola, onde apresentamos as mais recentes inovações e tendências do sector.",
        highlights: [
          "Palestra principal sobre o futuro da IA na indústria de Oil & Gas",
          "Demonstração de tecnologias e soluções inovadoras",
          "Networking com líderes e especialistas do sector",
          "Painéis de discussão sobre tendências e desafios do mercado"
        ],
        images: [
          "/eventos/oil/04.jpeg",
          "/eventos/oil/07.jpeg",
          "/eventos/oil/015.jpeg",
          "/eventos/oil/017.jpeg",
        ],
        videos: [
          "/eventos/oil/032_Video.mp4",
        ]
      },
      {
        id: "mtl3123nd34r34re32_3232",
        name: "Multitel Agro Summit 2025",
        date: "20/05/2025",
        location: "Miramar, Luanda",
        role: "Exhibitor",
        description: "Summit focado em desenvolvimento de software e práticas ágeis, onde apresentamos nossas soluções de desenvolvimento.",
        highlights: [
          "Exposição de produtos",
          "Workshop sobre metodologias ágeis",
          "Apresentação de casos de sucesso"
        ],
        images: [
          "/eventos/multitelsummit/agrotech.jpg",
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000"
        ]
      }
    ],
    exhibitions: [
      {
        id: "42edwd3re32",
        name: "Filda 2024",
        date: "10/10/2025",
        location: "Zonca Economica, Angola",
        role: "Expositor Principal",
        description: "A maior feira de tecnologia da Angola, onde apresentamos nossa linha completa de produtos e serviços.",
        highlights: [
          "Stand premiado como melhor da feira",
          "Lançamento de novo produto",
          "Demonstrações ao vivo",
          "Atendimento personalizado"
        ],
        images: [
          "/eventos/filda/filda2024.jpeg",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1560523159-6b681a1f7706?auto=format&fit=crop&q=80&w=1000"
        ],
        videos: [
          "https://www.youtube.com/embed/dQw4w9WgXcQ",
          "https://www.youtube.com/embed/dQw4w9WgXcQ"
        ]
      }
    ],
    workshops: [
      {
        id: "ai-workshop-2023",
        name: "AI no mundo corporativo",
        date: "20/10/2025",
        location: "Online",
        role: "Host",
        description: "Série de workshops online sobre inteligência artificial e suas aplicações práticas no mercado atual.",
        highlights: [
          "3 dias de conteúdo intensivo",
          "Exercícios práticos",
          "Certificação oficial",
          "Material exclusivo"
        ],
        images: [
          "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
        ]
      }
    ],
    awards: [
      {
        id: "innovation-award-2023",
        name: "Categoria de Inovação - FILDA 2024",
        date: "10/10/2025",
        location: "Zona Economica, Luanda",
        role: "Award Recipient",
        description: "Premiação que reconhece as empresas mais inovadoras do sector de tecnologia de Angola.",
        highlights: [
          "Primeiro lugar na categoria Inovação em IA",
          "Reconhecimento da comunidade tech",
          "Cobertura da mídia especializada"
        ],
        images: [
          "/eventos/premios/premios.jpeg",
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1000"
        ]
      }
    ]
  };
  
  export function findEventById(id: string): Event | undefined {
    const allEvents = [
      ...events.conferences,
      ...events.exhibitions,
      ...events.workshops,
      ...events.awards
    ];
    return allEvents.find(event => event.id === id);
  }