import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from "react-native";
import { ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import removeStore from "../assets/icons/removeStore.png";
import plusStore from "../assets/icons/plusStore.png";
import cozy from "../assets/icons/cozy.png";
import setting from "../assets/icons/setting.png";
import RightStore from "./RightStore";
import { rmStoreData } from "../api/homeInfo";

const LeftSidebar = ({ data, isAddMode, editMode, navigation }) => {
  const [shopId, setShopId] = useState(-1);
  const [shopData, setShopData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // 화면이 포커스를 얻었을 때 동작할 코드
      console.log("Screen is focused");
      // 추가적으로 필요한 로직을 여기에 추가하세요.
    }
  }, [isFocused]);

  useEffect(() => {
    if (data && data.length !== 0) {
      if (shopId === -1) {
        setShopId(data[0].shopId);
      } else {
        const filterdata = data.filter((x) => x.shopId === shopId);
        setShopData(filterdata);
        console.log("shopData: ", filterdata);
        if (shopData[0]?.stamp?.length || 0 == 12) {
          Alert.alert("쿠폰 발행 성공했습니다. 내 쿠폰함을 확인해주세요.");
        }
      }
    } else {
      console.log("Empty store");
    }
  }, [shopId, data]);

  const goStore = (id) => {
    setShopId(id);
  };

  const deleteStore = async (id) => {
    try {
      if (isAddMode) {
        const response = await rmStoreData(id);
        if (response.status === 200) {
          console.log("가게 삭제 성공");
          // 상태를 변경하여 화면을 다시 렌더링하도록 설정
          setRefreshKey((prevKey) => prevKey + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.Home}>
      <View style={styles.allStore}>
        <ScrollView key={refreshKey}>
          {data &&
            data.map((store) => (
              <View key={store?.shopId}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    goStore(store.shopId);
                  }}
                >
                  <Image
                    source={{ uri: store.cafeImageUrl }}
                    style={styles.clkStore}
                  />
                </TouchableWithoutFeedback>
                {isAddMode && (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      deleteStore(store.shopId);
                    }}
                  >
                    <Image source={removeStore} style={styles.rmStore} />
                  </TouchableWithoutFeedback>
                )}
              </View>
            ))}

          {isAddMode && (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("SearchPage")}
            >
              <View>
                <Image source={plusStore} style={styles.plsStore} />
              </View>
            </TouchableWithoutFeedback>
          )}
        </ScrollView>

        <TouchableWithoutFeedback onPress={editMode}>
          <View style={styles.settingContainer}>
            <Image source={setting} style={styles.setting} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <RightStore shopData={shopData} navigation={navigation} />
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
    backgroundColor: "#FFF",

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
