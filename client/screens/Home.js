import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import notice from "../assets/icons/notice.png";
import shop from "../assets/icons/shop.png";
import blkStamp from "../assets/icons/blkStamp.png";
import cocoCoffee from "../assets/icons/cocoCoffee.png";
import cocoMango from "../assets/icons/cocoMango.png";
import twoOne from "../assets/icons/twoOne.png";
import fullStamp from "../assets/icons/fullStamp.png";
import LeftSidebar from "../components/LeftSideBar";
import { getHome } from "../api/homeInfo";
import { getEvent } from "../api/cafe";

const Home = ({ navigation }) => {
  const [stores, setStores] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [menus, setMenus] = useState([]);
  const [images, setImages] = useState([]);
  const [stamps, setStamps] = useState("");
  const [event, setEvent] = useState("");
  const [shopId, setShopId] = useState("1");

  useEffect(() => {
    getHomeData();
    getResentEvent(shopId);
  }, []);

  const getHomeData = async () => {
    try {
      const home = await getHome();
      setStores(home);
      setStoreName(home[0].name);
      setMenus(home[0].menu);
      setStamps(home[0].stamp);
      setImages(home[0].imageUrl);
      // setShopId(home[0].shopId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getResentEvent = async (shopId) => {
    try {
      const getData = await getEvent(shopId);
      const latest = getData.data.length - 1;
      const lastEvent = getData.data[latest].content;
      setEvent(lastEvent);
      return lastEvent;
    } catch (err) {
      throw err;
    }
  };

  const goStore = async (index) => {
    setShopId(stores[index].shopId);
    setStoreName(stores[index].name);
    setMenus(stores[index].menu);
    setStamps(stores[index].stamp);
    setImages(stores[index].imageUrl);
    setEvent(event);
  };

  const goStampDetail = () => {
    navigation.navigate("StampDetail");
  };

  const [isAddMode, setIsAddMode] = useState(false);

  const editMode = () => {
    setIsAddMode(!isAddMode);
  };

  const stampRendering = () => {
    const isStamp = Array(12);

    for (var i = 0; i < 12; i++) {
      if (i < stamps) {
        isStamp[i] = fullStamp;
      } else {
        isStamp[i] = blkStamp;
      }
    }

    return (
      <View>
        {/* stamp 현황 */}
        <View style={style.row}>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[0]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[1]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[2]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
        </View>
        <View style={style.row}>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[3]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[4]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[5]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
        </View>
        <View style={style.row}>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[6]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[7]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[8]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
        </View>
        <View style={style.row}>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[9]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[10]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goStampDetail}>
            <Image source={isStamp[11]} style={style.blkStamp} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };

  return (
    <View style={style.Home}>
      <StatusBar backgroundColor="#F2F2F2" />
      <LeftSidebar
        isAddMode={isAddMode}
        stores={stores}
        editMode={editMode}
        navigation={navigation}
        goStore={goStore}
      ></LeftSidebar>

      {/* 오른쪽 영역*/}
      <View style={style.storeArea}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("EventPage")}
        >
          <View style={style.noticeContainer}>
            <Image source={notice} style={style.notice} />
            <Text>{event}</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={style.storeName}>
          <Image source={shop} style={style.shop} />
          <Text style={[style.font, { marginLeft: 3 }]}>{storeName}</Text>
        </View>

        <View style={style.bestMenu}>
          <View style={style.first}>
            <Image source={cocoCoffee} style={style.menuImage} />
            <Text style={style.menuFont}>{menus[0]}</Text>
          </View>
          <View style={style.second}>
            <Image source={twoOne} style={style.menuImage} />
            <Text style={style.menuFont}>{menus[1]}</Text>
          </View>
          <View style={style.third}>
            <Image source={cocoMango} style={style.menuImage} />
            <Text style={style.menuFont}>{menus[2]}</Text>
          </View>
        </View>

        <View style={style.stampContainer}>
          {/* stamp 현황 */}
          {stampRendering()}
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
