import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Favoritesvg from '../constants/Fvaoritesvg'

const ImageComponent = () => {
    return (
        <View>
            <Image
                style={{ height: 200, }}
                source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sN1pVaQ7SMfmzIydnPSKcgHaH1%26pid%3DApi&f=1' }}
            />
            <View style={{ paddingTop: 10, paddingVertical: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Item 1</Text>
                    </View>
                    <TouchableOpacity

                        style={{ marginRight: 10 }}>
                        <Favoritesvg />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 10, paddingBottom: 3 }}>
                    <Text variant="bodyMedium" style={{  }}>This is the description for item 1.</Text>
                </View>
        </View>
    )
}

export default ImageComponent