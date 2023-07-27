import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { buttonStyle } from "../Styles";

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
