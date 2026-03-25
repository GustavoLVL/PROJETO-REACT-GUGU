import React, { useState } from 'react';

function Atividade2() {
  const [nome, setNome] = useState('');  

  return (
    <div>
      <h3>Exercício 2</h3>
      <p>Esta é a atividade 2.</p>

      <label>Digite seu nome: </label>
      <input 
        type="text" 
        value={nome}  
        onChange={(e) => setNome(e.target.value)}  
      />
      
      {}
      <p>Olá {nome}</p>
    </div>
  );
}

export default Atividade2;