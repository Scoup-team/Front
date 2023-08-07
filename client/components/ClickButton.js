import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const ClickButton = (props) => {
  return (
    <View style={buttonStyle.container}>
      <TouchableOpacity style={buttonStyle.button}>
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
  },
  button: {
    width: 107,
    height: 31,
    borderRadius: 38.75,
    backgroundColor: "#EC0A0A",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#F9F9F9",
    fontSize: 15.5,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.31,
  },
});
