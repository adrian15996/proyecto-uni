import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from "./src/Navigation/NavigationStack";
import { loginReducer } from "./src/reducers/login";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const Stack = createNativeStackNavigator();

const store = createStore(loginReducer);
function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <NavigationStack Stack={Stack} />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
