import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from "./src/Navigation/NavigationStack";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack Stack={Stack}/>
    </NavigationContainer>
  );
}


