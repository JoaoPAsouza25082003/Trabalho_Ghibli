// src/pages/ConsultaDeFilmes.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFilmes } from '../services/ServicoBusca';
import CartaoFilme from '../components/CartaoFilme';
import BarraPesquisa from '../components/BarraPesquisa'; // Importa o novo componente

function ConsultaDeFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    let active = true; // Flag de controle para o Cleanup

    const puxarDadosDaAPI = async () => {
      try {
        setLoading(true);
        const dadosMapeados = await getFilmes();
        
        // Se o usuário saiu da página durante a requisição, interrompe a execução
        if (!active) return; 

        if (!dadosMapeados || dadosMapeados.length === 0) {
          navigate('/404');
          return;
        }

        setFilmes(dadosMapeados); 
      } catch (erro) {
        console.error("Erro ao carregar a API do Ghibli:", erro);
        if (active) navigate('/404');
      } finally {
        if (active) setLoading(false);
      }
    };

    puxarDadosDaAPI();

    // Função de Cleanup executada ao desmontar o componente
    return () => {
      active = false; 
    };
  }, [navigate]);

  const filmesFiltrados = filmes.filter((filme) =>
    filme.title.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="consulta-container">
      <h2>Catálogo de Filmes Studio Ghibli</h2>

      {/* Uso do novo componente reutilizável de busca */}
      <BarraPesquisa valor={pesquisa} aoAlterar={setPesquisa} />

      {loading ? (
        <p>Carregando os filmes direto da API...</p>
      ) : (
        <div className="lista-filmes">
          {filmesFiltrados.length === 0 ? (
            <p>Nenhum filme encontrado com o nome "{pesquisa}".</p>
          ) : (
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