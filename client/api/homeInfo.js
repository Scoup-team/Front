import client from "./client";

// home 데이터 가져오기
export const getHome = async () => {
  try {
    const token = await getToken();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
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
