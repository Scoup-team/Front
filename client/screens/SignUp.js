import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import ClickButton from "../components/ClickButton";
import { registerToken } from "../api/userInfo";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [nickname, setNickname] = useState("");

  const isFocused = useIsFocused();

  // const [autoLogin, setAutoLogin] = useState(false);

  // useEffect(() => {
  //   IsAutoLogin();
  // }, [isFocused]);

  // const IsAutoLogin = async () => {
  //   try {
  //     const isToken = await AsyncStorage.getItem("AccessToken");
  //     if (isToken !== null) {
  //       // console.log(isToken);
  //       navigation.navigate("Home");
  //     } else {
  //       console.log(isToken);
  //       // alert("회원가입을 진행해주세요.");
  //     }
  //   } catch (error) {
  //     console.log("자동 로그인 실패", error);
  //   }
  // };

  const Register = async () => {
    try {
      const responese = await registerToken(name, userId, userPw, nickname);

      if (responese && responese.status == 201) {
        alert("회원가입 성공");
        navigation.navigate("SignIn");
      }
    } catch (error) {
      console.log("회원가입 오류: ", error);
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
          style={[boxStyle.inputText, { marginTop: 18 }]}
          placeholder="아이디(이메일 주소)"
          value={userId}
          onChangeText={setUserId}
        ></TextInput>

        <Text style={[textStyles.basicText, { marginTop: 56 }]}>
          영문, 숫자 포함 8자 이상
        </Text>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 8 }]}
          placeholder="비밀번호 입력"
          value={userPw}
          onChangeText={setUserPw}
          secureTextEntry
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 24 }]}
          placeholder="비밀번호 재입력"
          // value={checkPw}
          secureTextEntry
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 78, marginBottom: 3 }]}
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
    // fontWeight: 700,
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
    // fontWeight: "bold",
    textAlign: "center",
    marginTop: 66,
    fontStyle: "normal",
  },
});