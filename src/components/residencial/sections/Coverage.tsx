import React, { useState } from 'react';
import Button from '../ui/Button';
import { MapPin, Send } from 'lucide-react';

const Coverage: React.FC = () => {
  const [address, setAddress] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<'available' | 'unavailable' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    
    setIsChecking(true);
    
    // Simulate a coverage check
    setTimeout(() => {
      // For demo purposes, random result
      setResult(Math.random() > 0.3 ? 'available' : 'unavailable');
      setIsChecking(false);
    }, 1500);
  };

  return (
    <section className="bg-[url('/residente/cover_streaming.jpg')] bg-cover bg-center  w-full  text-white flex items-center h-96">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Melhor Experiência de Streaming
          </h2>
          <p className="text-xl opacity-90 mb-8">
          A Internet Fibra é a melhor opção para você navegar com muita tranquilidade e estabilidade, além de te oferecer ultravelocidade para fazer download e upload.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Coverage;