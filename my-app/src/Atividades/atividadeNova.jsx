import { useState } from 'react';

function AtividadeNova() {
  const [form, setForm] = useState({
    livro: '',
    autor: ''
  });

  const [dadosCadastrados, setDadosCadastrados] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setDadosCadastrados({
      livro: form.livro,
      autor: form.autor
    });

    setForm({
      livro: '',
      autor: ''
    });
  }

  return (
    <div>
      <h2>Cadastro de Livro</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="livro">Livro:</label>
          <input
            id="livro"
            type="text"
            name="livro"
            value={form.livro}
            onChange={handleChange}
            placeholder="Digite o nome do livro"
          />
        </div>

        <div>
          <label htmlFor="autor">Autor:</label>
          <input
            id="autor"
            type="text"
            name="autor"
            value={form.autor}
            onChange={handleChange}
            placeholder="Digite o nome do autor"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {dadosCadastrados && (
        <div>
          <h3>Dados digitados:</h3>
          <p><strong>Livro:</strong> {dadosCadastrados.livro}</p>
          <p><strong>Autor:</strong> {dadosCadastrados.autor}</p>
        </div>
      )}
    </div>
  );
}

export default AtividadeNova;