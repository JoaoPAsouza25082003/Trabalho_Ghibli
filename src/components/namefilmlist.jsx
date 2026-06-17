// src/components/namefilmlist.jsx

// 1. O seu array que começa vazio (agora vai receber objetos com título e descrição)
export const namefilmlist = [];

// 2. Componente vazio necessário para o Vite aceitar arquivos .jsx
export default function NameFilmList() {
  return null;
}

// 3. O seu fetch que puxa os dados do site e armazena título e descrição
fetch('https://ghibliapi.dev/films')
  .then(res => res.json())
  .then(data => {
    // Criamos objetos contendo o título e a descrição de cada filme
    const listaComDescricoes = data.map(f => ({
      title: f.title,
      description: f.description
    }));

    // Coloca os objetos dentro do seu array original
    namefilmlist.push(...listaComDescricoes);
  })
  .catch(err => console.error("Erro ao buscar filmes da API:", err));