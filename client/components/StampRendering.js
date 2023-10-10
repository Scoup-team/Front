import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
} from "react-native";
import blkStamp from "../assets/icons/blkStamp.png";
import fullStamp from "../assets/icons/fullStamp.png";

const stampRendering = ({ stamps, navigation }) => {
  const isStamp = Array(12).fill(blkStamp);

  if (stamps) {
    for (var i = 1; i <= stamps.length; i++) {
      isStamp[i] = fullStamp;
    }
  }

  const goStampDetail = () => {
    navigation.navigate("StampDetail");
  };

  // 남은 스탬프의 개수 계산
  const remainingStamps = 12 - stamps?.length;

  return (
    <View style={style.row}>
      {/* stamp의 개수만큼 렌더링 */}
      {stamps?.map((stamp) => (
        <TouchableWithoutFeedback key={stamp.stampId} onPress={goStampDetail}>
          <View style={style.stampContainer}>
            <Image source={isStamp[stamp.stampId]} style={style.stampImage} />
          </View>
        </TouchableWithoutFeedback>
      ))}
      {/* 남은 스탬프 렌더링 */}
      {Array(remainingStamps)
        .fill()
        .map((_, index) => (
          <TouchableWithoutFeedback
            key={`remaining-${index}`}
            onPress={goStampDetail}
          >
            <View style={style.stampContainer}>
              <Image source={blkStamp} style={style.stampImage} />
            </View>
          </TouchableWithoutFeedback>
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
