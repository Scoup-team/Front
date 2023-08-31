import client from "./client";

//내 쿠폰함을 조회하는 API
export const getCoupon = async (userId) => {
  try {
    const config = {
      headers: {
        userId: userId, // userId를 헤더에 추가
      },
    };
    const res = await client.get(`mypage/coupon`, config);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//쿠폰 사용 API
export const useCoupon = async (couponId) => {
  try {
    const res = await client.post(`mypage/coupon/${couponId}`);
    return res.message;
  } catch (err) {
    throw err;
  }
};
