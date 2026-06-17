// src/components/FilmList.jsx
import { useState, useEffect } from 'react';
// Importa o array correto do arquivo vizinho apontando para o nome certo
import { namefilmlist } from './namefilmlist.jsx'; 

function FilmList() {
  const [lista, setLista] = useState([]);
  // Mudamos aqui: agora vamos salvar o OBJETO do filme selecionado (ou null se nenhum for escolhido)
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  useEffect(() => {
    // Cronômetro que fica checando se o array recebeu o push dos dados
    const checarAoVivo = setInterval(() => {
      if (namefilmlist.length > 0) {
        setLista([...namefilmlist]); // Atualiza o estado com o seu array cheio de objetos
        clearInterval(checarAoVivo); // Desliga o cronômetro
      }
    }, 100);

    return () => clearInterval(checarAoVivo);
  }, []);

  // Função que roda quando o usuário muda a seleção no <select>
  const lidarComMudanca = (e) => {
    const tituloEscolhido = e.target.value;
    
    // Procura dentro da nossa lista o objeto que tem o mesmo título que o usuário clicou
    const filmeEncontrado = lista.find(f => f.title === tituloEscolhido);
    
    // Salva o objeto inteiro (com título e descrição) no estado
    setFilmeSelecionado(filmeEncontrado || null);
  };

  return (
    <div>
      {/* O valor do select agora é baseado no título do filme selecionado */}
      <select 
        value={filmeSelecionado ? filmeSelecionado.title : ""} 
        onChange={lidarComMudanca}
      >
        <option value="">Clique para escolher...</option>
        {lista.map((filme, index) => (
          // Agora filmes é um objeto, então usamos filme.title aqui
          <option key={index} value={filme.title}>
            {filme.title}
          </option>
        ))}
      </select>

      {/* Se houver um filme selecionado, exibe a descrição dele logo abaixo */}
      {filmeSelecionado && (
        <div className="descricao-filme" style={{ marginTop: '15px' }}>
          <h3>Descrição:</h3>
          <p>{filmeSelecionado.description}</p>
        </div>
      )}
    </div>
  );
}

export default FilmList;