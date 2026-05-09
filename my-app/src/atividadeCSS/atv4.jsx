import './atv4.css'

function ListaAlunos() {
  const alunos = [
    {
      id: 1,
      nome: 'Ramon',
      nota: 8
    },
    {
      id: 2,
      nome: 'Ana',
      nota: 6
    },
    {
      id: 3,
      nome: 'Carlos',
      nota: 7
    },
    {
      id: 4,
      nome: 'Julia',
      nota: 5
    }
  ]

  return (
    <div className="container-alunos">
      <h1>Lista de Alunos</h1>

      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li
            key={aluno.id}
            className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}
          >
            {aluno.nome} - Nota: {aluno.nota}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaAlunos