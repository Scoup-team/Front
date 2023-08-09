import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import SearchPage from "./SearchPage";
import EventPage from "./EventPage";
import notice from "../assets/icons/notice.png";
import setting from "../assets/icons/setting.png";
import shop from "../assets/icons/shop.png";
import blkStamp from "../assets/icons/blkStamp.png";

import stamp from "../assets/icons/stamp.png";
import plusStore from "../assets/icons/plusStore.png";
import removeStore from "../assets/icons/removeStore.png";
import cozy from "../assets/icons/cozy.png";

import cocoCoffee from "../assets/icons/cocoCoffee.png";
import cocoMango from "../assets/icons/cocoMango.png";
import twoOne from "../assets/icons/twoOne.png";

const Home = ({ navigation }) => {
  const [stores, setStores] = useState([
    { id: 1, name: "카페코지" }, // Image
  ]);

  const addStore = () => {};

  const deleteStore = () => {
    alert("이후에 수정");
  };

  const [isAddMode, setIsAddMode] = useState(false);

  const editMode = () => {
    setIsAddMode(!isAddMode);
  };
  const navigateSearchPage = () => {
    navigation.navigate("SearchPage");
  };
  const navigateEventPage = () => {
    navigation.navigate("EventPage");
  };

  return (
    <View style={style.Home}>
      <StatusBar backgroundColor="#F2F2F2" />
      {/* 왼쪽 바 영역*/}
      <View style={style.allStore}>
        {/* store - 상단 */}
        {stores.map((stores) => (
          <TouchableWithoutFeedback
            key={stores.id}
            onPress={() => deleteStore(stores.id)}
          >
            <View>
              <Image source={cozy} style={style.clkStore} />
              {isAddMode && (
                <Image source={removeStore} style={style.rmStore} />
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}

        {isAddMode && (
          <TouchableWithoutFeedback onPress={navigateSearchPage}>
            <View>
              <Image source={plusStore} style={style.plsStore} />
            </View>
          </TouchableWithoutFeedback>
        )}

        {/* setting - 하단 */}
        <TouchableWithoutFeedback onPress={editMode}>
          <View style={style.settingContainer}>
            <Image source={setting} style={style.setting} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* 오른쪽 영역*/}
      <View style={style.storeArea}>
        <TouchableWithoutFeedback onPress={navigateEventPage}>
          <View style={style.noticeContainer}>
            <Image source={notice} style={style.notice} />
            <Text> 가게 공지란입니다.</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={style.storeName}>
          <Image source={shop} style={style.shop} />
          <Text style={[style.font, { marginLeft: 3 }]}>카페코지</Text>
          {/* {stores.name} */}
        </View>

        <View style={style.bestMenu}>
          <View style={style.first}>
            <Image source={cocoCoffee} style={style.menuImage} />
            <Text style={style.menuFont}>코코넛커피스무디</Text>
          </View>
          <View style={style.second}>
            <Image source={twoOne} style={style.menuImage} />
            <Text style={style.menuFont}>두시 일분</Text>
          </View>
          <View style={style.third}>
            <Image source={cocoMango} style={style.menuImage} />
            <Text style={style.menuFont}>코코넛망고스무디</Text>
          </View>
        </View>

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
    // height: "100%",
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
    // justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 9,
    paddingLeft: 12,
    marginTop: 9,
    flexDirection: "row",
  },

  setting: {
    width: 30,
    height: 30,
    marginBottom: 25.63,
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
    // marginLeft: 10,
  },
  second: {
    width: 97,
    height: 133,
    // marginLeft: 19,
    // marginRight: 21.85,
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
