import { Text, TextInput, View, StyleSheet } from "react-native";
import { boxStyle, textStyles } from "./Styles";
import ClickButton from "./Components/ClickButton";

const ModifyInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={textStyles.mainText}>개인정보 수정</Text>
      <View style={styles.searchBoxContainer}>
        <Text>닉네임 변경</Text>
        <TextInput style={[boxStyle.inputText, { marginTop: 18 }]}></TextInput>
        <ClickButton text={"변경하기"} />
      </View>

      <View style={{ marginTop: 44, marginLeft: 35 }}>
        <Text style={{ marginLeft: 10 }}>비밀번호 변경</Text>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 18 }]}
          placeholder="기존 비밀번호"
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 18 }]}
          placeholder="기존 비밀번호"
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, { marginTop: 18 }]}
          placeholder="기존 비밀번호 확인"
        ></TextInput>

        <ClickButton text={"변경하기"} />
      </View>
    </View>
  );
};

export default ModifyInfo;

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFFFFF", flex: 1, marginTop: 80 },

  searchBoxContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 9,
    justifyContent: "center",
    alignItems: "center",
  },
});
