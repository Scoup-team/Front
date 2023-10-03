import { TouchableWithoutFeedback } from "react-native";
import blkStamp from "../assets/icons/blkStamp.png";
import fullStamp from "../assets/icons/fullStamp.png";

export const stampRendering = ({ stamp }) => {
  const isStamp = Array(12);

  for (var i = 0; i < 12; i++) {
    if (i < stamps) {
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
      {isStamp.map((stamp) => {
        <TouchableWithoutFeedback key={stamp.stampId} onPress={goStampDetail}>
          <Image source={isStamp[stampId]} style={style.blkStamp} />
        </TouchableWithoutFeedback>;
      })}

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
