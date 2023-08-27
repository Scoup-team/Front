import { AI_SPRING_URL } from "./url";

//영수증 이미지를 보내는 API
export const postReceipt = async (formData) => {
  try {
    const response = await AI_SPRING_URL.post(`receipt`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    });
  } catch (err) {
    throw err;
  }
};
