import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../screens/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faUser, faPaw, faHouse} from "@fortawesome/free-solid-svg-icons";
import {MyPets}  from "../screens/MyPets"
import { Tips } from "../screens/Tips";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#90e1b4",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Tips}  options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesomeIcon icon={faHouse} size={size} color={color} />
            );
          },
          tabBarLabel: "Consejos",
          headerTitle:"Consejos"
        }}/>
      <Tab.Screen name="Pets" component={MyPets}  options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesomeIcon icon={faUser} size={size} color={color} />
            );
          },
          tabBarLabel: "Mascotas",
          headerTitle:"Mis Mascotas"
        }}/>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesomeIcon icon={faPaw} size={size} color={color} />
            );
          },
          headerTitle:"Perfil",
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
