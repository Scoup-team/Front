import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const ClickButton = (props) => {
  return (
    <View style={buttonStyle.container}>
      <TouchableOpacity style={buttonStyle.button} onPress={props.onPress}>
        <Text style={buttonStyle.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClickButton;

export const buttonStyle = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 53,
  },
  button: {
    width: 306,
    height: 40,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: "#1D2D4F",
  },
  buttonText: {
    textAlign: "center",
    color: "#F9F9F9",
    fontSize: 15.5,
    fontStyle: "normal",
    // fontWeight: 600,
    letterSpacing: 0.31,
    // justifyContent: "center",
    paddingTop: 8,
  },
});
