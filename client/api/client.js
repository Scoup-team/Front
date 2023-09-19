import axios from "axios";
import { SPRING_URL } from "./url";
// import { getToken } from "./token";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

// const storedToken = async () => {
//   const token = await getToken();
//   if (token) {
//     return `Bearer ${token}`;
//   } else {
//     return null;
//   }
// };

// client.defaults.headers.common["Authorization"] = storedToken();

export default client;
