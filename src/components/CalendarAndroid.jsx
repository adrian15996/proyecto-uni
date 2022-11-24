import { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const CalendarAndroid = ({date,setBirth:setDate}) => {

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View>
      <View>
        <TouchableHighlight onPress={showDatepicker} style={styles.calendar}>
          <Text>
            {`${date.getDate()}/${(date
              .getMonth()+1)
              .toLocaleString()}/${date.getFullYear().toLocaleString()}`}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    height: 25,
    width: "90%",
    borderColor: "gray",
    borderBottomWidth: 0.5,
    fontSize: 15,
    alignSelf: "center",
  },
});

export { CalendarAndroid };
