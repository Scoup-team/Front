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
  const config = {
    headers: {
      data: receiptInfo,
    },
  };
  try {
    const res = await client.post(`home/receipt`, {}, config);
    console.log("Response:", res);
  } catch (err) {
    console.error("Error posting receipt: ", err);
    throw err;
  }
};
