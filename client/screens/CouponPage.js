import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import back from "../assets/icons/back.png";

const CouponPage = ({ navigation }) => {
  const [availableCouponClick, setAvailableCouponClick] = useState(true);
  const click = () => {
    setAvailableCouponClick(!availableCouponClick);
  };
  return (
    <View>
      <View style={styles.header}>
        <Image source={back} style={styles.back} />
        <Text style={styles.title}>내 쿠폰함</Text>
      </View>
      <View style={styles.topMenu}>
        <TouchableOpacity
          style={{
            ...styles.availableCoupon,
            borderBottomColor: availableCouponClick ? "#6E85B7" : "#C4C4C4",
          }}
          onPress={click}
        >
          <Text
            style={{
              ...styles.availabletext,
              color: availableCouponClick ? "#6E85B7" : "#C4C4C4",
            }}
          >
            사용 가능한 쿠폰
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.availableCoupon,
            borderBottomColor: availableCouponClick ? "#C4C4C4" : "#6E85B7",
          }}
          onPress={click}
        >
          <Text
            style={{
              ...styles.availabletext,
              color: availableCouponClick ? "#C4C4C4" : "#6E85B7",
            }}
          >
            지난 쿠폰
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.couponSection}>
        <ImageBackground
          style={styles.couponComponent}
          source={require("../assets/icons/couponFrame.png")}
          resizeMode="stretch"
        >
          <View style={styles.top}>
            <Text style={styles.name}>[카페코지]</Text>
            <Text style={styles.date}>2023-06-30 까지</Text>
          </View>

          <Text style={styles.content}>아이스 아메리카노 1잔 무료</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  back: {
    width: 32,
    height: 32,
    flexShrink: 0,
    marginLeft: 31,
  },

  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    flexGrow: 1,
    marginRight: 31,
  },

  topMenu: {
    // height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  availableCoupon: {
    width: 180,
    height: 60,
    borderBottomWidth: 4,
  },
  disabledCoupon: {
    width: 150,
    height: 60,
    borderBottomWidth: 4,
    borderBottomColor: "#C4C4C4",
  },
  availabletext: {
    // color: "#6E85B7",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  disabledtext: {
    color: "#C4C4C4",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  couponSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  top: { flexDirection: "row", marginTop: 18 },
  couponComponent: {
    width: 340,
    height: 125,
    marginLeft: 7,
    marginTop: 30,
  },

  name: {
    color: "#5A5858",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 400,
    flexGrow: 1,
  },

  date: {
    color: "#C73232",
    textAlign: "center",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    flexGrow: 1,
    marginRight: 15,
    marginTop: 4,
  },

  content: {
    marginTop: 18,
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    flexGrow: 1,
  },
});

export default CouponPage;
