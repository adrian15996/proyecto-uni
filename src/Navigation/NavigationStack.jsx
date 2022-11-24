import React from "react";
import {Login} from "../screens/Login"
import {FirstMessage} from "../components/initialMessage/FirstMessage"
import { SecondMessage }  from "../components/initialMessage/SecondMessage"
import { ThirdMessage } from "../components/initialMessage/ThirdMessage.jsx";
import { Registration } from "../screens/Registration";
import { PetDetail } from "../screens/PetDetail";
import {Profile} from "../screens/Profile";
import {YourProfile} from "../screens/YourProfile";
import {MyPets}  from "../screens/MyPets"
import {TabNavigation} from "./TabNavigation"
import {CreatePet} from "../screens/CreatePet"

function NavigationStack({Stack}) {
  return (
    <Stack.Navigator initialRouteName="firsMessage">
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  />
    <Stack.Screen name="firsMessage" component={FirstMessage} options={{headerShown:false}} />
    <Stack.Screen name="secondMessage" component={SecondMessage} options={{headerShown:false}} />
    <Stack.Screen name="thirdMessage" component={ThirdMessage} options={{headerShown:false}} />
    <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
    <Stack.Screen name="PetDetail" component={PetDetail}  options={{ title: 'Informacion de la mascota' }}/>
    <Stack.Screen name="CreatePet" component={CreatePet}  options={{ title: 'Crear mascota' }}/>
    <Stack.Screen name="YourProfile" component={YourProfile}  options={{ title: 'Informacion del perfil' }}/>
    <Stack.Screen name="Profile" component={Profile}  options={{ title: 'Perfil' }}/>
    <Stack.Screen name="MyPets" component={MyPets}  options={{ title: 'Mis Mascotas' }}/>
    <Stack.Screen name="menu" component={TabNavigation} options={{headerShown:false}} />
  </Stack.Navigator>
  );
}

export { NavigationStack };
