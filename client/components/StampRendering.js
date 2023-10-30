import React, { useEffect } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
} from "react-native";
import blkStamp from "../assets/icons/blkStamp.png";
import fullStamp from "../assets/icons/fullStamp.png";

const stampRendering = ({ stamps, navigation }) => {
  if (stamps === undefined) {
    stamps = [];
  }

  console.log("stamps: ", stamps);

  const goStampDetail = (stampId) => {
    navigation.navigate("StampDetail", { stampId: stampId });
  };

  // 남은 스탬프의 개수 계산
  const remainingStamps = 12 - stamps?.length ?? 0;

  return (
    <View style={style.row}>
      {/* stamp의 개수만큼 렌더링 */}
      {stamps?.map((stamp) => (
        <TouchableWithoutFeedback
          key={stamp.stampId}
          onPress={() => goStampDetail(stamp.stampId)}
        >
          <View style={style.stampContainer}>
            <Image source={fullStamp} style={style.stampImage} />
          </View>
        </TouchableWithoutFeedback>
      ))}
      {/* 남은 스탬프 렌더링 */}
      {Array(remainingStamps)
        .fill()
        .map((_, index) => (
          <View style={style.stampContainer} key={`remaining-${index}`}>
            <Image source={blkStamp} style={style.stampImage} />
          </View>
        ))}
    </View>
  );
};

export default stampRendering;

const style = StyleSheet.create({
  stampContainer: {
    marginLeft: 12,
    marginBottom: 30,
  },
  stampImage: {
    width: 76,
    height: 73,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",

    width: 293,
    height: "55%",
    marginLeft: 11,
    paddingLeft: 10,

    // backgroundColor: "#FFFFFF",
  },
});
