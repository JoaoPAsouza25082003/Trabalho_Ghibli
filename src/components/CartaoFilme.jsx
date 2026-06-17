
function CartaoFilme({ title, description, image }) {
  return (
    <div className="cartao-filme">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} style={{ maxWidth: '150px', height: 'auto' }} />
    </div>
  );
}

export default CartaoFilme;