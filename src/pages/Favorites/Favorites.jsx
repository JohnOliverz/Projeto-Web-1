import React from "react";
import logo from "../../assets/soccer.svg"
import { SideNavBar } from "../../components/sideNavBar/SideNavBar";
import { Footer } from "../../components/footer/Footer";
import CardAtlet from "../../components/cardAtleta/CardAtleta";

function Favorites({ favoritos, setFavoritos }) {
  const removerDosFavoritos = (id) => {
    const novosFavoritos = favoritos.filter((jogador) => jogador.player.id !== id);
    setFavoritos(novosFavoritos); // Atualiza o array de favoritos
  };

  return (
    <>
      <SideNavBar />
      <div id="divPrincipal">
        <h2>Jogadores Favoritos</h2>
        <div className="resultados">
          {favoritos.length > 0 ? (
            favoritos.map((jogador, index) => (
              <CardAtlet
                key={index}
                imagem={jogador.player.photo}
                nome={jogador.player.name}
                idade={jogador.player.age}
                nacionalidade={jogador.player.nationality}
                peso={jogador.player.weight}
                altura={jogador.player.height}
                numero={jogador.player.number || "N/A"}
                posicao={jogador.player.position || "Desconhecida"}
                onRemover={() => removerDosFavoritos(jogador.player.id)}
              />
            ))
          ) : (
            <>
              <p>Nenhum jogador Favoritado.</p>
              <img className="logo" src={logo} alt="Nenhum jogador encontrado" />
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Favorites;
