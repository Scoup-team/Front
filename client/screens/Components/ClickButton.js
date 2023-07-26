import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonStyle } from "../Styles";

const ClickButton = (props) => {
    return(
        <TouchableOpacity style={buttonStyle.button}>
            <Text style={ buttonStyle.buttonText }>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default ClickButton;