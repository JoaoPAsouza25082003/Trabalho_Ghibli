src/components/CartaoFilme.jsx

// O componente recebe os dados puros via PROPS do seu serviço
function CartaoFilme({ title, image, description }) {
  return (
    <div className="cartao-filme">
      {/* 1. Título em primeiro */}
      <h3>{title}</h3>
      
      {/* 2. Descrição no meio */}
      <p>{description}</p>
      
      {/* 3. Imagem por último */}
      <img src={image} alt={title} />
    </div>
  );
}

export default CartaoFilme;