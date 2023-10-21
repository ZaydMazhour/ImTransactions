import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const HeaderComponent = ({data}) => {
    const navigation = useNavigation();
    const goTomap = () =>{
        navigation.navigate('MapScreen')
    }
    return (
        <View style={{ flexDirection: 'row', marginTop :6 , marginBottom : 5,justifyContent: 'space-between', paddingHorizontal: 5 }}>
            <Text>{data.length} available properties</Text>
            <TouchableRipple
                onPress={() => goTomap()}
                rippleColor="rgba(0, 0, 0, .1)"
            >
                <Text>Map</Text>
            </TouchableRipple>

        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({})