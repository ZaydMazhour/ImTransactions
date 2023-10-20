import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { apartments } from '../../../data/data'
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Favoritesvg from '../constants/Fvaoritesvg';

const PropertyListComponent = () => {

    const CardComponent = () => (


        <Card style={{ backgroundColor: '#F5F5F5' , marginVertical : 10  }}>
    
    
            <Card.Cover
                style={{ height: 220 }}
                source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Oe74GIp-Ini-tIVYe0bH6wHaE7%26pid%3DApi&f=1"}} />
            <View style={{ paddingTop: 10, paddingVertical : 3,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{paddingHorizontal : 10}}>
                    <Text style={{fontSize : 18 , fontWeight : '700'}}>Hotel Ibis</Text>
                </View>
                <TouchableOpacity style={{ paddingRight: 10 }}>
                    <Favoritesvg />
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal : 10 , paddingBottom : 3}}>
            <Text variant="bodyMedium" style={{ flex : 1  }}>This chic apartment offers comfort and convenience in a prime city location, making it your ideal urban home</Text>
            </View>
    
    
        </Card>
    );

  return (
      <FlatList 
      data={apartments}
      keyExtractor={(txt)=>txt.id.toString()}
      renderItem={CardComponent}
      showsVerticalScrollIndicator={false}
      />
  )
}

export default PropertyListComponent

const styles = StyleSheet.create({})