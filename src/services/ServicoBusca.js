
const mapFilme = (filmeBruto) => {
  return {
    id: filmeBruto.id,
    title: filmeBruto.title,
    image: filmeBruto.image,
    description: filmeBruto.description
  };
};
export const getFilmes = async (signal) => {
  const res = await fetch('https://ghibliapi.dev/films', { signal });
  if (!res.ok) {
    throw new Error('Não foi possível carregar a lista de filmes.');
  }
  const dadosBrutos = await res.json();
  return dadosBrutos.map(mapFilme); 
};
export const getFilmePorId = async (id, signal) => {
  const res = await fetch(`https://ghibliapi.dev/films/${id}`, { signal });
  if (!res.ok) {
    throw new Error('Filme não encontrado.');
  }
  const dadoBruto = await res.json();
  return mapFilme(dadoBruto);
};