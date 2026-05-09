import './atv5.css'

function ListaFilmes() {
  const filmes = [
    {
      id: 1,
      nome: 'Homem-Aranha',
      categoria: 'Ação',
      nota: 9
    },
    {
      id: 2,
      nome: 'Toy Story',
      categoria: 'Animação',
      nota: 8
    },
    {
      id: 3,
      nome: 'Interestelar',
      categoria: 'Ficção Científica',
      nota: 10
    },
    {
      id: 4,
      nome: 'Velozes e Furiosos',
      categoria: 'Ação',
      nota: 7
    }
  ]

  return (
    <div className="container-filmes">
      <h1>Lista de Filmes</h1>

      <div className="lista-filmes">
        {filmes.map((filme) => (
          <div className="card-filme" key={filme.id}>
            <h2>{filme.nome}</h2>

            <p>Categoria: {filme.categoria}</p>

            <p>Nota: {filme.nota}</p>

            <button>Assistir</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaFilmes