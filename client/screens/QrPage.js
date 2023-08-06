import React, { useState, useEffect } from "react";
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";

const QrPage = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [lastScannedUrl, setLastScannedUrl] = useState(null);

  useEffect(() => {
    _requestCameraPermission();
  }, []);

  const _requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync(); // 변경
    setHasCameraPermission(status === "granted");
  };

  const _handleBarCodeRead = (result) => {
    if (result.data !== lastScannedUrl) {
      LayoutAnimation.spring();
      setLastScannedUrl(result.data);
    }
  };

  const _maybeRenderUrl = () => {
    if (!lastScannedUrl) {
      return;
    }
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission === null ? (
        <Text>Requesting for camera permission</Text>
      ) : hasCameraPermission === false ? (
        <Text style={{ color: "#fff" }}>Camera permission is not granted</Text>
      ) : (
        <View
          style={{
            backgroundColor: "red",
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={_handleBarCodeRead} // 변경
            style={{
              height: "50%",
              width: "50%",
            }}
          />
        </View>
      )}

      {_maybeRenderUrl()}

      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    flexDirection: "row",
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: "#fff",
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 18,
  },
});

export default QrPage;
