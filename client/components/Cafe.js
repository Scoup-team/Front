import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import LeftSidebar from "../components/LeftSideBar";
import RightStore from "./RightStore";
import { getHome } from "../api/homeInfo";
import { useIsFocused } from "@react-navigation/native";

import { homeData } from "./Data/homeData";

const Cafe = (navigation) => {
  const [stores, setStores] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    getHomeData();
  }, [isFocused]);

  const getHomeData = async () => {
    try {
      const home = await getHome();
      if (home) {
        setStores(home);
      } else {
        console.log("가게 없음");
        navigation.navigate("SearchPage");
      }
    } catch (error) {
      console.log("홈화면 조회 에러: ", error);
      throw error;
    }
  };

  const [isAddMode, setIsAddMode] = useState(false);

  const editMode = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <View style={style.Home}>
      <StatusBar backgroundColor="#F2F2F2" />
      <LeftSidebar
        data={homeData}
        isAddMode={isAddMode}
        editMode={editMode}
      ></LeftSidebar>
    </View>
  );
};

export default Cafe;

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
