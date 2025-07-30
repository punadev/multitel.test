import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Users, Globe, ArrowLeft } from 'lucide-react';
import { findEventById } from './../../data/events';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = findEventById(id);
 
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Evento não encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-blue-200 flex items-center mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
          <h1 className="text-3xl font-bold">{event.name}</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img 
              src={event.images[0]} 
              alt={event.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Detalhes do Evento</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3" />
                    <span>{event.role}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">Descrição</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Destaques</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Galeria</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {event.images.map((image, index) => (
                  <div key={index} className="aspect-square">
                    <img 
                      src={image} 
                      alt={`${event.name} - Imagem ${index + 1}`} 
                      className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {event.videos && event.videos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Vídeos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.videos.map((video, index) => (
                    <div key={index} className="aspect-video">
                      <iframe
                        src={video}
                        title={`${event.name} - Vídeo ${index + 1}`}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default EventDetails;