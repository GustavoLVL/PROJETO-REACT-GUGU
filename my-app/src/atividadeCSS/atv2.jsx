import './atv2.css'

function ListaProdutos() {
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
    }
  ]
return (
    <div className="container-produtos">
      <h1>Lista de Produtos</h1>

  {produtos.map((produto, index) => (
    <div key={produto.id} className={`produto produto-${index}`}>
     <h2>{produto.nome}</h2>
    <p>Preço: R$ {produto.preco}</p>
    </div>
      ))}
    </div>
  )
}
export default ListaProdutos