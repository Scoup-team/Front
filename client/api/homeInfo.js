import client from "./client";
import { handleGetToken } from "./token";

// home 데이터 가져오기
export const getHome = async () => {
  try {
    const config = await handleGetToken();
    console.log(config);

    const response = await client.get("/home", config);
    const storesInfo = response.data.data;
    return storesInfo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
