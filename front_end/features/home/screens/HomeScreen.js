import React from 'react'
import { View } from 'react-native'
import { styles } from '../../../styles/styles'
import PropertyListComponent from '../components/PropertyListComponent'
import SearchbarComponent from '../components/SearchbarComponent'

const HomeScreen = () => {

  return (
    <View style={styles.Container}>
      <View>
        <SearchbarComponent />
      </View>

      <View>
        <PropertyListComponent />
      </View>

    </View>
  )
}

export default HomeScreen

