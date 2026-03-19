import { useState } from 'react'

function Atividade1() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }

  return (
    <div>
      <h1>Contador Interativo</h1>
      <h2>{contador}</h2>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}

export default Atividade1