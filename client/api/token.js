import client from "./client";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 회원가입 시 발급된 토큰을 저장함
export const registerToken = async (name, userId, userPw, nickname) => {
  try {
    const response = await client.post("/auth/signup", {
      name: name,
      email: userId,
      password: userPw,
      nickname: nickname,
    });
    const tokenInfo = response.data;
    console.log(tokenInfo);

    if (tokenInfo.data.accessToken !== null) {
      await AsyncStorage.setItem(
        "AccessToken",
        JSON.stringify(tokenInfo.data.accessToken)
      );
    }
    if (tokenInfo.data.refreshToken !== null) {
      await AsyncStorage.setItem(
        "RefreshToken",
        JSON.stringify(tokenInfo.data.refreshToken)
      );
    }

    return tokenInfo;
  } catch (error) {
    console.log(error);
  }
};

// accessToken 정보를 가져옴
export const getToken = async () => {
  try {
    const actoken = await AsyncStorage.getItem("AccessToken");
    if (actoken) {
      return JSON.parse(actoken);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

// refreshToken 정보를 가져옴
export const getRefreshToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("RefreshToken");
    if (refreshToken) {
      return JSON.parse(refreshToken);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

// 토큰 정보를 삭제
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("AccessToken");
  } catch (error) {
    console.log(error);
  }
};

export const TokenToHeader = async () => {
  try {
    const token = await getToken();
    // const expiredTokenCheck = await tokenRefresh();

    if (token !== null) {
      const config = {
        headers: {
          Authorization: token,
          // Authorization: `Bearer ${token}`,
          // "Content-Type": "application / json",
        },
      };
      console.log(config);
      return config;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// refreshToken을 사용하여 AccessToken을 재발급하는 함수
// export const refreshAccessToken = async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// 토큰 재발급
export const tokenRefresh = async () => {
  try {
    const acToken = await getToken();
    const rfToken = await getRefreshToken();

    const reToken = client.post("auth/token", {
      accessToken: `Bearer ${acToken}`,
      refreshToken: `Bearer ${rfToken}`,
    });
  } catch (error) {
    console.log(error);
  }
};
