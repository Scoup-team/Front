import { AI_SPRING_URL } from "./url";

//영수증 이미지를 보내는 API
export const postReceipt = async (formData) => {
  try {
    const response = await AI_SPRING_URL.post(`receipt`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      // transformRequest를 수정하여 formData를 반환
      transformRequest: [(data, headers) => formData],
    });
    console.log("Response:", response.data);
  } catch (err) {
    console.error("Error posting receipt: ", err);
    throw err;
  }
};