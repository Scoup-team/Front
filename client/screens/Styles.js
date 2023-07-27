import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  basicText: {
    fontSize: 14,
    fontStyle: "normal",
  },

  notifyText: {
    color: "#6E85B7",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.4,
  },

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 66,
    fontStyle: "normal",
  },
});

export const boxStyle = StyleSheet.create({
  inputText: {
    backgroundColor: "#E8E8E8",
    width: 310,
    height: 42,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.4,
    borderRadius: 8,
    paddingLeft: 9,
  },
});

export const buttonStyle = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 107,
    height: 31,
    borderRadius: 38.75,
    backgroundColor: "#EC0A0A",
    justifyContent: "center",
  },

  buttonText: {
    textAlign: "center",
    color: "#F9F9F9",
    fontSize: 15.5,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.31,
  },
  resetPwButton: {
    backgroundColor: "#EC0A0A",
    width: 131,
    height: 31,
    justifyContent: "center",
    borderRadius: 38.75,
  },
  prevArrow: {
    width: 32,
    height: 32,
    marginTop: 66,
    marginLeft: 30,
  },
});
