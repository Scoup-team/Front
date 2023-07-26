import React, { useState } from "react";
import { Text, TextInput, StyleSheet, Button, View, Image } from "react-native";
import search from "../assets/icons/search.png";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFFFFF", flex: 1, marginTop: 80 },

  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 9,
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
});

export default SearchPage;
