import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { buttonStyle } from "../Styles";

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
