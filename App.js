import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Login } from "./src/components/Login.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    height: "100%",
  },
});
