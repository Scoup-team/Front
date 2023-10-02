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

const DisabledCoupon = ({ couponData }) => {
  return (
    <View>
      <View style={styles.couponSection}>
        {couponData && couponData.length > 0 ? (
          couponData.map((data) => (
            <ImageBackground
              style={styles.couponComponent}
              source={require("../../assets/icons/disabledCouponFrame.png")}
              resizeMode="stretch"
              key={data.couponId}
            >
              <View style={styles.top}>
                <Text style={styles.name}>{data.shopName}</Text>
                <Text style={styles.date}>{data.createdAt} 까지</Text>
              </View>

              <Text style={styles.content}>{data.shopName}</Text>
            </ImageBackground>
          ))
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  couponSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  top: { flexDirection: "row", marginTop: 25 },
  couponComponent: {
    width: 375,
    height: 145,
    marginLeft: 7,
    marginTop: 20,
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
    color: "#5A5858",
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

export default DisabledCoupon;
