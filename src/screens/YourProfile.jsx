import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";
import user from "../../assets/UserWithDog.jpg";
import PhoneInput from "react-native-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import { updateDataUser } from "../api/users";
import {
  setLogin,
  setEmail,
  setGender,
  setName,
  setPhone,
} from "../actions";


export function YourProfile({ navigation }) {
  const { name, gender, email, phone, hashLogin } = useSelector((data) => data.login);
  const data = useSelector((data) => data);
  const dispatch = useDispatch();

  const [value, setValue] = useState(phone);
  const [mail, setMail] = useState(email);
  const [nombre, setNombre] = useState(name);
  const phoneInput = useRef < PhoneInput > null;
  const [isChecked, setChecked] = React.useState(gender);

  const handleSubmit = async () => {
    let flag = false;
    const perfil = { person:{} };
    if (mail !== email) {
      perfil.person.email = mail;
      flag=true;
    }
    if (value !== phone) {
      perfil.person.phone = value;
      flag=true;
    }
    if (isChecked !== gender) {
      perfil.person.gender = isChecked;
      flag=true;
    }
    if (nombre !== name) {
      perfil.person.name = nombre;
      flag=true;
    }
    try {
      const res = await updateDataUser(hashLogin,perfil);
      dispatch(setEmail(mail));
      dispatch(setGender(isChecked));
      dispatch(setName(nombre));
      dispatch(setPhone(value));
      console.log(perfil)
      console.log(res)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={user} />
        </View>
        <Text style={styles.SubTitle}> Nombre completo</Text>
        <TextInput
          style={styles.inputs}
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <Text style={styles.SubTitle}> Genero</Text>
        <View style={styles.genderContainer}>
          <TouchableHighlight
            style={
              isChecked==="HOMBRE"
                ? styles.genderPressedButton
                : styles.genderNotPressedButton
            }
            onPress={() => {
              setChecked("HOMBRE"), console.log(isChecked);
            }}
          >
            <View>
              <Text>
                <FontAwesomeIcon icon={faMars} size={15} /> Hombre
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              isChecked==="MUJER"
                ? styles.genderPressedButton
                : styles.genderNotPressedButton
            }
            onPress={() => {
              setChecked("MUJER"), console.log(isChecked);
            }}
          >
            <Text>
              <FontAwesomeIcon icon={faVenus} size={15} /> Mujer
            </Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.SubTitle}> Correo electronico</Text>
        <TextInput
          style={styles.inputs}
          value={mail}
          onChangeText={(text) => setMail(text)}
        />
        <PhoneInput
          containerStyle={styles.phoneStyle}
          defaultValue={value}
          defaultCode="MX"
          onChangeFormattedText={(text) => {
            setValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        {/* <Text style={styles.SubTitle}> Sobre mi</Text>
        <TextInput style={styles.textArea} /> */}
      </View>
      <TouchableHighlight onPress={() => handleSubmit()}>
        <Text style={styles.initButton}>Guardar</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  SubTitle: {
    fontWeight: "200",
    fontSize: 15,
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  inputs: {
    height: 25,
    width: "90%",
    borderColor: "#666666",
    borderBottomWidth: 0.5,
    fontSize: 15,
    alignSelf: "center",
  },
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
  textArea: {
    width: "80%",
    height: 100,
    borderWidth: 0.5,
    borderColor: "#666666",
    backgroundColor: "#e8f1ff",
    borderRadius: 10,
  },
  phoneStyle: {
    marginTop: 15,
    width: "90%",
  },
  initButton: {
    marginTop: 40,
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
