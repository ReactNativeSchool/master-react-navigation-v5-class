import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ActionDetails from "../screens/ActionDetails";
import ActionsList from "../screens/ActionsList";
import ContactDetails from "../screens/ContactDetails";
import ContactsList from "../screens/ContactsList";
import ForgotPassword from "../screens/ForgotPassword";
import Loading from "../screens/Loading";
import Settings from "../screens/Settings";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Modal from "../screens/Modal";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </AuthStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen name="ContactsList" component={ContactsList} />
    <ContactsStack.Screen name="ContactDetails" component={ContactDetails} />
  </ContactsStack.Navigator>
);

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={Settings} />
  </SettingsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Actions" component={ActionsStackScreen} />
    <AppTabs.Screen name="Contacts" component={ContactsStackScreen} />
  </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Tabs" component={AppTabsScreen} />
    <AppDrawer.Screen name="Settings" component={SettingsStackScreen} />
  </AppDrawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [showAuth, setShowAuth] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShowAuth(!showAuth);
  //   }, 1000);
  // }, []);

  return (
    <RootStack.Navigator headerMode="none" mode="modal">
      {showAuth ? (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="App"
          component={AppDrawerScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
      <RootStack.Screen name="Modal" component={Modal} />
      <RootStack.Screen
        name="Alert"
        component={Modal}
        options={{
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          })
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(!isLoading);
  //   }, 1000);
  // }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : <RootStackScreen />}
    </NavigationContainer>
  );
};
