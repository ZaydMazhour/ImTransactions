import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../../styles/styles'
import ImageComponent from '../components/ImageComponent'
import { apartments } from '../../../data/data'

const DetailScreen = () => {
  return (
    <View style={styles.Container}>
      <ImageComponent />
    </View>
  )
}

export default DetailScreen

