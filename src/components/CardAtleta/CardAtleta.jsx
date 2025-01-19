import React from "react";
import "./CardAtleta.css";

const CardAtleta = ({ atleta, adicionarAosFavoritos }) => {
  return (
    <div className="card-atleta">
      <img src={atleta.image} alt={atleta.name} className="card-image" />
      <h3 className="card-title">{atleta.name}</h3>
      <p className="card-sport">Esporte: {atleta.sport}</p>
      <button
        className="card-button"
        onClick={() => adicionarAosFavoritos(atleta)}
      >
        Adicionar aos favoritos
      </button>
    </div>
  );
};

export default CardAtleta;
