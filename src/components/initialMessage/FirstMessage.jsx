import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import logo from "../../../assets/firstDogIllustration.png";
import slider from "../../../assets/slider.png";
import React from "react";

function FirstMessage({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Image source={slider} style={{ alignSelf: "center" }} />
      </View>
      <View>
        <Text style={styles.Title}>Bienvenido a Animal App</Text>
        <View style={{ width: "90%", fontSize: 15 }}>
          <Text style={{ fontSize: 15 }}>
            Donde encontraras la infromacion que es necesaria para el cuidado de
            tu mascota
          </Text>
        </View>
      </View>
      <View style={styles.NextButton}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("secondMessage");
          }}
        >
          <Text style={styles.NextButtonText}>Siguiente</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  NextButton: {
    textAlign: "center",
    height: 50,
    backgroundColor: "#90e1b4",
    padding: 10,
    width: "60%",
    borderRadius: 30,
  },
  NextButtonText: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  Title: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 25,
  },
});

export { FirstMessage };
