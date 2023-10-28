import axios from "axios";
import { AI_SPRING_URL } from "./url";
import client from "./client";

//영수증 이미지를 보내는 API
export const postReceipt = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await AI_SPRING_URL.post(`receipt`, formData, config);
    return response.data;
  } catch (err) {
    console.error("Error posting receipt: ", err);
    throw err;
  }
};

//영수증 정보를 서버로 보내는 API
export const postReceiptData = async (receiptInfo) => {
  console.log(receiptInfo);
  const data = {
    receiptInfo,
  };
  try {
    const res = await client.post(`home/receipt`, receiptInfo, {
      headers: { "Content-Type": `application/json` },
    });
    console.log("Response:", res.data);
  } catch (err) {
    console.error("Error posting receipt: ", err);
    throw err;
  }
};

// 상세 페이지 정보 불러오기
export const detailPage = async (stampId) => {
  try {
    const response = await client.get(`/home/${stampId}`);
    return response;
  } catch (error) {
    console.log("상세 페이지 정보 불러오기 오류: ", error);
  }
};
