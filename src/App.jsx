// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os componentes de estrutura
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Importa as TRÊS páginas do sistema
import AboutPage from './pages/AboutPage';
import Sobre from './pages/Sobre';
import ConsultaDeFilmes from './pages/ConsultaDeFilmes'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />

        <main className="conteudo-principal">
          <Routes>
            {/* Página inicial (/) carrega a explicação do projeto */}
            <Route path="/" element={<AboutPage />} />
            
            {/* Rota /sobre carrega os créditos com os nomes de vocês */}
            <Route path="/sobre" element={<Sobre />} />
            
            {/* Rota /filmes carrega a listagem dos cartões do Studio Ghibli */}
            <Route path="/filmes" element={<ConsultaDeFilmes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;