// src/App.jsx
import FilmList from './components/filmlist.jsx'; 

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Studio Ghibli</h1>
          <p>Consulte a lista de filmes disponíveis abaixo:</p>
        </div>

        <FilmList />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;