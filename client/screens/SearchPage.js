import React, { useState } from "react";
import { Text, TextInput, StyleSheet, Button, View, Image } from "react-native";
import search from "../assets/icons/search.png";
import addButton from "../assets/icons/addButton.png";
import cafeProfile from "../assets/icons/cafeProfile.png";

const SearchPage = ({ navigation }) => {
  const [myTextInput, setMyTextInput] = useState(""); // Using useState hook for state

  const onChangeInput = (text) => {
    setMyTextInput(text);
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
        <Image source={search} style={styles.search} />
      </View>
      <View style={styles.searchResultContainer}>
        <View style={styles.searchComponent}>
          <Image source={cafeProfile} style={styles.cafeProfile} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>카페코지 이대점</Text>
            <Text style={styles.address}>서울 서대문구 대현동 34-44</Text>
          </View>
          <Image source={addButton} style={styles.addButton} />
        </View>
        <View style={styles.searchComponent}>
          <Image source={cafeProfile} style={styles.cafeProfile} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>카페코지 이대점</Text>
            <Text style={styles.address}>서울 서대문구 대현동 34-44</Text>
          </View>
          <Image source={addButton} style={styles.addButton} />
        </View>
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
    litterSpacing: 0.18,
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
