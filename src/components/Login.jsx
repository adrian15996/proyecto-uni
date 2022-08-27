import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/";
import { faG } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View style={{ alignItems: "center", marginTop: "20%" }}>
        <Image
          source={{
            uri: "https://img.freepik.com/vector-premium/pet-shop-paw-logo_142351-10.jpg?w=2000",
          }}
          style={{ width: 150, height: 150 }}
        />
        <Text style={{ fontSize: 30 }}>Iniciar session</Text>
      </View>
      <View
        style={{
          width: "80%",
          height: "auto",
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 20 }}>Nombre de usuario</Text>
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
            console.log("hello");
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
        <Text>No tienes cuenta? Registrate</Text>
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
    backgroundColor: "#14b3d7",
    padding: 10,
    width: "100%",
    borderRadius: 30,
    fontSize: 20,
  },
  brandsIcons: {
    elevation: 3,
    borderWidth: 1,
    borderRadius: "100%",
    padding: 10,
    margin: 10,
  },
});
export { Login };
