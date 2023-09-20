import axios from "axios";
import { SPRING_URL } from "./url";
// import { getToken } from "./token";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

export default client;
