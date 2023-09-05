// import React, { useState, useEffect } from "react";
// import {
//   Image,
//   Text,
//   View,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from "react-native";
// import { Camera } from "expo-camera";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

// import { postReceipt } from "../api/receipt";

// const CameraPage = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);

//   const getCameraPermission = async () => {
//     const { status } = await Camera.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       console.log("No access to camera");
//       return false;
//     }
//     return true;
//   };

//   useEffect(() => {
//     (async () => {
//       const hasPermission = await getCameraPermission();
//       setHasPermission(hasPermission);
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef) {
//       try {
//         const photo = await cameraRef.takePictureAsync();
//         console.log("photo", photo);

//         // 이미지 압축
//         try {
//           const resizedImage = await manipulateAsync(
//             photo.uri,
//             [{ resize: { width: 300, height: 400 } }],
//             { compress: 0.7, format: SaveFormat.JPEG }
//           );
//           console.log("Resized image:", resizedImage);

//           const formData = new FormData();
//           formData.append("file", {
//             uri: resizedImage.uri,
//             name: "photo.jpg",
//             type: "image/jpeg",
//           });

//           await postReceipt(formData);

//           console.log("Resized image.uri", resizedImage.uri);
//         } catch (error) {
//           console.error("Error resizing image: ", error);
//         }
//       } catch (error) {
//         console.log("Error taking picture: ", error);
//       }
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <Image source={{ uri: photo }} />
//       <Button title="이미지 선택" onPress={showPicker}></Button>
//       <Camera
//         style={{ flex: 1 }}
//         type={Camera.Constants.Type.back}
//         ref={(ref) => setCameraRef(ref)}
//       >
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: "transparent",
//             justifyContent: "flex-end",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity
//             style={{
//               width: 60,
//               height: 60,
//               borderRadius: 40,
//               backgroundColor: "white",
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: 20,
//             }}
//             onPress={takePicture}
//           >
//             <Text style={{ fontSize: 14 }}>촬영</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// };

// export default CameraPage;
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const imagePickerOption = {
  mediaType: "photo",
  maxWidth: 768,
  maxHeight: 768,
};

const CameraPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        setPhoto(photo);
      } catch (error) {
        console.log("Error taking picture: ", error);
      }
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      console.log("Gallery permission denied");
      return;
    }

    launchImageLibrary(imagePickerOption, (res) => {
      if (res.didCancel || !res.uri) {
        closeModal();
        return;
      }
      setPhoto(res);
      closeModal();
    });
  };

  const launchCameraAndPickImage = () => {
    launchCamera(imagePickerOption, (res) => {
      if (res.didCancel || !res.uri) {
        closeModal();
        return;
      }
      setPhoto(res);
      closeModal();
    });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {photo && <Image source={{ uri: photo.uri }} style={{ flex: 1 }} />}
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
          <TouchableOpacity onPress={openModal}>
            <Text style={{ fontSize: 18, color: "white" }}>
              갤러리에서 이미지 선택
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Pressable onPress={pickImageFromGallery}>
            <Text style={{ fontSize: 18 }}>갤러리에서 이미지 선택</Text>
          </Pressable>
          <Pressable onPress={closeModal}>
            <Text style={{ fontSize: 18, color: "red" }}>닫기</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0,0,0,0,6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteBox: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 26,
  },
});
