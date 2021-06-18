import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
    <Button title="Open Alert" onPress={() => navigation.navigate("Alert")} />
  </View>
);
