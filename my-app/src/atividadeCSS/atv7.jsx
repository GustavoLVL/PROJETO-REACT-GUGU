import './atv7.css'

function TelaUsuarios() {
  const usuarios = [
    {
      id: 1,
      nome: 'Ramon',
      email: 'ramon@email.com',
      telefone: '(14) 99999-1111'
    },
    {
      id: 2,
      nome: 'Ana Souza',
      email: 'ana@email.com',
      telefone: '(14) 98888-2222'
    },
    {
      id: 3,
      nome: 'Carlos Lima',
      email: 'carlos@email.com',
      telefone: '(14) 97777-3333'
    },
    {
      id: 4,
      nome: 'Julia Martins',
      email: 'julia@email.com',
      telefone: '(14) 96666-4444'
    }
  ]

  return (
    <div className="container-usuarios">
      <h1>Tela de Usuários</h1>

      <div className="lista-usuarios">
        {usuarios.map((usuario) => (
          <div className="card-usuario" key={usuario.id}>
            <h2>{usuario.nome}</h2>

            <p>Email: {usuario.email}</p>

            <p>Telefone: {usuario.telefone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TelaUsuarios