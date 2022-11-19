import { useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const CalendarAndroid = () => {
  const [date, setDate] = useState(new Date(1598051730000));

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
            {`${date.getDate().toLocaleString()}/${date
              .getMonth()
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
