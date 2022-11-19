import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import user from "../../assets/UserWithDog.jpg";
import { ProfileIcon } from "../components/ProfileIcon";
import {
  faPaw,
  faQuestionCircle,
  faGear,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export function Profile({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("YourProfile");
          }}
          style={styles.editButton}
        >
          <View style={styles.edit}>
            <FontAwesomeIcon icon={faPen} size={15} />
            <Text>Editar</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={user} />
          </View>
          <Text style={styles.title}>Adrian Valencia Hernandez</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate("MyPets");
          }}
        >
          <ProfileIcon title="Mascotas" icon={faPaw} />
        </TouchableHighlight>
        <ProfileIcon title="Ayuda" icon={faQuestionCircle} />
        <ProfileIcon title="Configuracion " icon={faGear} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
  },
  header: {
    borderLeftWidth: 0.5,
    borderTopWidth: 0,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.8,
    borderColor: "gray",
    width: "100%",
    borderRadius: 30,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 15,
  },
  editButton: {
    alignSelf:'flex-end'
  },
});
