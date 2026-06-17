// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

import AboutPage from './pages/AboutPage';
import Sobre from './pages/Sobre';
import ConsultaDeFilmes from './pages/ConsultaDeFilmes'; 
import NotFoundPage from './pages/404'; // Importação atualizada aqui!

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />

        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/filmes" element={<ConsultaDeFilmes />} />
            
            {/* Rota de erro 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            {/* Captura qualquer rota inexistente digitada na URL */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;