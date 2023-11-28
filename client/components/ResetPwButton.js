import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import { buttonStyle } from "../screens/Styles";

const ResetPwButton = (props) => {
  return (
    <View style={buttonStyle.container}>
      <TouchableOpacity style={buttonStyle.resetPwButton}>
        <Text style={buttonStyle.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPwButton;

export const buttonStyle = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  resetPwButton: {
    width: 306,
    height: 40,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: "#1D2D4F",
  },
});
