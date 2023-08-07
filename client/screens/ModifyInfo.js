import { Text, TextInput, View, StyleSheet, Image } from "react-native";
import { boxStyle, textStyles } from "./Styles";
import ClickButton from "../components/ClickButton";
import prevArrow from "../assets/icons/prevArrow.png";

const ModifyInfo = ({ navigation }) => {
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
          style={{ marginTop: 66, marginLeft: 42 }}
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
        ></TextInput>
        <ClickButton text={"변경하기"} />
      </View>

      <View>
        <Text style={[textStyles.notifyText, styles.notifyMargin]}>
          비밀번호 변경
        </Text>

        <TextInput
          style={[boxStyle.inputText, styles.boxMargin]}
          placeholder="기존 비밀번호"
          secureTextEntry
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, styles.boxMargin]}
          placeholder="새 비밀번호"
          secureTextEntry
        ></TextInput>

        <TextInput
          style={[boxStyle.inputText, styles.boxMargin, { marginBottom: 23 }]}
          placeholder=" 비밀번호 확인"
          secureTextEntry
        ></TextInput>

        <ClickButton text={"변경하기"} />
      </View>
    </View>
  );
};

export default ModifyInfo;

const styles = StyleSheet.create({
  notifyMargin: { marginTop: 36, marginLeft: 36 },
  boxMargin: { marginTop: 15, marginLeft: 40, marginTop: 18 },
});
