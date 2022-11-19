import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
export function ProfileIcon({ title, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={icon} size={20} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.faChevronRight}>
      <FontAwesomeIcon icon={faChevronRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    borderBottomWidth:.5,
    borderColor:"gray",
    marginTop:20
  },
  textContainer: {
    flexDirection: "row",
    alignItems:"center"
  },
  icon:{
    width:35,
    height:35,
    backgroundColor:"#c3e3fd",
    borderRadius:17,
    alignItems:"center",
    justifyContent:"center"
  },
  faChevronRight:{
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    marginLeft:20,
    fontSize:20
  }
});
