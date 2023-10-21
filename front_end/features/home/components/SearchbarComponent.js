import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

const SearchbarComponent = ({ searchQuery, setSearchQuery }) => {
    
    return (
        <Searchbar
            placeholder="Search a property"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{backgroundColor :'#F5F5F5'}}
        />
    )
}

export default SearchbarComponent