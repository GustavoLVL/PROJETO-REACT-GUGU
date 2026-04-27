// Importa o React e o useState
// useState serve para criar um valor que muda na tela (estado)
import React, { useState } from 'react';

// Aqui criamos um componente chamado Atividade2
// Componente = função que retorna o que aparece na tela
function Atividade2() {

  // Criamos um estado chamado "nome"
  // nome = valor atual digitado
  // setNome = função que altera esse valor
  // começa vazio ''
  const [nome, setNome] = useState('');  

  // Aqui começa o que será exibido na tela
  return (
    <div>

      {/* Título da atividade */}
      <h3>Exercício 2</h3>

      {/* Texto explicativo */}
      <p>Esta é a atividade 2.</p>

      {/* Label para o campo de input */}
      <label>Digite seu nome: </label>

      {/* Campo de entrada de texto */}
      <input 
        type="text" 

        // O valor do input vem do estado "nome"
        // Ou seja, o que está digitado fica armazenado aqui
        value={nome}  

        // onChange dispara sempre que o usuário digita algo
        // e.target.value = valor que foi digitado
        // setNome(...) atualiza o estado
        // isso faz o React atualizar a tela automaticamente
        onChange={(e) => setNome(e.target.value)}  
      />

      {/* Aqui mostramos o nome digitado */}
      {/* Só aparece se o usuário digitar algo */}
      {nome && <p>Olá {nome}</p>}

    </div>
  );
}

// Exporta o componente para poder usar no App.jsx
export default Atividade2;