import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  BackHandler
} from "react-native";

import back from "../assets/icons/back.png";
import LeftSidebar from "../components/LeftSideBar";

import shop from "../assets/icons/shop.png";
import order from "../assets/icons/order.png";
import card from "../assets/icons/card.png";
import receipt from "../assets/icons/receipt.png";
import shopEx from "../assets/icons/shopEx.png";
import { detailPage } from "../api/receipt";
import Cafe from "../components/Cafe";
import { useNavigation } from "@react-navigation/native";

const StampDetail = ({ stampId, onStampPress }) => {

  useEffect(() => {
    const handleBackPress = () => {
      onStampPress(null);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    try {
      const response = await detailPage(stampId);
      setDetailData(response.data.data);
    } catch (error) {
      console.log("getDetailData 에러", error);
    }
  };

  return (
    <View style={styles.allContainer}>
      <View style={styles.storeSection}>
        <View style={styles.header}>
          <Image source={back} style={styles.back} />
          <Text style={styles.title}>상세내역 조회</Text>
        </View>
        <ScrollView>
          <Image source={shopEx} style={styles.shopEx} />
          <View style={styles.sectionName}>
            <Image source={shop} style={styles.shopIcon} />
            <Text style={styles.storeName}>{detailData?.cafeName}</Text>
          </View>

          <View style={styles.orderSection}>
            <View style={styles.sectionName}>
              <Image source={order} style={styles.orderIcon} />
              <Text style={styles.orderInfo}>주문내역</Text>
            </View>
            {/* 주문 내역 */}
            {detailData.menu && detailData.menu[0] && (
              <View style={styles.orderMenuSection}>
                <View style={styles.orderMenu}>
                  <Text style={styles.orderText}>
                    {detailData.menu[0].name}
                  </Text>
                  <Text style={styles.orderText}>
                    {detailData.menu[0].price}
                  </Text>
                </View>
                {detailData.menu[1] && (
                  <View style={styles.orderMenu}>
                    <Text style={styles.orderText}>
                      {detailData.menu[1].name}
                    </Text>
                    <Text style={styles.orderText}>
                      {detailData.menu[1].price}
                    </Text>
                  </View>
                )}
              </View>
            )}
            {/* 결제 카드 정보 */}
            <Text style={[styles.orderText, { marginLeft: 13.89 }]}>
              신용카드
            </Text>
            <View style={styles.cardSection}>
              <View style={styles.card}>
                <Text style={styles.orderText}>카드 종류</Text>
                <Text style={styles.orderText}>{detailData?.cardName}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.orderText}>카드 번호</Text>
                <Text style={styles.orderText}>{detailData?.cardNum}</Text>
              </View>
            </View>
          </View>

          <View style={styles.receipt}>
            <View style={styles.sectionName}>
              <Image source={card} style={styles.cardIcon} />
              <Text style={styles.orderInfo}>영수증</Text>
            </View>
            <Image
              source={{ uri: detailData?.cafeImageUrl }}
              style={styles.receiptImg}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white"
  },
  storeSection: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  storeName: {
    color: "#000",
    // fontFamily: "Inter",
    fontSize: 13,
    fontStyle: "normal",
    // fontWeight: 600,
    lineHeight: 16,
    letterSpacing: 0.26,
    marginLeft: 9,
  },
  orderSection: {
    width: 296,
    height: 220,
    borderRadius: 3,
    backgroundColor: "#FFF",
    marginLeft: 8,
  },
  receipt: {
    marginTop: 5,
    marginLeft: 8,
    backgroundColor: "#FFF",
    width: 294,
    // height: 297,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },
  back: {
    width: 13,
    height: 13,
    flexShrink: 0,
    marginLeft: 20,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    // fontWeight: 700,
    flexGrow: 1,
  },
  shopIcon: {
    width: 13,
    height: 14,
    marginLeft: 13.89,
  },
  orderIcon: {
    width: 15,
    height: 16,
    marginLeft: 8,
    marginRight: 5,
  },
  cardIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    marginRight: 5,
  },
  shopEx: {
    width: 310,
    height: 125,
  },
  sectionName: {
    flexDirection: "row",
    marginTop: 11,
    marginBottom: 9,
  },
  orderInfo: {
    color: "#000",
    fontSize: 11,
    fontStyle: "normal",
    // fontWeight: 600,
    lineHeight: 17,
    letterSpacing: 0.22,
  },
  receiptImg: {
    width: 258,
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "stretch",
  },
  orderText: {
    color: "#000",
    fontSize: 10,
    fontStyle: "normal",
    // fontWeight: 400,
    lineHeight: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderMenuSection: {
    width: 290,
    height: 71,
    borderRadius: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F3F3F3",
    backgroundColor: "#FFF",
    marginBottom: 18,

    padding: 13.89,
  },
  cardSection: {
    width: 290,
    height: 71,
    borderRadius: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F3F3F3",
    backgroundColor: "#FFF",
    marginTop: 2,
    padding: 13.89,
  },
});

export default StampDetail;