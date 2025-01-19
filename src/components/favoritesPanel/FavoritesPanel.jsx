import React from "react";
import "./FavoritesPanel.css";

const FavoritesPanel = ({ favoritos }) => {
  return (
    <div className="painel-favoritos">
      <h2>Atletas Favoritos</h2>
      <div className="favoritos-list">
        {favoritos.map((atleta, index) => (
          <div key={index} className="favorito-card">
            <img
              src={atleta.image}
              alt={atleta.name}
              className="favorito-image"
            />
            <h3 className="favorito-name">{atleta.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPanel;
