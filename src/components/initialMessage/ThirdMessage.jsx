import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import logo from "../../../assets/thirdDogIllustration.png";
import slider from "../../../assets/slider3.png";
import React from "react";

function ThirdMessage({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Image source={slider} style={{ alignSelf: "center" }} />
      </View>
      <View>
        <Text style={styles.Title}>Opiniones fiables</Text>
        <View style={{ width: "85%", fontSize: 15 }}>
          <Text style={{ fontSize: 15 }}>
            Una reseña sólo puede ser dejada por un usuario que haya utilizado
            el servicio.
          </Text>
        </View>
      </View>
      <View style={styles.NextButton}>
        <TouchableHighlight onPress={() => {
            navigation.navigate("Login");
          }}>
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

export { ThirdMessage };
