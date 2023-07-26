import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonStyle } from "../Styles";

const ResetPwButton = (props) => {
    return(
        <TouchableOpacity style={buttonStyle.resetPwButton}>
            <Text style={ buttonStyle.buttonText }>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default ResetPwButton;