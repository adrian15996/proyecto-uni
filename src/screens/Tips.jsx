import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Tips = () => {
  const loginRedux = useSelector((state) => state.hashLogin);
  console.log("estoy en consejos  "+loginRedux);
  return (
    <View>
      <Text>Tips</Text>
    </View>
  );
};

export { Tips };
