import React from "react";
import { View, Button } from "react-native";

export default () => (
  <View style={{ flex: 1 }}>
    <Button title="Open Modal" onPress={() => alert("todo!")} />
    <Button title="Open Alert" onPress={() => alert("todo!")} />
  </View>
);
