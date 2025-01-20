import React, { useState } from "react";
import { buscarJogadores } from "../../services/Api";
import "./SearchPlayer.css"; // Importa o CSS

const SearchPlayer = ({ onResults }) => {
  const [nome, setNome] = useState("");

  const handleSearch = async () => {
    if (!nome) {
      alert("Por favor, insira o nome do jogador.");
      return;
    }

    const resultados = await buscarJogadores(nome);
    onResults(resultados); // Passa os resultados para o componente pai
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome do jogador"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
      <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default SearchPlayer;