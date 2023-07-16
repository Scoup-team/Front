import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import bluearrow from "../assets/icons/bluearrow.png";
import coffee from "../assets/icons/coffee.png";

const MyPage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>마이 페이지</Text>
      <View style={styles.usersection}>
        <Image source={coffee} style={styles.coffee} />
        <Text style={styles.nickname}>크림님</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.topMenu}>개인 정보 수정</Text>
        <Image source={bluearrow} style={styles.arrow} />
      </View>
      <View style={styles.section}>
        <Text style={styles.topMenu}>내 쿠폰함</Text>
        <Image source={bluearrow} style={styles.arrow} />
      </View>
      <Text style={styles.BottomMenu}>로그아웃하기</Text>
      <Text style={styles.BottomMenu}>탈퇴하기</Text>
      {/* <Button
        title="Searchpage 열기"
        onPress={() => navigation.navigate("Searchpage")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  usersection: {
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent: "space-between",
    marginLeft: 20.51,
    marginBottom: 34,
  },

  section: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    marginTop: 70,
    marginBottom: 50,
  },

  arrow: {
    width: 13,
    height: 19,
    marginRight: 40,
    marginTop: 5,
  },

  coffee: {
    width: 35,
    height: 35,
  },

  nickname: {
    color: "#5A5858",
    textAlign: "left",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: 700,
    marginLeft: 10,
  },

  topMenu: {
    color: "#6E85B7",
    textAlign: "left",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom: 34,
    marginLeft: 30.51,
  },

  BottomMenu: {
    color: "#5A5858",
    textAlign: "left",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom: 34,
    marginLeft: 30.51,
  },
});

export default MyPage;
