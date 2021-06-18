import React from "react";
import { Text } from "react-native";

export default ({ route }) => {
  const contactInfo = route.params.contact;

  return <Text>{JSON.stringify(contactInfo, null, 2)}</Text>;
};
