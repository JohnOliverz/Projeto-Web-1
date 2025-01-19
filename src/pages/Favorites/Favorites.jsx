import React from "react";
import { SideNavBar } from "../../components/sideNavBar/SideNavBar";
import { Footer } from "../../components/footer/Footer";

function Favoritos({ favoritos }) {
  return (
      <>
        <SideNavBar />
        <div id="divPrincipal">
        <div id="favoritos">
        <h1>Atletas Favoritos</h1>
        <div className="favoritos-list">
          {favoritos.length > 0 ? (
            favoritos.map((atleta, index) => (
              <div key={index} className="favorito-card">
                <img src={atleta.image} alt={atleta.name} className="favorito-image" />
                <h3>{atleta.name}</h3>
              </div>
            ))
          ) : (
            <p>Nenhum atleta favorito adicionado.</p>
          )}
        </div>
      </div>
          <div id="fixarRodape">
            <Footer />
          </div>
        </div>
      </>
  );
}

export default Favoritos;
