function BarraPesquisa({ valor, aoAlterar }) {
  return (
    <div className="barra-pesquisa" style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Pesquisar filme pelo nome..."
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
        style={{
          padding: '10px',
          minWidth: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default BarraPesquisa;