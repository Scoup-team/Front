import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

import close from "../../assets/icons/close.png";
import { useCoupon } from "../../api/coupon";

const Modal = ({ open, setOpen, couponId }) => {
  const [data, setData] = useState("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const click = () => {
    useCouponData();
    setOpen(!open);
  };

  const useCouponData = async () => {
    try {
      const postData = await useCoupon(couponId);
      setData(postData);
      console.log("data", data);
      console.log("쿠폰 사용 성공");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={{
            margin: 3,
            alignSelf: "flex-end",
            marginRight: 20,
            marginBottom: 30,
          }}
          onPress={handleCloseModal}
        >
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
        <Text style={styles.maintext}>쿠폰을 사용하시겠습니까?</Text>
        <Text style={styles.alerttext}>
          가게 관계자만 확인 버튼을 눌러 쿠폰 사용을 승인해주세요. 임의로 확인
          버튼을 눌러 쿠폰을 사용할 경우 사용 처리 되며 다시 되돌릴 수 없습니다.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.btnText} onPress={click}>
            사용하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    // zIndex: 3,
    position: "absolute",
    height: 330,
    width: 256,
    top: 60,
    bottom: 0,
    left: 70,
    right: 70,
    paddingTop: 50,
    backgroundColor: "white",
  },
  box: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttontext: {
    position: "relative",
    left: 170,
    bottom: 350,
    fontSize: 20,
  },
  maintext: {
    position: "relative",
    fontSize: 15,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
  alerttext: {
    position: "relative",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 30,
    marginRight: 23,
    marginLeft: 23,
    color: "#6E85B7",
    textAlign: "center",
    fontSize: 10,
    fontWeight: 500,
  },
  close: { height: 20, width: 20 },
  btn: {
    width: 84,
    height: 31,
    borderRadius: 38.75,
    backgroundColor: "#EC0A0A",
    marginTop: 50,
    color: "#6E85B7",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btnText: {
    position: "relative",
    color: "white",
    textAlign: "center",
    fontSize: 15.5,
    fontWeight: 600,
  },
});
