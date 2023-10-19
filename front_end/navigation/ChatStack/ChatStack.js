import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import ChatScreen from '../../features/chat/screens/ChatScreen'

const ChatStack = () => {
  const ChatStack = createNativeStackNavigator();
  return (
    <ChatStack.Navigator >
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
    </ChatStack.Navigator>
  )
}

export default ChatStack

const styles = StyleSheet.create({})