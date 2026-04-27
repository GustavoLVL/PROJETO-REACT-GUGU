// Importa o useState do React
// useState serve para criar e controlar valores que mudam na tela
import { useState } from 'react'

// Aqui estamos criando um componente chamado Atividade1
// Todo componente React é uma função que retorna HTML (JSX)
function Atividade1() {

  // Criamos uma variável de estado chamada "contador"
  // contador = valor atual
  // setContador = função que altera o valor
  // useState(0) = valor inicial é 0
  const [contador, setContador] = useState(0)

  // Função para aumentar o contador
  function incrementar() {
    // Pega o valor atual e soma +1
    setContador(contador + 1)
  }

  // Função para diminuir o contador
  function decrementar() {
    // Pega o valor atual e subtrai -1
    setContador(contador - 1)
  }

  // Aqui começa o que será exibido na tela
  return (
    <div>

      {/* Título da aplicação */}
      <h1>Contador Interativo do Gustavo</h1>

      {/* Mostra o valor atual do contador */}
      {/* As chaves {} servem para mostrar variáveis no React */}
      <h2>{contador}</h2>

      {/* Botão que chama a função incrementar quando clicado */}
      <button onClick={incrementar}>
        Incrementar
      </button>

      {/* Botão que chama a função decrementar quando clicado */}
      <button onClick={decrementar}>
        Decrementar
      </button>

    </div>
  )
}

// Exporta o componente para poder ser usado em outros arquivos (ex: App.jsx)
export default Atividade1