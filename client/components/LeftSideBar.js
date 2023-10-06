import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import removeStore from "../assets/icons/removeStore.png";
import plusStore from "../assets/icons/plusStore.png";
import cozy from "../assets/icons/cozy.png";
import setting from "../assets/icons/setting.png";
import { ScrollView } from "react-native";
import RightStore from "./RightStore";

const LeftSidebar = ({
  data,
  // isAddMode,
  // stores,
  // editMode,
  // navigation,
  // goStore,
  // getResentEvent,
}) => {
  const [shopId, setShopId] = useState(-1);
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    if (shopId == -1) {
      setShopData(data[0]);
      setShopId(data[0].shopId);
    }
    console.log("data", data);
  }, []);

  useEffect(() => {
    console.log("새로운 shopData: ", shopData);
  }, [shopData]);

  const goStore = (id) => {
    setShopId(id);
    const filterdata = data.filter((x) => x.shopId == id);
    setShopData(filterdata);
    console.log("shopData", shopData);
  };

  return (
    <View style={styles.Home}>
      <View style={styles.allStore}>
        <ScrollView>
          {data.map((store) => (
            <TouchableWithoutFeedback key={store.shopId}>
              <View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    goStore(store.shopId);
                  }}
                >
                  <Image source={cozy} style={styles.clkStore} />
                </TouchableWithoutFeedback>
                {/* {isAddMode && (
                <Image source={removeStore} style={styles.rmStore} />
              )} */}
              </View>
            </TouchableWithoutFeedback>
          ))}
          {/* 
        {isAddMode && (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SearchPage")}
          >
            <View>
              <Image source={plusStore} style={styles.plsStore} />
            </View>
          </TouchableWithoutFeedback>
        )} */}
        </ScrollView>
        {/* 
      <TouchableWithoutFeedback onPress={editMode}>
        <View style={styles.settingContainer}>
          <Image source={setting} style={styles.setting} />
        </View>
      </TouchableWithoutFeedback> */}
      </View>
      <RightStore shopData={shopData}></RightStore>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    flexDirection: "row",
  },
  allStore: {
    width: 80,
    height: "100%",
    backgroundColor: "#C4D7E0",
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
  plsStore: {
    width: 54,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
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
});

export default LeftSidebar;
