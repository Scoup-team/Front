// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/Ionicons";
// import MyPage from "../../screens/MyPage";
// import CouponPage from "../../screens/CouponPage";
// import {
//   TouchableOpacity,
//   View,
//   Text,
//   Button,
//   TouchableHighlight,
//   Pressable,
//   StyleSheet,
//   ImageBackground,
//   Image,
// } from "react-native";

// // function CouponPage() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>CouponPage!</Text>
// //     </View>
// //   );
// // }

// // function MyPage() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>MyPage!</Text>
// //     </View>
// //   );
// // }

// const Tab = createBottomTabNavigator();

// function BottomTab({ navigation }) {
//   return (
//     <Tab.Navigator initialRouteName="MyPage">
//       component={MyPage}
//       {/* options=
//       {{
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="home-outline" color={color} size={size} />
//         ),
//       }} */}
//       />
//       <Tab.Screen
//         name="MapsStack"
//         component={MyPage}
//         // options={{
//         //   headerShown: false,
//         //   tabBarIcon: ({ color, size }) => (
//         //     <Icon name="map-outline" color={color} size={size} />
//         //   ),
//         // }}
//       />
//       <Tab.Screen
//         name="LoginStack"
//         component={MyPage}
//         // options={({ route }) => ({
//         //   headerShown: false,
//         //   tabBarIcon: ({ color, size }) => (
//         //     <Icon name="person-circle" color={color} size={size} />
//         //   ),
//         // })}
//       />
//     </Tab.Navigator>
//     // <NavigationContainer>
//     //   <Tab.Navigator>
//     //     <Tab.Screen name="CouponPage" component={CouponPage} />
//     //     <Tab.Screen name="MyPage" component={MyPage} />
//     //   </Tab.Navigator>

//     /* <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen
//           name="Home"
//           component={CouponPage}
//           options={{
//             title: "홈",
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Qr"
//           component={CouponPage}
//           options={{
//             title: "알림",
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="notifications" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="MyPage"
//           component={MyPage}
//           options={{
//             title: "검색",
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="search" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator> */
//     // </NavigationContainer>
//   );
// }

// export default BottomTab;
