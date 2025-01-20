// routes.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favoritos from "../pages/Favorites/Favorites";

function AppRoutes() {
  const [favoritos, setFavoritos] = useState([]);
  const [jogadores, setJogadores] = useState([]); // Defina aqui se for global

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setFavoritos={setFavoritos} favoritos={favoritos} setJogadores={setJogadores} />}/>
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
