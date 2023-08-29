import { Text, TextInput, View, StyleSheet, Image } from "react-native";
import ClickButton from "../components/ClickButton";
import prevArrow from "../assets/icons/prevArrow.png";
import { changeNickname, changePassword } from "../api/userInfo";
import React, { useState, useEffect } from "react";
import client from "../api/client";

const ModifyInfo = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [originalPassword, setOriginalPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    async function getNickname() {
      try {
        const response = await client.get("/user");
        setNickname(response.data.data.nickname);
        console.log("닉네임 가져오기 성공:", response.data.data.nickname);
      } catch (error) {
        console.error("닉네임 가져오기 실패:", error);
      }
    }

    getNickname();
  }, []);

  return (
    <View>
      <View
        style={{
          width: 253,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={prevArrow}
          style={{ marginTop: 18, marginLeft: 42, width: 32, height: 33 }}
          onPress={() => navigation.navigate("MyPage")}
        />
        <Text style={[textStyles.mainText]}>개인정보 수정</Text>
      </View>

      <View>
        <Text style={[textStyles.notifyText, styles.notifyMargin]}>
          닉네임 변경
        </Text>
        <TextInput
          style={[boxStyle.inputText, styles.boxMargin, { marginBottom: 23 }]}
          value={nickname}
          onChangeText={setNickname}
        />
        <ClickButton
          text={"변경하기"}
          onPress={() => changeNickname(nickname)}
        />
      </View>

      <View>
        <Text style={[textStyles.notifyText, styles.notifyMargin]}>
          비밀번호 변경
        </Text>

        <TextInput
          style={[boxStyle.inputText, styles.boxMargin]}
          placeholder="기존 비밀번호"
          secureTextEntry
          value={originalPassword}
          onChangeText={setOriginalPassword}
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, styles.boxMargin]}
          placeholder="새 비밀번호"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, styles.boxMargin, { marginBottom: 23 }]}
          placeholder=" 비밀번호 확인"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        ></TextInput>

        <ClickButton
          text={"변경하기"}
          onPress={() => {
            if (newPassword == confirmPassword) {
              changePassword(originalPassword, newPassword);
            } else {
              alert("새 비밀번호가 일치하지 않습니다.");
            }
          }}
        />
      </View>
    </View>
  );
};

export default ModifyInfo;

const styles = StyleSheet.create({
  notifyMargin: { marginTop: 36, marginLeft: 36 },
  boxMargin: { marginTop: 15, marginLeft: 40, marginTop: 18 },
});

export const boxStyle = StyleSheet.create({
  inputText: {
    backgroundColor: "#E8E8E8",
    width: 310,
    height: 42,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.4,
    borderRadius: 8,
    paddingLeft: 9,
  },
});

export const textStyles = StyleSheet.create({
  notifyText: {
    color: "#6E85B7",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.4,
  },

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 22,
    fontStyle: "normal",
  },
});
