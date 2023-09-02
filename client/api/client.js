import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV1aWplIiwicHciOiJpYW1ldWlqZSJ9.J5NrdKxdzZMXQDI9b5_v8SuS1FIFzneH1AsXIEoizB8";

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;
