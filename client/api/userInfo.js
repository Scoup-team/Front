import client from "./client";

// 닉네임 수정
export const changeNickname = async (nickname) => {
  try {
    const response = await client.patch("/user/nickname", {
      nickname: nickname,
    });
    console.log(response.data.message);
    alert("닉네임이 성공적으로 변경되었습니다.");
  } catch (error) {
    console.error("닉네임 변경 실패:", error);
  }
};

// 비밀번호 수정
export const changePassword = async (originalPassword, newPassword) => {
  try {
    const response = await client.patch("/user/password", {
      originalPassword: originalPassword,
      newPassword: newPassword,
    });
    console.log("비밀번호 변경 요청 성공:", response.data.message);
    alert("성공적으로 변경되었습니다.");
  } catch (error) {
    console.error("비밀번호 변경 요청 실패:", error);
  }
};

// 회원탈퇴

export const deleteUser = async () => {
  try {
    const response = await client.delete("/user");

    if (response.status === 200) {
      console.log("회원 탈퇴 성공:", response.data.message);
      alert("회원 탈퇴가 성공적으로 이루어졌습니다.");
    } else {
      console.error(response.data.message);
    }
  } catch (error) {
    console.error("회원 탈퇴 실패:", error);
  }
};
