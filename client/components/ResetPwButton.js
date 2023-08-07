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
    fontWeight: "600",
    letterSpacing: 0.31,
  },
  resetPwButton: {
    backgroundColor: "#EC0A0A",
    width: 131,
    height: 31,
    justifyContent: "center",
    borderRadius: 38.75,
  },
});
