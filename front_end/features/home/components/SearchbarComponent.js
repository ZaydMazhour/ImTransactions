import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

const SearchbarComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Searchbar
            placeholder="Search a property"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{backgroundColor :'#F5F5F5'}}
        />
    )
}

export default SearchbarComponent