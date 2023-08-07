import React, { useState } from "react";
import { Text, TextInput, View, Button, Image } from "react-native";
import ClickButton from "../components/ClickButton";
import { boxStyle, textStyles } from "./Styles";
import logo from "../assets/icons/logo.png";
// 로고는 추후에 수정 예정

const SignIn = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const Login = () => {};

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
