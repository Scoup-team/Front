import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import notice from "../assets/icons/notice.png";
import shop from "../assets/icons/shop.png";
import StampRendering from "../components/StampRendering";

const RightStore = ({ shopData }) => {
  console.log("RightStore_shopData: ", shopData);

  const shopInfo = shopData[0];
  console.log("shopInfo.stamp: ", shopInfo.stamp);

  return (
    <View style={style.Home}>
      <View style={style.storeArea}>
        <TouchableWithoutFeedback
        // onPress={() => navigation.navigate("EventPage")}
        >
          <View style={style.noticeContainer}>
            <Image source={notice} style={style.notice} />
            <Text>이벤트</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={style.storeName}>
          <Image source={shop} style={style.shop} />
          <Text style={[style.font, { marginLeft: 3 }]}>{shopInfo.name}</Text>
        </View>

        <View style={style.bestMenu}>
          <View style={style.first}>
            <Image
              source={{ uri: shopInfo.menuImageUrl[0] }}
              style={style.menuImage}
            />
            <Text style={style.menuFont}>{shopInfo.menu[0]}</Text>
          </View>
          <View style={style.second}>
            <Image
              source={{ uri: shopInfo.menuImageUrl[1] }}
              style={style.menuImage}
            />
            <Text style={style.menuFont}>{shopInfo.menu[1]}</Text>
          </View>
          <View style={style.third}>
            <Image
              source={{ uri: shopInfo.menuImageUrl[2] }}
              style={style.menuImage}
            />
            <Text style={style.menuFont}>{shopInfo.menu[2]}</Text>
          </View>
        </View>

        <View style={style.stampContainer}>
          <StampRendering stamps={shopInfo.stamp} />
        </View>
      </View>
    </View>
  );
};

export default RightStore;

const style = StyleSheet.create({
  Home: {
    flex: 1,
    flexDirection: "row",
  },
  allStore: {
    width: 80,
    backgroundColor: "#C4D7E0",
  },

  notice: {
    width: 20,
    height: 16,
  },
  noticeContainer: {
    width: "95%",
    height: 36,
    borderRadius: 6,
    borderWidth: 0.4,
    borderColor: "#818181",
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 9,
    paddingLeft: 12,
    marginTop: 9,
    flexDirection: "row",
  },
  storeArea: {
    flex: 1,
    flexDirection: "column",
  },
  shop: {
    width: 15,
    height: 15,
  },
  storeName: {
    marginTop: 29,
    marginLeft: 23,
    marginBottom: 12,
    flexDirection: "row",
  },
  font: {
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 14,
    letterSpacing: 0.28,
  },
  bestMenu: {
    width: 293,
    height: 133,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: "#FAFBFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 11,
    marginBottom: 50,
    flexDirection: "row",
  },
  first: {
    width: 97,
    height: 133,
  },
  second: {
    width: 97,
    height: 133,
  },
  third: {
    width: 97,
    height: 133,
  },
  menuFont: {
    color: "#000",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "600",
    width: 85,
    marginTop: 8,
    textAlign: "center",
    marginLeft: 9,
  },
  menuImage: {
    width: 77,
    height: 78,
    marginTop: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  stampContainer: {
    width: 240,
    height: 370,
    marginLeft: "auto",
    marginRight: "auto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blkStamp: {
    width: 71,
    height: 68,
    marginRight: 14,
    marginBottom: 33,
  },
  plsStore: {
    width: 54,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
  },
  clkStore: {
    width: 53,
    height: 53,
    borderRadius: 53,
    borderWidth: 1.5,
    borderColor: "#6E85B7",

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 13,
  },

  rmStore: {
    position: "absolute",
    top: 9,
    left: 50,
    width: 24,
    height: 24,
  },
});
