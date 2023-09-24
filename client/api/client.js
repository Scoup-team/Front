import axios from "axios";
import { SPRING_URL } from "./url";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getToken } from "./token";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;
client.defaults.headers.common["Content-Type"] = "application/json";
// client.defaults.headers.common["Authorization"] = AsyncStorage.getItem("AccessToken");

export default client;
