// Importa o useState do React
// Serve para criar estados (valores que mudam na tela)
import { useState } from 'react';

// Componente principal
function Atividade4() {

  // Estado que guarda o valor digitado no input
  const [nome, setNome] = useState('');

  // Estado que guarda a lista de nomes (array)
  const [lista, setLista] = useState([]);

  // Função chamada quando clicar no botão "Adicionar"
  function adicionarNome() {

    // Se o campo estiver vazio ou só com espaço, não faz nada
    if (nome.trim() === '') return;

    // Atualiza a lista adicionando o novo nome
    setLista((prevLista) => [

      // Copia todos os itens antigos da lista
      ...prevLista,

      // Adiciona o novo nome no final
      nome
    ]);

    // Limpa o input depois de adicionar
    setNome('');
  }

  // O que será exibido na tela
  return (
    <div>

      {/* Título */}
      <h2>Exercício 4 - Lista de Nomes</h2>

      {/* Campo de input */}
      <input
        type="text"

        // O valor do input vem do estado "nome"
        value={nome}

        // Sempre que digitar, atualiza o estado
        onChange={(e) => setNome(e.target.value)}

        // Texto de ajuda
        placeholder="Digite um nome"
      />

      {/* Botão que chama a função adicionarNome */}
      <button onClick={adicionarNome}>
        Adicionar
      </button>

      {/* Lista de nomes */}
      <ul>

        {/* map percorre o array e transforma em HTML */}
        {lista.map((item, index) => (

          // Cada item vira um <li>
          // key={index} ajuda o React a identificar cada elemento
          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

// Exporta o componente
export default Atividade4;
