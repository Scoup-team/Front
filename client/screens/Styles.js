import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  basicText: {
    fontSize: 14,
    fontStyle: "normal",
  },

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 33,
    fontStyle: "normal",
  },
});

export const boxStyle = StyleSheet.create({
  inputText: {
    backgroundColor: "#E8E8E8",
    width: 312,
    height: 42,
    borderRadius: 8,
    fontSize: 20,
    marginLeft: 11,
  },
});

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#EC0A0A",
    margin: 10,
    borderRadius: 8,
    width: 107,
    height: 31,
    justifyContent: "center",
    marginLeft: 100,
    borderRadius: 38.75,
  },
  buttonText: {
    color: "#F9F9F9",
    justifyContent: "center",
    fontSize: 15.5,
    textAlign: "center",
    // 위치들과 관련해서 다시 확인하기
  },
  resetPwButton: {
    backgroundColor: "#EC0A0A",
    margin: 10,
    borderRadius: 8,
    width: 131,
    height: 31,
    justifyContent: "center",
    marginLeft: 100,
    borderRadius: 38.75,
  },
});
