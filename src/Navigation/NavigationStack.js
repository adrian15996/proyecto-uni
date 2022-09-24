import React from "react";
import {Login} from "../components/Login"
import {FirstMessage} from "../components/initialMessage/FirstMessage"
import { SecondMessage }  from "../components/initialMessage/SecondMessage"
import { ThirdMessage } from "../components/initialMessage/ThirdMessage.jsx";
import { Registration } from "../components/Registration";
import { PetDetail } from "../components/PetDetail";



function NavigationStack({Stack}) {
  return (
    <Stack.Navigator initialRouteName="firsMessage">
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  />
    <Stack.Screen name="firsMessage" component={FirstMessage} options={{headerShown:false}} />
    <Stack.Screen name="secondMessage" component={SecondMessage} options={{headerShown:false}} />
    <Stack.Screen name="thirdMessage" component={ThirdMessage} options={{headerShown:false}} />
    <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
    <Stack.Screen name="PetDetail" component={PetDetail}  options={{ title: 'Informacion de la mascota' }}/>

  </Stack.Navigator>
  );
}

export { NavigationStack };
