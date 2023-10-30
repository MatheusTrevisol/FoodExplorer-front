import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3300", //test https://foodexplorer-server-zecz.onrender.com"
});