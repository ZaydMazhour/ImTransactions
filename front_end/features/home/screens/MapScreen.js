import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../../styles/styles'
import SearchbarComponent from '../components/SearchbarComponent'
import MapComponent from '../components/MapComponent'
import { apartments } from '../../../data/data'

const MapScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
  return (
    <View style={{
        flex : 1, 
      backgroundColor : 'white',
     
      paddingTop : 20
    }}>
      <View style={{marginBottom : 10 ,  paddingHorizontal : 20,}}>
        <SearchbarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <View style={{flex : 1}}>
        <MapComponent data={apartments} searchQuery={searchQuery}/>
      </View>
    </View>
  )
}

export default MapScreen
