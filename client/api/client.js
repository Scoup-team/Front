import axios from "axios";
import { SPRING_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;
client.defaults.headers["Content-Type"] = "application/json";

client.interceptors.request.use(
  async (config) => {
    if (config.url !== "/auth/signin" || config.url !== "/auth/signup") {
      const accessToken = await AsyncStorage.getItem("AccessToken");

      config.headers["Authorization"] = accessToken;

      return config;
    } else {
      return config;
    }
  },
  (error) => {
    console.log("요청 interceptor 오류", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
client.interceptors.response.use(
  (response) => {
    if (response.url !== "/auth/signin" || response.url !== "/auth/signup") {
      return response;
    }
  },
  async (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response.data.status === 401) {
        const acToken = await AsyncStorage.getItem("AccessToken");
        const rfToken = await AsyncStorage.getItem("RefreshToken");
        await tokenRefresh(acToken, rfToken);

        const accessToken = await AsyncStorage.getItem("AccessToken");
        console.log("재발급 받은 AccessToken: ", accessToken);

        error.config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        const response = await client.request(error.config);
        return response;
      } else {
        console.error("인터셉터_Non-Axios Error:", error.message);
      }
    }
    return Promise.reject(error);
  }
);

export const tokenRefresh = async (acToken, rfToken) => {
  try {
    const response = await client.post(
      "/auth/token",
      {},
      {
        headers: {
          accessToken: `Bearer ${acToken}`,
          refreshToken: `Bearer ${rfToken}`,
        },
      }
    );

    if (response.data.status == 201) {
      await AsyncStorage.setItem("AccessToken", response.data.data.accessToken);
      await AsyncStorage.setItem(
        "RefreshToken",
        response.data.data.refreshToken
      );
    } else if (response.data.status == 403) {
      if (
        response.data.message == "토큰이 모두 유효하여 재발급 받을 수 없습니다"
      ) {
        console.log("유효한 토큰");
      } else {
        await AsyncStorage.removeItem("AccessToken");
        await AsyncStorage.removeItem("RefreshToken");
        window.location.replace("SignIn");
      }
    } else if (response.data.status == 404) {
      window.location.replace("SignIn");
    } else {
      console.log("재발급_error", response.data.status);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.error("Axios Error Message:", errorMessage);
      } else {
        console.error("Axios Error:", error.message);
      }
    } else {
      console.error("토큰리프레쉬_Non-Axios Error:", error.message);
    }
  }
};

export default client;
