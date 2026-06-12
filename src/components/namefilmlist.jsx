// components/dadosGhibli.js

let namefilmlist = [];

function carregarNomesGhibli() {
  fetch('https://ghibliapi.dev/films')
    .then(res => res.json()) 
    .then(data => {
      namefilmlist.push(...data.map(film => film.title));
    })
}

carregarNomesGhibli();

// EXPORT DEFAULT IGUAL AO DO POKÉMON (Apenas para o array)
export default namefilmlist;