import { Text, View, Image, TextInput, Button, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
const Login = () => {
    return (
        <View style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://img.freepik.com/vector-premium/pet-shop-paw-logo_142351-10.jpg?w=2000' }}
                    style={{ width: 150, height: 150 }} />
                <Text>
                    Iniciar session
                </Text>
            </View>
            <View style={{
                width: 300,
            }}>
                <View>
                    <Text>Nombre de usuario</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View >
                    <Text>Contraseña</Text>
                    <TextInput secureTextEntry={true} style={styles.inputs} />
                    <Text style={{ alignSelf: 'flex-end'}}>Olvidaste la Contraseña</Text>
                </View>
            </View>
            <View>
                <Button title='Iniciar Session' onPress={() => { console.log('hello') }} />
            </View>
            <View>
                <Text style={{
                    alignSelf: 'center',
                    marginTop: 20
                }}>O</Text>
            </View>
            <View style={{
                alignItems: 'center',
                marginTop: 20
            }}>
                <Text>
                    <FontAwesomeIcon icon={faFacebook} size={32} />
                </Text>

            </View>
            <View >
                <Text style={{ alignSelf: 'center' }}>
                    No tienes cuenta? Registrate
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {
        height: 25,
        width: '100%',
        borderColor: 'gray',
        borderBottomWidth: 1,
        fontSize: 20

    }

})
export { Login };