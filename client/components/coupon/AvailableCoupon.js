import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  TouchableHighlight,
  Pressable,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import Modal from "./Modal";

const AvailableCoupon = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const couponClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <View>
      <Pressable style={styles.couponSection} onPress={couponClick}>
        <ImageBackground
          style={styles.couponComponent}
          source={require("../../assets/icons/couponFrame.png")}
          resizeMode="stretch"
        >
          <View style={styles.top}>
            <Text style={styles.name}>[카페코지]</Text>
            <Text style={styles.date}>2023-06-30 까지</Text>
          </View>

          <Text style={styles.content}>아이스 아메리카노 1잔 무료</Text>
        </ImageBackground>
      </Pressable>
      {modalOpen ? <Modal open={modalOpen} setOpen={setModalOpen} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  couponSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  top: { flexDirection: "row", marginTop: 18 },
  couponComponent: {
    width: 340,
    height: 125,
    marginLeft: 7,
    marginTop: 30,
  },

  name: {
    color: "#5A5858",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 400,
    flexGrow: 1,
  },

  date: {
    color: "#C73232",
    textAlign: "center",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    flexGrow: 1,
    marginRight: 15,
    marginTop: 4,
  },

  content: {
    marginTop: 18,
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    flexGrow: 1,
  },
});

export default AvailableCoupon;
