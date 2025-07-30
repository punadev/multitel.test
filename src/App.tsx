import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Menu from './components/homepage/menu/index'
import { Home } from './pages/Home';
import { Internet } from './pages/Internet';
import { Residencial } from './pages/Residencial';
import NotFound from './pages/NotFound';
import { Empresas } from './pages/Empresas';
import { Quemsomos } from './pages/Quemsomos';
import Blog from './pages/Blog';
import Seguranca from './pages/Seguranca';
import Eventos from "./pages/Eventos"
import Contato from "./pages/Contato"
import Feedback from "./pages/Feedback"
import VPN from "./pages/VPN"
import VSat from "./pages/VSat"
import MicroOnda from "./pages/MicroOnda"
import FibraOtica from "./pages/FibraOtica"
import VozFixa from "./pages/VozFixa"
import InfraestruturaRede from "./pages/InfraestruturaRede"
import EventDetails from './components/eventos/EventDetails';
import Footer from './components/homepage/footer';
import Agro from "./pages/Agro";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import DataCenter from './pages/DataCenter';
import ServicosHosting from './pages/ServicosHosting';
import AutomacaoSeguranca from './pages/AutomacaoSeguranca';
import ServicosWeb from './pages/ServicosWeb';
import Consultoria from './pages/Consultoria';
import SmartCity from './pages/SmartCity';
import EmConstrucao from './pages/EmConstrucao';
import ServicoEmail from './pages/ServicoEmail';

function App() {
  const { t } = useTranslation();
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Menu/>
          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/residencial" element={<Residencial />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/quemsomos" element={<Quemsomos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/contacto" element={<Contato />} />
            <Route path="/fibra-optica" element={<FibraOtica />} />
            <Route path="/voz-fixa" element={<VozFixa />} />
            <Route path="/infraestrutura-rede" element={<InfraestruturaRede />} />
            <Route path="/vpn" element={<VPN />} />
            <Route path="/v-sat" element={<VSat />} />
            <Route path="/micro-onda" element={<MicroOnda />} />
            <Route path="/eventos/*" element={<Eventos />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/agro" element={<Agro />} />
            <Route path="/smartcity" element={<SmartCity />} />
            <Route path="/em-construcao" element={<EmConstrucao />} />
            <Route path="/servico-email" element={<ServicoEmail />} />
            {/* Serviços Digitais */}
            <Route path="/data-center" element={<DataCenter />} />
            <Route path="/servicos-hosting" element={<ServicosHosting />} />
            <Route path="/automacao-seguranca" element={<AutomacaoSeguranca />} />
            <Route path="/servicos-web" element={<ServicosWeb />} />
            <Route path="/consultoria" element={<Consultoria />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;