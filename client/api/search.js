import client from "./client";

//카페 검색 API
export const postSearchShop = async (userId, keyword) => {
  try {
    const res = await client.post(`/shop?page=${userId}&search=${keyword}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//카페 추가 API
export const postAddShop = async (shopId) => {
  try {
    const res = await client.post(`/shop/${shopId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
