// components/filmlist.jsx
import  { useState } from 'react';
import namefilmlist from './dadosGhibli'; // Seu array que veio via export default

function FilmList() {
  const [, setAtualizar] = useState();
  const [aberto, setAberto] = useState(false);
  const [filme, setFilme] = useState("Clique para escolher...");

  return (
    <div>
      {/* Botão para garantir que o array carregou */}
      <button onClick={() => setAtualizar({})}>Carregar Dados</button>
      <br /><br />

      {/* Caixa que mostra o filme selecionado e abre/fecha a lista ao clicar */}
      <div 
        onClick={() => setAberto(!aberto)} 
        style={{ border: '1px solid black', padding: '8px', width: '200px', cursor: 'pointer' }}
      >
        {filme}
      </div>

      {/* Se estiver 'aberto', mostra os filmes um embaixo do outro */}
      {aberto && (
        <div style={{ border: '1px solid gray', width: '200px' }}>
          {namefilmlist.map((title, index) => (
            <div 
              key={index} 
              onClick={() => { setFilme(title); setAberto(false); }}
              style={{ padding: '5px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
            >
              {title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilmList;