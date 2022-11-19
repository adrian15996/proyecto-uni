import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus, faSyringe } from "@fortawesome/free-solid-svg-icons";
const Reminders = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.botton}
        onPress={() => console.log("presed button")}
      >
        <View style={styles.addEvent}>
          <FontAwesomeIcon icon={faCirclePlus} size={50} color={"blue"} />
          <Text>Agregar evento</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.botton}
        onPress={() => console.log("presed button")}
      >
        <View style={styles.addEvent}>
          <FontAwesomeIcon icon={faSyringe} size={50} />
          <Text>Vacuna antirrabica</Text>
          <Text>20/10/2022</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  botton: {
    width: "auto",
  },
 
  addEvent: {
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    width: 150,
    backgroundColor: "#eee9e9",
    borderWidth: 0.5,
    borderRadius: 10,
  },
});

export { Reminders };
