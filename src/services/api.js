import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-server-zecz.onrender.com", //test http://localhost:3300
});