import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

import coffee from "../assets/icons/coffee.png";
import back from "../assets/icons/back.png";
import LeftSidebar from "../components/LeftSideBar";

import { getEvent } from "../api/cafe";

const EventPage = ({ navigation }) => {
  const shopId = 1;
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getEventData();
  }, []);

  const getEventData = async () => {
    try {
      const getData = await getEvent(shopId);
      const formattedData = getData.data.map((data) => ({
        ...data,
        createdAt: data.createdAt.split("T")[0],
      }));
      setEventData(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  const stores = [{ id: 1, name: "카페코지" }];

  return (
    <View style={styles.allContainer}>
      <LeftSidebar navigation={navigation} stores={stores} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.pop()}>
            <Image source={back} style={styles.back} />
          </Pressable>
          <Text style={styles.title}>카페코지</Text>
        </View>
        <View style={styles.EventSection}>
          {eventData && eventData.length > 0 ? (
            eventData.map((data) => (
              <View style={styles.EventComponent} key={data.eventId}>
                <Text style={styles.date}>{data.createdAt}</Text>
                <Text style={styles.content}>{data.content}</Text>
                <Image source={coffee} style={styles.coffee} />
              </View>
            ))
          ) : (
            <View />
          )}
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
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  back: {
    width: 25,
    height: 25,
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
    marginBottom: 20,
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
    fontSize: 18,
    fontStyle: "normal",
    // fontWeight: 700,
    flexGrow: 1,
  },
  date: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 10,
    fontStyle: "normal",
    // fontWeight: 600,
    letterSpacing: 0.2,
    marginTop: 14,
    marginLeft: 10,
  },
  content: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 12,
    fontStyle: "normal",
    // fontWeight: 600,
    letterSpacing: 0.24,
    flexGrow: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default EventPage;
