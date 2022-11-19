import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/";
import { faG } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../api/auth";
import { getDataUser } from "../api/users";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLogin as setLoginAction,
  setEmail,
  setGender,
  setName,
  setPhone,
} from "../actions";

const Login = ({ navigation }) => {
  const loginRedux = useSelector((state) => state.hashLogin);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(globalState);
  const [loginError, setLoginError] = useState("");
  const windowHeight = useWindowDimensions().height;
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("EL formato del correo es incorrecto")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (data) => {
      try {
        const response = await login(data);
        dispatch(setLoginAction(response.token));
        setLoginError("");
        const res = await getDataUser(loginRedux);
        dispatch(setEmail(res.person.email));
        dispatch(setGender(res.person.gender));
        dispatch(setName(res.person.name));
        dispatch(setPhone(res.person.phone));
        navigation.navigate("menu");
      } catch {
        setLoginError("contraseña o correo incorrectas");
      }
    },
  });

  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: Math.round(windowHeight),
      }}
    >
      <View style={{ alignItems: "center", marginTop: "20%" }}>
        <Image source={logo} style={{ width: 150, height: 150 }} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Iniciar session
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          height: "auto",
        }}
      >
        <View style={{ marginBottom: 30, marginTop: 10 }}>
          <Text style={styles.error}>{formik.errors.email}</Text>
          <Text style={{ fontSize: 20 }}>Correo electronico</Text>
          <TextInput
            style={styles.inputs}
            value={formik.values.email}
            autoCapitalize="none"
            onChangeText={(text) => formik.setFieldValue("email", text)}
          />
        </View>
        <View>
          <Text style={styles.error}>{formik.errors.password}</Text>
          <Text style={{ fontSize: 20 }}>Contraseña</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputs}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
          <Text style={{ alignSelf: "flex-end" }}>Olvidaste la Contraseña</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.error}>{loginError}</Text>
        <TouchableHighlight
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          <Text style={styles.initButton}>Iniciar Session</Text>
        </TouchableHighlight>
        <Text
          style={{
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          O
        </Text>
        <View
          style={{
            justifyContent: "center",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <Text style={styles.brandsIcons}>
            <FontAwesomeIcon icon={faFacebookF} size={20} />
          </Text>
          <Text style={styles.brandsIcons}>
            <FontAwesomeIcon icon={faG} size={20} />
          </Text>
        </View>
      </View>

      <View>
        <Text>
          No tienes cuenta?{" "}
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Registrate</Text>
          </TouchableHighlight>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    height: 25,
    width: "100%",
    borderColor: "gray",
    borderBottomWidth: 1,
    fontSize: 20,
  },
  buttonContainer: {
    width: "80%",
  },
  initButton: {
    textAlign: "center",
    height: 50,
    backgroundColor: "#90e1b4",
    padding: 10,
    width: "100%",
    borderRadius: 30,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  brandsIcons: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    margin: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
  },
});
export { Login };
