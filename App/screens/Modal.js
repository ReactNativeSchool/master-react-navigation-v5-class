import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <TouchableOpacity
      style={{ backgroundColor: "white", padding: 20 }}
      onPress={() => navigation.pop()}
    >
      <Text>Modal me</Text>
    </TouchableOpacity>
  </View>
);
