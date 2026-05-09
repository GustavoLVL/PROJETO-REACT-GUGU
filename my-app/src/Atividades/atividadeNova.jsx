// Importa o hook useState do React
// useState serve para criar e controlar estados (dados dinâmicos) no componente
import { useState } from 'react';

// Criação do componente funcional
function AtividadeNova() {

  // Estado do formulário (inputs)
  // form guarda os valores digitados pelo usuário
  // setForm é a função que atualiza esses valores
  const [form, setForm] = useState({
    livro: '',  // campo livro começa vazio
    autor: ''   // campo autor começa vazio
  });

  // Estado para armazenar os dados enviados
  // começa como null (nenhum dado cadastrado ainda)
  const [dadosCadastrados, setDadosCadastrados] = useState(null);

  // Função chamada sempre que o usuário digita algo nos inputs
  function handleChange(event) {

    // Pega o nome do campo (livro ou autor) e o valor digitado
    const { name, value } = event.target;

    // Atualiza o estado do formulário
    setForm((prevForm) => ({
      ...prevForm,      // mantém os valores antigos
      [name]: value     // atualiza apenas o campo que foi alterado
    }));
  }

  // Função chamada ao enviar o formulário
  function handleSubmit(event) {

    // Evita que a página recarregue (comportamento padrão do form)
    event.preventDefault();

    // Salva os dados digitados no estado dadosCadastrados
    setDadosCadastrados({
      livro: form.livro,
      autor: form.autor
    });

    // Limpa os inputs depois do envio
    setForm({
      livro: '',
      autor: ''
    });
  }

  // Parte visual do componente (JSX)
  return (
    <div>

      {/* Título da página */}
      <h2>Cadastro de Livro</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>

        {/* Campo Livro */}
        <div>
          <label htmlFor="livro">Livro:</label>
          <input
            id="livro"
            type="text"
            name="livro"              // importante: conecta com o state
            value={form.livro}        // valor controlado pelo React
            onChange={handleChange}   // dispara a função ao digitar
            placeholder="Digite o nome do livro"
          />
        </div>

        {/* Campo Autor */}
        <div>
          <label htmlFor="autor">Autor:</label>
          <input
            id="autor"
            type="text"
            name="autor"              // conecta com o state
            value={form.autor}        // valor controlado
            onChange={handleChange}   // atualiza o estado
            placeholder="Digite o nome do autor"
          />
        </div>

        {/* Botão de envio */}
        <button type="submit">Cadastrar</button>
      </form>

      {/* Renderização condicional:
          Só mostra essa parte se existir dadosCadastrados */}
      {dadosCadastrados && (
        <div>
          <h3>Dados digitados:</h3>

          {/* Mostra os dados que foram enviados */}
          <p><strong>Livro:</strong> {dadosCadastrados.livro}</p>
          <p><strong>Autor:</strong> {dadosCadastrados.autor}</p>
        </div>
      )}

    </div>
  );
}

// Exporta o componente para poder usar em outros arquivos
export default AtividadeNova;