import axios from 'axios';
import { AI_SPRING_URL } from "./url";

//영수증 이미지를 보내는 API
export const postReceipt = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await AI_SPRING_URL.post(`receipt`, formData, config);
    console.log("Response:", response.data);
  } catch (err) {
    console.error("Error posting receipt: ", err);
    throw err;
  }
};
