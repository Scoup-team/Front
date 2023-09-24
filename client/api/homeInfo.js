import client from "./client";
import { TokenToHeader } from "./token";

// home 데이터 가져오기
export const getHome = async () => {
  try {
    const config = await TokenToHeader();
    console.log(config);
    console.log(config.headers);
    const response = await client.get("/home", config);
    if (response.data.status == 200) {
      console.log("로그인 성공");
      const storesInfo = response.data.data;
      return storesInfo;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
