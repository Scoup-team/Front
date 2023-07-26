import { Text, TextInput, View, StyleSheet } from "react-native";
import { boxStyle, textStyles } from "./Styles";
import ResetPwButton from "./Components/ResetPwButton";

const FindPw = () => {

    return(

        <View>
            <Text style={textStyles.mainText}>비밀번호 찾기</Text>
            
            <View style={{marginTop: 44, marginLeft: 35}}>
                <TextInput style={[boxStyle.inputText]} placeholder="이름 입력"></TextInput>
                <TextInput style={[boxStyle.inputText, {marginTop: 32}]} placeholder="이메일 입력"></TextInput>
            </View>

            <Text style={{
                textAlign: "center",
                fontSize: 11,
                marginTop: 31
            }}>입력하신 이메일로 비밀번호 재설정 링크가 전송됩니다.</Text>

            <ResetPwButton
                text={"재설정 링크 발송"}
            />
        </View>


    );
};

export default FindPw;