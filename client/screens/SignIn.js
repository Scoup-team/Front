import React, { useState } from "react";
import { Text, TextInput, View, Button, Image } from "react-native";
import ClickButton from "./Components/ClickButton";
import { boxStyle, textStyles } from "./Styles";
import logo from "../assets/icons/logo.png";
// 로고는 추후에 수정 예정

const SignIn = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const Login = () => {};

  return (
    <View
      style={{
        marginLeft: 32,
        marginTop: 225,
      }}
    >
      <Image
        source={logo}
        style={{ width: "90%", height: "20%", marginBottom: "20%" }}
      />

      <Text style={textStyles.basicText}>아이디</Text>
      <TextInput
        placeholder="이메일 주소"
        value={userId}
        onChangeText={setUserId}
        style={boxStyle.inputText}
      />

      <Text style={[textStyles.basicText, { marginTop: 28 }]}>비밀번호</Text>
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
          marginTop: 34,
          marginBottom: 24,
        }}
      >
        <Text
          style={{ color: "#FF0000" }}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          회원가입하기
        </Text>
        <Text onPress={() => this.props.navigation.navigate("FindPw")}>
          비밀번호 찾기
        </Text>
      </View>

      <ClickButton text={"로그인"} onPress={Login} />
    </View>
  );
};

export default SignIn;
