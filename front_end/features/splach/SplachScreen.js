import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import LottieView from 'lottie-react-native';

const SplachScreen = ({ navigation }) => {
    const video = React.useRef(null);
    const animation = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnboordingScreen');
            // Replace 'MainAppScreen' with the name of your main screen
        }, 5500);
        animation.current?.play(); // Adjust the duration as needed (e.g., 3000 milliseconds for a 3-second splash screen)
    }, [navigation]);
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'white',
                }}
                source={require('../../../assets/SplachLogo.json')}
            />
        </View>
    )
}

export default SplachScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: 300,
        height: 200,
    },
});