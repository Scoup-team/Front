import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import search from "../assets/icons/search.png";
import addButton from "../assets/icons/addButton.png";
import cafeProfile from "../assets/icons/cafeProfile.png";
import { postSearchShop, postAddShop } from "../api/search";

const SearchPage = ({ navigation }) => {
  const [myTextInput, setMyTextInput] = useState("");

  const onChangeInput = (text) => {
    setMyTextInput(text);
  };

  const [searchData, setSearchData] = useState([]);

  // const userId = 5;

  const postSearchData = async () => {
    try {
      const keyword = myTextInput;
      // const postData = await postSearchShop(keyword, userId);
      const postData = await postSearchShop(keyword);

      setSearchData(postData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const postAddShopData = async (shopId) => {
    try {
      const data = await postAddShop(userId, shopId);
      console.log(data.message);
      Alert.alert("가게 추가에 성공했습니다.");
      navigation.pop();
    } catch (err) {
      console.log("가게 추가 오류: ", err);
    }
  };

  const handleSearchBtn = () => {
    postSearchData();
  };

  const handleAddShopBtn = (shopId) => {
    postAddShopData(shopId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          style={styles.textInput}
          value={myTextInput}
          placeholder="가게를 입력하세요."
          onChangeText={onChangeInput}
        />
        <TouchableOpacity onPress={handleSearchBtn}>
          <Image source={search} style={styles.search} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchResultContainer}>
        {searchData && searchData.length > 0 ? (
          searchData.map((data) => (
            <View style={styles.searchComponent} key={data.shopId}>
              <Image source={cafeProfile} style={styles.cafeProfile} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{data.shopName}</Text>
                <Text style={styles.address}>{data.shopAddress}</Text>
              </View>
              <TouchableOpacity onPress={() => handleAddShopBtn(data.shopId)}>
                <Image source={addButton} style={styles.addButton} />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFFFFF", flex: 1, marginTop: 80 },

  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 25,
  },

  textInput: {
    color: "#000",
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 10,
    width: 320,
    height: 36,
    borderWidth: 0.4,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#818181",
    padding: 10,
    marginLeft: 19,
    backgroundColor: "#FBFBFB",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 0,
  },

  search: {
    width: 19,
    height: 19,
    marginRight: 19,
    marginTop: 8,
    marginLeft: 14,
  },
  cafeProfile: {
    width: 52,
    height: 52,
    marginTop: 10,
  },
  addButton: {
    width: 24,
    height: 24,
  },
  title: {
    width: 232,
    height: 19,
    justifyContent: "center",
    color: "#5A5858",
    fontFamily: "Inter",
    fontSize: 9,
    fontStyle: "normal",
    fontWeight: 500,
  },
  address: {
    paddingTop: 5,
    width: 232,
    height: 19,
    justifyContent: "center",
    color: "#5A5858",
    fontSize: 9,
    fontWeight: 500,
    // litterSpacing: 0.18,
    fontStyle: "normal",
  },
  searchResultContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  searchComponent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 354,
    height: 95,
    backgroundColor: "#F8F9D7",
    borderRadius: 20,
    marginTop: 37,
  },
  textContainer: {
    // margin: 4,
    padding: 10,
  },
});

export default SearchPage;
