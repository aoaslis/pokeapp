import axios from 'axios';

const API_URL = "http://localhost:5000/api/pokemon";

export const getPokemon = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};