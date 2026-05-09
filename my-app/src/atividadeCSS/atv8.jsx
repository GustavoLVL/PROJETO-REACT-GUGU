import './atv8.css'

function GridProdutos() {
  const produtos = [
    {
      id: 1,
      nome: 'Notebook',
      preco: 2500
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80
    },
    {
      id: 3,
      nome: 'Teclado',
      preco: 150
    },
    {
      id: 4,
      nome: 'Monitor',
      preco: 900
    },
    {
      id: 5,
      nome: 'Headset',
      preco: 220
    },
    {
      id: 6,
      nome: 'Cadeira Gamer',
      preco: 1200
    }
  ]

  return (
    <div className="container-grid">
      <h1>Grid de Produtos</h1>

      <div className="grid-produtos">
        {produtos.map((produto) => (
          <div className="card-produto-grid" key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>Preço: R$ {produto.preco}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridProdutos