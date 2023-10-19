import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplachOnboordingStack from './front_end/navigation/SplachOnboordingStack/SplachOnboordingStack';

const App = () => {
  return (
    <NavigationContainer>
      <SplachOnboordingStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})