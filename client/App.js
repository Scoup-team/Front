import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import {StyleSheet} from 'react-native';
import Mypage from "./screens/Mypage";
import Searchpage from "./screens/Searchpage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mypage">
        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="Searchpage" component={Searchpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
