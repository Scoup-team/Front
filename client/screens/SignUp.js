import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import ClickButton from "../components/ClickButton";
import { registerToken } from "../api/token";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [nickname, setNickname] = useState("");

  const Register = async () => {
    const responese = await registerToken(name, userId, userPw, nickname);

    if (responese.status == 201) {
      alert("회원가입 성공");
      navigation.navigate("SignIn");
    }
  };

  return (
    <View>
      <Text style={textStyles.mainText}>회원가입하기</Text>

      <View
        style={{
          marginTop: 32,
          marginLeft: 39,
        }}
      >
        <TextInput
          style={[boxStyle.inputText]}
          placeholder="이름 입력"
          value={name}
          onChangeText={setName}
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 45 }]}
          placeholder="아이디(이메일 주소)"
          value={userId}
          onChangeText={setUserId}
        ></TextInput>

        <Text style={[textStyles.basicText, { marginTop: 48 }]}>
          영문, 숫자 포함 8자 이상
        </Text>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 16 }]}
          placeholder="비밀번호 입력"
          value={userPw}
          onChangeText={setUserPw}
          secureTextEntry
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 32 }]}
          placeholder="비밀번호 재입력"
          // value={checkPw}
          secureTextEntry
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 48, marginBottom: 66 }]}
          placeholder="닉네임 입력"
          value={nickname}
          onChangeText={setNickname}
        ></TextInput>
      </View>

      <View>
        <ClickButton text={"가입하기"} onPress={Register} />
      </View>
    </View>
  );
};

export default SignUp;

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
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 66,
    fontStyle: "normal",
  },
});
