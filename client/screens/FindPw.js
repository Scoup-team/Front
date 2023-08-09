import { Text, TextInput, View, StyleSheet } from "react-native";
import ResetPwButton from "../components/ResetPwButton";

const FindPw = () => {
  return (
    <View>
      <Text style={textStyles.mainText}>비밀번호 찾기</Text>

      <View style={{ marginTop: 42, marginLeft: 36 }}>
        <TextInput
          style={[boxStyle.inputText]}
          placeholder="이름 입력"
        ></TextInput>
        <TextInput
          style={[boxStyle.inputText, { marginTop: 33 }]}
          placeholder="이메일 입력"
        ></TextInput>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 11,
          marginTop: 31,
          fontStyle: "normal",
          letterSpacing: 0.22,
          marginBottom: 38,
        }}
      >
        입력하신 이메일로 비밀번호 재설정 링크가 전송됩니다.
      </Text>

      <ResetPwButton text={"재설정 링크 발송"} />
    </View>
  );
};

export default FindPw;

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
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 66,
    fontStyle: "normal",
  },
});
