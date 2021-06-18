import React from "react";
import { Button, SafeAreaView } from "react-native";

export default ({ navigation }) => (
  <SafeAreaView>
    <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
  </SafeAreaView>
);
