import { View, Text, StyleSheet,ScrollView,TouchableHighlight } from "react-native";
import React from "react";
import { PetContainer } from "../components/PetContainer";

export function MyPets() {
  const arr = [
    {
      name: "Troy",
      breed: "toy terrier",
      id: 1,
    },
    {
      name: "el secht",
      breed: "toy terrier",
      id: 2,
    },
    {
        name: "el pepe",
        breed: "pitbull",
        id: 3,
      },
  ];
  return (
    <ScrollView>
    <View style={styles.container}>
      {arr.map((item) => (
        <PetContainer name={item.name} breed={item.breed} key={item.id} />
      ))}
    </View>
    <TouchableHighlight onPress={() => console.log("add anotehr pet")}>
        <Text style={styles.initButton}>Agregar otra mascota</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  initButton: {
    textAlign: "center",
    alignSelf: "center",
    height: 50,
    backgroundColor: "#90e1b4",
    padding: 10,
    width: "90%",
    borderRadius: 30,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
