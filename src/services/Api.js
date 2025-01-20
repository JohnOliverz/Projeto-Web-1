import axios from "axios";

const API_KEY = "052cdd91a3e843b34fd85406fef7626b"; // Substitua pela sua chave válida
const BASE_URL = "https://v3.football.api-sports.io";

export const buscarJogadores = async (nome) => {
  try {
    const response = await axios.get(`${BASE_URL}/players/profiles`, {
      params: { search: nome },
      headers: {
        "x-apisports-key": API_KEY,
      },
    });
    return response.data.response; // Retorna os dados dos jogadores
  } catch (error) {
    console.error("Erro ao buscar jogadores:", error);
    return [];
  }
};
