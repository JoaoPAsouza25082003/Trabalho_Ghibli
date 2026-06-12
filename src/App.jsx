// src/App.jsx
import { useState } from 'react';
// 1. Importamos o componente da lista de filmes que você criou
import FilmList from './components/filmlist'; 

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Studio Ghibli</h1>
          <p>Consulte a lista de filmes disponíveis abaixo:</p>
        </div>

        {/* 2. Puxamos a sua caixa aqui (ela já tem o botão de carregar e a lista) */}
        <FilmList />

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;