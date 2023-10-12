import client from "./client";

// home 데이터 가져오기
export const getHome = async () => {
  try {
    const response = await client.get("/home");
    if (response.data.status == 200) {
      console.log("로그인 성공");

      if (response.data.data) {
        const storesInfo = response.data.data;
        return storesInfo;
      }
    } else {
      console.log("로그인 실패: ", response.data.status);
    }
  } catch (error) {
    console.error("home 조회 실패: ", error);
    throw error;
  }
};

// 가게 데이터 삭제하기
export const rmStoreData = async (id) => {
  try {
    const response = await client.delete("/home", {
      data: id,
    });
    return response;
  } catch (error) {
    console.log("가게 삭제 error: ", error);
  }
};
