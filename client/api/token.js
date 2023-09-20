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
      const cktoken = await getToken();
      console.log(cktoken);
    }

    return tokenInfo;
  } catch (error) {
    console.log(error);
  }
};

// 토큰 정보를 가져옴
export const getToken = async () => {
  try {
    return await AsyncStorage.getItem("AccessToken");
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

export const handleGetToken = async () => {
  try {
    const token = await getToken();

    if (token !== null) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return config;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
