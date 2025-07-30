import { Routes, Route } from 'react-router-dom';
import EventsHome from './../components/eventos/EventsHome';
import { Helmet } from 'react-helmet-async';

function Eventos() {
  return (
    <div>
      <Helmet>
        <title>Eventos</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<EventsHome />} />
      </Routes>
    </div>
  );
}

export default Eventos;
