import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from '../../features/home/screens/HomeScreen'

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})