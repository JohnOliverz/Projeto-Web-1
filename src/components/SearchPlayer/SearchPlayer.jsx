// components/SearchPlayer.js
import React, { useState } from 'react';
import { buscarJogadores } from '../../services/Api';

const SearchPlayer = ({ onResults }) => {
  const [nome, setNome] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const resultados = await buscarJogadores(nome);
    onResults(resultados);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome do jogador"
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchPlayer;
