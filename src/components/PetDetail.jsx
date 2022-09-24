import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import React from "react";
import Dog from "../../assets/Dog.png";
import react from "react";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";



function PetDetail() {
  const [isChecked, setChecked] = react.useState(true);
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Perro" },
    { key: "2", value: "Gato" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Image source={Dog}></Image>
        </View>
        <View>
          <Text style={styles.Title}>Informacion General</Text>
          <Text style={styles.SubTitle}> Nombre de la mascota</Text>
          <TextInput style={styles.inputs} />
          <Text style={styles.SubTitle}> Raza</Text>
          <SelectList
            style={styles.inputs}
            onSelect={() => console.log("dropdown working")}
            setSelected={setSelected}
            data={data}
            arrowicon={
              <FontAwesomeIcon icon={faChevronDown} size={12} color={"black"} />
            }
            searchicon={
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={12}
                color={"black"}
              />
            }
            search={false}
            boxStyles={styles.boxDropdown} //override default styles
            dropdownStyles={styles.dropdown}
            defaultOption={{ key: "1", value: "Perro" }} //default selected option
          />
          <Text style={styles.SubTitle}> Genero</Text>
          <View style={styles.genderContainer}>
            <TouchableHighlight
              style={
                isChecked
                  ? styles.genderPressedButton
                  : styles.genderNotPressedButton
              }
              onPress={() => {
                setChecked(true), console.log(isChecked);
              }}
            >
              <View>
                <Text>
                  <FontAwesomeIcon icon={faMars} size={15} /> Macho
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={
                isChecked
                  ? styles.genderNotPressedButton
                  : styles.genderPressedButton
              }
              onPress={() => {
                setChecked(false), console.log(isChecked);
              }}
            >
              <Text>
                <FontAwesomeIcon icon={faVenus} size={15} /> Hembra
              </Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.SubTitle}> Fecha de nacimiento</Text>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  SubTitle: {
    fontWeight: "200",
    fontSize: 13,
    marginLeft: 10,
  },
  inputs: {
    height: 25,
    width: "90%",
    borderColor: "gray",
    borderBottomWidth: 0.5,
    fontSize: 15,
    alignSelf: "center",
  },
  container: { width: "100%", height: "100%", justifyContent: "space-around" },
  boxDropdown: {
    width: "93%",
    alignSelf: "center",
    borderWidth: 0,
    borderBottomWidth: 0.5,
    fontSize: 15,
  },
  dropdown: { width: "90%", alignSelf: "center" },
  genderContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 20,
  },
  genderPressedButton: {
    width: "40%",
    backgroundColor: "#90e1b4",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  genderNotPressedButton: {
    width: "40%",
    backgroundColor: "#e0e0e0",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
});

export { PetDetail };
