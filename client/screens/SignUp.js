import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { boxStyle, textStyles } from "./Styles";
import ClickButton from "./Components/ClickButton";

const SignUp = ({ navigation }) => {

    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [nickname, setNickname] = useState('');

    const Register = () => {

    };

    return(

        <View>
            <Text style={textStyles.mainText}>회원가입하기</Text>

            <View style={{
                marginTop: 37,
                marginLeft: 40,
            }}>
                <TextInput 
                    style={[boxStyle.inputText]} 
                    placeholder="이름 입력"
                    value={name}
                    onChangeText={setName}
                ></TextInput>

                <TextInput 
                    style={[
                        boxStyle.inputText,
                        {
                            marginTop: 46
                        }
                    ]} 
                    placeholder="아이디(이메일 주소)"
                    value={userId}
                    onChangeText={setUserId}
                ></TextInput>

                <Text style={[textStyles.basicText, {marginTop: 46, marginLeft: 10}]}>영문, 숫자 포함 8자 이상</Text>

                <TextInput 
                    style={[boxStyle.inputText, {marginTop: 10}]} 
                    placeholder="비밀번호 입력"
                    value={userPw}
                    onChangeText={setUserPw}
                    secureTextEntry
                ></TextInput>

                <TextInput 
                    style={[boxStyle.inputText, {marginTop: 33}]} 
                    placeholder="비밀번호 재입력"
                    // value={checkPw}
                    secureTextEntry
                ></TextInput>

                <TextInput 
                    style={[boxStyle.inputText, {marginTop: 48}]} 
                    placeholder="닉네임 입력"
                    value={nickname}
                    onChangeText={setNickname}
                ></TextInput>

            </View>

            <View>
                <ClickButton
                    text={"가입하기"}
                    onPress={Register}
                />
            </View>
            
        </View>
    );
};

export default SignUp;