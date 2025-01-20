import React, { useState } from "react";
import logo from "../../assets/question.png"
import { SideNavBar } from "../../components/sideNavBar/SideNavBar";
import { Footer } from "../../components/footer/Footer";
import SearchPlayer from "../../components/SearchPlayer/SearchPlayer";
import CardAtlet from "../../components/cardAtleta/CardAtleta";

function Home({ favoritos, setFavoritos }) {
  const [jogadores, setJogadores] = useState([]);

  const adicionarAosFavoritos = (jogador) => {
    if (!favoritos.some((fav) => fav.player.id === jogador.player.id)) {
      setFavoritos([...favoritos, jogador]); // Adiciona o jogador ao array de favoritos
    } else {
      alert("Jogador já está nos favoritos!");
    }
  };

  return (
    <>
      <SideNavBar />
      <div id="divPrincipal">
        <SearchPlayer onResults={setJogadores} />
        <div className="resultados">
          {jogadores.length > 0 ? (
            jogadores.map((jogador, index) => (
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
                onFavoritar={() => adicionarAosFavoritos(jogador)}
              />
            ))
          ) : (
            <>
              <p>Nenhum jogador encontrado.</p>
              <img className="logo" src={logo} alt="Nenhum jogador encontrado" />
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
