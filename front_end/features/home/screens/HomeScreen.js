import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from '../../../styles/styles'
import PropertyListComponent from '../components/PropertyListComponent'
import SearchbarComponent from '../components/SearchbarComponent'
import { apartments } from '../../../data/data'
import HeaderComponent from '../components/HeaderComponent'

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.Container}>
      <View>
        <SearchbarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <View>
        <HeaderComponent data={apartments}/>
      </View>

      < View style={{marginBottom : 60}}>
        <PropertyListComponent data={apartments} searchQuery={searchQuery} />
      </View>

    </View>
  )
}

export default HomeScreen

