// @ts-nocheck
// Arquivo em JavaScript, ignorando checagem de tipos do TypeScript.

import { Routes, Route } from 'react-router-dom';
import EventsHome from '../components/eventos/EventsHome';
import FeedbackPage from '../components/feedback/FeedbackPage';
import { Helmet } from 'react-helmet-async';

function Feedback() {
  return (
    <div>
      <Helmet>
        <title>Feedback | Multitel</title>
        <meta name="description" content="Envie seu feedback, dúvidas ou sugestões para a Multitel." />
      </Helmet>
      <FeedbackPage />
    </div>
  );
}

export default Feedback;
