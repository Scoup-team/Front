import client from "./client";

//카페별 이벤트를 조회하는 API
export const getEvent = async (shopId) => {
  try {
    const res = await client.get(`home/${shopId}/event`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//가게를 검색하는 API
export const getShop = async (string) => {
  try {
    const res = await client.get(`shop?keyword=${String}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
