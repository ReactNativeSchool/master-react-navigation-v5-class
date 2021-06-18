import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";
import Settings from "../screens/Settings";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Loading from "../screens/Loading";

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{
        headerTitle: "Contacts",
      }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => {
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
        };
      }}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Contacts"
      component={ContactsStackScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="people" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Actions"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons
            name="checkmark-circle-outline"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />
  </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerPosition="right">
    <AppDrawer.Screen
      name="Tabs"
      component={AppTabsScreen}
      options={{ drawerLabel: "Home" }}
    />
    <AppDrawer.Screen
      name="Settings"
      component={Settings}
      options={{
        gestureEnabled: false,
      }}
    />
  </AppDrawer.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : user ? (
        <AppDrawerScreen />
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
};
