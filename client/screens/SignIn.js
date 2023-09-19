import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Button, Image, StyleSheet } from "react-native";
import ClickButton from "../components/ClickButton";
import logo from "../assets/icons/logo.png";
import { getToken } from "../api/token";
// 로고는 추후에 수정 예정

const SignIn = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   // 토큰을 가져와서 유효한지 확인
  //   const checkToken = async () => {
  //     const token = await getToken();
  //     if (token !== null) {
  //       setIsLogin(true);
  //     }
  //   };
  //   checkToken();
  // }, []);

  const Login = () => {
    if (isLogin) {
      navigation.navigate("Home");
    } else {
      alert("로그인 할 수 없습니다.");
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
