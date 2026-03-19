import React, { useState } from 'react';

function Contador() {
  // 1. Estado do contador (o que você já tinha)
  const [contador, setContador] = useState(0);

  // 2. Novo estado para o nome
  const [nome, setNome] = useState('');

  // função para aumentar
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Seção do Nome */}
      <div>
        <label>Digite seu nome: </label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Seu nome aqui..."
        />
        <p>Olá, <strong>{nome}</strong>! Você clicou {contador} vezes.</p>
      </div>

      <hr />

      {/* Seção do Contador */}
      <div>
        <p>Contagem: {contador}</p>
        <button onClick={incrementar}>
          Incrementar
        </button>
      </div>
    </div>
  );
}

export default Contador;