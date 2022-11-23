import { View, Text } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLogin,
  setEmail,
  setGender,
  setName,
  setPhone,
} from "../actions";
import { getDataUser } from "../api/users";
const Tips = () => {
  const loginRedux = useSelector((state) => state.login.hashLogin);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await getDataUser(loginRedux);
        dispatch(setLogin(loginRedux));
        dispatch(setEmail(res.person.email));
        dispatch(setGender(res.person.gender));
        dispatch(setName(res.person.name));
        dispatch(setPhone(res.person.phone));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, []);
  console.log(state)
  return (
    <View>
      <Text>Tips</Text>
    </View>
  );
};

export { Tips };
