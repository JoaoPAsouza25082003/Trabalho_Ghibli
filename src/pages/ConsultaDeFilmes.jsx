// src/pages/ConsultaDeFilmes.jsx
import { useState, useEffect } from 'react';
import { getFilmes } from '../services/ServicoBusca';
import CartaoFilme from '../components/CartaoFilme';

function ConsultaDeFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Novo estado para guardar o texto digitado na pesquisa
  const [pesquisa, setPesquisa] = useState('');

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

  // Filtra os filmes comparando o título com o texto da pesquisa (ignorando maiúsculas/minúsculas)
  const filmesFiltrados = filmes.filter((filme) =>
    filme.title.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="consulta-container">
      <h2>Catálogo de Filmes Studio Ghibli</h2>

      {/* Barra de Pesquisa */}
      <div className="barra-pesquisa" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Pesquisar filme pelo nome..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          style={{
            padding: '10px',
            width: '10px', // O CSS externo ou flexbox costuma controlar, ajuste se necessário
            minWidth: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      {loading ? (
        <p>Carregando os filmes direto da API...</p>
      ) : (
        <div className="lista-filmes">
          {/* Se a pesquisa não encontrar nada, avisa o usuário */}
          {filmesFiltrados.length === 0 ? (
            <p>Nenhum filme encontrado com o nome "{pesquisa}".</p>
          ) : (
            // Mapeia apenas os filmes filtrados pela pesquisa
            filmesFiltrados.map((filme) => (
              <CartaoFilme 
                key={filme.id}
                title={filme.title}
                description={filme.description}
                image={filme.image} 
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ConsultaDeFilmes;