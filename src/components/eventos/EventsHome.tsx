import React from 'react';
import { Calendar, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { events } from './../../data/events';
import { useTranslation } from 'react-i18next';

// Tipos para eventos
interface EventType {
  id: string;
  name: string;
  date: string;
  location: string;
  images: string[];
}

function EventCard({ event }: { event: EventType }) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
      onClick={() => navigate(`/event/${event.id}`)}
    >
      <img 
        src={event.images[0]} 
        alt={event.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Globe className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
}

function EventsHome() {
  const { t } = useTranslation();
  
  // Combinar todos os eventos em uma única lista
  const allEvents = [
    ...events.conferences,
    ...events.exhibitions,
    ...events.workshops,
    ...events.awards
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">{t('eventos.titulo')}</h1>
          <p className="text-xl opacity-90">
            {t('eventos.descricao')}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event: EventType) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default EventsHome;