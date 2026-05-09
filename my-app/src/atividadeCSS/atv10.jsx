import './atv10.css'

function MiniVitrine() {
  const produtos = [
    {
      id: 1,
      nome: 'Notebook Gamer',
      preco: 3500,
      categoria: 'Informática'
    },
    {
      id: 2,
      nome: 'Mouse Sem Fio',
      preco: 89,
      categoria: 'Acessórios'
    },
    {
      id: 3,
      nome: 'Teclado Mecânico',
      preco: 250,
      categoria: 'Acessórios'
    },
    {
      id: 4,
      nome: 'Monitor Full HD',
      preco: 900,
      categoria: 'Informática'
    },
    {
      id: 5,
      nome: 'Headset Gamer',
      preco: 180,
      categoria: 'Áudio'
    },
    {
      id: 6,
      nome: 'Cadeira Gamer',
      preco: 1200,
      categoria: 'Móveis'
    }
  ]

  return (
    <div className="container-vitrine">
      <h1>Mini Vitrine de Loja</h1>

      <div className="grid-vitrine">
        {produtos.map((produto) => (
          <div className="card-vitrine" key={produto.id}>
            <div className="imagem-ficticia">
              Produto
            </div>

            <h2>{produto.nome}</h2>

            <p className="categoria">
              Categoria: {produto.categoria}
            </p>

            <p className="preco">
              R$ {produto.preco}
            </p>

            <button>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniVitrine