import axios from "axios";

const API = axios.create({
  baseURL: "http://3.35.185.90:8080",
  headers: { "Content-Type": "application/json", userId: 2 },
});

export default API;
