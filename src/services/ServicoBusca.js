// src/services/ServicoBusca.js

// O Mapper limpa o objeto bruto da API e deixa com as propriedades que você escolheu
const mapFilme = (filmeBruto) => {
  return {
    id: filmeBruto.id,
    title: filmeBruto.title,
    image: filmeBruto.image,
    description: filmeBruto.description
  };
};

// ATENÇÃO: A palavra 'export' ANTES de 'const getFilmes' é obrigatória!
export const getFilmes = async (signal) => {
  const res = await fetch('https://ghibliapi.dev/films', { signal });
  if (!res.ok) {
    throw new Error('Não foi possível carregar a lista de filmes.');
  }
  const dadosBrutos = await res.json();
  return dadosBrutos.map(mapFilme); // Passa os dados pelo Mapper antes de retornar
};

// Exportamos também a busca por ID caso você precise depois
export const getFilmePorId = async (id, signal) => {
  const res = await fetch(`https://ghibliapi.dev/films/${id}`, { signal });
  if (!res.ok) {
    throw new Error('Filme não encontrado.');
  }
  const dadoBruto = await res.json();
  return mapFilme(dadoBruto);
};