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
  const Registration = ({ navigation }) => {
    const windowHeight = useWindowDimensions().height;
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
          <Text style={{ fontSize: 30, fontWeight:'bold' }}>Registrate</Text>
        </View>
        <View
          style={{
            width: "80%",
            height: "auto",
          }}
        >
            <View style={{ marginBottom: 30, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Nombre completo</Text>
            <TextInput style={styles.inputs} />
          </View>
          <View style={{ marginBottom: 30, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Email</Text>
            <TextInput style={styles.inputs} />
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.inputs} />
            <Text style={{ alignSelf: "flex-end" }}>Olvidaste la Contraseña</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Homescreen");
            }}
          >
            <Text style={styles.initButton}>Registrarse</Text>
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
            Si tienes cuenta?{" "}
            <TouchableHighlight onPress={() => {
            navigation.navigate("Login");
          }}>
              <Text style={{ fontWeight: "bold" }}>Inicia Session</Text>
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
      color:"#ffffff",
      fontWeight:"bold"
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
  });
  export { Registration };
  