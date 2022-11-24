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
  import { useDispatch, useSelector } from "react-redux";
  import React from "react";
  import Dog from "../../assets/Dog.png";
  import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
  import { CalendarAndroid } from "../components/CalendarAndroid";
  import { Reminders } from "./Reminders.jsx";
  
  function CreatePet({ navigation, route }) {
    const [selected, setSelected] = React.useState("");
    const [name, setName] = React.useState("");
    const [breed, setBreed] = React.useState("");
    const [gender, setGender] = React.useState("macho");
    const [sizeLS, setSize] = React.useState("");

    let dateOfBirth = new Date();
    let dd = String(dateOfBirth.getDate()).padStart(2, '0');
    let mm = String(dateOfBirth.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = dateOfBirth.getFullYear();
    
    dateOfBirth = mm + '/' + dd + '/' + yyyy;

    const [birth,setBirth]= React.useState(new Date(dateOfBirth));
  
    const data = [
      { key: "1", value: "Perro" },
      { key: "2", value: "Gato" },
    ];
    const razas = [
      { key: "1", value: "Bloodhound" },
      { key: "2", value: "Border Collie" },
    ];
    const size = [
      { key: "1", value: "pequeño" },
      { key: "2", value: "mediano" },
      { key: "3", value: "grande" },
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
            <TextInput
              style={styles.inputs}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Text style={styles.SubTitle}>Tipo de mascota</Text>
            <SelectList
              style={styles.inputs}
              onSelect={() => console.log("")}
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
            <Text style={styles.SubTitle}>raza</Text>
            <SelectList
              style={styles.inputs}
              setSelected={(i)=>{setBreed(razas[i-1].value)}}
              data={razas}
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
              defaultOption={{ key: "1", value: "Borzoi" }} //default selected option
            />
            <Text style={styles.SubTitle}>tamaño</Text>
            <SelectList
              style={styles.inputs}
              setSelected={(i)=>{setSize(size[i-1].value)}}
              data={size}
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
              defaultOption={{ key: "1", value: "pequeño" }} //default selected option
            />
            <Text style={styles.SubTitle}> Genero</Text>
            <View style={styles.genderContainer}>
              <TouchableHighlight
                style={
                  gender === "macho"
                    ? styles.genderPressedButton
                    : styles.genderNotPressedButton
                }
                onPress={() => {
                  setGender("macho");
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
                  gender === "macho"
                    ? styles.genderNotPressedButton
                    : styles.genderPressedButton
                }
                onPress={() => {
                  setGender("hembra");
                }}
              >
                <Text>
                  <FontAwesomeIcon icon={faVenus} size={15} /> Hembra
                </Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.SubTitle}> Fecha de nacimiento</Text>
            <CalendarAndroid date={birth} setBirth={setBirth} />
          </View>
          <View>
          </View>
          <TouchableHighlight onPress={() => console.log({name,breed,size:sizeLS,gender,birth})}>
            <Text style={styles.initButton}>Crear</Text>
          </TouchableHighlight>
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
      marginTop:30,
    },
    SubTitle: {
      fontWeight: "200",
      fontSize: 13,
      marginLeft: 10,
    },
    eventsSubtitle: {
      width: "80%",
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
  
  export { CreatePet };
  