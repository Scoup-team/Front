import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Button, Image, StyleSheet } from "react-native";
import ClickButton from "../components/ClickButton";
import logo from "../assets/icons/logo.png";
import { loginToken } from "../api/userInfo";

import { useIsFocused } from "@react-navigation/native";

// 로고는 추후에 수정 예정

const SignIn = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const Login = async () => {
    try {
      const response = await loginToken(userId, userPw);
      if (response && response.status / 100 == 2) {
        console.log("Login_로그인 성공");
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log("로그인 오류: ", error);
    }
  };

  return (
    <View>
      <View style={{ marginTop: 78, alignItems: "center" }}>
        <Image source={logo} style={{ width: "80%", height: "20%" }} />
        <View>
          <Text
            style={[textStyles.basicText, { marginTop: 39, marginBottom: 13 }]}
          >
            아이디
          </Text>
          <TextInput
            placeholder="이메일 주소"
            value={userId}
            onChangeText={setUserId}
            style={boxStyle.inputText}
          />

          <Text
            style={[textStyles.basicText, { marginTop: 31, marginBottom: 9 }]}
          >
            비밀번호
          </Text>
          <TextInput
            placeholder="영문, 숫자 포함 8자 이상"
            secureTextEntry
            value={userPw}
            onChangeText={setUserPw}
            style={boxStyle.inputText}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 310,
              marginTop: 35,
              marginBottom: 84,
            }}
          >
            <Text
              style={{ color: "#FF0000" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              회원가입하기
            </Text>
            <Text onPress={() => navigation.navigate("FindPw")}>
              비밀번호 찾기
            </Text>
          </View>
        </View>
      </View>

      <ClickButton text={"로그인"} onPress={Login} />
    </View>
  );
};

export default SignIn;

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
  basicText: {
    fontSize: 14,
    fontStyle: "normal",
  },
});
