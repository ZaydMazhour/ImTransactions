import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from '../../features/home/screens/HomeScreen'
import ProfileScreen from '../../features/profile/screens/ProfileScreen'

const ProfileStack = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})