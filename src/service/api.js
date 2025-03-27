import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/", // Certifique-se de que essa URL está correta
});