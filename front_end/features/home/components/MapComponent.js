import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import MapView , { Marker } from 'react-native-maps';
import { apartments } from '../../../data/data';

const MapComponent = ({ data, searchQuery }) => {

    const filterData = (data, query) => {
        if (!query) {
            return data; // If the query is empty, return the original data
        }

        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        return filtered;
    };
    const filteredData = filterData(data, searchQuery);

  return (
    <View style={{flex : 1}}>
      <MapView
        style={{ width : "100%", height: '100%' }}
        initialRegion={{
          latitude: 33.5951, // Casablanca's latitude
          longitude: -7.6188, // Casablanca's longitude
          latitudeDelta: 0.05, // You can adjust the zoom level as needed
          longitudeDelta: 0.05,
        }}
      >
        {filteredData.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
          />
        ))}
      </MapView>
    </View>
  )
}

export default MapComponent