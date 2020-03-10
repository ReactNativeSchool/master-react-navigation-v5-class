import React from "react";
import { FlatList } from "react-native";

import { Row, Separator } from "../components/Row";
import users from "../data/users";

export default () => (
  <FlatList
    data={users}
    keyExtractor={item => {
      return `${item.id.value}-${item.phone}`;
    }}
    renderItem={({ item }) => {
      const name = `${item.name.first} ${item.name.last}`;

      return (
        <Row
          image={{ uri: item.picture.thumbnail }}
          title={name}
          subtitle={item.email}
          onPress={() => alert("todo!")}
        />
      );
    }}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={() => <Separator />}
    ListFooterComponent={() => <Separator />}
    contentContainerStyle={{ paddingVertical: 20 }}
  />
);
