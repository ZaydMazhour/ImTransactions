import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { apartments } from '../../../data/data'
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Favoritesvg from '../constants/Fvaoritesvg';
import { useNavigation } from '@react-navigation/native';

const PropertyListComponent = ({ data, searchQuery }) => {
    const [isGreen, setIsGreen] = useState(false);

    const toggleColor = () => {
        setIsGreen(!isGreen);
        console.log(isGreen)
    };

    const navigation = useNavigation();
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

    const CardComponent = ({ item }) => (

        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('DetailScreen')}
        >
            <Card style={{ backgroundColor: '#F5F5F5', marginTop: 10, marginBottom: 0 }}>


                <Card.Cover
                    style={{ height: 200, }}
                    source={{ uri: item.images }} />
                <View style={{ paddingTop: 10, paddingVertical: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.title}</Text>
                    </View>
                    <TouchableOpacity

                        style={{ marginRight: 10 }}>
                        <Favoritesvg />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 10, paddingBottom: 3 }}>
                    <Text variant="bodyMedium" style={{ flex: 1 }}>{item.description}</Text>
                </View>


            </Card>
        </TouchableWithoutFeedback>

    );

    return (
        <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={CardComponent}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default PropertyListComponent

const styles = StyleSheet.create({})