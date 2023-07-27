import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyPage from "./screens/MyPage";
import SearchPage from "./screens/SearchPage";
import SignIn from "./screens/SignIn";
import FindPw from "./screens/FindPw";
import ModifyInfo from "./screens/ModifyInfo";
import SignUp from "./screens/SignUp";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModifyInfo"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="FindPw" component={FindPw} />
        <Stack.Screen name="ModifyInfo" component={ModifyInfo} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
