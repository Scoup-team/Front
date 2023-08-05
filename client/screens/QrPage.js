import React, { useState } from "react";
import { Text, TextInput, StyleSheet, Button, View, Image } from "react-native";

const QrPage = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},

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

export default QrPage;
