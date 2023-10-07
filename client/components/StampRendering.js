import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
} from "react-native";
import blkStamp from "../assets/icons/blkStamp.png";
import fullStamp from "../assets/icons/fullStamp.png";

const stampRendering = ({ stamps }) => {
  // console.log("StampRendering_stamps: ", stamps);
  const isStamp = Array(12);
  for (var i = 0; i < 12; i++) {
    if (i < stamps.length) {
      isStamp[i] = fullStamp;
    } else {
      isStamp[i] = blkStamp;
    }
  }
  const goStampDetail = () => {
    navigation.navigate("StampDetail");
  };

  return (
    <View>
      {/* {isStamp.map((stamp) => {
        <TouchableWithoutFeedback key={stamp.stampId} onPress={goStampDetail}>
          <Image source={isStamp[stamp.stampId]} style={style.blkStamp} />
        </TouchableWithoutFeedback>;
      })} */}
      {/* stamp 현황 */}
      <View style={style.row}>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[0]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[1]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[2]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
      </View>
      <View style={style.row}>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[3]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[4]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[5]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
      </View>
      <View style={style.row}>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[6]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[7]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[8]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
      </View>
      <View style={style.row}>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[9]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[10]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goStampDetail}>
          <Image source={isStamp[11]} style={style.blkStamp} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default stampRendering;

const style = StyleSheet.create({
  blkStamp: {
    width: 71,
    height: 68,
    marginRight: 14,
    marginBottom: 33,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
