// src/App.jsx
import { useState, useEffect } from 'react';

// 1. IMPORTA O SERVIÇO: Busca os dados na API e limpa no Mapper
import { getFilmes } from './services/ServicoBusca';

// 2. IMPORTA O CARTÃO: Com o nome correto (CartaoFilme) que está na sua pasta
import CartaoFilme from './components/CartaoFilme';

// 3. IMPORTA OS COMPONENTES DE ESTRUTURA (Com as letras minúsculas exatas do seu print)
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const puxarDadosDaAPI = async () => {
      try {
        setLoading(true);
        const dadosMapeados = await getFilmes();
        setFilmes(dadosMapeados); 
      } catch (erro) {
        console.error("Erro ao carregar a API do Ghibli:", erro);
      } finally {
        setLoading(false);
      }
    };

    puxarDadosDaAPI();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main className="conteudo-principal">
        <h2>Catálogo de Filmes Studio Ghibli</h2>

        {loading ? (
          <p>Carregando os filmes direto da API...</p>
        ) : (
          <div className="lista-filmes">
            {filmes.map((filme) => (
              <CartaoFilme 
                key={filme.id}
                title={filme.title}
                description={filme.description}
                image={filme.image} 
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;