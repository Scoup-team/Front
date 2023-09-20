import client from "./client";

//카페 검색 API
export const postSearchShop = async (keyword) => {
  try {
    const config = {
      headers: {
        userId: 2,
      },
    };
    const res = await client.get(`shop?keyword=${keyword}`, config);
    console.log("res.data", res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//카페 추가 API
export const postAddShop = async (userId, shopId) => {
  try {
    // const config = {
    //   headers: {
    //     userId: userId,
    //   },
    // };
    const config = await handleGetToken();
    const res = await client.post(`shop/${shopId}`, {}, config);
    return res.data;
  } catch (err) {
    throw err;
  }
};
