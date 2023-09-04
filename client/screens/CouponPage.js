import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  TouchableHighlight,
  Pressable,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import back from "../assets/icons/back.png";
import AvailableCoupon from "../components/coupon/AvailableCoupon";
import DisabledCoupon from "../components/coupon/DisabledCoupon";

import { getCoupon } from "../api/coupon";

const CouponPage = ({ navigation }) => {
  const [availableCouponClick, setAvailableCouponClick] = useState(true);
  const [couponData, setCouponData] = useState([]);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);

  const userId = 4;

  useEffect(() => {
    getCouponData();
  }, []);

  const getCouponData = async () => {
    try {
      const getData = await getCoupon(userId);
      const formattedData = getData.data.map((data) => ({
        ...data,
        createdAt: data.createdAt.split("T")[0],
      }));
      setCouponData(formattedData);

      // 쿠폰을 사용 가능한 쿠폰과 사용된 쿠폰으로 분리
      const available = formattedData.filter((coupon) => !coupon.used);
      const used = formattedData.filter((coupon) => coupon.used);

      setAvailableCoupons(available);
      setUsedCoupons(used);
    } catch (err) {
      console.log(err);
    }
  };

  const click = () => {
    setAvailableCouponClick(!availableCouponClick);
  };

  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.pop()}>
          <Image source={back} style={styles.back} />
        </Pressable>
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
      {availableCouponClick ? (
        <AvailableCoupon couponData={availableCoupons}></AvailableCoupon>
      ) : (
        <DisabledCoupon couponData={usedCoupons}></DisabledCoupon>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 18,
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
