import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyPage from "./screens/Mypage"; 
import Searchpage from "./screens/Searchpage"; 
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Mypage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="Searchpage" component={Searchpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
