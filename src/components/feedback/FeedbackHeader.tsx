import React from 'react';
import { MessageSquare } from 'lucide-react';

const FeedbackHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 animate-fadeIn">
      <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
        <MessageSquare className="h-8 w-8 text-blue-600" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Valorizamos o seu feedback
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
      As suas sugestões e elogios ajudam-nos a melhorar o nosso serviço. Partilhe connosco as suas opiniões, ideias ou experiências com a nossa equipa.
      </p>
    </div>
  );
};

export default FeedbackHeader;