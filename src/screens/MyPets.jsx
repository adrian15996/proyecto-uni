import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { PetContainer } from "../components/PetContainer";
import { useDispatch, useSelector } from "react-redux";
import { setPets as setPetsAction} from "../actions";
import { getDataPets } from "../api/pets";
import { useState } from "react";

export function MyPets({navigation}) {
  const pets = useSelector((data) => data.pet.pets);
  const {hashLogin} = useSelector((data) => data.login);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await getDataPets(hashLogin);
        dispatch(setPetsAction(res))
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {pets.map((item) => (
          <PetContainer name={item.name} breed={item.breed} key={item.idPets} navigation={navigation} />
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
