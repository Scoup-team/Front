import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import bluearrow from "../assets/icons/bluearrow.png";
import coffee from "../assets/icons/coffee.png";
import coffeebeen from "../assets/icons/coffeebeen.png";
import back from "../assets/icons/back.png";
import LeftSidebar from "../components/LeftSideBar";

const EventPage = ({ navigation }) => {
  const stores = [{ id: 1, name: "카페코지" }];
  return (
    <View style={styles.allContainer}>
      <LeftSidebar navigation={navigation} stores={stores} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={back} style={styles.back} />
          <Text style={styles.title}>카페코지</Text>
        </View>
        <View style={styles.EventSection}>
          <View style={styles.EventComponent}>
            <Text style={styles.date}>2023-06-13</Text>
            <Text style={styles.content}>
              오늘 개인사정으로로 휴무입니다. 다음주부터 정상적으로 운영합니다.
            </Text>
            <Image source={coffee} style={styles.coffee} />
          </View>
        </View>
        <View style={styles.EventSection}>
          <View style={styles.EventComponent2}>
            <Text style={styles.date}>2023-06-13</Text>
            <Text style={styles.content}>
              오늘 개인사정으로로 휴무입니다. 다음주부터 정상적으로 운영합니다.
            </Text>
            <Image source={coffeebeen} style={styles.coffeebeen} />
          </View>
        </View>
        <View style={styles.EventSection}>
          <View style={styles.EventComponent}>
            <Text style={styles.date}>2023-06-13</Text>
            <Text style={styles.content}>
              오늘 개인사정으로로 휴무입니다. 다음주부터 정상적으로 운영합니다.
            </Text>
            <Image source={coffee} style={styles.coffee} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    flexDirection: "row",
    flex: 1,
  },
  container: {
    flexDirection: "column",
  },

  header: {
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  back: {
    width: 13,
    height: 13,
    flexShrink: 0,
    marginLeft: 20,
  },

  coffee: {
    width: 35,
    height: 35,
    marginLeft: "auto",
    marginRight: 6,
    marginBottom: 11,
  },

  coffeebeen: {
    width: 35,
    height: 35,
    marginLeft: "auto",
    marginRight: 6,
    marginBottom: 11,
  },

  EventSection: {
    flexDirection: "column",
    marginLeft: 13,
    marginBottom: 23,
  },

  EventComponent: {
    flexDirection: "column",
    width: 292,
    height: 121,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#6E85B7",
  },
  EventComponent2: {
    flexDirection: "column",
    width: 292,
    height: 121,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#B2C8DF",
  },

  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 700,
    flexGrow: 1,
  },
  date: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: 0.2,
    marginTop: 14,
    marginLeft: 10,
  },
  content: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: 0.24,
    flexGrow: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default EventPage;
