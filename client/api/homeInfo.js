import client from "./client";

// home 데이터 가져오기
export const getHome = async () => {
  try {
    const config = {
      headers: {
        userId: 2,
      },
    };
    const response = await client.get("/home", config);
    const storesInfo = response.data.data;
    return storesInfo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
