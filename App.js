import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/components/Login.jsx';


export default function App() {
  return (
    <View style={styles.container}>
    <Login/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#fff',
  },
});
