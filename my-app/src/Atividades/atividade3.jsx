// Importa o useState do React
// useState serve para criar e controlar estados (valores que mudam na tela)
import { useState } from 'react';

// Componente principal chamado Atividade3
function Atividade3() {

  // Aqui criamos um estado chamado "form"
  // Ele é um OBJETO com duas propriedades: nome e email
  // form = valor atual
  // setForm = função que atualiza o objeto
  const [form, setForm] = useState({
    nome: '',
    email: ''
  });

  // Função chamada sempre que o usuário digita algo nos inputs
  function handleChange(event) {

    // Pegamos duas coisas do input:
    // name = nome do campo (nome ou email)
    // value = valor digitado
    const { name, value } = event.target;

    // Atualizamos o estado de forma IMUTÁVEL
    setForm((prevForm) => ({

      // Copia tudo que já existia no objeto (nome e email atuais)
      ...prevForm,

      // Atualiza apenas o campo que foi digitado
      // [name] significa:
      // se name = "nome" → atualiza nome
      // se name = "email" → atualiza email
      [name]: value
    }));
  }

  // O que será exibido na tela
  return (
    <div>

      {/* Título da atividade */}
      <h2>Exercício 3 - Cadastro Simples</h2>

      {/* Campo de NOME */}
      <div>

        {/* Label ligado ao input pelo htmlFor */}
        <label htmlFor="nome">Nome:</label>

        <input
          id="nome"
          type="text"

          // name é MUITO importante
          // ele define qual campo será atualizado no objeto
          name="nome"

          // O valor vem do estado form.nome
          value={form.nome}

          // Sempre que digitar, chama handleChange
          onChange={handleChange}

          // Texto de ajuda dentro do input
          placeholder="Digite seu nome"
        />
      </div>

      {/* Campo de EMAIL */}
      <div>
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Digite seu email"
        />
      </div>

      {/* Exibição dos dados */}
      <h3>Dados digitados:</h3>

      {/* Mostra o nome digitado */}
      <p><strong>Nome:</strong> {form.nome}</p>

      {/* Mostra o email digitado */}
      <p><strong>Email:</strong> {form.email}</p>

    </div>
  );
}

// Exporta o componente para usar no App.jsx
export default Atividade3;