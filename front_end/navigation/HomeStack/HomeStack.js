import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from '../../features/home/screens/HomeScreen'
import DetailScreen from '../../features/home/screens/DetailScreen'
import MapScreen from '../../features/home/screens/MapScreen'

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})