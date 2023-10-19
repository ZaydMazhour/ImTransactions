import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplachScreen from '../../features/splach/SplachScreen'
import OnboordingScreen from '../../features/onboording/screens/OnboordingScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SplachOnboordingStack = () => {
  const SplachOnboordingStack = createNativeStackNavigator();
  return (
    <SplachOnboordingStack.Navigator initialRouteName="SplachScreen">
      <SplachOnboordingStack.Screen name="SplachScreen" component={SplachScreen} options={{ headerShown: false }} />
      <SplachOnboordingStack.Screen name="OnboordingScreen" component={OnboordingScreen} options={{ headerShown: false }} />
    </SplachOnboordingStack.Navigator>
  )
}

export default SplachOnboordingStack

const styles = StyleSheet.create({})