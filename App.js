import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplachOnboordingStack from './front_end/navigation/SplachOnboordingStack/SplachOnboordingStack';
import HomeStack from './front_end/navigation/HomeStack/HomeStack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeButtomTab from './front_end/assets/imgsvg/HomeButtomTab';
import ProfileButtomTab from './front_end/assets/imgsvg/ProfileButtomTab';
import ProfileStack from './front_end/navigation/ProfileStack/ProfileStack';
import ChatStack from './front_end/navigation/ChatStack/ChatStack';
import MessageButtom from './front_end/assets/imgsvg/MessageButtom';
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  function BottomTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                    ? options.title
                    : route.title;

              return label;
            }}
            style={{
              backgroundColor: '#F5F5F5',

            }}
          />
        )}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <HomeButtomTab />;
            },
          }}
        />
        
        <Tab.Screen
          name="ChatScreen"
          component={ChatStack}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => {
              return <MessageButtom />;
            },
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => {
              return <ProfileButtomTab />;
            },
          }}
        />

      </Tab.Navigator>
    );
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="SplashScreen"
            component={SplachOnboordingStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={BottomTabNavigator}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileStack}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatStack}
            options={{ headerShown: false }}

          />
        </Stack.Navigator>

      </NavigationContainer>
    </PaperProvider>

  )
}

export default App

const styles = StyleSheet.create({})