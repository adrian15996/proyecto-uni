import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Dog from "../../assets/Dog.png";
import React from "react";

export function PetContainer({ name, breed, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('PetDetail',{name,breed})
        }}    
      >
        <View style={styles.edit}>
          <FontAwesomeIcon icon={faPen} size={15} />
          <Text>Editar</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.image}>
        <Image source={Dog}></Image>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.breed}>{breed}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#d3d8e0",
    marginBottom: 25,
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 15,
  },
  image: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  breed: {
    fontSize: 15,
    fontWeight: "300",
    color: "gray",
  },
});
