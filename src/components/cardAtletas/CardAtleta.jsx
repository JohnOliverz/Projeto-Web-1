import React from "react";
import "./CardAtleta.css";

const CardAtlet = ({ imagem, nome, idade, nacionalidade, peso, altura, numero, posicao, onFavoritar, onRemover }) => {
  return (
    <div className="card-atleta">
      <img src={imagem} alt={nome} className="card-atleta-imagem" />
      <div className="card-atleta-info">
        <h3 className="card-atleta-nome">{nome}</h3>
        <p><strong>Idade:</strong> {idade}</p>
        <p><strong>Nacionalidade:</strong> {nacionalidade}</p>
        <p><strong>Peso:</strong> {peso}</p>
        <p><strong>Altura:</strong> {altura}</p>
        <p><strong>Número:</strong> {numero}</p>
        <p><strong>Posição:</strong> {posicao}</p>
        {onFavoritar && (
          <button className="favoritar-botao" onClick={onFavoritar}>
          <span className="material-symbols-outlined">star</span> Adicionar aos Favoritos
          </button>
        )}
        {onRemover && (
          <button className="remover-botao" onClick={onRemover}>
          <span className="material-symbols-outlined">star</span> Remover dos Favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default CardAtlet;
