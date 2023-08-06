import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import notice from "../assets/icons/notice.png";
import setting from "../assets/icons/setting.png";
import shop from "../assets/icons/shop.png";
import blkStamp from "../assets/icons/blkStamp.png";
import stamp from "../assets/icons/stamp.png";

const Home = ({ navigation }) => {
  const [stores, setStores] = useState([
    { id: 1, name: "카페코지" }, // Image
  ]);

  const addStore = () => {
    const newId = stores.length + 1;
    const newStore = { id: newId, name: "newStore" };
    setStores([...stores, newStore]);
  };

  const deleteStore = () => {};

  const editMode = () => {};

  return (
    <View style={style.Home}>
      <StatusBar backgroundColor="#F2F2F2" />
      {/* 왼쪽 바 영역*/}
      <View style={style.allStore}>
        <TouchableWithoutFeedback onPress={editMode}>
          <View style={style.settingContainer}>
            <Image source={setting} style={style.setting} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* 오른쪽 영역*/}
      <View style={style.storeArea}>
        <View style={style.noticeContainer}>
          <Image source={notice} style={style.notice} />
        </View>

        <View style={style.storeName}>
          <Image source={shop} style={style.shop} />
          <Text style={[style.font, { marginLeft: 3 }]}>{stores.name}</Text>
        </View>

        <View style={style.bestMenu}></View>

        <View style={style.stampContainer}>
          {/* blkStamp 이미지를 한 줄에 3개씩 4줄로 표시 */}
          <View style={style.row}>
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
          </View>
          <View style={style.row}>
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
          </View>
          <View style={style.row}>
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
          </View>
          <View style={style.row}>
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
            <Image source={blkStamp} style={style.blkStamp} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  Home: {
    flex: 1,
    flexDirection: "row",
  },
  allStore: {
    width: 80,
    height: "100%",
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
    justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    marginTop: 9,
    paddingLeft: 12,
    marginTop: 9,
  },

  setting: {
    width: 30,
    height: 30,
    marginBottom: 104,
  },
  settingContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
    flexShrink: 0,
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
  },
  stampContainer: {
    width: 238,
    height: 357,
    marginLeft: "auto",
    marginRight: "auto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blkStamp: {
    width: 67,
    height: 65,
    marginRight: 14,
    marginBottom: 33,
  },
});
