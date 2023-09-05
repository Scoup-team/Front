import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

import { postReceipt } from "../api/receipt";

const CameraPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const getCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("No access to camera");
      return false;
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await getCameraPermission();
      setHasPermission(hasPermission);
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync();
        console.log("photo", photo);

        // 이미지 압축
        try {
          const resizedImage = await manipulateAsync(
            photo.uri,
            [{ resize: { width: 300, height: 400 } }],
            { compress: 0.7, format: SaveFormat.JPEG }
          );
          console.log("Resized image:", resizedImage);

          const formData = new FormData();
          formData.append("file", {
            uri: resizedImage.uri,
            name: "photo.jpg",
            type: "image/jpeg",
          });

          await postReceipt(formData);

          console.log("Resized image.uri", resizedImage.uri);
        } catch (error) {
          console.error("Error resizing image: ", error);
        }
      } catch (error) {
        console.log("Error taking picture: ", error);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
            onPress={takePicture}
          >
            <Text style={{ fontSize: 14 }}>촬영</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraPage;
